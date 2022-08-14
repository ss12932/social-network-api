const getAllThoughts = (req, res) => {
  res.send(getAllThoughts);
};
const createSingleThought = (req, res) => {
  res.send(createSingleThought);
};
const getThoughtById = (req, res) => {
  res.send(getThoughtById);
};
const updateThoughtById = (req, res) => {
  res.send(updateThoughtById);
};
const deleteThoughtById = (req, res) => {
  res.send(deleteThoughtById);
};

module.exports = {
  getAllThoughts,
  createSingleThought,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
};
