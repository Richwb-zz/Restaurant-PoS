const express   = require('express');
const router    = express.Router();


//get menu list from selected menu section
router.get('/', (req, res, next) => {
   res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
