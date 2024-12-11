// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/medalsController');
const authenticateToken = require('../middleware/authMiddleware')


 
 
// Rota para exibir "Olá, mundo!"
app.get('/Medalhas', authenticateToken, apiController.getUserMedalha);
 
 
module.exports = app;