const { Score } = require('../models');

const scoreData = [
{
  user_score: 2,
  challenge_id: 1,
  user_id: 1  
},
{
  user_score: 1,
  challenge_id: 2,
  user_id: 3  
},
{
  user_score: 1,
  challenge_id: 2,
  user_id: 2  
},
{
  user_score: 3,
  challenge_id: 1,
  user_id: 2  
},
{
  user_score: 4,
  challenge_id: 3,
  user_id: 1
}

];

const seedScores =  () => Score.bulkCreate(scoreData);

module.exports = seedScores;