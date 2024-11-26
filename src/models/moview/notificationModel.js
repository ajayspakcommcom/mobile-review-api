const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');
const Movie = require('./movieModel');
const Show = require('./showModel');

const notificationSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    movie_show_id: {
        type: mongoose.Schema.Types.ObjectId,        
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    seen: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    expires_at: {
        type: Date,
        default: Date.now
    }
});

notificationSchema.add({
    is_deleted: {
        type: Boolean,
        default: false
    }
})

const Notification = mongoose.model.Notification || mongoose.model('Notification', notificationSchema);
module.exports = Notification;
