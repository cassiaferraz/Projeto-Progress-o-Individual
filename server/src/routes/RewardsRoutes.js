const express = require('express');
const app = express.Router();
const apiController = require('../controller/RewardsController');
const apiController2 = require('../controller/RewardsController');
const authenticateToken = require('../middleware/authMiddleware');

app.get('/Rewards', apiController.getRewards)

app.get('/RewardsRedeemed', authenticateToken, apiController2.getRewardsRedeemed)


module.exports = app;