var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('here ist the new router');
})
module.exports = router;