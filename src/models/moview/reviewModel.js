const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Movie = require('./movieModel');
const User = require('./userModel');

const reviewSchema = new Schema({
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    review_text: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
});

const Review = mongoose.model.Review || mongoose.model('Review', reviewSchema);

module.exports = Review;
