// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/APIBuscarautoavaliacao.js');
const authenticateToken = require('../middleware/authMiddleware');
 
 

app.get('/Auto', authenticateToken, apiController.getAutoAvaliacao);
 
 
module.exports = app;