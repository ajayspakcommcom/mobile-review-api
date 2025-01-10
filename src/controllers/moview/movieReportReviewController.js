const MovieReportReview = require('../../models/moview/movieReportReviewModel');

exports.getAllMovieReportReviews = async(req, res) => {
    try {
        const listData = await MovieReportReview.find({});
        res.status(200).json({ status: 'success', results: listData.length, data: { listData } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve Moview Reports...' });
    }
};

exports.getMovieReportReviewById = async(req, res) => {
    try {
        const data = await MovieReportReview.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ status: 'fail', message: 'No Movie Report Review found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { data } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve the Movie Report Review.' });
    }
};

exports.createMovieReportReview = async(req, res) => {
    try {
        const newData = await MovieReportReview.create(req.body);
        res.status(201).json({ status: 'success', data: { newData: newData } });
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Server error: Cannot create the Movie Report Review.' });
    }
};

exports.updateMovieReportReviewById = async(req, res) => {
    try {
        const data = await MovieReportReview.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return res.status(404).json({ status: 'fail', message: 'No Movie Report Review found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { data } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot update the Movie Report Review.' });
    }
};

exports.deleteMovieReportReviewById = async(req, res) => {
    try {
        const data = await MovieReportReview.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ status: 'fail', message: 'No Movie Report Review found with that ID' });
        }
        res.status(200).json({ status: 'success', data: null, message: 'Movie Report Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the Movie Report Review.' });
    }
};



//     try {
//         const showId = req.params.showId;

//         const reviews = await ReviewShow
//             .find({ show: showId, is_deleted: false })
//             .populate('user', 'firstname')
//             .sort({ created_at: -1 });

//         if (reviews.length === 0) {
//             return res.status(404).json({ message: 'No reviews found for this movie' });
//         }

//         res.status(200).json({ status: 'success', results: reviews.length, data: { reviews } });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// };

// exports.getReviewsByUser = async(req, res) => {
//     try {
//         const userId = req.params.userId;

//         // Find reviews for the movie
//         //const reviews = await Review.find({ movie: movieId, is_deleted: false }).populate('user', 'name'); // Populate user name, adjust fields as needed
//         let reviews = await ReviewShow
//             .find({ user: userId, is_deleted: false })
//             .populate('show', 'title genre release_date poster_url isShow')
//             .sort({ created_at: -1 });

//         reviews = reviews.map(review => ({
//             ...review._doc,
//             isShow: true
//         }));


//         if (reviews.length === 0) {
//             return res.status(404).json({ message: 'No reviews found for this user' });
//         }

//         res.status(200).json({ status: 'success', results: reviews.length, data: { reviews } });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// };

// exports.getShowRatingById = async(req, res) => {
//     try {

//         const showId = req.params.showId;
//         const shows = await ReviewShow.find({ show: showId, is_deleted: false });

//         const totalshow = shows.length
//         const totalRating = shows.reduce((sum, review) => sum + review.rating, 0);
//         const finalRating = totalRating / totalshow;

//         res.status(200).json({ status: 'success', data: finalRating });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// };