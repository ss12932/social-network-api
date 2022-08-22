const { Thought, User } = require('../models');
const { faker } = require('@faker-js/faker');

const generateDummyThoughts = async () => {
  const usersFromDB = await User.find({});

  for (let i = 0; i < usersFromDB.length; i++) {
    const thoughtText = faker.lorem.lines(3);
    const createdAt = faker.date.past();

    const generateThought = await Thought.create({
      username: usersFromDB[i].username,
      thoughtText,
      createdAt,
    });

    await User.findByIdAndUpdate(usersFromDB[i]._id, {
      $push: {
        thoughts: generateThought._id,
      },
    });
  }
};

const seedThoughts = async () => {
  await generateDummyThoughts();
  console.log('Sucessfully seeded thoughts data');
};
module.exports = seedThoughts;
