const express = require('express');
const router = express.Router();
const models = require("../models/index.js");
const reciept = models.reciepts;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//add order to reciept
router.put('/place', (req, res, next) => {
    reciept.findOne({
        where: {
            id: req.body.recieptId
        }
    })
    .then(result => {
        reciept.update({
            items: result.items + "," + req.body.order,
        },{
            where: {
                id: {
                    [Op.eq]: req.body.recieptId
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
    .catch(error => (error));
});

module.exports = router;