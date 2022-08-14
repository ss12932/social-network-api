const { Router } = require('express');

const {
  createNewFriendForUser,
  deleteFriendForUser,
} = require('../../controllers/api/friends');

const router = Router({ mergeParams: true });

router.route('/friends').post(createNewFriendForUser);
router.route('/friends/:friendId').delete(deleteFriendForUser);

module.exports = router;
