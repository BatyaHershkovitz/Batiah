const mongo = require('../dbstream/mongo-operation')

const insertOneAvg = async (obj) => {
    try {
        const result = await mongo.insertOne(obj)
        return { isError: false, insertedId: result.insertedId.toString(), message: 'Success' }
    }
    catch (error) {
        return { isError: true, insertedId: '', message: error.toString() }
    }
}

const getAllAvg = async () => {
    try {
        const arrayAll = await mongo.getAll()
        return { isError: false, data: arrayAll, message: 'Success' }
    }
    catch (error) {
        return { isError: true, data: [], message: error.toString() }
    }
}

module.exports = { insertOneAvg, getAllAvg }