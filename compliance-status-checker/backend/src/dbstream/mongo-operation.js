require('dotenv').config();
const { MongoClient } = require('mongodb');
const { MONGO_CONNECTION, MONGO_DB, MONGO_COLLECTION } = process.env
const client = new MongoClient(MONGO_CONNECTION)

class CMngOperation {

    constructor(collectionName = MONGO_COLLECTION, dbName = MONGO_DB) {
        this.collectionName = collectionName
        this.dbName = dbName
    }

    insertOne = async (obj) => {
        try {
            if (Object.keys(obj).length === 0)
                throw new Error('The object is empty')
            return await client.db(this.dbName).collection(this.collectionName).insertOne(obj)
        }
        catch (error) {
            throw error
        }
    }

    getAll = async () => {
        try {
            return await client.db(this.dbName).collection(this.collectionName).find({}).toArray()
        }
        catch (error) {
            throw error
        }
    }
}
const mongo = new CMngOperation();
module.exports = mongo;