const express = require('express');
const app = express.Router();
const apiController = require('../controller/RewardsController');
const apiController2 = require('../controller/RewardsController');
const apiController3 = require('../controller/RewardsController');
const authenticateToken = require('../middleware/authMiddleware');

app.get('/Rewards', authenticateToken,apiController.getRewards)

app.get('/RewardsRedeemed', authenticateToken, apiController2.getRewardsRedeemed)

app.post('/RewardTechnician', authenticateToken, apiController3.redeemReward);


module.exports = app;