const express = require('express');
const router = express.Router();
const showController = require('../../controllers/moview/showController');

router.get('/show', showController.getAllShows);

//router.post('/show/search', showController.searchShows);

router.get('/show/:id', showController.getShowById);

router.post('/show', showController.createShow);

router.put('/show/:id', showController.updateShowById);

router.delete('/show/:id', showController.deleteShowById);

module.exports = router;

