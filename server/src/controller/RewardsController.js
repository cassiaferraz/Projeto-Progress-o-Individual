const rewardModel = require('../models/RewardsModel')


//AllRewards
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

//Rewards Redeemeds
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






module.exports = {
    getRewards,
    getRewardsRedeemed
}