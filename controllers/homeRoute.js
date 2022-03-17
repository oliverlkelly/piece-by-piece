const router = require('express').Router();

const {  User, Challenge, Score} = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async function(req, res, next){
    const challengeData = await Challenge.findAll();
    const challenges = challengeData.map((chal) => chal.get({ plain: true }));
    res.render('homepage', {layout: 'main', title: 'Homepage', challenges, loggedIn: req.session.loggedIn});
    // res.status(200).json(challenges);
});



router.get('/signup', function(req, res, next){
    res.render('signup', {layout: 'main', title: 'Sign Up', isSignupPage: true});
});
router.get('/login', function(req, res, next){
    res.render('login', {layout: 'main', title: 'Login', isLoginPage: true});
});
router.post('/login', (req, res) => {
    res.redirect('/');
});


module.exports = router;
