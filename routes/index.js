const express = require('express');
const router = express.Router();
const { Challenge } = require('../models');


router.get('/', async function(req, res, next){
    const challengeData = await Challenge.findAll();
    const challenges = challengeData.map((chal) => chal.get({ plain: true }));
    res.render('homepage', {layout: 'main', title: 'Homepage', challenges});
});
router.get('/signup', function(req, res, next){
    res.render('signup', {layout: 'main', title: 'Sign Up'});
});
router.get('/login', function(req, res, next){
    res.render('login', {layout: 'main', title: 'Login'});
});
router.post('/login', (req, res) => {
    res.redirect('/');
});

module.exports = router;