const sqlServer = require('../utils/sqlServer');
 

function createUser() {
    const sql = `INSERT INTO COLABORADORES (userPassword) VALUES (@userPassword)`;
    const results = sqlServer.dispatchQuery(sql, [id])
    return results;
}  
 
//UPDATE
function updateUser(id, token, newPassword) {
    const sql = `UPDATE COLABORADORES SET SENHA = '${newPassword}' WHERE EMAIL = '${id}' AND resetToken = '${token}'`;
    const results = sqlServer.dispatchQuery(sql)
    return results;
}


module.exports = {
    createUser,
    updateUser
}
