const express = require('express');
const router = express.Router();
const query = require('../js/queries');

//add order to reciept
router.put('/placeorder', (req, res, next) => {

});

//remove order from menu
router.delete('/removeorder', (req, res, next) => {

});

// process a coupon
router.put('/coupon', (req, res, next) => {

});

//print check and close out order
router.put('/printcheck', (req, res, next) => {

});

//get menu list from selected menu section
router.get('/getmenu/:section', (req, res, next) => getMenu(req.body.section));

module.exports = router;
