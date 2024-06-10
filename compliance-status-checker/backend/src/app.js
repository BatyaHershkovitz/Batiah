require('dotenv').config()
const express = require('express')
const router = require('./routers/exchange-router')
const cors = require('cors')
const { insertAvgOnceAMonth } = require('./services/add-exchange-month')
const app = express()
const { PORT, ALLOWED_ORIGIN } = process.env

app.use(cors({ origin: ALLOWED_ORIGIN, credentials: true }))
app.use(express.json())
app.use(router)
app.listen(PORT, () => {
  console.log(`The app listening on port ${PORT}`)
  insertAvgOnceAMonth()
})

module.exports = app