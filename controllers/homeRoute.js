const router = require('express').Router();
require('dotenv').config();

const {  User, Challenge, Score } = require('../models');

var mysql = require('mysql2')

var con = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

router.get('/', async function(req, res, next){
    if(req.session.loggedIn){
        const scoreData = await Score.findAll({where: {user_id: req.session.user_id}});
        const userchallenges = scoreData.map((chal) => chal.get({ plain: true }));
        console.log(userchallenges);
        res.render('homepage', {layout: 'main', title: 'Homepage', userchallenges, userFname: req.session.f_name, loggedIn: req.session.loggedIn});
    }
    else{
        res.redirect('/login');
    }
});
// router.get('/', async function(req, res, next){
//         try{
//             const challengeData = await Challenge.findAll({
//                     include: [
//                         {
//                             model: User,
//                             through: Score,
//                             required: true
//                         }
//                     ]
//             },
//             {
//                 where: {users_id: req.session.user_id}
//             }
//             );
//             const userchallenges = challengeData.map((chal) => chal.get({ plain: true }));
//             res.render('homepage', {layout: 'main', title: 'Homepage', userchallenges, userFname: req.session.f_name, loggedIn: req.session.loggedIn});
//         }catch(err){
//             res.status(500).json(err);
//         }
// })



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

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT score.user_score, challenge.title, user.f_name FROM score INNER JOIN challenge ON score.challenge_id = challenge.id INNER JOIN user ON user.id = score.user_id" , function (err, userdata) {
      if (err) throw err;
      console.log(userdata)
      res.cookie('leaderboarddata', JSON.stringify(userdata));
      res.render('leaderboard', {layout: 'main', title: 'leaderboard', loggedIn: req.session.loggedIn});
    });
  });
});


module.exports = router;
