const express   = require('express');
const router    = express.Router();
const mongoose 	= require('mongoose');
const models 	= require('../models/all-models.js');
const menu = models.Menu;
//get all menu items

router.get('/', (req, res, next) => {
    menu.find()
    .then(results => res.json(results))
    .catch(error => res.json(error));
});



router.post('/add', (req,res,next)=>{
    console.log("adding new item");
    console.log(req.body);
    menu.create(req.body)
        .then(results => res.json(results))
        .catch(error => {
            console.log(error);
            res.json(error);
        });
})

router.delete('/delete/:id', (req,res,next)=>{
    if (req.params.id) {
        menu
            .remove({_id: req.params.id})
            .then(result => res.json(result))
            .catch(error => res.json(error));
    }
})

//get menu list from selected menu section
router.get('/:section', (req, res, next) => {
    menu
        .find({})
        .where("category").equals(req.params.section)
        .then(result => res.json(result))
        .catch(error => res.json(error));
});

//for inserting dummy data. remove in final version

router.get('/adddummy', (req, res, next) => {
    console.log("adding dummy data")
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



module.exports = router;