const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');

const followerSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    followerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Follower = mongoose.models.Follower || mongoose.model('Follower', followerSchema);

module.exports = Follower;