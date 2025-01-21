const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');
const Movie = require('./movieModel');

const userMovieViewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    viewCount: {
        type: Number,
        default: 0 // Initialize with 1 since a view is logged
    },
    lastViewedAt: {
        type: Date,
        default: Date.now // Records the last time the user viewed the movie
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: Date.now
    },
});

const UserMovieView = mongoose.models.UserMovieView || mongoose.model('UserMovieView', userMovieViewSchema);
module.exports = UserMovieView;