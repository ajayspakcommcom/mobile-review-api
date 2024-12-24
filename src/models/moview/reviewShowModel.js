const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Show = require('./showModel');
const User = require('./userModel');

const reviewShowSchema = new Schema({
    show: {
        type: Schema.Types.ObjectId,
        ref: 'Show',
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

const ReviewShow = mongoose.model.ReviewShow || mongoose.model('ReviewShow', reviewShowSchema);

module.exports = ReviewShow;
