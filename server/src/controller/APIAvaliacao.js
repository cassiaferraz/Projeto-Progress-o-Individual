const bodyParser = require('body-parser')

const avaliacaoModel = require('../models/avaliacaoMissoesModel');

const getUserAvaliations = async (req, res) => {
  try {
    const userId = req.userId
    const avaliacaoData = await avaliacaoModel.getUser(userId)
    res.status(200).json(avaliacaoData)
  } catch (err) {
    console.log(err)
    res.status(404).json({message: 'Deu ruim'})
  }
};

module.exports = {
    getUserAvaliations
}