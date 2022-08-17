const connectToDatabase = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const seedUsers = require('./users');
const seedThoughts = require('./thoughts');

const init = async () => {
  try {
    await connectToDatabase();

    await User.deleteMany({});
    await Thought.deleteMany({});

    await seedUsers();
    await seedThoughts();
  } catch (err) {
    console.log(`Failed to seed in Mongo Database || ${err.message}`);
  }
};
init();
