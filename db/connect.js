const MongoClient = require('mongodb').MongoClient;
const URI = 'mongodb+srv://dbuser:dbUserPassword@cluster0.nkww6wr.mongodb.net/test';
let db;
const connectDB = () => {
    MongoClient.connect(URI)
        .then((client) => {
            db = client;
        })
    console.log("database connected.");
}

const getDb = () => {
    if (!db) {
        throw Error('Db not initialized');
    }

    return db;
}

module.exports = { connectDB, getDb }