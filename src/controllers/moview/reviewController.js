const Review = require('../../models/moview/reviewModel');

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json({ status: 'success', results: reviews.length, data: { reviews } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve reviews.' });
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ status: 'fail', message: 'No review found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { review } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve the review.' });
    }
};

exports.createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        res.status(201).json({ status: 'success', data: { notification: newReview } });
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Server error: Cannot create the review.' });
    }
};

exports.updateReviewById = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!review) {
            return res.status(404).json({ status: 'fail', message: 'No review found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { review } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot update the notification.' });
    }
};

exports.deleteReviewById = async (req, res) => {
    try {
        const review = await Review.findOneAndUpdate({ _id: req.params.id }, { $set: { is_deleted: true } }, { new: true });
        if (!review) {
            return res.status(404).json({ status: 'fail', message: 'No review found with that ID' });
        }
        res.status(204).json({ status: 'success', data: null, message: 'review deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the review.' });
    }
};


exports.getReviewsByMovie = async (req, res) => {
    try {
        const movieId = req.params.movieId;

        // Find reviews for the movie
        //const reviews = await Review.find({ movie: movieId, is_deleted: false }).populate('user', 'name'); // Populate user name, adjust fields as needed
        const reviews = await Review.find({ movie: movieId, is_deleted: false }); // Populate user name, adjust fields as needed

        if (reviews.length === 0) {
            return res.status(404).json({ message: 'No reviews found for this movie' });
        }

        res.status(200).json({ status: 'success', results: reviews.length, data: { reviews } });
        //res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};