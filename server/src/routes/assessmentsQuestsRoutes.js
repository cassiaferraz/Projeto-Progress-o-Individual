const express = require('express');
const app = express.Router();
const apiController = require('../controller/Quests');
const authenticateToken = require('../middleware/authMiddleware');

app.post('/avaliacao/user', authenticateToken, apiController.getUserAvaliations);

app.get('/avaliacao/anos-disponiveis', authenticateToken, apiController.getMissionsYear);

module.exports = app;