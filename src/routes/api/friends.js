const { Router } = require('express');

const {
  createNewFriendForUser,
  deleteFriendForUser,
} = require('../../controllers/api/friends');

// merge params to use params from parent router
const router = Router({ mergeParams: true });

// /api/users/:userId/friends
router.route('/friends').post(createNewFriendForUser);

// /api/users/:userId/friends/:friendId
router.route('/friends/:friendId').post(deleteFriendForUser);

module.exports = router;
