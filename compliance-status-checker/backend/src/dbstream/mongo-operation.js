require('dotenv').config();
const { MongoClient } = require('mongodb');
const { MONGO_CONNECTION, MONGO_DB, MONGO_COLLECTION } = process.env
const client = new MongoClient('mongodb+srv://blh21420:IY1dFEL0SnSof1ty@cluster0.jrt4skj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

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