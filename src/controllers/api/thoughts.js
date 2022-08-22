const getAllThoughts = async (req, res) => {
  try {
    const data = await Thought.find({});
    return res.json({ success: true, data });
  } catch (err) {
    console.log(`Failed to get all thoughts || ${err.message}`);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to get all thoughts' });
  }
};
const createSingleThought = async (req, res) => {
  try {
    const { username, thoughtText } = req.body;
    if (username && thoughtText) {
      const data = await Thought.create({ username, thoughtText });
      return res.json({ success: true, data });
    }
    return res.status(500).json({
      success: false,
      error: 'Please fill in all required fields',
    });
  } catch (err) {
    console.log(`Failed to create single thought || ${err.message}`);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to create single thought' });
  }
};
const getThoughtById = (req, res) => {
  try {
    const { thoughtId } = req.params;

    const thought = await Thought.findById(thoughtId);

    return res.json({ success: true, data });

  } catch (err) {
    console.log(`Failed to get thought by Id || ${err.message}`);
    return res
      .status
      .json({ success: false, error: 'Failed to get thought by Id' });
  }
};
const updateThoughtById = (req, res) => {
  res.send('updateThoughtById');
};
const deleteThoughtById = (req, res) => {
  res.send('deleteThoughtById');
};

module.exports = {
  getAllThoughts,
  createSingleThought,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
};
