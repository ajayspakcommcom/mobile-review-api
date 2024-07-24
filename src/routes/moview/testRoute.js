const express = require('express');
const router = express.Router();
const testController = require('../controllers/moview/testController');

router.get('/test', testController.getAllTests);

// router.get('/user/:id', userController.getUserById);

// router.post('/user', userController.createUser);

// router.put('/user/:id', userController.updateUserById);

// router.delete('/user/:id', userController.deleteUserById);

module.exports = router;

