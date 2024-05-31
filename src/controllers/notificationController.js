const Notification = require('../models/notificationModel');

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

exports.createNotification = async (req, res) => {
    try {
        const newNotification = await Notification.create(req.body);
        res.status(201).json({ status: 'success', data: { notification: newNotification } });
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Server error: Cannot create the notification.' });
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
