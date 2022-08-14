const getAllUsers = (req, res) => {
  res.send('getAllUsers');
};
const createNewUser = (req, res) => {
  res.send('createNewUser');
};
const getSingleUser = (req, res) => {
  res.send('getSingleUser');
};
const updateUserById = (req, res) => {
  res.send('updateUserById');
};
const removeUserById = (req, res) => {
  res.send('removeUserById');
};

module.exports = {
  getAllUsers,
  createNewUser,
  getSingleUser,
  updateUserById,
  removeUserById,
};
