const sqlServer = require('sqlserver'); // Supondo que você tenha um módulo `sqlserver` para executar consultas SQL

async function updateUser(id, field, value) {
    try {
        // Consulta com parâmetros nomeados
        const sql = `UPDATE dbo.COLABORADORES SET ${field} = @newValue WHERE userEmail = @id`;
        
        // Criar um objeto de parâmetros
        const params = {
            id: id,
            newValue: value
        };
        
        // Executar consulta usando prepared statement
        const results = await sqlServer.executeQuery(sql, params);
        
        // Processar o resultado da consulta (opcional)
        return results;
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        // Tratar o erro de forma adequada
        throw error;
    }
}

module.exports = {
    updateUser
}
