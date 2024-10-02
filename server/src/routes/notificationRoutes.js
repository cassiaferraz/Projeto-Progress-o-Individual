const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

const notificationController = require('../controller/notificationController');

router.post('/createNotification', notificationController.createNotification)
router.get('/getUserNotifications', authenticateToken, notificationController.getNotificationsByReceiverId)
router.put('/readNotification/:id', authenticateToken, notificationController.changeNotificationToReaded)
router.delete('/deleteNotification/:id', authenticateToken, notificationController.deleteNotification)

module.exports = router;