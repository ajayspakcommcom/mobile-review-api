const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');

const showNotificationSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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

showNotificationSchema.add({
    is_deleted: {
        type: Boolean,
        default: false
    }
})

const ShowNotification = mongoose.model.ShowNotification || mongoose.model('ShowNotification', showNotificationSchema);
module.exports = ShowNotification;
