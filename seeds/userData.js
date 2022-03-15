
const { User } = require('../models');

const userData = [
  {
    name: "Sam",
    email: "sam@hotmail.com",
    password: "password12345"
  },
  {
    name: "Oliver",
    email: "Oliver@gmail.com",
    password: "password12345"
  },
  {
    name: "Aiden",
    email: "Aiden2k20@aol.com",
    password: "password12345"
  },
  {
    name: "Jordan",
    email: "jordan99@msn.com",
    password: "password12345"
  },
  {
    name: "Samer",
    email: "smr@yahoo.com",
    password: "password12345"
  }
];

const seedUser =  () => User.bulkCreate(userData ,
  { 
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;
 