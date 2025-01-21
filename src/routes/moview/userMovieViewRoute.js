const express = require('express');
const router = express.Router();

const userMovieViewController = require('../../controllers/moview/userMovieViewController');

router.get('/user-movie-view', userMovieViewController.getList);

router.get('/user-movie-view/:id', userMovieViewController.getDataById);

router.post('/user-movie-view', userMovieViewController.createData);

router.put('/user-movie-view/:id', userMovieViewController.updateDataById);

router.delete('/user-movie-view/:id', userMovieViewController.deleteDataById);

module.exports = router;