const sqlServer = require('../utils/sqlServer');

async function createAvatar(nameAvatar, avatarFilename) {
    console.log('execuando create');
    console.log('nameAvatar:', nameAvatar);
    console.log('avatarFilename:', avatarFilename);
    
    const sql = `
        INSERT INTO UserAvatars (nameAvatar, avatarPath)
        VALUES ('${nameAvatar}', '${avatarFilename}')
        ON DUPLICATE KEY UPDATE
        nameAvatar = VALUES(nameAvatar),
        avatarPath = VALUES(avatarPath)
    `;
    await sqlServer.dispatchQuery(sql);
}

async function getAvatar(userId) {
    console.log('executando getAvatar');
    console.log('userId:', userId);

    const sql = `
        SELECT U.avatarPath, U.nameAvatar
        FROM UserAvatars U
        LEFT JOIN AVATAR_do_COLABORADOR A ON U.ID_Avatar = A.ID_Avatar
        WHERE A.ID_COLABORADOR = '${userId}'
    `;
    const result = sqlServer.dispatchQuery(sql);
    return result;
}

 // const [result] = await sqlServer.dispatchQuery(sql);
    // return result ? result.avatarPath : null;


    async function setAvatar(userId, avatarId) {
        console.log('executando setAvatar');
        console.log('userId:', userId);
        console.log('avatarId:', avatarId);
    
        const sql = `
            UPDATE AVATAR_do_COLABORADOR
            SET ID_Avatar = @avatarId
            WHERE ID_COLABORADOR = @userId
        `;
    
        const params = {
            userId: userId,
            avatarId: avatarId
        };
    
        await sqlServer.dispatchQuery(sql, params);
    }
    

module.exports = {
    createAvatar,
    getAvatar,
    setAvatar
};





// const sqlServer = require('../utils/sqlServer');

// async function createOrUpdateAvatar(userId, nameAvatar, avatarFilename) {
//     const sql = `INSERT INTO UserAvatars (ID_COLABORADOR, nameAvatar, avatarPath) 
//                  VALUES ('${userId}', '${nameAvatar}', '${avatarFilename}')
//                  ON DUPLICATE KEY UPDATE nameAvatar = '${nameAvatar}', avatarPath = '${avatarFilename}'`;
//     const results = await sqlServer.dispatchQuery(sql);
//     return results;
// }

// async function getAvatar(userId) {
//     const sql = `SELECT nameAvatar, avatarPath FROM UserAvatars WHERE ID_COLABORADOR = '${userId}'`;
//     try {
//         const results = await sqlServer.dispatchQuery(sql);
//         console.log('Resultados da consulta:', results);
//         return results[0] || {}; 
//     } catch (error) {
//         console.error('Erro na consulta SQL:', error);
//         throw error;
//     }
// }

// async function setAvatar(userId, avatarPath) {
//     const sql = `UPDATE UserAvatars 
//                  SET avatarPath = '${avatarPath}' 
//                  WHERE ID_COLABORADOR = '${userId}'`;
//     const results = await sqlServer.dispatchQuery(sql);
//     return results;
// }

// module.exports = {
//     createOrUpdateAvatar,
//     getAvatar,
//     setAvatar
// };