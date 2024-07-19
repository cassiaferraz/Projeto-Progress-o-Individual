// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/APIHabilidades.js');
const authenticateToken = require('../middleware/authMiddleware')
 
 

app.get('/habilidades', authenticateToken, apiController.getUserHabilidades);
 
 
module.exports = app;