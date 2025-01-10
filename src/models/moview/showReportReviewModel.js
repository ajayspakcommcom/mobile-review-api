const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Movie = require('./showModel');
const User = require('./userModel');
const Review = require('./reviewModel');

const showReportReviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    show: {
        type: Schema.Types.ObjectId,
        ref: 'Show',
        required: true
    },
    review: {
        type: Schema.Types.ObjectId,
        ref: 'Review',
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Resolved', 'Rejected'],
        default: 'Pending'
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
    }
});

const ShowReportReview = mongoose.model.ShowReportReview || mongoose.model('ShowReportReview', showReportReviewSchema);

module.exports = ShowReportReview;