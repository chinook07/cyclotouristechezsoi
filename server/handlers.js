const { MongoClient } = require("mongodb");
const ftp = require("basic-ftp");
const Cryptr = require('cryptr');
const { createTransport } = require("nodemailer");
require("dotenv").config();
const { MONGO_URI, FTP_HOST, FTP_USER, FTP_PASSWORD, COURRIEL_USER, COURRIEL_PASSWORD } = process.env;

const client = new MongoClient(MONGO_URI);
const db = client.db();

const cryptr = new Cryptr('myTotallySecretKey');

const transporter = createTransport({
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

const ouvrirMongo = async () => {
    await client.connect();
    console.log("connecté à Mongo!");
}

const fermerMongo = async () => {
    await client.close();
    console.log("déconnecté de Mongo!");
}

const testApi = async (req, res) => {
    return res.status(200).json({ status: 200, message: "succès" })
}

const tousSites = async (req, res) => { // aller chercher tous les sites
    await ouvrirMongo();
    const [sites_a, sites_b, sites_c, sites_z, sites_t] = await Promise.all([
        db.collection("s_non_officiels").find().toArray(),
        db.collection("s_officiels").find().toArray(),
        db.collection("s_proprios").find().toArray(),
        db.collection("s_autres").find().toArray(),
        db.collection("s_tests").find().toArray()
    ])
    await fermerMongo();
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

const photosDuSite = async (req, res) => { // aller chercher les photos d'un site (et ses commentaires) de particulier
    const { photosOrigine, photosComm } = req.body;
    const client = new ftp.Client();
    try {
        await client.access({
            host: FTP_HOST,
            user: FTP_USER,
            password: FTP_PASSWORD,
            secure: false
        })
        // commençons par les photos de la publication d'origine
        let tousPhotosOrigine = [];
        for (const item of photosOrigine) {
            let sentier = "/telev/" + item;
            const buffer = await client.downloadTo(item, sentier);
            console.log("buffer", buffer);
            tousPhotosOrigine.push({ filename: item, content: buffer.toString('base64') })
        }
        console.log(tousPhotosOrigine);
        // ensuite les photos sur les commentaires
        let tousPhotosComm = [];
        for (const item of photosComm) {
            let sentier = "/telev/" + item;
            const buffer = await client.downloadTo(item, sentier);
            tousPhotosComm.push({ filename: item, content: buffer.toString('base64') })
        }
        res.set('Content-Type', 'image/jpg');
        return res.status(200).json({
            status: 200,
            message: "Photos du site.",
            tousPhotosComm: tousPhotosComm,
            tousPhotosOrigine: tousPhotosOrigine
        })
    } catch (error) {
        console.log("erreur", error);
        return res.status(500).json({
            status: 500,
            message: "Failed to fetch photos.",
            error: error.message
        });
    } finally {
        client.close();
    }
} // les photos ne sont pas lisibles

const nouveauSite = async (req, res) => { // créer un nouveau site et l'ajouter sur la carte
    const { type, properties, geometry, contributeur } = req.body;
    await ouvrirMongo();
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
    await fermerMongo();
    return res.status(201).json({ status: 201, message: `nouveau site`, id: nombre })
} // ok

const nouveauSitePhoto = async (req, res) => { // ajouter des photos sur un nouveau site
    let session;
    try {
        session = await ouvrirMongo();
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
            await fermerMongo(session);
        }
    }
}; // ok

const integrerPhotos = (description, liens) => { // fonction désuète
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

const nouveauCommentaire = async (req, res) => { // ajouter un commentaire sur un site existant
    const { _id, properties, contributeur } = req.body;
    console.log(req.body);
    let dbAChercher;
    switch (properties.type) {
        case "Site officiel pour cyclistes seulement OU à faible cout / gratuit":
            dbAChercher = "s_officiels"
            break;
        case "Site non-officiel":
            dbAChercher = "s_non_officiels"
            break;
        case "Site offert par un propriétaire":
            dbAChercher = "s_proprios"
            break;
        case "autre":
            dbAChercher = "s_autres"
            break;
        case "test":
            dbAChercher = "s_tests"
            break;
        default:
            break;
    }
    await ouvrirMongo();
    console.log(dbAChercher);
    const found = await db.collection(dbAChercher).findOne({ _id: _id });
    console.log(found);
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
    await fermerMongo();
    return res.status(200).json({ status: 200, message: `commentaire ajouté`, nDeCommentaires })
} // ok

const nouveauCommentairePhoto = async (req, res) => { // ajouter des photos lors d'un ajout de commentaire
    let session;
    try {
        session = await ouvrirMongo();
        let dbAChercher;
        switch (req.body.type) {
            case "Site officiel pour cyclistes seulement OU à faible cout / gratuit":
                dbAChercher = "s_officiels"
                break;
            case "Site non-officiel":
                dbAChercher = "s_non_officiels"
                break;
            case "Site offert par un propriétaire":
                dbAChercher = "s_proprios"
                break;
            case "autre":
                dbAChercher = "s_autres"
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
            await fermerMongo(session);
        }
    }
}; // ok

module.exports = {
    testApi,
    tousSites,
    photosDuSite,
    nouveauSite,
    nouveauSitePhoto,
    nouveauCommentaire,
    nouveauCommentairePhoto
}