const express = require('express');
const app = express.Router();
const apiController = require('../controller/RewardsController');
const apiController2 = require('../controller/RewardsController');
const apiController3 = require('../controller/RewardsController');
const apiController4 = require('../controller/RewardsController');
const apiController5 = require('../controller/RewardsController');


const authenticateToken = require('../middleware/authMiddleware');

app.get('/Rewards', authenticateToken,apiController.getRewards);

app.get('/RewardsRedeemed', authenticateToken, apiController2.getRewardsRedeemed);

app.post('/RewardTechnician', authenticateToken, apiController3.redeemReward);


// ----------------------------------------------------------------------------------
app.get('/getSubtration', authenticateToken, apiController4.getSubtration);

app.get('/VerificationNull', authenticateToken, apiController5.VerificationNull);






module.exports = app;