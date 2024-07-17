const sqlServer = require('../../utils/sqlServer');

const Fiscalizacao = {
  findById: async (id) => {
    const request = pool.request();
    const result = await request
      .input('id', sql.Int, id)
      .query('SELECT FISCALIZACAO FROM dbo.Indicadores_individuais WHERE id = @id');
    return result.recordset[0];
  },

  // Outros métodos como create, update, delete, etc.
};

module.exports = Fiscalizacao;