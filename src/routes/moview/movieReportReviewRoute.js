const express = require('express');
const router = express.Router();
const movieReportReviewController = require('../../controllers/moview/movieReportReviewController');

router.get('/moview-report-review', movieReportReviewController.getAllMovieReportReviews);

router.get('/moview-report-review/:id', movieReportReviewController.getMovieReportReviewById);

router.post('/moview-report-review', movieReportReviewController.createMovieReportReview);

router.put('/moview-report-review/:id', movieReportReviewController.updateMovieReportReviewById);

router.delete('/moview-report-review/:id', movieReportReviewController.deleteMovieReportReviewById);

module.exports = router;