// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/APIBuscarautoavaliacao.js');
 
 
// Rota para exibir "Olá, mundo!"
app.get('/Auto', apiController.getAutoAvaliacao);
 
 
module.exports = app;