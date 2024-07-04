const express = require('express');
const router = express.Router();
const apiController = require('../controller/APIAutoAvaliacao');
 
 
 
router.post('/Auto', apiController.create);
 
module.exports = router;
 