const sqlServer = require('../../utils/sqlServer');

const Veiculo = {
  findById: async (id) => {
    const request = pool.request();
    const result = await request
      .input('id', sql.Int, id)
      .query('SELECT VEICULO FROM dbo.Indicadores_individuais WHERE id = @id');
    return result.recordset[0];
  },
};

module.exports = Veiculo;