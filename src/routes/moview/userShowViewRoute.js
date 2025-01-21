const express = require('express');
const router = express.Router();

const userShowViewController = require('../../controllers/moview/userShowViewController');

router.get('/user-show-view', userShowViewController.getList);

router.get('/user-show-view/:id', userShowViewController.getDataById);

router.post('/user-show-view', userShowViewController.createData);

router.put('/user-show-view/:id', userShowViewController.updateDataById);

router.delete('/user-show-view/:id', userShowViewController.deleteDataById);

module.exports = router;