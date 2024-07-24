const express = require('express');
const router = express.Router();
const apiController = require('../controller/APIAutoAvaliacao');
const authenticateToken = require('../middleware/authMiddleware'); 
 
 
 
router.post('/Auto', authenticateToken, apiController.create);
 
module.exports = router;
 