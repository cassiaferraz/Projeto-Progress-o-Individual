const bodyParser = require('body-parser')

const avaliacaoModel = require('../models/avaliacaoMissoesModel');
const { AdicionarNivelMoedas } = require('./LevelController');

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


const TotalAvaliations = async(req,res) => {
  try{
    const Avaliations = await avaliacaoModel.getTotalAvaliations()
    Avaliations.forEach(avaliation => {
      const moedasXP = VerificarXpAvaliations(avaliation)
      console.log(moedasXP)
      AdicionarNivelMoedas(avaliation.ID_COLABORADOR, moedasXP.moedas, moedasXP.xp)
    })

  res.status(200).json({message: 'Upando de lv'})
  } catch(err){
    console.log(err)
    res.status(500).json({ message: 'Erro no servidor' });
  }
}

const VerificarXpAvaliations = (avaliacao) => {

  let xp = 0
  let moedas = 0


  if (avaliacao.POSTURA_UNIFORME == true){
    xp = xp+50
    moedas = moedas+50
  }
  else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.POSTURA_CRACHA == true){
    xp = xp+50
    moedas = moedas+50
  }
  else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.POSTURA_BOTA == true){
    xp = xp+50
    moedas = moedas+50
  }
  else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.POSTURA_MALA == true){
    xp = xp+50
    moedas = moedas+50
  }
  else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.POSTURA_COMUNICACAO == true){
    xp = xp+50
    moedas = moedas+50
  }
  else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.ASSIDUIDADE_ALMOX == true){
    xp = xp+40
    moedas = moedas+40
  }
  else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.ASSIDUIDADE_BANCO == true){
    xp = xp+40
    moedas = moedas+40
  }
  else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.ASSIDUIDADE_ROTA == true){
    xp = xp+40
    moedas = moedas+40
  }else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.ASSIDUIDADE_ALMOCO == true){
    xp = xp+40
    moedas = moedas+40
  }else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.ASSIDUIDADE_INICIO == true){
    xp = xp+40
    moedas = moedas+40
  }else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.VEICULO_LIMPEZAINTERNA == true){
    xp = xp+30
    moedas = moedas+30
  }else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.VEICULO_LIMPEZAEXTERNA == true){
    xp = xp+30
    moedas = moedas+30
  }else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.VEICULO_ORGANIZACAOFRENTE == true){
    xp = xp+30
    moedas = moedas+30
  }else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.VEICULO_ORGANIZACAOBAU == true){
    xp = xp+30
    moedas = moedas+30
  }else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.VEICULO_RECARGA == true){
    xp = xp+30
    moedas = moedas+30
  }else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.VEICULO_MULTAS == true){
    xp = xp+30
    moedas = moedas+30
  }else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.VEICULO_SINISTROS == true){
    xp = xp+30
    moedas = moedas+30
  }else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.LAUDOS_PREENCHIDOS == true){
    xp = xp+100
    moedas = moedas+100
  }else{
    xp = xp+0
    moedas = moedas+0
  }
  if (avaliacao.FISCALIZACAO == true){
    xp = xp+60
    moedas = moedas+60
  }else{
    xp = xp+0
    moedas = moedas+0
  }


  return {xp: xp, moedas: moedas}

}


module.exports = {
    getUserAvaliations,
    TotalAvaliations
}