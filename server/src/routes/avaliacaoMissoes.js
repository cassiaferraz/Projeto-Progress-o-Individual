// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
const apiController = require('../controller/APIAvaliacao');
const authenticateToken = require('../middleware/authMiddleware')


app.get('/avaliacao/user', authenticateToken ,apiController.getUserAvaliations);


module.exports = app;