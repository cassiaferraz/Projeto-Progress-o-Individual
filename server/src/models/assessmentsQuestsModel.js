const sqlServer = require('../utils/sqlServer');




function getUser(id, ano) {
    const sql = `SELECT  DATA, POSTURA_UNIFORME, POSTURA_CRACHA, POSTURA_BOTA, POSTURA_MALA, POSTURA_COMUNICACAO, ASSIDUIDADE_ALMOX, ASSIDUIDADE_BANCO, ASSIDUIDADE_ROTA, ASSIDUIDADE_ALMOCO, ASSIDUIDADE_INICIO, VEICULO_LIMPEZAINTERNA, VEICULO_LIMPEZAEXTERNA, VEICULO_ORGANIZACAOFRENTE, VEICULO_ORGANIZACAOBAU, VEICULO_RECARGA, VEICULO_MULTAS, VEICULO_SINISTROS, LAUDOS_PREENCHIDOS, FISCALIZACAO
    FROM dbo.Avaliacoes_individuais
    WHERE ID_COLABORADOR = '${id}' AND YEAR(DATA) = ${ano}
    ORDER BY DATA ASC;`;
    
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   

function getYearAvaliation(id) {
    const sql = `SELECT DATA
    FROM dbo.Avaliacoes_individuais
    WHERE ID_COLABORADOR = '${id}'
    ORDER BY DATA ASC;`;
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   


function getTotalAvaliations() {
    const sql = `SELECT *
    FROM dbo.Avaliacoes_individuais
    ORDER BY DATA DESC;`;
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   





/*
    C
    R
    U
    D
*/


module.exports = {
    getUser,
    getYearAvaliation,
    getTotalAvaliations

}