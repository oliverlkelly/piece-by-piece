
const { Challenge } = require('../models');

const challengeData = [
  {
    title: "Walk my dog",
    description: "I should walk my dog three times a week",
  },
  {
    title: "Read a book",
    description: "I should read a book every week",
  },
  {
    title: "Do workout",
    description: "I should do workout four days a week",
    
  },
  
];

const seedChallenges =  () => Challenge.bulkCreate(challengeData);

module.exports = seedChallenges;
 