const mongoose = require('mongoose');
const connectToDatabase = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const seedUsers = require('./users');
const seedFriends = require('./friends');
const seedThoughts = require('./thoughts');
const seedReactions = require('./reactions');

const init = async () => {
  try {
    // connect to database
    await connectToDatabase();

    //drop any existing data from the following User, Thought and Reaction models.
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    // seed users, friends, thoughts and reactions data.
    await seedUsers();
    await seedFriends();
    await seedThoughts();
    // await seedReactions();

    // after seed completion, exit process
    process.exit(0);
  } catch (err) {
    console.log(`Failed to seed data in database || ${err.message}`);
  }
};
init();
