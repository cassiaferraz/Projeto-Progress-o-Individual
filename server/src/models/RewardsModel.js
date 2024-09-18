const sqlUtils = require('../utils/sqlServer.js');


//Read
function findRewards(){
const sql = `SELECT * FROM dbo._RECOMPENSAS
ORDER BY CUSTO_MOEDAS ASC `
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}


function findRewardsRedeemed(id){
    const sql = `SELECT resg.*, rec.NOME
    FROM [ELITE].[dbo].[RECOMPENSAS_RESGATADAS] as resg
    LEFT JOIN dbo._RECOMPENSAS as rec ON rec.ID_RECOMPENSA = resg.ID_RECOMPENSA
    WHERE resg.ID_TECNICO = '${id}'`;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}





module.exports = {
    findRewards,
    findRewardsRedeemed
}