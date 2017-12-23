const express   = require('express');
const router    = express.Router();
const mongoose 	= require('mongoose');
const models 	= require('../models/all-models.js');
const Receipts = models.Receipts;

//create new reciept
router.post('/open', (req,res,next) => {
    const seat = req.body.newSeat;
    console.log(req.body.newSeat);
    models.Receipts
        .create({table: 4, guests: 4, server:"Rick"})
        .then(results => console.log(results))
        .catch(error => console.log(error));

});

//add order to reciept
router.put('/place', (req, res, next) => {
    console.log("test");
    receipt.findOne({
        where: {
            id: req.body.receiptId
        }
    })
    .then(result => {
        reciept.update({
            items: result.items + "," + req.body.order,
        },{
            where: {
                id: {
                    [Op.eq]: req.body.receiptId
                }
            }
        })
    })
    .then(result =>  res.json(result))
    .catch(error => res.json(error));
});

//remove order from menu
router.delete('/remove', (req, res, next) => {
    menu.findOne({
        where: {
            meal_type: req.headers.category
        }
    })
    .then(result =>{
        console.log(result[0].dataValues);

        res.json(result[0].dataValues);
    })
    .catch(error => res.json(error));
});

module.exports = router;