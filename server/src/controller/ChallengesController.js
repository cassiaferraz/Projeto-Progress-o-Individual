const challengeModel = require('../models/ChallengeModel');
const getPerfil = require('../models/perfilModel.js');


const getTechnicianChallenges = async (req, res) => {
    try {
        const techId = req.userId;

        // Pega todos os desafios com base no id
        const technicianChallenges = await challengeModel.findChallenges(techId);

        // Separa os desafios incompletos
        const incompleteChallenges = technicianChallenges.filter(challenge => {
            const isComplete = typeof challenge.STATUS === 'string' ? challenge.STATUS.toLowerCase() === 'true' : challenge.STATUS;
            return !isComplete;
        });

        // Separa os desafios completos (e se o a recompensa do desafio foi resgatada ou não)
        const completedChallenges = technicianChallenges.filter(challenge => {
            const isComplete = typeof challenge.STATUS === 'string' ? challenge.STATUS.toLowerCase() === 'true' : challenge.STATUS;
            return isComplete;
        });

        //  Calcula o total de XP e Moedas de desafios concluídos em que as recompensas ainda não foram reivindicadas
        let totalMoedas = 0;
        let totalXp = 0;
        const claimedChallenges = [];

        // Filtrar desafios em que as recompensas não foram resgatadas

        const unclaimedChallenges = completedChallenges.filter(challenge => !challenge.RECOMPENSA_RESGATADA);

        unclaimedChallenges.forEach(challenge => {
            totalMoedas += challenge.MOEDAS;
            totalXp += challenge.XP;
            claimedChallenges.push(challenge.ID_DESAFIO); 
        });

        // Pega o XP e Moedas atuais de _DADOS_PROGRESSAO
        const userProgression = await getPerfil.getUser(techId);

        let currentXp = userProgression[0]?.XP || 0;
        let currentMoedas = userProgression[0]?.MOEDAS || 0;
        let currentLevel = userProgression[0]?.NIVEL || 1;

        //  Calcula os novos totais de Xp e Moedas
        const newTotalXp = currentXp + totalXp;
        const newTotalMoedas = currentMoedas + totalMoedas;

        //  Calcula o novo nivel com base no XP
        const newLevel = VerificarNivel(newTotalXp, currentLevel);

       //Insere no banco os novos valores
        if (userProgression.length === 0) {
            await challengeModel.insertChallengeProgressionData({
                id: techId,
                xp: newTotalXp,
                moedas: newTotalMoedas,
                nivel: newLevel
            });
        } else {
            await challengeModel.updateChallengeProgressionData(techId, newTotalXp, newTotalMoedas, newLevel);
        }

        //  Marca desafios concluidos
        for (const challengeId of claimedChallenges) {
            await challengeModel.markRewardAsClaimed(challengeId);
        }

      
        res.status(200).json({
            incompleteChallenges,
            completedChallenges, 
            newTotalXp,
            newTotalMoedas,
            newLevel
        });

    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Erro ao obter os desafios.' });
    }
};

// Função para calcular o novo nivel com base no XP
const VerificarNivel = (totalXP, currentLevel) => {
    let newLevel = Math.floor(totalXP / 100);
    return newLevel > currentLevel ? newLevel : currentLevel;
};

module.exports = {
    getTechnicianChallenges
};