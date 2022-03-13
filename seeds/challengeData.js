
const { Challenge } = require('../models');

const challengeData = [
  {
    title: "Walk my dog",
    description: "I should walk my dog three times a week",
    starting_date: "March 22, 2022 09:00:00",
    ending_date: "April 19, 2022 09:00:00",
    repetitions: 3,
    user_id: 1
  },
  {
    title: "Read a book",
    description: "I should read a book every week",
    starting_date: "March 22, 2022 09:00:00",
    ending_date: "April 19, 2022 09:00:00",
    repetitions: 5,
    user_id: 2
  },
  {
    title: "Do workout",
    description: "I should do workout four days a week",
    starting_date: "March 22, 2022 09:00:00",
    ending_date: "April 19, 2022 09:00:00",
    repetitions: 4,
    user_id: 3
  },
  {
    title: "Do workout",
    description: "I should do workout four days a week",
    starting_date: "March 22, 2022 09:00:00",
    ending_date: "April 19, 2022 09:00:00",
    repetitions: 4,
    user_id: 1
  },
  {
    title: "Do workout",
    description: "I should do workout four days a week",
    starting_date: "March 22, 2022 09:00:00",
    ending_date: "April 19, 2022 09:00:00",
    repetitions: 4,
    user_id: 2
  },
  {
    title: "Read a book",
    description: "I should read a book every week",
    starting_date: "March 22, 2022 09:00:00",
    ending_date: "April 19, 2022 09:00:00",
    repetitions: 5,
    user_id: 3
  },
  
  
];

const seedChallenges =  () => Challenge.bulkCreate(challengeData);

module.exports = seedChallenges;
 