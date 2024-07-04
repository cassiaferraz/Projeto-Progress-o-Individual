// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/APIHabilidades.js');

// Rota para exibir "Olá, mundo!"
app.get('/habilidades', apiController.getUserHabilidades);


module.exports = app;
