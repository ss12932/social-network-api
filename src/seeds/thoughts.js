const { Thought, User } = require('../models');
const { faker } = require('@faker-js/faker');

const generateDummyThoughts = async () => {
  //obtain all the users from database
  const usersFromDB = await User.find({});

  //loop over all the users
  for (let i = 0; i < usersFromDB.length; i++) {
    const thoughtText = faker.lorem.lines(3);
    const createdAt = faker.date.past();

    //we will generate jsut a thought for each user.
    const generateThought = await Thought.create({
      username: usersFromDB[i].username,
      thoughtText,
      createdAt,
    });

    //we also need to update this user's thoughts array with their thought id.
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
