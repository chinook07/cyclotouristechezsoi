const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

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

const nouveauSite = async (req, res) => {
    const {type, properties, geometry} = req.body;
    await openSesame();
    await db.collection("dormir").insertOne({type, properties, geometry});
    await closeSesame();
    return res.status(201).json({ status: 201, message: `nouveau site` })
}

const tousSites = async (req, res) => {
    await openSesame();
    const sites = await db.collection("dormir").find().toArray();
    await closeSesame();
    const collection = {
        "type": "FeatureCollection",
        "features": sites
    }
    return res.status(200).json({ status: 200, collection, message: "Voici vos sites." })
}

module.exports = {
    nouveauSite,
    tousSites
}