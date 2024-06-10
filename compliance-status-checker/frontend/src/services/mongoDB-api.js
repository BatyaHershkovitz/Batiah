import axios from "axios";

const mongoServer = axios.create({
    baseURL: process.env.REACT_APP_URL_MONGO_SERVER
})

export const getAllData = () => {
    return mongoServer.get('/get-all-average')
}