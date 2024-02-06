const { MongoClient } = require("mongodb");
const ftp = require("basic-ftp");
const fs = require('fs');
const nodemailer = require("nodemailer");
require("dotenv").config();
const { MONGO_URI, FTP_HOST, FTP_USER, FTP_PASSWORD, COURRIEL_USER, COURRIEL_PASSWORD } = process.env;

const client = new MongoClient(MONGO_URI);
const db = client.db();

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const transporter = nodemailer.createTransport({
    host: "mail.cyclotouristechezsoi.ca",
    port: 465,
    secure: true,
    auth: {
        user: COURRIEL_USER,
        pass: COURRIEL_PASSWORD
    }
})

const envoyerCourriel = async (properties, geometry, contributeur) => {
    const info = await transporter.sendMail({
        from: "'Serveur CCS' <cyclotouristechezsoi@hotmail.ca>",
        to: COURRIEL_USER,
        subject: "Nouveau site ajouté sur CCS",
        text: "Nouveau site ajouté sur CCS",
        html: `Utilisateur ${contributeur.nom} a ajouté un site (type : ${properties.type}) ayant comme titre <i>${properties.name}</i> au ${geometry.coordinates[0]}, ${geometry.coordinates[1]}.`
    })
}

const openSesame = async () => {
    await client.connect();
    console.log("connected!");
}

const closeSesame = async () => {
    await client.close();
    console.log("disconnected!");
}

const testApi = async (req, res) => {
    return res.status(200).json({ status: 200, message: "succès" })
}

const tousSites = async (req, res) => {
    await openSesame();
    const [sites_a, sites_b, sites_c, sites_z, sites_t] = await Promise.all([
        db.collection("s_non_officiels").find().toArray(),
        db.collection("s_officiels").find().toArray(),
        db.collection("s_proprios").find().toArray(),
        db.collection("s_autres").find().toArray(),
        db.collection("s_tests").find().toArray()
    ])
    await closeSesame();
    if (sites_a.length === 0) {
        return res.status(500).json({ status: 500, message: "Pas de Mongo aujourd'hui" })
    }
    const collections = {
        "sites_non_officiels": sites_a,
        "sites_officiels": sites_b,
        "sites_proprios": sites_c,
        "autres": sites_z,
        "test": sites_t
    }
    return res.status(200).json({ status: 200, collections, message: "Voici vos sites." })
} // ok

const photosDuSite = async (req, res) => {
    const { photosOrigine, photosComm } = req.body;
    const client = new ftp.Client();
    try {
        await client.access({
            host: FTP_HOST,
            user: FTP_USER,
            password: FTP_PASSWORD,
            secure: false
        })
        let tousPhotosOrigine = [];
        for (const item of photosOrigine) {
            let sentier = "/telev/" + item;
            const buffer = await client.downloadTo(item, sentier);
            console.log("buffer", buffer);
            tousPhotosOrigine.push({ filename: item, content: buffer })
        }
        console.log(tousPhotosOrigine);
        let tousPhotosComm = [];
        for (const item of photosComm) {
            let sentier = "/telev/" + item;
            const buffer = await client.downloadTo(item, sentier);
            tousPhotosComm.push({ filename: item, content: buffer.toString('base64') })
        }
        res.set('Content-Type', 'image/jpg');
        return res.status(200).json({
            status: 200,
            message: "Détails du site.",
            tousPhotosComm: tousPhotosComm,
            tousPhotosOrigine: tousPhotosOrigine
        })
    } catch (error) {
        console.log("erreur", error);
        client.close();
    } finally {
        client.close();
    }
} // les photos ne sont pas lisibles

