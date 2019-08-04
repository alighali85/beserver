var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('here is the register page');
})

module.exports = router;
