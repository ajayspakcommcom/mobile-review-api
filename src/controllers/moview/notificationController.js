const Notification = require('../../models/moview/notificationModel');
const User = require('../../models/moview/userModel');
const Follower = require('../../models/moview/followerModel');

exports.getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({});
        res.status(200).json({ status: 'success', results: notifications.length, data: { notifications } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve notification.' });
    }
};

exports.getNotificationById = async (req, res) => {
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

exports.getNotificationByFollowerId = async (req, res) => {
    try {
        const notification = await Notification.find({ user_id: req.params.user_id });
        if (!notification) {
            return res.status(404).json({ status: 'fail', message: 'No notification found with that ID' });
        }
        res.status(200).json({ status: 'success', data: { notification } });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot retrieve the notification.' });
    }
};

exports.createNotification = async (req, res) => {

    const { user_id, title, message } = req.body;

    try {
        // Find all followers of the given user
        const followers = await Follower.find({ userId: user_id }).populate('followerId');

        // Check if there are any followers
        if (!followers.length) {
            return res.status(404).send('No followers found');
        }

        // Create a notification for each follower
        const notifications = followers.map(follower => ({
            user_id: follower.followerId._id,
            title: title,
            message: message,
            type: "review",
            seen: false,
            created_at: new Date(),
            expires_at: new Date(new Date().setDate(new Date().getDate() + 7)) // Expires in 7 days
        }));

        // Save the notifications
        await Notification.insertMany(notifications);

        res.status(200).send('Notifications sent to followers');
    } catch (error) {
        console.error('Error sending notifications:', error);
        res.status(500).send('Internal server error');
    }

};

exports.updateNotificationById = async (req, res) => {
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

exports.deleteNotificationById = async (req, res) => {
    try {
        const notification = await Notification.findOneAndUpdate({ _id: req.params.id }, { $set: { is_deleted: true } }, { new: true });
        if (!notification) {
            return res.status(404).json({ status: 'fail', message: 'No notification found with that ID' });
        }
        res.status(204).json({ status: 'success', data: null, message: 'notification deleted successfully' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Server error: Cannot delete the notification.' });
    }
};
