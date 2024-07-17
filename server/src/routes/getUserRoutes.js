const express = require('express')
const getUserController = require('../controller/getUserController')
const authenticateToken = require('../middleware/authMiddleware')
const router = express.Router();



router.get('/getUserData', authenticateToken, getUserController.getUserData)


module.exports = router;