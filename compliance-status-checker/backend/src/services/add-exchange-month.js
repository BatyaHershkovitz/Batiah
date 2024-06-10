require('dotenv').config();
const axios = require('axios');
const { insertOneAvg, getAllAvg } = require('../modals/exchange-average');
const schedule = require('node-schedule');

const insertAvgOnceAMonth = () => {
    const rule = new schedule.RecurrenceRule();
    rule.date = 1; rule.hour = 1; rule.minute = 1; rule.second = 1;
    rule.month = [new schedule.Range(1, 12)]
    const job = schedule.scheduleJob(rule, async function () {
        let obj = await getObjToDB(new Date())
        let res = await insertOneAvg(obj)
        console.log(res);
    });
}

const getObjToDB = async (today) => {
    let numMonth = (today.getMonth()) + 1
    let month = today.toLocaleString('en-EN', { month: 'long' })
    let year = today.getFullYear()
    const res = await axios.get(process.env.URL_EXCHANGE_RATE)
    let average = res.data.conversion_rates.ILS
    let date = `${numMonth < 10 ? `0${numMonth}` : numMonth}/${year}`
    let allKeys=(await getAllAvg()).data.sort((a,b)=>a.key-b.key)
    let key=allKeys.length
    return { numMonth, month, year, average, date,key }
}

module.exports = { insertAvgOnceAMonth, getObjToDB }