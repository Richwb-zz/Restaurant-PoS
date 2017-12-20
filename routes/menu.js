const express = require('express');
const router = express.Router();
const models = require("../models/index.js");

//get menu list from selected menu section
router.get('/:section', (req, res, next) => res.json(getMenu(req.body.section)));

module.exports = router;