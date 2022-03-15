var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res, next){
    res.render('signup', {layout: 'main', title: 'Sign Up'});
});

module.exports = router;