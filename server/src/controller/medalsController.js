const medalhasModel = require('../models/medalsModel');
 
 
 
 
const getUserMedalha = async (req, res) => {
  try {
    const id = req.userId
    const medalsTechnician = await medalhasModel.getUser(id)
    res.status(200).json({
      medalsTechnician
    });
  } catch (err) {
    console.log(err)
    res.status(404).json({message: 'Deu ruim'})
  }
};
 
module.exports = {
    getUserMedalha
}