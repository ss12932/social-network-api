const { Router } = require('express');

const router = Router({ mergeParams: true });

// merge params to use params from parent router
router.route('/reactions').post(createNewReactionForThought);

router.route('/reactions/:reactionId').delete(deleteReactionForThought);

module.exports = router;
