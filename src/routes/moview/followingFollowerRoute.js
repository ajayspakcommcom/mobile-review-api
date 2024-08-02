const express = require('express');
const router = express.Router();
const followingFollowerController = require('../../controllers/moview/followingFollowerController');

router.post('/follow', followingFollowerController.addFollower);

router.post('/unfollow', followingFollowerController.removeFollower);

router.post('/unfollow', followingFollowerController.removeFollower);

router.post('/check-if-following', followingFollowerController.checkIfFollowing);

module.exports = router;

