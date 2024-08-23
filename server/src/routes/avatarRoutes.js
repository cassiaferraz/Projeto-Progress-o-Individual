// routes/avatarRoutes.js

const express = require('express');
const app = express.Router();
const apiController = require('../controller/avatarController');
const authenticateToken = require('../middleware/authMiddleware');

// Rota para listar avatares
app.get('/list-avatars', authenticateToken, apiController.listAvatars);

// Rota para salvar o avatar
app.post('/set-avatar', authenticateToken, apiController.saveAvatar);

// Rota para obter o avatar
app.get('/get-avatar', authenticateToken, apiController.getAvatar);

module.exports = app;