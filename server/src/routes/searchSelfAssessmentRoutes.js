// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/searchSelfAssessmentController.js');
const apiControllerSug = require('../controller/searchSelfAssessmentController.js');
const authenticateToken = require('../middleware/authMiddleware.js');
 
 

app.get('/Auto', authenticateToken, apiController.getAutoAvaliacao);

app.get('/Sugerida', authenticateToken, apiControllerSug.getAvaliationSugerida);
 
 
module.exports = app;