const sqlServer = require('../../utils/sqlServer');

const Postura = {
  findById: async (id) => {
    const request = pool.request();
    const result = await request
      .input('id', sql.Int, id)
      .query('SELECT POSTURA_UNIFORME, POSTURA_CRACHA, POSTURA_BOTA, POSTURA_MALA, POSTURA_COMUNICACAO FROM dbo.dbo.Avaliacoes_individuais WHERE ID_COLABORADOR = @id');
    return result.recordset[0];
  },

  // Outros métodos como create, update, delete, etc.
};

module.exports = Postura;