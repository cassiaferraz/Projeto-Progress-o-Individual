// routes/apiRoutes.js
const express = require('express');
const app = express.Router();
 
const perfilRoutes = require('./perfil.js') // Importe o arquivo de rotas dos perfis
app.use('/', perfilRoutes) // Use as rotas dos perfis
 
 
const indicatorsRoutes = require('./indicatorsRoutes.js') // Importe o arquivo de rotas dos indicadores
app.use('/', indicatorsRoutes) // Use as rotas dos indicadores
 
 
const assessmentsQuestsRoutes = require('./assessmentsQuestsRoutes.js') // Importe o arquivo de rotas das avaliações
app.use('/', assessmentsQuestsRoutes) // Use as rotas das avaliações
 
 
const medalsRoutes = require('./medalsRoutes.js') //  Importe o arquivo de rotas das  Medalhas
app.use('/', medalsRoutes) // Use as rotas das  Medalhas


const selfAssessmentRoutes = require('./selfAssessmentRoutes.js') //  rota do insert da auto avaliacao no banco
app.use('/', selfAssessmentRoutes)
 
const searchSelfAssessmentRoutes = require('./searchSelfAssessmentRoutes.js') //  Importe o arquivo de rotas das Auto Avaliações
app.use('/', searchSelfAssessmentRoutes) // Use as rotas das  Auto Avaliações
 
const userGetRoutes = require('./getUserRoutes.js');
app.use('/', userGetRoutes)


const avatarRoutes = require('./avatarRoutes'); 
app.use('/avatar', avatarRoutes);

const ChallengeRoutes = require('./ChallengeRoutes.js');
app.use('/', ChallengeRoutes)

const RewardsRoutes = require('./RewardsRoutes.js');
app.use('/', RewardsRoutes)

const notificationRoutes = require('./notificationRoutes.js');
app.use('/', notificationRoutes)

 
const planilhaRoutes = require('./planilhas.js') // Importe o arquivo de rotas das Habilidades e medalhas
app.use('/', planilhaRoutes) // Use as rotas das Habilidades e medalhas
 
 
 
module.exports = app;