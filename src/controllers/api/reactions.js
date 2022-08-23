const { Thought, Reaction } = require('../../models');

const createNewReactionForThought = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;
    const newReaction = await Reaction.create({ reactionBody, username });

    if (!newReaction) {
      return res.status(500).json({ message: `Reaction not created` });
    }

    const data = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $push: { reactions: newReaction._id },
      },
      { returnOriginal: false }
    );

    return res.json({ success: true, data });
  } catch (err) {
    console.log(`Failed to create new reaction for thought || ${err.message}`);
    return res.status(500).json({
      success: false,
      error: 'Failed to create new reaction for thought ',
    });
  }
};
const deleteReactionForThought = async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;
    const data = await Thought.findByIdAndUpdate(
      { _id: thoughtId },
      {
        $pull: { reactions: reactionId },
      },
      { returnOriginal: false }
    );
    return res.json({ success: true, data });
  } catch (error) {
    console.log(
      `[ERROR]: Failed to delete reaction for thought | ${error.message}`
    );
    return res
      .status(500)
      .json({ success: false, error: 'Failed to delete reaction for thought' });
  }
};

module.exports = {
  createNewReactionForThought,
  deleteReactionForThought,
};
