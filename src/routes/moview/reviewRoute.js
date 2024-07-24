const express = require('express');
const router = express.Router();
const reviewController = require('../../controllers/moview/reviewController');

router.get('/review', reviewController.getAllReviews);

router.get('/review/:id', reviewController.getReviewById);

router.post('/review', reviewController.createReview);

router.put('/review/:id', reviewController.updateReviewById);

router.delete('/review/:id', reviewController.deleteReviewById);

module.exports = router;

