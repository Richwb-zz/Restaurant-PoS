// Route to handle all calls for /check

const express   = require('express');
const router    = express.Router();
const mongoose 	= require('mongoose');
const models 	= require('../models/all-models.js');
const receipt = models.Receipts;

// Get all receipts that have not been paid and return them
router.get('/', (req,res,next) => {
    receipt.find()
    .where('paid')
    .equals(false)
    .then(result =>{
        res.json(result);
    })
    .catch(error =>{
        res.json(error);
    })
});


// Get all paid reciepts and return them
router.get('/paid', (req, res, next) => {
    receipt.find().where('paid').equals(true)
        .then(results => {
            res.json(results)
        })
        .catch(error => {
            res.json(error)
        })
});

// Get all receipts that have not been paid and return them
router.get('/unpaid', (req, res, next) => {
    receipt.find().where("paid").equals(false)
        .then(results => {
            res.json(results)
        })
        .catch(error => {
            res.json(error)
        })

});

//create new reciept
router.post('/seat', (req, res, next) => {
    receipt
        .create({ table: req.body.table, guests: req.body.guests, server: req.body.server })
        .then(results => {
            res.json(results)
        })
        .catch(error => res.json(error));

});

// Update check information
router.put('/:id', (req, res, next) => {
    receipt.findById( req.params.id,(err,check)=>{
        if (err) return handleError(err);
        check.paid= req.body.paid;
        check.card = req.body.card
        check.amountTendered = req.body.amountTendered;
        check.paymentType = req.body.paymentType;
        check.paidTime = Date.now();
        check.save((err,updatedCheck)=>{
            if (err) return handleError(err);
            res.send(updatedCheck)
        });
    });
});

// Query for check based on ID field
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

// Delete Check based on ID
router.delete('/delete/:id',(req,res,next) => {
    receipt.remove({_id: req.params.id})
        .then(result => res.json(result))
        .catch(error => res.json(error));
})


module.exports = router;
