const express = require('express');
const router = express.Router();
const allData = require('../middleware/allData')


router.get('/data',allData,(req,res)=>{
    console.log('Hello My Home');
    res.send(req.list);
})

module.exports = router;