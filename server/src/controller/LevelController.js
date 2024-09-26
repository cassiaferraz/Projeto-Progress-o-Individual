const { user } = require('../config/dbConfig');
const DadosProgression = require('../models/DadosProgression');


const AdicionarNivelMoedas = async(data) => {
    try {
      const xp = data.xp
      const moedas = data.moedas 
      const id = data.techId
  
      const userData = await DadosProgression.findTecProgressionData(id);
  
      const userProgressionData = userData[0];
   
      const totalcoins = userProgressionData.MOEDAS + moedas;
      const totalexp = parseInt(userProgressionData.XP) + xp;
      const newLevel = VerificarNivel(totalexp, userProgressionData.NIVEL);
  
      const DataUpdate = {
        id: id,
        moedas: parseInt(totalcoins),
        xp: parseInt(totalexp),
        nivel: parseInt(newLevel)
      };
  
  
      await DadosProgression.updateTecProgressionData(DataUpdate);
  
    } catch (err) {
      console.error('Erro na requisição de tipagem:', err); // Log do erro
    }
  };






const VerificarNivel = (totalXP,levelUser) => {
    const LevelUser = parseInt(levelUser)
    let newLevel = 0
    if (totalXP >= 100){
        const level = totalXP / 100
        if (level > LevelUser){
            newLevel = level
        }else{
            newLevel = LevelUser
        }
    } else {
        newLevel = LevelUser
    }
  

    return newLevel
}


module.exports = {
    AdicionarNivelMoedas
}