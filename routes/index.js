var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res, next){
    res.render('index', {layout: 'signup', title: 'Sign Up Page Test', title2: 'test2'});
});

module.exports = router;