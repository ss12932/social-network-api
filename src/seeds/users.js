const { User } = require('../models');
const { faker } = require('@faker-js/faker');

const generateDummyUsers = () => {
  const usersArr = [];
  for (let i = 0; i < 10; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    usersArr.push({ username, email });
  }
  return usersArr;
};

const seedUsers = async () => {
  try {
    const users = generateDummyUsers();
    const userPromises = users.map((user) => User.create(user));

    await Promise.all(userPromises);

    console.log('Successfully seeded users data.');
  } catch (err) {
    console.log(`Failed to seed users data || ${err.message}`);
  }
};

module.exports = seedUsers;
