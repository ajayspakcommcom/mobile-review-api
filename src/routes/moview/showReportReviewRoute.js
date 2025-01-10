const express = require('express');
const router = express.Router();
const showReportReviewController = require('../../controllers/moview/showReportReviewController');

router.get('/show-report-review', showReportReviewController.getAllShowReportReviews);

router.get('/show-report-review/:id', showReportReviewController.getShowReportReviewById);

router.post('/show-report-review', showReportReviewController.createShowReportReview);

router.put('/show-report-review/:id', showReportReviewController.updateShowReportReviewById);

router.delete('/show-report-review/:id', showReportReviewController.deleteShowReportReviewById);

module.exports = router;