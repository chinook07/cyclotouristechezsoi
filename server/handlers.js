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
    console.log(MONGO_URI, "44t43");
    await openSesame();
    await db.collection("dormir").insertOne({type, properties, geometry});
    await closeSesame();
    return res.status(201).json({ status: 201, message: `nouveau site` })
}

module.exports = {
    nouveauSite
}