const rewardModel = require('../models/RewardsModel')


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
        const { ID_RECOMPENSA, ID_TECNICO, DATA_RESGATE, STATUS_RECOMPENSA } = req.body;
        const reward = {
            ID_RECOMPENSA,
            ID_TECNICO,
            DATA_RESGATE,
            STATUS_RECOMPENSA
        };
        await rewardModel.createReward(reward);
        res.status(200).json({ message: 'Recompensa resgatada com sucesso!' });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Erro ao resgatar a recompensa' });
    }
};

module.exports = {
    getRewards,
    getRewardsRedeemed,
    redeemReward 
};





