var express = require('express');
var axios = require('axios')
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    const {query} = req._parsedUrl
    const payload = query.split("=")[1].split("_")
    res.render('checkout', {wallet: payload[0],price: payload[1],image:payload[2]})
})

module.exports = router;
