const sqlServer = require('../utils/sqlServer');
 
 
// Função de validação e conversão
function validateAndConvertValue(value) {
    if (value === undefined || value === null || value === NaN ) {
      console.log(value)
       
        return 0; // Valor padrão, ajuste conforme necessário
    }
     return value;
}
 
function createHabilidade(habilidade) {
    const ID_COLABORADOR = validateAndConvertValue(habilidade.ID_COLABORADOR);
    const CONECTIVIDADE = validateAndConvertValue(habilidade.CONECTIVIDADE);
    const CASA_INTELIGENTE = validateAndConvertValue(habilidade.CASA_INTELIGENTE);
    const ELETRICA = validateAndConvertValue(habilidade.ELETRICA);
    const AUDIO_VIDEO = validateAndConvertValue(habilidade.AUDIO_VIDEO);
    const PABX_VOIP = validateAndConvertValue(habilidade.PABX_VOIP);
    const METALICO = validateAndConvertValue(habilidade.METALICO);
 
    const sqlQuery = `INSERT INTO dbo.HABILIDADES_TECNICOS
        (ID_COLABORADOR, CONECTIVIDADE, CASA_INTELIGENTE, ELETRICA, AUDIO_VIDEO, PABX_VOIP, METALICO)
        VALUES (${ID_COLABORADOR}, ${CONECTIVIDADE}, ${CASA_INTELIGENTE}, ${ELETRICA}, ${AUDIO_VIDEO}, ${PABX_VOIP}, ${METALICO})`;
 
 
 
 
    sqlServer.dispatchQuery(sqlQuery)
}
 
module.exports = createHabilidade;