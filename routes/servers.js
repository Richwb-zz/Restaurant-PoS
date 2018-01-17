const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const models = require('../models/all-models.js');
const servers = models.Servers;

//print check and close out order
router.get('/', (req, res, next) => {
    console.log("servers")
    servers.find({})
        .then(result => res.json(result))
        .catch(error => res.json(error));
});

router.post('/', (req, res, next) => {
    // ADD SERVER INFO HERE
    res.send('Request received, Server Not added, code not there')
});

router.get('/login/:code', (req,res,next) => {
    servers.findOne({}).where("code").equals(req.params.code)
        .then(result => {
            console.log("rep " + result.name)
                res.json(result)
        })
        .catch(error =>{
            res.json(error);
        })
})

module.exports = router;