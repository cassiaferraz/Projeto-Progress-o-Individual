const sqlServer = require('../utils/sqlServer');

function setAvatar(userId, nameAvatar, avatarFilename) {
    const sql = `INSERT INTO UserAvatars (ID_COLABORADOR, nameAvatar, avatarPath) 
                 VALUES ('${userId}', '${nameAvatar}', '${avatarFilename}')
                 ON DUPLICATE KEY UPDATE nameAvatar = '${nameAvatar}', avatarPath = '${avatarFilename}'`;
    const results = sqlServer.dispatchQuery(sql);
    return results;
}

function getAvatar(userId) {
    const sql = `SELECT nameAvatar, avatarPath FROM UserAvatars WHERE ID_COLABORADOR = '${userId}'`;
    const results = sqlServer.dispatchQuery(sql);
    return results;
}

module.exports = {
    setAvatar,
    getAvatar
};