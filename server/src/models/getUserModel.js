const sqlServer = require('../utils/sqlServer');




async function getUser(id) {
   
    const sql = `SELECT NOME FROM dbo.COLABORADORES WHERE ID_COLABORADOR = '${id}' `;
    const results = await sqlServer.dispatchQuery(sql)
    return results;
}   

//funcao para atualizar moedas e xp do usuario

async function updateUser(id, coins, xp) {
    const sql = `UPDATE dbo.Tecnico SET MOEDAS = ${coins}, XP = ${xp} WHERE ID_COLABORADOR = '${id}'`;
    await sqlServer.dispatchQuery(sql);
}

// alterei no update o wher de ID_TECNICO PARA ID_COLABORADOR
module.exports = {
    getUser,
    updateUser
}

//TESTAR ESSE CODIGO ABAIXO
// // userModel.js
// const sqlServer = require('../utils/sqlServer');

// async function getUser(id) {
//   const sql = `SELECT NOME, MOEDAS, XP FROM dbo.COLABORADORES WHERE ID_COLABORADOR = '${id}'`;
//   const results = await sqlServer.dispatchQuery(sql);
//   return results[0];
// }

// async function updateUser(id, coins, xp) {
//   const sql = `UPDATE dbo.COLABORADORES SET MOEDAS = ${coins}, XP = ${xp} WHERE ID_COLABORADOR = '${id}'`;
//   await sqlServer.dispatchQuery(sql);
//   return getUser(id); // Retorna os dados atualizados
// }

// module.exports = {
//   getUser,
//   updateUser
// };