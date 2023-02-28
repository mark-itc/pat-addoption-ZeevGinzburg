const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://zeev:0w2NJjfuLCNa9l87@itc-zeev.5thq6xc.mongodb.net/?retryWrites=true&w=majority';
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

