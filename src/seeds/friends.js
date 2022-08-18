const { User } = require('../models');

const generateDummyFriends = async () => {
  // get all users from the User collection in db. will return an array of user objects.
  const users = await User.find({});

  const friendsPromises = users.map(async (user) => {
    // destructure the id for the current user of the users array
    const { _id: userId } = user;

    // filter through the users array to exclude the current user.
    const filteredUsersArr = users.filter((user) => user._id !== userId);

    //generate a random index of the filtered users array.
    const filteredIndex = Math.floor(Math.random() * filteredUsersArr.length);

    // get the id of the friend using the random index we obtained above.
    const randomFriendId = filteredUsersArr[filteredIndex]._id;

    //check the friends array of the current user, that this random friend doesnt currently exist. we don't want duplicate IDs in this array.
    if (user.friends.every((friendId) => friendId !== randomFriendId)) {
      user.friends.push(randomFriendId);

      //using id of current user, we will push the new friend into their friends array and update the database.
      await User.findByIdAndUpdate(userId, {
        $push: {
          friends: randomFriendId,
        },
      });

      //we also have to do the same for the random friend, we need to add the current user to their friends array and update the database.
      await User.findByIdAndUpdate(randomFriendId, {
        $push: {
          friends: userId,
        },
      });
    }
  });
  await Promise.all(friendsPromises);
};

const seedFriends = async () => {
  try {
    await generateDummyFriends();

    console.log("Successfully seeded user's friends");
  } catch (err) {
    console.log(`Failed to seed friends data || ${err.message}`);
  }
};

module.exports = seedFriends;
