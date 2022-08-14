const { Router } = require('express');

const {
  createNewFriendForUser,
  deleteFriendForUser,
} = require('../../controllers/api/friends');

const router = Router();

router.route('/friends').post(createNewFriendForUser);
router.route('/friends/:friendId').post(deleteFriendForUser);

module.exports = router;
