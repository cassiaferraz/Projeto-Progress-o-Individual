const sqlServer = require('../utils/sqlServer');
 
 
 
function getUser(id) {
    const sql = `SELECT * FROM dbo.MEDALHAS WHERE ID_TECNICO =  '${id}' `;
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

    getUser
  
 
}