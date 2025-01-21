const express = require('express');
const router = express.Router();

const authTokenController = require('../../controllers/moview/authTokenController');

router.post('/login', authTokenController.loginUser);

router.post('/user/forgot-password', authTokenController.forgetPassword);
router.post('/user/reset-password/:token', authTokenController.resetPassword);

module.exports = router;