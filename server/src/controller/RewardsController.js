const rewardModel = require('../models/RewardsModel')
const getPerfil = require('../models/perfilModel.js');



// View AllRewards
const getRewards = async (req, res) => {
    try {
        const techId = req.userId;
        const technicianRewards = await rewardModel.findRewards(techId);
        res.status(200).json({
            technicianRewards
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message:'deu ruim'});
    }
};

// View Rewards Redeemeds
const getRewardsRedeemed = async (req, res) => {
    try {
        const techId = req.userId;
        const technicianRewardsRedeemed = await rewardModel.findRewardsRedeemed(techId);
        res.status(200).json({
            technicianRewardsRedeemed
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message:'deu ruim'});
    }

};

//  Get Reward Redeemed
const redeemReward = async (req, res) => {
    try {
        const { ID_RECOMPENSA, ID_TECNICO, DATA_RESGATE, STATUS_RECOMPENSA, CUSTO_MOEDAS, MOEDAS_SUBTRAIDAS } = req.body;
        const reward = {
            ID_RECOMPENSA,
            ID_TECNICO,
            DATA_RESGATE,
            STATUS_RECOMPENSA,
            CUSTO_MOEDAS,
            MOEDAS_SUBTRAIDAS
        };
        await rewardModel.createReward(reward);
        res.status(200).json({ message: 'Recompensa resgatada com sucesso!' });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Erro ao resgatar a recompensa' });
    }
};



const getSubtration = async (req, res) => {
    try {
        const techId = req.userId;
        const technicianRewards = await rewardModel.findRewardsSubtration(techId);

        // Calcula o total de moedas das recompensas resgatadas
        let totalMoedas = technicianRewards.reduce((total, reward) => total + reward.CUSTO_MOEDAS, 0);
    

        // Pega as moedas atuais de _DADOS_PROGRESSAO
        const userProgression = await getPerfil.getUser(techId);
        let currentMoedas = userProgression[0]?.MOEDAS || 0;
      
      

        // Calcula o novo total de moedas
        const newTotalMoedas = currentMoedas - totalMoedas;

        // Atualiza o banco com o novo valor de moedas
        await rewardModel.updateRewardsProgressionData(techId, newTotalMoedas);
        // Atualiza MOEDAS_SUBTRAIDAS para impedir repetição de subtrações já feitas.
        await rewardModel.updateMarkSubtration(techId);

        res.status(200).json({ newTotalMoedas });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Erro ao realizar a subtração das moedas.' });
    }
};


const VerificationNull = async (req, res) => {
    try {
        const techId = req.userId;
        const technicianRewardsRedeemed = await rewardModel.findRewardsNull(techId);


        let totalMoedasExtorno = 0;

        for (const reward of technicianRewardsRedeemed) {
            if (reward.STATUS_RECOMPENSA === null) {
                totalMoedasExtorno += reward.CUSTO_MOEDAS;

                // Deleta a recompensa com STATUS_RECOMPENSA NULL
                await rewardModel.handleRewardRestoration(reward.ID_RECOMPENSA, techId);
            }
        }

        // Pega as moedas atuais do usuário
        const userProgression = await getPerfil.getUser(techId);
        let currentMoedas = userProgression[0]?.MOEDAS || 0;

        // Calcula o novo total de moedas
        const newTotalMoedas = currentMoedas + totalMoedasExtorno;

        // Atualiza as moedas no banco
        await rewardModel.updateRewardsProgressionData(techId, newTotalMoedas);

        res.status(200).json({ message: 'Extorno realizado com sucesso!', newTotalMoedas });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Erro ao realizar o extorno das moedas.' });
    }
};




module.exports = {
    getRewards,
    getRewardsRedeemed,
    redeemReward,
    getSubtration,
    VerificationNull
};





