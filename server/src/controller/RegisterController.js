
const bcrypt = require('bcryptjs');
const Register = require('../models/Register.js');
 

    async function register(req, res) {
        const { userPassword, userConfirmedPassword } = req.body;
 
        // Verificar se a senha e a confirmação são iguais
        if (userPassword !== userConfirmedPassword) {
            return res.status(400).json({ error: 'As senhas não coincidem.' });
        }
 
        // Verificar se a senha é composta pelos 6 ultimos números do RE
        // const reVerification = RE.substring(0, 6);
        // if (userPassword !== reVerification) {
        //     return res.status(400).json({ error: 'A senha deve ser os 6 ultimos números do RE.' });
        // }
 
        try {
        // Gerar o hash da senha
        const hashedPassword = await bcrypt.hash(userPassword, 10);
 
        // Criar o usuário
        const id = req.params.id;
        const userData = await Register.updateUser(id, hashedPassword);
 
        res.status(200).json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário no banco de dados' });
    }
}

function updateUser(id, field, value) {
    // Consulta com parâmetros nomeados
    const sql = `UPDATE dbo.COLABORADORES SET ${field} = @newValue WHERE userEmail = @id`;
 
    // Criar um objeto de parâmetros
    const params = {
      id: id,
      newValue: value
    };
 
    // Executar consulta usando prepared statement
    return sqlServer.executeQuery(sql, params)
      .then((results) => {
        // Processar o resultado da consulta (opcional)
        return results;
      })
      .catch((error) => {
        console.error("Erro ao atualizar usuário:", error);
        // Tratar o erro de forma adequada
      });
  }
 
 
 
module.exports = {
    register,
    updateUser
}
 
 