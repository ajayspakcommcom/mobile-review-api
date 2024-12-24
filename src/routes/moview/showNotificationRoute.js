const express = require('express');
const router = express.Router();
const showNotificationController = require('../../controllers/moview/showNotificationController');

router.get('/notification-show', showNotificationController.getAllNotifications);

router.get('/notification-show/:id', showNotificationController.getNotificationById);

router.get('/notification-show/follower/:user_id', showNotificationController.getNotificationByFollowerId);

router.post('/notification-show', showNotificationController.createNotification);

router.put('/notification-show/:id', showNotificationController.updateNotificationById);

router.delete('/notification-show/:id', showNotificationController.deleteNotificationById);

module.exports = router;

