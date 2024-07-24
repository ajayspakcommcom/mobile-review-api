const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');

const ratingSchema = new Schema({
    content_type: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Rating = mongoose.model.Rating || mongoose.model('Rating', ratingSchema);

module.exports = Rating;
