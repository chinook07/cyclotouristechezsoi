// Import the data into a MongoDB database, running node batchImport in the terminal.

const { officiels, autres } = require("./donnees");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const batchImport = async () => {

    // Open up the connection to MongoDB.

    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    console.log("connected!");
    const db = client.db();

    // Import the 3 collections of data. If you only need to import one, make sure to comment out the others.

    officiels.forEach((item, index) => {
        item._id = 2000 + index
    })
    autres.forEach((item, index) => {
        item._id = 5000 + index
    })
    await db.collection("s_officiels").insertMany(officiels);
    await db.collection("s_autres").insertMany(autres);

    // Disconnect from MongoDB.

    await client.close();
    console.log("disconnected!");
}

batchImport()