const sqlUtils = require('../utils/sqlServer.js');

//Seleciona todos os desafios
function findChallenges(id, ano) {
    const sql = `SELECT * FROM dbo.DESAFIOS_TECNICOS WHERE ID_COLABORADOR = '${id}' AND YEAR(DATA_DESAFIO) = ${ano}
    ORDER BY DATA_DESAFIO ASC;`;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}



// Atualize a progressão do usuário com novos XP e MOEDAS
function updateChallengeProgressionData(id, xp, moedas, nivel) {
    const sql = `
        UPDATE dbo._DADOS_PROGRESSAO
        SET XP = '${xp}', MOEDAS = '${moedas}', NIVEL = '${nivel}'
        WHERE ID_COLABORADOR = '${id}'
    `;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}

// Marca desafios como reivindicados definindo seu valor como True
function markRewardAsClaimed(id) {
    const sql = `
        UPDATE dbo.DESAFIOS_TECNICOS
        SET RECOMPENSA_RESGATADA = 1
        WHERE ID_DESAFIO = '${id}'
    `;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}

//  Inserir dados de progressão do usuário (se não existir)
function insertChallengeProgressionData(data) {
    const sql = `
        INSERT INTO dbo._DADOS_PROGRESSAO (ID_COLABORADOR, XP, MOEDAS, NIVEL)
        SELECT '${data.id}', '${data.xp}', '${data.moedas}', '${data.nivel}'
        WHERE NOT EXISTS (
            SELECT 1 FROM dbo._DADOS_PROGRESSAO WHERE ID_COLABORADOR = '${data.id}'
        )
    `;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}



module.exports = {
    findChallenges,
    updateChallengeProgressionData,
    markRewardAsClaimed,
    insertChallengeProgressionData
};

