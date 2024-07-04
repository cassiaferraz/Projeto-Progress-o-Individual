// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/APIDesafios.js');

// Rota para exibir "Olá, mundo!"
app.get('/desafios', apiController.getUserDesafios);


module.exports = app;
