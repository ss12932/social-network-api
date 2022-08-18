const { Thought, User } = require('../models');
const { faker } = require('@faker-js/faker');

const generateDummyThoughts = async () => {
  const users = await User.find({});

  users.map(async (user) => {
    const thoughtText = faker.lorem.lines(3);
    const createdAt = faker.date.past();

    const generateThought = await Thought.create({
      username: user.username,
      thoughtText,
      createdAt,
    });

    await User.findByIdAndUpdate(user._id, {
      $push: {
        thoughts: generateThought._id,
      },
    });
  });
};

const seedThoughts = async () => {
  await generateDummyThoughts();
  console.log('Sucessfully seeded thoughts data');
};
module.exports = seedThoughts;
