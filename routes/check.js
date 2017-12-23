const express   = require('express');
const router    = express.Router();
const mongoose 	= require('mongoose');
const models 	= require('../models/all-models.js');

//print check and close out order
router.get('/', (req, res, next) => {
    receipt.findOne({
        where: {
            id: req.body.receiptId
        }
    })
    .then(result => res.json(result))
    .catch(error => res.json(error));
});

module.exports = router;