const nouveauSite = async (req, res) => {
    const { type, properties, geometry, contributeur } = req.body;
    await openSesame();
    const sites = await db.collection(properties.type).find().toArray();
    const nombre = parseInt(sites[sites.length - 1]._id) + 1;
    await db.collection(properties.type).insertOne({ _id: nombre, type, properties, geometry });
    await db.collection("contributeurs").insertOne(
        {
            _id: nombre,
            contributeur,
            contSecret: cryptr.encrypt(contributeur.courriel)
        }
    )
    envoyerCourriel(properties, geometry, contributeur);
    await closeSesame();
    return res.status(201).json({ status: 201, message: `nouveau site`, id: nombre })
} // ok

const integrerPhotos = (description, liens) => {
    let lienDebut = '<img src=\"';
    let lienFin = '" height=\"200\" width=\"100%\" /><br><br>';
    let listeLiensGarni = [];
    liens.forEach(url => {
        let urlGarni = lienDebut.concat(url, lienFin);
        listeLiensGarni.push(urlGarni);
    });
    let resultat = listeLiensGarni[0].concat(description, "<br><br>");
    if (listeLiensGarni.length > 0) {
        listeLiensGarni.forEach((lien, index) => {
            if (index > 0) {
                resultat += lien;
            }
        })
    }
    return resultat;
} // désuet

