const router = require('express').Router()
const { getAllAvg } = require('../modals/exchange-average')

router.get('/get-all-average', async (req, res) => {
    const result = await getAllAvg()
    res.json(result)
})

module.exports = router