const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const path = require('path');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
const db = client.db();

const openSesame = async () => {
    await client.connect();
    console.log("connected!");
}

const closeSesame = async () => {
    await client.close();
    console.log("disconnected!");
}

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
}

const nouveauSite = async (req, res) => {
    const { type, properties, geometry, contributeur } = req.body;
    await openSesame();
    const sites = await db.collection(properties.type).find().toArray();
    const nombre = parseInt(sites[sites.length - 1]._id) + 1;
    if (properties.photos.length > 0) {
        let resultat = integrerPhotos(properties.description, properties.photos);
        properties.description = resultat;
    }
    // await db.collection(properties.type).insertOne({ _id: nombre, type, properties, geometry });
    // await db.collection("contributeurs").insertOne({ _id: nombre, contributeur })
    await closeSesame();
    return res.status(201).json({ status: 201, message: `nouveau site` })
}

const televPhotos = async (req, res) => {
    // ne fonctionne que si multiples photos
    console.log(req.files.fichiers[0]);
    const fichier1 = req.files.fichiers[0];
    const sentier = path.join(__dirname, 'uploads', fichier1.name);
    console.log(sentier);
    try {
        await fichier1.mv(sentier);
        console.log("succès");
        await openSesame();
        // associer noms de fichiers à Mongo
        await closeSesame();
        res.status(201).json({ status: 201, message: 'File uploaded!' });
    } catch (err) {
        res.status(500).send(err);
    }
}

const commentaireSite = async (req, res) => {
    const { _id, properties, contributeur } = req.body;
    console.log(properties);
    let photosATraiter = false;
    properties.photos.forEach(item => {
        if (item !== "") {
            photosATraiter = true;
        }
    })
    let resultat;
    if (photosATraiter) {
        resultat = integrerPhotos(properties.description, properties.photos);
    } else {
        resultat = properties.description;
    }
    let nDeCommentaires;
    if (properties.commentaires) {
        nDeCommentaires = properties.commentaires.length;
    } else {
        properties.commentaires = [];
        nDeCommentaires = 0;
    }
    console.log(properties.type);
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
    console.log(dbAChercher, "db");
    await openSesame();
    const found = await db.collection(dbAChercher).findOne({ _id: _id });
    console.log(found, "found");
    await db.collection(dbAChercher).updateOne(
        { _id: _id },
        {
            $push: {
                "properties.commentaires": {
                    description: resultat,
                    annee: properties.annee
                }
            }
        }
    );
    await closeSesame();
    return res.status(200).json({ status: 200, message: `commentaire ajouté` })
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
}

module.exports = {
    nouveauSite,
    televPhotos,
    tousSites,
    commentaireSite
}