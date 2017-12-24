const express   = require('express');
const router    = express.Router();
const mongoose 	= require('mongoose');
const models 	= require('../models/all-models.js');
const menu = models.Menu;
//get all menu items
router.get('/', (req, res, next) => {
    console.log("test1");
    models.Menu.find()
    .then(results => {
        console.log(JSON.stringify(results));
        res.json(results)
    })
    .catch(error => res.json(error));
});

router.get('/add', (req,res,next) =>{
    console.log("adding")
    models.Menu.create(
        {
        "name": "pork", 
        "description": "pork", 
        "cost": 1.00, 
        "category": "meat" 
    }, 
    {
        "name": "coke",
        "description": "causes diabeetus",
        "price": 1.50,
        "category": "drink"
    },
        {
            "name": "burger",
            "description": "yummy burger",
            "price": 10.00,
            "category": "entree"
        },
        {
            "name": "chocolate cake",
            "description": "yummy cake",
            "price": 5.00,
            "category": "dessert"
        } 
).then(results => {
        console.log(results);
        res.json(results);
    })
});

//get menu list from selected menu section
router.get('/:section', (req, res, next) => {
   console.log("test2");
    menu.findAll({
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