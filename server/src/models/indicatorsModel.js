const sqlServer = require('../utils/sqlServer');




function getUser(id) {
    const sql = `SELECT TDNA, IFI, IRR FROM dbo._TECNICOS WHERE  ID_COLABORADOR = '${id}'`;
    const results = sqlServer.dispatchQuery(sql)
    return results;
}   








module.exports = {
    getUser
}