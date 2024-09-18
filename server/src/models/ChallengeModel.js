const sqlUtils = require('../utils/sqlServer.js');



// Read
function findChallenges(id){
    const sql = `SELECT * FROM dbo.DESAFIOS_TECNICOS WHERE ID_COLABORADOR = '${id}'`;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}


// Insert 
function insertChallengeProgressionData(data){
    const sql = `
        INSERT INTO dbo._DADOS_PROGRESSAO (XP, MOEDAS)
        SELECT  '${data.xp}', '${data.moedas}'
        WHERE NOT EXISTS (
            SELECT 1 FROM dbo._DADOS_PROGRESSAO WHERE ID_COLABORADOR = '${data.id}'
        )
    `;
    const result = sqlUtils.dispatchQuery(sql);
    return result;   
}





module.exports = {
   
    findChallenges,
    insertChallengeProgressionData
};