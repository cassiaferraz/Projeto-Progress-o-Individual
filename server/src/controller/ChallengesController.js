const challengeModel = require('../models/ChallengeModel');
// const challengeModelUpdate = require('../models/DadosProgression');

 
const getTechnicianChallenges = async (req, res) => {

    try {

        const techId = req.userId;

        const technicianChallenges = await challengeModel.findChallenges(techId);
 
        

        // console.log('Desafios recebidos:', technicianChallenges);
 
        // Verifique se STATUS é uma string e converta para booleano

        const incompleteChallenges = technicianChallenges.filter(challenge => {
        const isComplete = typeof challenge.STATUS === 'string' ? challenge.STATUS.toLowerCase() === 'true' : challenge.STATUS;
        return !isComplete;
        });
 
        const completedChallenges = technicianChallenges.filter(challenge => {
        const isComplete = typeof challenge.STATUS === 'string' ? challenge.STATUS.toLowerCase() === 'true' : challenge.STATUS;
        return isComplete;
        });


        //Calcular total de moedas e XP dos desafios completos

        let totalMoedas = 0;
        let totalXp = 0;
        completedChallenges.forEach(challenge => { 
            totalMoedas += challenge.MOEDAS;
            totalXp += challenge.XP;
        });
        

            if (techId && totalMoedas !== undefined && totalXp !== undefined) {
                await challengeModel.insertChallengeProgressionData({
                    id: techId,
                    moedas: totalMoedas,
                    xp: totalXp
                });
                console.log('Desafios completados:',completedChallenges,'Moedas e Xp Totais ganhos:','MOEDAS:',totalMoedas,'XP:',totalXp)
            } else {
                console.log('Erro: techId, totalMoedas ou totalXp está indefinido.');
            }

//------------------------------------------------------------------------------------------------------------
 
        res.status(200).json({
            incompleteChallenges,
            completedChallenges
        });

     }catch (err) {

        console.log(err);

        res.status(400).json({ message: 'deu ruim' });

    }

};
 
module.exports = {

    getTechnicianChallenges

};

 