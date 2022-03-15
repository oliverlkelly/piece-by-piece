
const { User } = require('../models');

const userData = [
  {
    f_name: "Mohamed",
    l_name: "Afifi",
    email: "mohamed@gmail.com",
    password: "password12345"
  },
  {
    f_name: "Oliver",
    l_name: "Liam",
    email: "oliver@gmail.com",
    password: "password12345"
  },
  {
    f_name: "Aiden",
    l_name: "Brennan",
    email: "aiden@gmail.com",
    password: "password12345"
  },
  {
    f_name: "Samer",
    l_name: "Balee",
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
 