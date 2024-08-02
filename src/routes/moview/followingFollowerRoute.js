const express = require('express');
const router = express.Router();
const followingFollowerController = require('../../controllers/moview/followingFollowerController');

router.post('/follow', followingFollowerController.addFollower);

router.post('/unfollow', followingFollowerController.removeFollower);

module.exports = router;

