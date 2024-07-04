// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/APImedalhas');
 
 
// Rota para exibir "Olá, mundo!"
app.get('/Medalhas', apiController.getUserMedalha);
 
 
module.exports = app;