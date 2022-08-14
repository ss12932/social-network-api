const { Router } = require('express');
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUserById,
  removeUserById,
} = require('../../controllers/api/users');
const router = Router();

router.route('/').get(getAllUsers);
router.route('/:userId').get(getSingleUser);
router.route('/').post(createNewUser);
router.route('/:userId').put(updateUserById);
router.route('/:userId').delete(removeUserById);
router.use('/:userId', friends);

module.exports = router;
