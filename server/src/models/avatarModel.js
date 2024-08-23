const sqlServer = require('../utils/sqlServer');

function setAvatar(userId, nameAvatar, avatarPath) {
    const sql = `INSERT INTO UserAvatars (ID_COLABORADOR, nameAvatar, avatarPath) 
                 VALUES ('${userId}', '${nameAvatar}', '${avatarPath}')
                 ON DUPLICATE KEY UPDATE nameAvatar = '${nameAvatar}', avatarPath = '${avatarPath}'`;
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