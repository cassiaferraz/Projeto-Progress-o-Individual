const express = require('express');
const app = express.Router();
const apiController = require('../controller/ChallengesController');
const authenticateToken = require('../middleware/authMiddleware');

app.post('/Challenge', authenticateToken, apiController.getTechnicianChallenges);


module.exports = app;
