const sqlUtils = require('../utils/sqlServer.js');


//Read
function findRewards(){
const sql = `SELECT * FROM dbo.RECOMPENSAS
ORDER BY CUSTO_MOEDAS ASC `
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}




function findRewardsRedeemed(id){
    const sql = `SELECT resg.*, rec.NOME
    FROM [ELITE].[dbo].[RECOMPENSAS_RESGATADAS] as resg
    LEFT JOIN dbo.RECOMPENSAS as rec ON rec.ID_RECOMPENSA = resg.ID_RECOMPENSA
    WHERE resg.ID_TECNICO = '${id}' AND resg.STATUS_RECOMPENSA = 1`;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}


function findRewardsSubtration(id){
    const sql = `SELECT * FROM dbo.RECOMPENSAS_RESGATADAS WHERE ID_TECNICO = '${id}' AND STATUS_RECOMPENSA = 0 AND MOEDAS_SUBTRAIDAS = 0`
        const result = sqlUtils.dispatchQuery(sql);
        return result;
    }

function findRewardsNull(id){
    const sql = `SELECT * FROM dbo.RECOMPENSAS_RESGATADAS WHERE ID_TECNICO = '${id}' AND STATUS_RECOMPENSA IS NULL`
        const result = sqlUtils.dispatchQuery(sql);
        return result;
    }


    // Atualiza a coluna MOEDAS_SUBTRAIDAS para TRUE para evitar novas subtrações da mesma recompensa
function updateMarkSubtration(id) {
    const sql = `
        UPDATE dbo.RECOMPENSAS_RESGATADAS 
        SET MOEDAS_SUBTRAIDAS = 1 WHERE ID_TECNICO = '${id}'
    `;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}



// Atualize a progressão do usuário com novo valor  de MOEDAS
function updateRewardsProgressionData(id, moedas) {
    const sql = `
        UPDATE dbo._DADOS_PROGRESSAO 
        SET MOEDAS = '${moedas}' WHERE ID_COLABORADOR = '${id}'
    `;
    const result = sqlUtils.dispatchQuery(sql);
    return result;
}





// Função para restaurar moedas se STATUS_RECOMPENSA for NULL e deletar a recompensa
async function handleRewardRestoration(id, techId) {
    const sql= `DELETE FROM dbo.RECOMPENSAS_RESGATADAS WHERE ID_RECOMPENSA = '${id}'AND ID_TECNICO = '${techId}' AND STATUS_RECOMPENSA IS NULL`;
    const result = await sqlUtils.dispatchQuery(sql);
    return result
}





 
 
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
    const CUSTO_MOEDAS = validateAndConvertValue(reward.CUSTO_MOEDAS);
    const MOEDAS_SUBTRAIDAS = validateAndConvertValue(reward.MOEDAS_SUBTRAIDAS);

    

   
    const sqlQuery = `INSERT INTO dbo.RECOMPENSAS_RESGATADAS
    (ID_RECOMPENSA, ID_TECNICO, DATA_RESGATE, STATUS_RECOMPENSA, CUSTO_MOEDAS, MOEDAS_SUBTRAIDAS)
    VALUES (${ID_RECOMPENSA}, '${ID_TECNICO}', CONVERT(datetime, '${DATA_RESGATE}', 120), ${STATUS_RECOMPENSA}, ${CUSTO_MOEDAS}, ${MOEDAS_SUBTRAIDAS})`;
    
     const results = sqlUtils.dispatchQuery(sqlQuery)
     return results
}

async function updateRewardQuantity(id) {
    const sql = `UPDATE dbo.RECOMPENSAS 
                 SET QUANTIDADE_DISPONIVEL = QUANTIDADE_DISPONIVEL - 1 
                 WHERE ID_RECOMPENSA = '${id}' AND QUANTIDADE_DISPONIVEL > 0`;
    return sqlUtils.dispatchQuery(sql);
}

async function restoreRewardQuantity(id) {
    const sql = `UPDATE dbo.RECOMPENSAS 
                 SET QUANTIDADE_DISPONIVEL = QUANTIDADE_DISPONIVEL + 1 
                 WHERE ID_RECOMPENSA = '${id}' AND QUANTIDADE_DISPONIVEL IS NOT NULL`;
    return sqlUtils.dispatchQuery(sql);
}




module.exports = {
    findRewards,
    findRewardsRedeemed,
    updateRewardsProgressionData,
    handleRewardRestoration,
    findRewardsSubtration,
    findRewardsNull,
    updateMarkSubtration,
    createReward,
    updateRewardQuantity,
    restoreRewardQuantity
   
}