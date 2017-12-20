const express = require('express');
const router = express.Router();
const models = require("../models/index.js");
const coupons = model.coupon;

// process a coupon
router.put('/coupon', (req, res, next) => {
    coupons.findOne({
        where: {
            coupon_code: req.body.coupon_code
        }
    })
    .then(result =>{
        coupons.validateCoupon(result);
    })
    .then(result =>{
        res.json(result);
    })
    .catch(error => error);
});