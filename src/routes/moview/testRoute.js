const express = require('express');
const router = express.Router();
const testController = require('../../controllers/moview/testController');

router.get('/test', testController.getAllTest);

router.get('/test/:id', testController.getTestById);

router.post('/test', testController.createTest);

router.put('/test/:id', testController.updateTestById);

router.delete('/test/:id', testController.deleteTestById);

module.exports = router;

