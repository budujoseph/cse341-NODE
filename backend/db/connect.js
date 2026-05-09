require('dotenv').config();

const MongoClient  = require('mongodb').MongoClient;

let database;
const initdb = (callback) => {
    if (database) {
        console.log("Database is already initialized!");
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
        .then((client) => {
            database = client;
            callback(null, database);
        })
        .catch((err) => {
            callback(err);
        })
}

const getDb = () => {
    if (!database) {
        throw new Error("Database not initialized!");
    }
    return database;
}

module.exports = {
    initdb,
    getDb
}