const televPhotos = async (req, res) => {
    let session;
    try {
        session = await openSesame();
        const dbAChercher = req.body.type;
        const idAChercher = parseInt(req.body.id);
        if (req.files.fichiers.constructor === Array) {
            const client = new ftp.Client();
            let updatePromises = [];
            try {
                await client.access({
                    host: FTP_HOST,
                    user: FTP_USER,
                    password: FTP_PASSWORD,
                    secure: false
                })
                for (const item of req.files.fichiers) {
                    let nomDeFichier = Math.round(1e4 * Math.random()).toString().concat("-", item.name);
                    const sentier = '/telev/' + nomDeFichier;
                    await client.uploadFrom(item.tempFilePath, sentier)
                    updatePromises.push(
                        db.collection(dbAChercher).updateOne(
                            { _id: idAChercher },
                            { $push: { "properties.photos": nomDeFichier } },
                            { session }
                        )
                    );
                };
                await Promise.all(updatePromises);
                res.status(201).json({ status: 201, message: 'Photos téléversés!' });
            } catch (err) {
                console.error(err);
                res.status(500).send(err);
            } finally {
                client.close();
            }
        } else {
            const client = new ftp.Client();
            const laPhoto = req.files.fichiers;
            const nomDeFichier = Math.round(1e4 * Math.random()).toString().concat("-", laPhoto.name);
            const sentier = '/telev/' + nomDeFichier;
            try {
                await client.access({
                    host: FTP_HOST,
                    user: FTP_USER,
                    password: FTP_PASSWORD,
                    secure: false
                })
                await client.uploadFrom(laPhoto.tempFilePath, sentier)
                await db.collection(dbAChercher).updateOne(
                    { _id: idAChercher },
                    { $push: { "properties.photos": nomDeFichier } },
                    { session }
                );
                res.status(201).json({ status: 201, message: 'Une photo téléversée!' });
            } catch (err) {
                console.error("erreur avec fichier", err);
                res.status(500).send(err);
            } finally {
                client.close();
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    } finally {
        if (session) {
            await closeSesame(session);
        }
    }
}; // ok

const commentairesPhotos = async (req, res) => {
    let session;
    try {
        session = await openSesame();
        let dbAChercher;
        switch (req.body.type) {
            case "officiel":
                dbAChercher = "s_officiels"
                break;
            case "non-officiel":
                dbAChercher = "s_non_officiels"
                break;
            case "proprio":
                dbAChercher = "s_proprios"
                break;
            case "autre":
                dbAChercher = "s_autres"
                break;
            case "s_autres":
                dbAChercher = "s_autres"
                break;
            case "s_tests":
                dbAChercher = "s_tests"
                break;
            case "test":
                dbAChercher = "s_tests"
                break;
            default:
                break;
        }
        const idAChercher = parseInt(req.body.id);
        const commAAjouter = parseInt(req.body.nComm) - 1;
        if (req.files.fichiers.constructor === Array) {
            const client = new ftp.Client();
            let updatePromises = [];
            try {
                await client.access({
                    host: FTP_HOST,
                    user: FTP_USER,
                    password: FTP_PASSWORD,
                    secure: false
                })
                for (const item of req.files.fichiers) {
                    let nomDeFichier = Math.round(1e4 * Math.random()).toString().concat("-", item.name);
                    const sentier = '/telev/' + nomDeFichier;
                    await client.uploadFrom(item.tempFilePath, sentier)
                    updatePromises.push(
                        db.collection(dbAChercher).updateOne(
                            { _id: idAChercher },
                            { $push: { [`properties.commentaires.${commAAjouter}.fichiers`]: nomDeFichier } },
                            { session }
                        )
                    );
                }
                await Promise.all(updatePromises);
                res.status(201).json({ status: 201, message: 'Photos téléversés!' });
            } catch (err) {
                console.error(err);
                res.status(500).send(err);
            } finally {
                client.close();
            }
        } else {
            const client = new ftp.Client();
            const laPhoto = req.files.fichiers;
            const nomDeFichier = Math.round(1e4 * Math.random()).toString().concat("-", laPhoto.name);
            const sentier = '/telev/' + nomDeFichier;
            try {
                await client.access({
                    host: FTP_HOST,
                    user: FTP_USER,
                    password: FTP_PASSWORD,
                    secure: false
                })
                await client.uploadFrom(laPhoto.tempFilePath, sentier)
                await db.collection(dbAChercher).updateOne(
                    { _id: idAChercher },
                    { $push: { [`properties.commentaires.${commAAjouter}.fichiers`]: nomDeFichier } },
                    { session }
                );
                await res.status(201).json({ status: 201, message: 'Une photo téléversée!' });
            } catch (err) {
                console.error("erreur avec fichier", err);
                res.status(500).send(err);
            } finally {
                client.close();
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    } finally {
        if (session) {
            await closeSesame(session);
        }
    }
}; // ok

const commentaireSite = async (req, res) => {
    const { _id, properties, contributeur } = req.body;
    let dbAChercher;
    switch (properties.type) {
        case "officiel":
            dbAChercher = "s_officiels"
            break;
        case "non-officiel":
            dbAChercher = "s_non_officiels"
            break;
        case "proprio":
            dbAChercher = "s_proprios"
            break;
        case "autre":
            dbAChercher = "s_autres"
            break;
        case "s_autres": // peut supprimer?
            dbAChercher = "s_autres"
            break;
        case "s_tests": // peut supprimer?
            dbAChercher = "s_tests"
            break;
        case "test":
            dbAChercher = "s_tests"
            break;
        default:
            break;
    }
    await openSesame();
    const found = await db.collection(dbAChercher).findOne({ _id: _id });
    let nDeCommentaires;
    if (found.properties.commentaires) {
        nDeCommentaires = found.properties.commentaires.length + 1;
    } else {
        nDeCommentaires = 1;
    }
    await db.collection(dbAChercher).updateOne(
        { _id: _id },
        {
            $push: {
                "properties.commentaires": {
                    description: properties.description,
                    annee: properties.annee
                }
            }
        }
    );
    const commentRacc = properties.description.slice(0, 25);
    await db.collection("contributeurs").updateOne(
        { _id: _id },
        {
            $push: {
                "commentaires": {
                    commentaire: commentRacc,
                    contributeur: contributeur,
                    contSecret: cryptr.encrypt(contributeur.courriel)
                }
            }
        }
    )
    await closeSesame();
    return res.status(200).json({ status: 200, message: `commentaire ajouté`, nDeCommentaires })
} // ok

module.exports = {
    testApi,
    tousSites,
    photosDuSite,
    nouveauSite,
    televPhotos,
    commentaireSite,
    commentairesPhotos
}