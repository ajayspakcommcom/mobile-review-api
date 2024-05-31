const express = require('express');
const router = express.Router();

const authTokenController = require('../controllers/authTokenController');

router.post('/login', authTokenController.loginUser);

module.exports = router;
