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



router.get('/paid', (req, res, next) => {
    console.log("GET PAID RECEIPTS")
    receipt.find().where('paid').equals(true)
        .then(results => {
            console.log(results);
            res.json(results)
        })
        .catch(error => {
            console.log(error);
            res.json(error)
        })
})

router.get('/unpaid', (req, res, next) => {

    console.log("GET UNPAID RECEIPTS")
    receipt.find().where("paid").equals(false)
        .then(results => {
            console.log(results);
            res.json(results)
        })
        .catch(error => {
            console.log(error);
            res.json(error)
        })

})
//create new reciept
router.post('/seat', (req, res, next) => {
    console.log("NEW SEATING")
    console.log(req.body);
    receipt
        .create({ table: req.body.table, guests: req.body.guests, server: req.body.server })
        .then(results => {
            console.log(results);
            res.json(results)
        })
        .catch(error => res.json(error));

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

router.delete('/delete/:id',(req,res,next) => {
    receipt.remove({_id: req.params.id})
        .then(result => res.json(result))
        .catch(error => res.json(error));
})


module.exports = router;
