const express   = require('express');
const router    = express.Router();
const mongoose 	= require('mongoose');
const models 	= require('../models/all-models.js');

//get menu list from selected menu section
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;
