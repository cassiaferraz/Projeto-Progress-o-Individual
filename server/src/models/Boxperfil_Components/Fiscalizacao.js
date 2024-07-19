const sqlServer = require('../../utils/sqlServer');

const Fiscalizacao = {
  findById: async (id) => {
    const request = pool.request();
    const result = await request
      .input('id', sql.Int, id)
      .query('SELECT FISCALIZACAO FROM dbo.Avaliacao_individuais WHERE ID_COLABORADOR = @id');
    return result.recordset[0];
  },

  // Outros métodos como create, update, delete, etc.
};

module.exports = Fiscalizacao;