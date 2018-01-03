const express   = require('express');
const router    = express.Router();
const mongoose 	= require('mongoose');
const models 	= require('../models/all-models.js');
const Receipts = models.Receipts;

//create new reciept
router.post('/seat', (req,res,next) => {
    const seat = req.body.newSeat;
    console.log(seat);
    models.Receipts
        .create({_Id: 5374574745, table: 4, guests: 4, server:"Morty"})
        .then(results => res.json(results))
        .catch(error => res.json(error));

});

//add order to reciept
router.put('/place', (req, res, next) => {
    const test = {_id: "5a3ecc677afbe70638c7fec9", table: 4, guests: 4, server:"Bob"};
    console.log(test);
    reciept.update(test,{
        where: {
            _id: {
                [Op.eq]: test._Id
            }
        }
    })
    .then(result =>  res.json(result))
    .catch(error => res.json(error));
});

module.exports = router;