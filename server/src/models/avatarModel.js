const sqlServer = require('../utils/sqlServer');

async function createAvatar(data) {
    console.log('execuando create');

        const sql = `INSERT INTO dbo.AVATAR_do_COLABORADOR (ID_COLABORADOR, ID_Avatar) 
        VALUES ( '${data.userId}', '${data.avatarId}')`;
        sqlUtils.dispatchQuery(sql);
    

}

async function getAvatar(userId) {
    const sql = `
        SELECT U.avatarPath, U.nameAvatar
        FROM UserAvatars U
        LEFT JOIN AVATAR_do_COLABORADOR A ON U.ID_Avatar = A.ID_Avatar
        WHERE A.ID_COLABORADOR = '${userId}'
    `;
    const result = sqlServer.dispatchQuery(sql);
    return result;
}


    function setAvatar(userId, avatarId) {
        const sql = `
            UPDATE dbo.AVATAR_do_COLABORADOR
            SET ID_Avatar = '${avatarId}'
            WHERE ID_COLABORADOR = '${userId}'
        `;

        const result = sqlServer.dispatchQuery(sql);
        return result;   
    }
    

module.exports = {
    createAvatar,
    getAvatar,
    setAvatar
};


