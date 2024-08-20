const express = require('express');
const router = express.Router();
const latestMovieShowController = require('../../controllers/moview/latestMovieShowController');

router.get('/latest/movie-show', latestMovieShowController.getAllMoviesShows);

// router.get('/movie/:id', movieController.getMovieById);

// router.post('/movie', movieController.createMovie);

// router.put('/movie/:id', movieController.updateMovieById);

// router.delete('/movie/:id', movieController.deleteMovieById);

module.exports = router;

