const express = require('express');
const app = express.Router();
const tokenMissoesBoxPerfil = require('../middleware/authMiddleware')
const boxperfilController = require('../controller/boxperfilController');

app.post('/complete', tokenMissoesBoxPerfil, boxperfilController.Boxperfil_Missoes);

// app.post('/updateCoins', tokenMissoesBoxPerfil, boxperfilController.updateCoins);
// app.post('/updateXP', tokenMissoesBoxPerfil, boxperfilController.updateXP);

module.exports = app;