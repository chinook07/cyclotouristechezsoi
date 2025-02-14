const { non_officiels, officiels, proprios, autres } = require("./donnees");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const batchImport = async () => {

    const client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log("connecté!");
    const db = client.db();

    // non_officiels.forEach((item, index) => {
    //     item._id = 1000 + index
    // })
    // officiels.forEach((item, index) => {
    //     item._id = 3000 + index
    // })
    // proprios.forEach((item, index) => {
    //     item._id = 4000 + index
    // })
    autres.forEach((item, index) => {
        item._id = 5000 + index
    })

    // await db.collection("s_non_officiels").insertMany(non_officiels);
    // await db.collection("s_officiels").insertMany(officiels);
    // await db.collection("s_proprios").insertMany(proprios);
    await db.collection("s_autres").insertMany(autres);

    await client.close();
    console.log("déconnecté!");
}

batchImport()