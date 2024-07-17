const sqlServer = require('../../utils/sqlServer');

const Laudos = {
  findById: async (id) => {
    const request = pool.request();
    const result = await request
      .input('id', sql.Int, id)
      .query('SELECT LAUDOS FROM dbo.Indicadores_individuais WHERE id = @id');
    return result.recordset[0];
  },

  
};

module.exports = Laudos;