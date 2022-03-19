const User = require('./user');
const Challenge = require('./challenge');
const Score = require('./userchallenge');


User.belongsToMany(Challenge, {
    through: Score,
    foreignKey: 'user_id'
});

Challenge.belongsToMany(User, {
    through: Score,
    foreignKey: 'challenge_id',
   
});

module.exports = { User , Challenge, Score };


  

