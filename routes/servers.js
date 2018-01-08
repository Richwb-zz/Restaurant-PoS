const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const models = require('../models/all-models.js');

//print check and close out order
router.get('/', (req, res, next) => {
    server.find({})
        .then(result => res.json(result))
        .catch(error => res.json(error));
});

router.post('/', (req, res, next) => {
    // ADD SERVER INFO HERE
    res.send('Request received, Server Not added, code not there')
});
module.exports = router;