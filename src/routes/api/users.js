const { Router } = require('express');
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUserById,
  removeUserById,
} = require('../../controllers/api/users');
const friends = require('./friends');
const router = Router();

router.route('/').get(getAllUsers).post(createNewUser);
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUserById)
  .delete(removeUserById);

router.use('/:userId', friends);

module.exports = router;
