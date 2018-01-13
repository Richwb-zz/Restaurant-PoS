const express   = require('express');
const router    = express.Router();
const mongoose 	= require('mongoose');
const models 	= require('../models/all-models.js');
const receipt = models.Receipts;

//print check and close out order
router.get('/', (req,res,next) => {
    receipt.find()
    .where('paid')
    .equals(false)
    .then(result =>{
        console.log(result);
        res.json(result);
    })
    .catch(error =>{
        console.log(error);
        res.json(error);
    })
});

router.get('/:id', (req, res, next) => {
    receipt.findOne({
        where: {
            _id: req.params.id
        }
    })
    .then(result => {
        console.log(result)
        res.json(result)
    })
    .catch(error => {
        console.log(error)
        res.json(error);
    })
});


module.exports = router;
