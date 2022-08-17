const { User } = require('../models');
const { faker } = require('@faker-js/faker');

const generateDummyFriends = async () => {};

const seedFriends = async () => {
  try {
    const friends = await generateDummyFriends();

    console.log("Successfully seeded user's friends");
  } catch (err) {
    console.log(`Failed to seed user's friends' data || ${err.message}`);
  }
};

module.exports = seedFriends;
