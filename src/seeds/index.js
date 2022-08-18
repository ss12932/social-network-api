const mongoose = require('mongoose');
const connectToDatabase = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const seedUsers = require('./users');
const seedThoughts = require('./thoughts');
const seedFriends = require('./friends');

const init = async () => {
  try {
    await connectToDatabase();

    await User.deleteMany({});
    await Thought.deleteMany({});

    await seedUsers();
    await seedFriends();
    await seedThoughts();

    await mongoose.disconnect();
  } catch (err) {
    console.log(`Failed to seed data in database || ${err.message}`);
  }
};
init();
