
# Restaurant-PoS <hr>
By [Richard Debrah](https://github.com/GM456742), [Richard Bates](https://github.com/Richwb) and [Jim Reinknecht](https://github.com/CaptainJimmy)

Restaurant PoS is a simple React application for managing restaurant seating. It's features include handling orders for multiple guests and receipt printing. Restaurant PoS is lightweight making it easy to run on very low memory systems.

# Dependencies
Restaurant PoS depends on several NPM Packages. Find below the various packages and their versions used. 
Install with `$ npm install`.

* [React](https://reactjs.org/) &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)
 
* [Concurrently](https://www.npmjs.com/package/concurrently) &middot; ![npm license](https://img.shields.io/badge/npm-3.5.1-red.svg)
 
* [MongoDB](https://www.npmjs.com/package/mongodb) &middot; ![GitHub license](https://img.shields.io/badge/mongodb-3.0.1-green.svg)
 
* [Cors](https://www.npmjs.com/package/cors) &middot; ![GitHub license](https://img.shields.io/badge/npm-2.8.4-blue.svg)
 
* [Express](https://www.npmjs.com/package/express) &middot; ![GitHub license](https://img.shields.io/badge/npm-4.15.5-red.svg)
 
* [Mongoose](https://www.npmjs.com/package/mongoose) &middot; ![GitHub license](https://img.shields.io/badge/npm-4.13.7-blue.svg)
 
* [Morgan](https://www.npmjs.com/package/morgan) &middot; ![GitHub license](https://img.shields.io/badge/npm-1.9.0-blue.svg)
  
* [Nodemon](https://www.npmjs.com/package/nodemon) &middot; ![GitHub license](https://img.shields.io/badge/npm-1.14.0-orange.svg)
  
* [React-Bootstrap](https://www.npmjs.com/package/react-bootstrap) &middot; ![GitHub license](https://img.shields.io/badge/npm-0.32.0-green.svg)
 
* [Serve-Favicon](https://www.npmjs.com/package/serve-favicon) &middot; ![GitHub license](https://img.shields.io/badge/npm-2.4.5-blue.svg)
 
* [Axios](https://www.npmjs.com/package/axios) &middot; ![GitHub license](https://img.shields.io/badge/npm-0.17.1-blue.svg)
 
 
# Contribution
The main purpose of this repository is to continue to test React core, making it accessible and easier to understand and use. Development of this application happens in the open on GitHub, and we are grateful to the [Rutgers Coding Bootcamp Community](https://github.com/RutgersCodingBootcamp) for contributing efforts and improvements.

# Future Updates
* Managing Servers/Waiters/Waitresses from the front end
* Receipt by sms
* Coupons and Gift cards integration
* Administrative section to manage service, menu, and employees
* SMS integration for waiting
* Guest tableside ordering system

# Application Instances
# *Main Page*
![main page display](./imagesMD/1.png)

# *Modal for seating new Guests*
![modal for seating new guests](./imagesMD/2.png)

# *Active/Seated Table*
![image showing active table](./imagesMD/3.png)

# *Making Orders*
![ordering for guests](./imagesMD/4.png)

# *Order Submission Confirmation*
![order submission confirmation](./imagesMD/5.png)

# *Current Servers*
![current servers](./imagesMD/6.png)

# *Checking Out Guests*
![checking out guest](./imagesMD/7.png)

# Installation Instructions:

1) Clone Repository to your local drive
2) From your favorite terminal enter `$ cd Restaurant-PoS`
3) Run `$ npm install` to install packages
4) `$ cd client`
5) Run `$ yarn install` to install React packages
6) `$ cd ..` into the main app folder
7) In the app folder run `$ npm start` or `$ yarn start` to run the app. Happy Hacking!
7) You can configure `config/config.json` if you are able to. For experienced developers update it for your SQL DB.


 **Below are captures of the api routes**
# *Checks API*

```javascript
const express   = require('express');
const router    = express.Router();
const mongoose 	= require('mongoose');
const models 	= require('../models/all-models.js');
const receipt = models.Receipts;
//print check and close out order
router.get('/', (req,res,next) => {
    receipt.find()
    .where('paid')
    .equals(false)
    .then(result =>{
        console.log(result);
        res.json(result);
    })
    .catch(error =>{
        console.log(error);
        res.json(error);
    })
});
//
router.get('/paid', (req, res, next) => {
    console.log("GET PAID RECEIPTS")
    receipt.find().where('paid').equals(true)
        .then(results => {
            console.log(results);
            res.json(results)
        })
        .catch(error => {
            console.log(error);
            res.json(error)
        })
})
//
router.get('/unpaid', (req, res, next) => {
    console.log("GET UNPAID RECEIPTS")
    receipt.find().where("paid").equals(false)
        .then(results => {
            console.log(results);
            res.json(results)
        })
        .catch(error => {
            console.log(error);
            res.json(error)
        })
//
})
//create new reciept
router.post('/seat', (req, res, next) => {
    console.log("NEW SEATING")
    console.log(req.body);
    receipt
        .create({ table: req.body.table, guests: req.body.guests, server: req.body.server })
        .then(results => {
            console.log(results);
            res.json(results)
        })
        .catch(error => res.json(error));
});
//
router.put('/:id', (req, res, next) => {
    console.log("UPDATE CHECK")
    console.log(req.params.id)
    console.log(req.body)
    receipt.findById( req.params.id,(err,check)=>{
        if (err) return handleError(err);
        check.paid= req.body.paid;
        check.card = req.body.card
        check.amountTendered = req.body.amountTendered;
        check.paymentType = req.body.paymentType;
        check.paidTime = Date.now();
        check.save((err,updatedCheck)=>{
            if (err) return handleError(err);
            res.send(updatedCheck)
        })
    })
})
//
router.get('/:id', (req, res, next) => {
    receipt.findOne({
        where: {
            _id: req.params.id
        }
    })
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(error => {
            console.log(error)
            res.json(error);
        })
});
//
router.delete('/delete/:id',(req,res,next) => {
    receipt.remove({_id: req.params.id})
        .then(result => res.json(result))
        .catch(error => res.json(error));
})
//
module.exports = router;
```

# *Coupon API*

```javascript
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const models = require("../models/all-models.js");

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

module.exports = router;
```

# *Menu API*

```javascript
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
    menu.create({
        "name": req.body.name,
        "description": req.body.description,
        "price": req.body.price,
        "category": req.body.category
    })
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
```

# *Order API*

```javascript
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const models = require('../models/all-models.js');
const receipts = models.Receipts;


router.get('/', (req, res, next) => {
    console.log("GET ALL RECEIPTS")
    receipts.find()
        .then(results => {
            console.log(results);
            res.json(results)
        })
        .catch(error => {
            console.log(error);
            res.json(error)
        })
})

router.get('/paid', (req, res, next) => {
    console.log("GET PAID RECEIPTS")
    receipts.find().where('paid').equals(true)
        .then(results => {
            console.log(results);
            res.json(results)
        })
        .catch(error => {
            console.log(error);
            res.json(error)
        })
})

router.get('/unpaid', (req, res, next) => {

    console.log("GET UNPAID RECEIPTS")
    receipts.find().where("paid").equals(false)
        .then(results => {
            console.log(results);
            res.json(results)
        })
        .catch(error => {
            console.log(error);
            res.json(error)
        })

})

//add order to receipt
router.put('/:id', (req, res, next) => {
    receipts.update({_id: req.params.id}, {
        'items': req.body.bill.items,
        'total': req.body.bill.total,
        'paid': req.body.paid,
    })
        .then(result => {
            res.json(result)
        })
        .catch(error => res.json("error" + error));
});

module.exports = router;
```

# *Servers API*
```javascript
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const models = require('../models/all-models.js');
const servers = models.Servers;

//print check and close out order
router.get('/', (req, res, next) => {
    console.log("servers")
    servers.find({})
        .then(result => res.json(result))
        .catch(error => res.json(error));
});

router.post('/', (req, res, next) => {
    // ADD SERVER INFO HERE
    res.send('Request received, Server Not added, code not there')
});

router.get('/login/:code', (req,res,next) => {
    servers.findOne({}).where("code").equals(req.params.code)
        .then(result => {
            console.log("rep " + result.name)
                res.json(result)
        })
        .catch(error =>{
            res.json(error);
        })
})

module.exports = router;
```