const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
const db = client.db();

const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: uploading = (request, file, callback) => {
//         callback(null, "./public/uploads/images");
//     },
//     // rajouter ext
//     filename: rajouter = (request, file, callback) => {
//         callback(null, Date.now() + file.originalname)
//     }
// });

// const uploading = multer({
//     storage: storage,
//     limits: {
//         fieldSize: 1024*1024*5
//     }
// })

const openSesame = async () => {
    await client.connect();
    console.log("connected!");
}

const closeSesame = async () => {
    await client.close();
    console.log("disconnected!");
}

const nouveauSite = async (req, res) => {
    const { type, properties, geometry, contributeur } = req.body;
    await openSesame();
    const sites = await db.collection("sites").find().toArray();
    const nombre = sites.length + 1001;
    // await db.collection("sites").insertOne({ _id: nombre, type, properties, geometry });
    // await db.collection("contributeurs").insertOne({ _id: nombre, contributeur })
    await closeSesame();
    return res.status(201).json({ status: 201, message: `nouveau site` })
}

const tousSites = async (req, res) => {
    await openSesame();
    const sites = await db.collection("sites").find().toArray();
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