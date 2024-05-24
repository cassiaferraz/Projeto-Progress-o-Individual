const express = require('express');
const UserController = require('../controller/RegisterController');
const router = express.Router();
 
 
router.post('/registro', UserController.register);
 
module.exports = router;