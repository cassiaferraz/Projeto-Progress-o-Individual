// routes/avatarRoutes.js

const express = require('express');
const app = express.Router();
const avatarController = require('../controller/avatarController');
const authenticateToken = require('../middleware/authMiddleware');


// Rota para salvar e criar o avatar
app.post('/set-avatar', authenticateToken, avatarController.saveAvatar);

// Rota para obter o avatar
app.get('/get-avatar', authenticateToken, avatarController.fetchAvatar);

module.exports = app;