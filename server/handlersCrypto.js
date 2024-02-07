// À utiliser dans Insomnia
// Faire une requêtre GET comme celle-ci : localhost:8000/api/courriel/5020
// Ou celle-ci : localhost:8000/api/courriel-commentaire/5020

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const client = new MongoClient(MONGO_URI);
const db = client.db();

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const ouvrirMongo = async () => {
    await client.connect();
    console.log("connecté à Mongo!");
}

const fermerMongo = async () => {
    await client.close();
    console.log("déconnecté de Mongo!");
}

const chercherCourriel = async (req, res) => {
    const id = parseInt((req.params).id)
    await ouvrirMongo();
    const resultat = await db.collection("contributeurs").findOne({ _id: id })
    if (resultat.contSecret) {
        const courrielDec = cryptr.decrypt(resultat.contSecret);
        await fermerMongo();
        return res.status(200).json({ status: 200, id, courrielDec })
    } else {
        await fermerMongo();
        return res.status(404).json({ status: 404, "message": "pas de courriel à déchiffrer" })
    }
}

const chercherCourrielCommentaire = async (req, res) => {
    const id = parseInt((req.params).id);
    await ouvrirMongo();
    const resultat = await db.collection("contributeurs").findOne({ _id: id });
    let tousCommentaires = [];
    resultat.commentaires.forEach(element => {
        if (element.contSecret) {
                tousCommentaires.push({
                "commentaire": element.commentaire,
                "courrielDec": cryptr.decrypt(element.contSecret)
            })
        }
    });
    await fermerMongo();
    return res.status(200).json({ status: 200, id, tousCommentaires })
}

module.exports = {
    chercherCourriel,
    chercherCourrielCommentaire
}