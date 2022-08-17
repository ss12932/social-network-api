const connectToDatabase = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { seedUsers } = require('./users');

const init = () => {
  try {
    await connectToDatabase();

    await User.deleteMany({});

    await User.seedUsers();

  } catch (err) {
    console.log(`Failed to seed in Mongo Database || ${err.message}`);
  }
};
