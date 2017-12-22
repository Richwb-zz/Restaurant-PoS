const express   = require('express');
const router    = express.Router();
const mongoose 	= require('mongoose');
const models 	= require('../models/all-models.js');

//create new reciept
router.post('/open', (req,res,next) => {
    receipt.create({
        items: req.body.order
    })
    .then(result => res.json(result))
    .catch(error => res.json(error))
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