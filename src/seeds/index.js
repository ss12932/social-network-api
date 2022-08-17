const connectToDatabase = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { seedUsers } = require('./users');

const init = async () => {
  try {
    await connectToDatabase();

    await User.deleteMany({});

    await seedUsers();
  } catch (err) {
    console.log(`Failed to seed in Mongo Database || ${err.message}`);
  }
};
init();
