const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedChallenges = require('./challengeData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedChallenges();

  process.exit(0);
};

seedAll();