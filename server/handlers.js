const { MongoClient } = require("mongodb");
const ftp = require("basic-ftp");
const fs = require('fs');
require("dotenv").config();
const { MONGO_URI, FTP_HOST, FTP_USER, FTP_PASSWORD } = process.env;

const path = require('path');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
const db = client.db();

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

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
    const sites_a = await db.collection("s_non_officiels").find().toArray();
    const sites_b = await db.collection("s_officiels").find().toArray();
    const sites_c = await db.collection("s_proprios").find().toArray();
    const sites_z = await db.collection("s_autres").find().toArray();
    await closeSesame();
    const collections = {
        "sites_non_officiels": sites_a,
        "sites_officiels": sites_b,
        "sites_proprios": sites_c,
        "autres": sites_z
    }
    return res.status(200).json({ status: 200, collections, message: "Voici vos sites." })
} // ok

const nouveauSite = async (req, res) => {
    const { type, properties, geometry, contributeur } = req.body;
    await openSesame();
    const sites = await db.collection(properties.type).find().toArray();
    const nombre = parseInt(sites[sites.length - 1]._id) + 1;
    // if (properties.photos.length > 0) {
    //     let resultat = integrerPhotos(properties.description, properties.photos);
    //     properties.description = resultat;
    // }
    await db.collection(properties.type).insertOne({ _id: nombre, type, properties, geometry });
    await db.collection("contributeurs").insertOne(
        {
            _id: nombre,
            contributeur,
            contSecret: cryptr.encrypt(contributeur.courriel)
        }
    )
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
            let updatePromises = [];
            try {
                req.files.fichiers.forEach(item => {
                    let nomDeFichier = Math.round(1e4 * Math.random()).toString().concat("-", item.name);
                    let sentier = path.join(__dirname, 'uploads', nomDeFichier);
                    item.mv(sentier);
                    updatePromises.push(
                        db.collection(dbAChercher).updateOne(
                            { _id: idAChercher },
                            { $push: { "properties.photos": nomDeFichier } },
                            { session }
                        )
                    );
                });
                await Promise.all(updatePromises);
                res.status(201).json({ status: 201, message: 'Photos téléversés!' });
            } catch (err) {
                console.error(err);
                res.status(500).send(err);
            }
        } else {
            const fichier = req.files.fichiers;
            const nomDeFichier = Math.round(1e4 * Math.random()).toString().concat("-", fichier.name);
            const sentier = path.join(__dirname, 'uploads', nomDeFichier);
            try {
                await fichier.mv(sentier);
                await db.collection(dbAChercher).updateOne(
                    { _id: idAChercher },
                    { $push: { "properties.photos": nomDeFichier } },
                    { session }
                );
                res.status(201).json({ status: 201, message: 'Une photo téléversée!' });
            } catch (err) {
                console.error("erreur avec fichier", err);
                res.status(500).send(err);
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
}; // doit refaire avec FTP

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
            default:
                break;
        }
        const idAChercher = parseInt(req.body.id);
        const commAAjouter = parseInt(req.body.nComm) - 1;
        if (req.files.fichiers.constructor === Array) { // doit refaire cette partie
            let updatePromises = [];
            try {
                req.files.fichiers.forEach(item => {
                    let nomDeFichier = Math.round(1e4 * Math.random()).toString().concat("-", item.name);
                    let sentier = path.join(__dirname, 'uploads', nomDeFichier);
                    item.mv(sentier);
                    updatePromises.push(
                        db.collection(dbAChercher).updateOne(
                            { _id: idAChercher },
                            { $push: { [`properties.commentaires.${commAAjouter}.fichiers`]: nomDeFichier } },
                            { session }
                        )
                    );
                });
                await Promise.all(updatePromises);
                res.status(201).json({ status: 201, message: 'Photos téléversés!' });
            } catch (err) {
                console.error(err);
                res.status(500).send(err);
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
        case "s_autres":
            dbAChercher = "s_autres"
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
    nouveauSite,
    televPhotos,
    commentaireSite,
    commentairesPhotos
}