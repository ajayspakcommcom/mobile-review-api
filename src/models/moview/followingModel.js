const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');

const followingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    followingId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Following = mongoose.models.Following || mongoose.model('Following', followingSchema);

module.exports = Following;
