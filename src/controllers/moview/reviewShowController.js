const ReviewShow = require('../../models/moview/reviewShowModel');

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await ReviewShow.find({});
        res.status(200).json({ status: 'success', results: reviews.length, data: { reviews } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve reviews...' });
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const review = await ReviewShow.findById(req.params.id);
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
        const newReview = await ReviewShow.create(req.body);
        res.status(201).json({ status: 'success', data: { notification: newReview } });
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Server error: Cannot create the review.' });
    }
};

exports.updateReviewById = async (req, res) => {
    try {
        const review = await ReviewShow.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
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
        const review = await ReviewShow.findOneAndUpdate({ _id: req.params.id }, { $set: { is_deleted: true } }, { new: true });
        if (!review) {
            return res.status(404).json({ status: 'fail', message: 'No review found with that ID' });
        }
        res.status(204).json({ status: 'success', data: null, message: 'review deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the review.' });
    }
};


exports.getReviewsByShow = async (req, res) => {
    try {
        const showId = req.params.showId;

        const reviews = await ReviewShow
            .find({ show: showId, is_deleted: false })
            .populate('user', 'firstname')
            .sort({ created_at: -1 });

        if (reviews.length === 0) {
            return res.status(404).json({ message: 'No reviews found for this movie' });
        }

        res.status(200).json({ status: 'success', results: reviews.length, data: { reviews } });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.getReviewsByUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Find reviews for the movie
        //const reviews = await Review.find({ movie: movieId, is_deleted: false }).populate('user', 'name'); // Populate user name, adjust fields as needed
        let reviews = await ReviewShow
            .find({ user: userId, is_deleted: false })
            .populate('show', 'title genre release_date poster_url isShow')
            .sort({ created_at: -1 });

        reviews = reviews.map(review => ({
            ...review._doc,
            isShow: true
        }));


        if (reviews.length === 0) {
            return res.status(404).json({ message: 'No reviews found for this user' });
        }

        res.status(200).json({ status: 'success', results: reviews.length, data: { reviews } });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.getShowRatingById = async (req, res) => {
    try {

        const showId = req.params.showId;
        const shows = await ReviewShow.find({ show: showId, is_deleted: false });

        const totalshow = shows.length
        const totalRating = shows.reduce((sum, review) => sum + review.rating, 0);
        const finalRating = totalRating / totalshow;

        res.status(200).json({ status: 'success', data: finalRating });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


