const buscaravaliacao = require ('../models/buscarautoavaliacaoModel')
 
const getAutoAvaliacao = async(req, res) => {
    try{
        const habilidades = req.params.habilidades;
        const autoavaliacao = await buscaravaliacao.getUser(habilidades)
        res.status(200).json(autoavaliacao)
    } catch (err) {
        console.log(err)
        res.status(404).json({message: 'Deu ruim'})
    }
};
 
module.exports = {
    getAutoAvaliacao
}