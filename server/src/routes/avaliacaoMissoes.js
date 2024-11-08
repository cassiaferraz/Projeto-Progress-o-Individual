const express = require('express');
const app = express.Router();
const apiController = require('../controller/Missoes');
const authenticateToken = require('../middleware/authMiddleware');

app.post('/avaliacao/user', authenticateToken, apiController.getUserAvaliations);
// app.post('/avaliacao/ano', authenticateToken, apiController.getYear);

module.exports = app;