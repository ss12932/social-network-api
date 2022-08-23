const { Thought } = require('../../models');

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
const getThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;

    const data = await Thought.findById(thoughtId);

    return res.json({ success: true, data });
  } catch (err) {
    console.log(`Failed to get thought by Id || ${err.message}`);
    return res.status(500).json({
      success: false,
      error: 'Failed to get thought by Id',
    });
  }
};
const updateThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const data = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        ...req.body,
      },
      { returnOriginal: false }
    );
    return res.json({ success: true, data });
  } catch (err) {
    console.log(`Failed to update thought by Id || ${err.message}`);
    return res.status(500).json({
      success: false,
      error: 'Failed to update thought by Id',
    });
  }
};
const deleteThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const data = await Thought.findByIdAndDelete(thoughtId);
    return res.json({ success: true, data });
  } catch (err) {
    console.log(`Failed to delete thought by Id || ${err.message}`);
    return res.status(500).json({
      success: false,
      error: 'Failed to delete thought by id',
    });
  }
};

module.exports = {
  getAllThoughts,
  createSingleThought,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
};
