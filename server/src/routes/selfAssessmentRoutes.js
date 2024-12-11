const express = require('express');
const router = express.Router();
const apiController = require('../controller/selfAssessmentController');
const verification = require('../controller/selfAssessmentController');
const authenticateToken = require('../middleware/authMiddleware'); 



 
router.post('/Auto', authenticateToken, apiController.create);

router.get('/Auto/Verificar', authenticateToken, verification.verificationAvaliation);



module.exports = router;
 