const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedChallenges = require('./challengeData');
const seedScores = require('./scoreData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedChallenges();
  await seedScores();

  process.exit(0);
};

seedAll();