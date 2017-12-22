const express   = require('express');
const router    = express.Router();
const mongoose 	= require('mongoose');
const models 	= require('../models/all-models.js');

//get menu list from selected menu section
router.get('/:section', (req, res, next) => {
    menu.findAll({
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