const router = require('express').Router();

const {  User, Challenge, Score } = require('../models');

router.get('/', async function(req, res, next){
    const challengeData = await Challenge.findAll();
    const userchallenges = challengeData.map((chal) => chal.get({ plain: true }));
    const user = {
        firstname: "Oliver",
        lastname: "Kelly"
    }
    res.render('homepage', {layout: 'main', title: 'Homepage', userchallenges, user});
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
