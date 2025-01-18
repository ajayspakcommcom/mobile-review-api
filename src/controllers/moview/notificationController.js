const Notification = require('../../models/moview/notificationModel');
const User = require('../../models/moview/userModel');
const Follower = require('../../models/moview/followerModel');

exports.getAllNotifications = async(req, res) => {
    try {
        const notifications = await Notification.find({});
        res.status(200).json({ status: 'success', results: notifications.length, data: { notifications } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve notification.' });
    }
};

exports.getNotificationById = async(req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (!notification) {
            return res.status(404).json({ status: 'fail', message: 'No notification found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { notification } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve the notification.' });
    }
};

exports.getNotificationByFollowerId = async(req, res) => {
    try {
        // const notifications = await Notification.find({ user_id: req.params.user_id, seen: false, is_deleted: false });
        const notifications = await Notification.
        find({ user_id: req.params.user_id, seen: false, is_deleted: false })
            .populate('user_id', 'photo');
        if (!notifications) {
            return res.status(404).json({ status: 'fail', message: 'No notification found with that ID' });
        }
        res.status(200).json({ status: 'success', length: notifications.length, data: { notifications } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve the notification.' });
    }
};

exports.createNotification = async(req, res) => {

    const { user_id, title, message, type, movie_show_id } = req.body;

    try {

        const followers = await Follower.find({ userId: user_id }).populate('followerId');

        if (!followers.length) {
            return res.status(200).json({ status: 'success', results: 1, data: { notifications: [] } });
        }

        const notifications = followers.map(follower => ({
            user_id: follower.followerId._id,
            movie_show_id: movie_show_id,
            title: title,
            message: message,
            type: type,
            seen: false,
            created_at: new Date(),
            expires_at: new Date(new Date().setDate(new Date().getDate() + 7)) // Expires in 7 days
        }));

        const insertedNotifications = await Notification.insertMany(notifications);
        res.status(200).json({ status: 'success', results: insertedNotifications.length, data: { notifications: insertedNotifications } });
    } catch (error) {
        console.error('Error sending notifications:', error);
        res.status(500).send('Internal server error');
    }

};

exports.updateNotificationById = async(req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!notification) {
            return res.status(404).json({ status: 'fail', message: 'No notification found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { notification } });
    } catch (error) {
        console.clear();
        console.log('Error : ', error);
        res.status(500).json({ status: 'error', message: 'Server error: Cannot update the notification.' });
    }
};

exports.deleteNotificationById = async(req, res) => {
    try {
        const notification = await Notification.findOneAndUpdate({ _id: req.params.id }, { $set: { is_deleted: true, seen: true } }, { new: true });
        if (!notification) {
            return res.status(404).json({ status: 'fail', message: 'No notification found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { _id: notification._id }, message: 'notification deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the notification.' });
    }
};