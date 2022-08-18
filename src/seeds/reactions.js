const { faker } = require('@faker-js/faker');
const { Thought, User, Reaction } = require('../models');

const generateDummyReactions = async () => {
  const usersFromDB = await User.find({});
  const thoughtsFromDB = await Thought.find({});

  for (let i = 0; i < thoughtsFromDB.length; i++) {
    const reactionBody = faker.lorem.lines(2);
    const createdAt = faker.date.recent();
    const username =
      usersFromDB[Math.floor(Math.random() * usersFromDB.length)].username;
    const reaction = await Reaction.create({
      reactionBody,
      createdAt,
      username,
    });
    await Thought.findByIdAndUpdate(thoughtsFromDB[i]._id, {
      $push: {
        reactions: reaction._id,
      },
    });
  }
};

const seedReactions = async () => {
  await generateDummyReactions();
  console.log('Sucessfully seeded reactions data');
};

module.exports = seedReactions;
