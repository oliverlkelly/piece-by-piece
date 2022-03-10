var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index', {title: 'Sign Up Page Test', title2: 'test2'});
});

module.exports = router;