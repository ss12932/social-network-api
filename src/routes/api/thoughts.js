const { Router } = require('express');
const reactions = require('./reactions');
const {
  getAllThoughts,
  createSingleThought,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
} = require('../../controllers/api/thoughts');

const router = Router();
router.route('/').get(getAllThoughts).post(createSingleThought);
//prettier-ignore
router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById).delete(deleteThoughtById);

//use nested router
router.use(':thoughtId', reactions);

module.exports = router;
