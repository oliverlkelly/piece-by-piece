const router = require('express').Router();
const userRoutes = require('./userRoutes');
const challengeRoute = require('./challengeRoute');
const userChallengeRoute = require('./userChallengeRoute');

router.use('/users', userRoutes);

router.use('/challenges', challengeRoute);

router.use('/userChal', userChallengeRoute);

module.exports = router;