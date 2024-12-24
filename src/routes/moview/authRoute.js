const express = require('express');
const router = express.Router();

const authTokenController = require('../../controllers/moview/authTokenController');

router.post('/login', authTokenController.loginUser);

module.exports = router;
