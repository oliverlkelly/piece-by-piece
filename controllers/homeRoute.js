const router = require('express').Router();
require('dotenv').config();

const {  User, Challenge, Score } = require('../models');

router.get('/', async function(req, res, next){
    const challengeData = await Challenge.findAll();
    const userchallenges = challengeData.map((chal) => chal.get({ plain: true }));
    const user = {
        firstname: "Oliver",
        lastname: "Kelly"
    }
    res.render('homepage', {layout: 'main', title: 'Homepage', userchallenges, user});

// const {  User, Challenge, Score} = require('../models');
// // const withAuth = require('../utils/auth');

// router.get('/', async function(req, res, next){
//     const challengeData = await Challenge.findAll();
//     const challenges = challengeData.map((chal) => chal.get({ plain: true }));
//     res.render('homepage', {layout: 'main', title: 'Homepage', challenges, loggedIn: req.session.loggedIn});
//     // res.status(200).json(challenges);
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

router.get('/leaderboard', function(req, res, next){
    var mysql = require('mysql2')

var con = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT score.user_score, challenge.title, user.f_name FROM score INNER JOIN challenge ON score.challenge_id = challenge.id INNER JOIN user ON user.id = score.user_id" , function (err, userdata) {
      if (err) throw err;
      console.log(userdata)
      res.cookie('leaderboarddata', JSON.stringify(userdata));
      res.render('leaderboard', {layout: 'main', title: 'leaderboard'});
    });
  });
});


module.exports = router;
