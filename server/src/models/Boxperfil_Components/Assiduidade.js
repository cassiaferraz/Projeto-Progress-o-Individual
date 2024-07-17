const sqlServer = require('../../utils/sqlServer');

const Assiduidade = {
  findById: async (id) => {
    const request = pool.request();
    const result = await request
      .input('id', sql.Int, id)
      .query('SELECT ASSIDUIDADE FROM dbo.Indicadores_individuais WHERE id = @id');
    return result.recordset[0];
  },

  
};

module.exports = Assiduidade;
