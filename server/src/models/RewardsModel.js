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


//Faça o a função sql que pegue as seguintes informações: ID_RECOMPENSA da tabela RECOMPENSAS junto do ID_TECNICO vindo do  req.userId, a data e hora atual do sistema e o valor 0(booleano) para a coluna STATUS_RECOMPENSA
 
 
// Função de validação e conversão
function validateAndConvertValue(value) {
    if (value === undefined || value === null || value === NaN ) {
      console.log(value)
       
        return 0; 
    }
     return value;
}



//CREATE
function createReward(reward) {
    const ID_RECOMPENSA = validateAndConvertValue(reward.ID_RECOMPENSA);
    const ID_TECNICO = validateAndConvertValue(reward.ID_TECNICO);
    const DATA_RESGATE = validateAndConvertValue(reward.DATA_RESGATE);
    const STATUS_RECOMPENSA = validateAndConvertValue(reward.STATUS_RECOMPENSA);
   
    const sqlQuery = `INSERT INTO dbo.RECOMPENSAS_RESGATADAS
    (ID_RECOMPENSA, ID_TECNICO, DATA_RESGATE, STATUS_RECOMPENSA)
    VALUES (${ID_RECOMPENSA}, '${ID_TECNICO}', CONVERT(datetime, '${DATA_RESGATE}', 120), ${STATUS_RECOMPENSA})`;
    console.log(sqlQuery)
     const results = sqlUtils.dispatchQuery(sqlQuery)
     return results
}




module.exports = {
    findRewards,
    findRewardsRedeemed,
    createReward
}