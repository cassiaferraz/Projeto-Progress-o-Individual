const sqlUtils = require('../utils/sqlServer')

function createNotification(receiverId, senderId, text, reference) {
    const sql = `
        INSERT INTO dbo.NOTIFICACOES 
            (ID_DESTINATARIO, ID_REMETENTE, TEXTO, REFERENCIA) VALUES
            ('${receiverId}', '${senderId}', '${text}', '${reference}')
        ;
    `
    const response = sqlUtils.dispatchQuery(sql)
    return response
}

function findNotificationsByReceiverId(receiverId) {
    const sql = `
        SELECT *
        FROM dbo.NOTIFICACOES
        WHERE ID_DESTINATARIO = '${receiverId}'
        ;
    `
    const response = sqlUtils.dispatchQuery(sql)
    return response
}

function updateNotificationStatus(notificationId, value) {
    const sql = `
        UPDATE dbo.NOTIFICACOES
        SET STATUS_LEITURA = ${value ? 1 : 0}
        WHERE ID_NOTIFICACAO = '${notificationId}'
        ;
    `
    console.log(sql)
    const response = sqlUtils.dispatchQuery(sql)
    return response
}

function deleteNotification(notificationId) {
    const sql = `
        DELETE FROM dbo.NOTIFICACOES
        WHERE ID_NOTIFICACAO = '${notificationId}'
        ;
    `
    console.log(sql)
    const response = sqlUtils.dispatchQuery(sql)
    return response
}


function coordenadorNotification(id) {
    const sql = `SELECT t.ID_COLABORADOR, e.ID_COORDENADOR
    FROM dbo._TECNICOS t
    INNER JOIN dbo.EQUIPES e ON t.ID_EQUIPE = e.ID_EQUIPE
    WHERE t.ID_COLABORADOR = '${id}';`

    const response = sqlUtils.dispatchQuery(sql)
    return response

}



module.exports = {
    createNotification,
    findNotificationsByReceiverId,
    updateNotificationStatus,
    deleteNotification,
    coordenadorNotification
}