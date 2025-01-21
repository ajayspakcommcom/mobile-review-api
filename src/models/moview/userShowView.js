const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');
const Show = require('./showModel');

const userShowViewSchema = new Schema({
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

const UserShowView = mongoose.models.UserShowView || mongoose.model('UserShowView', userShowViewSchema);
module.exports = UserShowView;