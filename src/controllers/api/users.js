const { User } = require('../../models');

const getAllUsers = async (req, res) => {
  try {
    const data = await User.find({}).populate('friends');
    return res.json({ data, success: true });
  } catch (err) {
    console.log(`Failed to get all users || ${err.message}`);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to get all users' });
  }
};
const createNewUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    if (username && email) {
      const data = await User.create({ username, email });
      return res.json({ data, success: true });
    }
    return res.status(404).json({
      success: false,
      error: 'Please fill in the required username and email fields',
    });
  } catch (err) {
    console.log(`Failed to create new user || ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to create new user' });
  }
};
const getSingleUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await User.findById(userId);
    return res.json({ data, success: true });
  } catch (err) {
    console.log(`Failed to get single user || ${err.message}`);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to get single user' });
  }
};
const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await User.findByIdAndUpdate(
      userId,
      {
        $set: { ...req.body },
      },
      { returnOriginal: false }
    );
    return res.json({ data, success: true });
  } catch (err) {
    console.log(`Failed to get update user by Id || ${err.message}`);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to update user by Id' });
  }
};
const removeUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await User.findByIdAndDelete(userId);
    return res.json({ success: true, data });
  } catch (err) {
    console.log(`Failed to delete user by Id || ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to delete user by Id' });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  getSingleUser,
  updateUserById,
  removeUserById,
};
