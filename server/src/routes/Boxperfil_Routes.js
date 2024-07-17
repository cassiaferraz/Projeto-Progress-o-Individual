const express = require('express');
const app = express.Router();
const midamigo = require('../middleware/authMiddleware')
const missionController = require('../controller/Boxperfil_Missoes');

app.post('/complete', midamigo, missionController.Boxperfil_Missoes);

module.exports = app;