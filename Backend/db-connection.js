const { MongoClient } = require('mongodb');
require('dotenv').config();
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

// Database Name
const dbName = 'pet-adoption-app';

module.exports = {
    connect: async function connect() {
        await client.connect();
        console.log('Connected successfully to server');

        return client;
    },
    db: function db() {
        const db = client.db(dbName);
        return db;
    } 
}

