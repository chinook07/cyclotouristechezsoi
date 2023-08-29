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
    const sites = await db.collection(properties.type).find().toArray();
    const nombre = parseInt(sites[sites.length - 1]._id) + 1;
    await db.collection(properties.type).insertOne({ _id: nombre, type, properties, geometry });
    await db.collection("contributeurs").insertOne({ _id: nombre, contributeur })
    await closeSesame();
    return res.status(201).json({ status: 201, message: `nouveau site` })
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
    tousSites
}