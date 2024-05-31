const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Movie = require('./movieModel');
const User = require('./userModel');

const reviewSchema = new Schema({
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);

module.exports = Review;
