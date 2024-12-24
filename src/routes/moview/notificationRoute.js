const express = require('express');
const router = express.Router();

const notificationController = require('../../controllers/moview/notificationController');

router.get('/notification', notificationController.getAllNotifications);

router.get('/notification/:id', notificationController.getNotificationById);

router.get('/notification/follower/:user_id', notificationController.getNotificationByFollowerId);

router.post('/notification', notificationController.createNotification);

router.put('/notification/:id', notificationController.updateNotificationById);

router.delete('/notification/:id', notificationController.deleteNotificationById);

module.exports = router;

