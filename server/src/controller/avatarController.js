const avatarModel = require('../models/avatarModel');
const path = require('path');
const fs = require('fs');

const createAvatar = async (req, res) => {
    try {
        const userId = req.userId
        const avatarId = req.body.avatarId;
        const result = await avatarModel.setAvatar(avatarId[0].ID_Avatar, userId);

        console.log('avatar criado no banco de dados');
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
        res.status(404).json({message: 'Deu ruim'})
    }
    };

const fetchAvatar = async (req, res) => {
    try {
        const userId = req.userId;

        // Primeiro, busque o ID_Avatar na tabela AVATAR_do_COLABORADOR
        const avatarData = await avatarModel.getAvatar(userId);
        
        if (avatarData && avatarData.length > 0) {
            const avatarId = avatarData[0].ID_Avatar;

            // Agora busque o caminho da imagem usando o avatarId
            const avatarDetails = await avatarModel.getAvatarDetails(avatarId);
            if (avatarDetails && avatarDetails.length > 0) {
                res.status(200).json({ avatarPath: avatarDetails[0].avatarPath });
            } else {
                res.status(404).json({ message: 'Detalhes do avatar não encontrados' });
            }
        } else {
            res.status(404).json({ message: 'Avatar não encontrado' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Erro ao buscar avatar' });
    }
};

const saveAvatar = async (req, res) => { try { const userId = req.userId; let avatarPath = req.body.avatarId;

    // Verifica se o usuário já tem um avatar
    const existingAvatar = await avatarModel.getAvatar(userId);
    avatarPath = avatarPath.replace(/\//g, '\\');

    const avatarIdResult = await avatarModel.findIdAvatarbyPath(avatarPath);
    if (!avatarIdResult || avatarIdResult.length === 0) {
        return res.status(404).json({ message: 'Avatar não encontrado' });
    }

    const avatarId = avatarIdResult[0].ID_Avatar;

    if (existingAvatar && existingAvatar.length > 0) {
        // Se o avatar já existir, faz o update
        const result = await avatarModel.setAvatar(avatarId, userId);
        res.status(200).json({ message: 'Avatar atualizado com sucesso', avatarId });
    } else {
        // Se não existir, cria um novo
        const result = await avatarModel.createAvatar(userId, avatarId);
        res.status(201).json({ message: 'Avatar criado com sucesso', avatarId });
    }
} catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Erro ao salvar ou atualizar avatar' });
}
};


module.exports = { createAvatar, saveAvatar, fetchAvatar };

