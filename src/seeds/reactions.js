const { Thought, User, Reaction } = require('../models');
const { faker } = require('@faker-js/faker');

const generateDummyReactions = async () => {
  //retrieve all thoughts from database
  const thoughtsFromDB = await Thought.find({});

  // loop over all the thoughts from database, for each thought we only have the author's username, use this to find in User collection to obtain extra information like the friends array.
  for (let i = 0; i < thoughtsFromDB.length; i++) {
    const thoughtAuthor = await User.find({
      username: thoughtsFromDB[i].username,
    });
    // we are creating 3 reactions for each thought, For each reaction, using the friends array from the author, we will randomly select a friend id to generate a reaction.
    for (let j = 0; j < 3; j++) {
      const reactionBody = faker.lorem.lines(3);
      const createdAt = faker.date.recent();
      const username_id =
        thoughtAuthor[0].friends[
          Math.floor(Math.random() * thoughtAuthor[0].friends.length)
        ]._id;

      // using the friend id obtained above, we will search in the user collection for his document. We need to obtain extra information eg. his username since the author's friends array only contains ids.
      const findUsernameById = await User.findById(username_id);

      // with the friend's related document found above, we will create his reaction using his usename. this will satisfy every single field to create a reaction.
      const generateReaction = await Reaction.create({
        reactionBody,
        createdAt,
        username: findUsernameById.username,
      });

      // we need to update the thoughts' reactions array as well by pushing the reaction id of the newly created reaction.
      await Thought.findByIdAndUpdate(thoughtsFromDB[i]._id, {
        $push: {
          reactions: generateReaction._id,
        },
      });
      //repeat this process 3 times to create 3 reactions for each thought.
    }
  }
};

const seedReactions = async () => {
  await generateDummyReactions();
  console.log('Sucessfully seeded reactions data');
};

module.exports = seedReactions;
