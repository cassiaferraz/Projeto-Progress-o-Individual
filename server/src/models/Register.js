// const mssql = require('mssql/msnodesqlv8');
// const bcrypt = require('bcryptjs');
// const dbConfig = require('../config/dbConfig');
 
 
//    async function createUser(cpf, userPassword) {
//         try {
//             // Extrair os 6 primeiros dígitos do CPF
//             const extractedPassword = cpf.substring(0, 6);
 
//             // Criptografar a senha
//             const hashedPassword = await bcrypt.hash(extractedPassword, 10);
 
//             // Conectar ao banco de dados
//             const pool = await sql.connect(dbConfig);
 
//             // Query SQL para inserir o usuário
         
//             const result = await pool.request()
//             .input('cpf', mssql.VarChar, cpf)
//             .input('senha', mssql.VarChar, hashedPassword)
//             .query(`INSERT INTO Usuarios (cpf, userPassword) VALUES (@cpf, @senha)`);
 
 
//         } catch (error) {
//             throw new Error('Erro ao criar usuário no banco de dados');
//         }
//     }
 
 
// module.exports = {
//     createUser
// }


const sqlServer = require('../utils/sqlServer');
 

function createUser() {
    const sql = `INSERT INTO Usuarios (userPassword) VALUES (@userPassword)`;
    const results = sqlServer.dispatchQuery(sql, [id])
    return results;
}  
 
//UPDATE
function updateUser(id, field, value) {
    const sql = `UPDATE dbo.COLABORADORES SET ${field} = '${value}' WHERE userEmail = '${id}'`;
    const results = sqlServer.dispatchQuery(sql)
    return results;
}  
 
 
// async function updateUser(id, userPassword) {
//     try {
//         const sql = `UPDATE Usuarios SET userPassword = ? WHERE userEmail = ?`;
//         const results = await sqlServer.dispatchQuery(sql, [userPassword, id]);
//         return results;
//     } catch (error) {
//         console.error('Erro ao atualizar a senha:', error);
//         throw new Error('Ocorreu um erro ao atualizar a senha. Tente novamente.');
//     }
// }


module.exports = {
    createUser,
    updateUser
}
