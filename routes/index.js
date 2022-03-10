var express = require('express');
var router = express.Router();

router.get('./', function(req, res, next){
    res.render('index', {title: 'Sign Up Page Test', condition: false, anyArray: [1,2,3]});
});

module.exports = router;