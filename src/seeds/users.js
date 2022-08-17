const { User } = require('../models');

const users = [
  { username: 'sinh1234', email: 'sinh1234@email.com' },
  { username: 'hamed5678', email: 'hamed5678@email.com' },
  { username: 'sina9999', email: 'sina9999@email.com' },
  { username: 'fred1234', email: 'fred1234@email.com' },
  { username: 'johndoe', email: 'johndoe@hotmail.com' },
];

const seedUsers = async () => {
  try {
    const userPromises = users.map((user) => User.create(user));

    await Promise.all(userPromises);

    console.log('Successfully seeded users data.');
  } catch (err) {
    console.log(`Failed to seed users data || ${err.message}`);
  }
};

module.exports = seedUsers;
