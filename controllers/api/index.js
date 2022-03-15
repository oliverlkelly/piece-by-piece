const router = require('express').Router();
const userRoutes = require('./userRoutes');
const challengeRoute = require('./challengeRoute');

router.use('/users', userRoutes);

router.use('/challenges', challengeRoute);

module.exports = router;