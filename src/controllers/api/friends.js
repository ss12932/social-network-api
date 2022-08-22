const { User } = require('../../models');

const createNewFriendForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { friendId } = req.body;
    const userAddFriend = await User.findByIdAndUpdate(
      userId,
      {
        $push: { friends: friendId },
      },
      { returnOriginal: false }
    );

    const friendAddUser = await User.findByIdAndUpdate(
      friendId,
      {
        $push: { friends: userId },
      },
      { returnOriginal: false }
    );

    return res.json({
      success: true,
      message: 'Successfully created new friend for user',
    });
  } catch (error) {
    console.log(`Failed to create new friend for user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to create new friend for user' });
  }
};
const deleteFriendForUser = async (req, res) => {
  try {
    const { userId, friendId } = req.params;

    const deleteFriendData = await User.findByIdAndUpdate(userId, {
      $pull: { friends: friendId },
    });

    const deleteUserData = await User.findByIdAndUpdate(friendId, {
      $pull: { friends: userId },
    });

    return res.json({
      success: true,
      message: 'successfully deleted friend for user',
    });
  } catch (err) {
    `Failed to delete friend for user | ${error.message}`;
    return res.status(500).json({
      message: `[ERROR]: Failed to delete friend for user | ${err.message}`,
    });
  }
};
module.exports = {
  createNewFriendForUser,
  deleteFriendForUser,
};
