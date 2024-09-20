const avatarModel = require('../models/avatarModel');
const path = require('path');
const fs = require('fs');

const createAvatar = async (req, res) => {
    try {
        const userId = req.userId
        const avatarId = await avatarModel.createAvatar(userId)

        console.log('avatar criado no banco de dados');
        res.status(200).json(avatarId)
    } catch (err) {
        console.log(err)
        res.status(404).json({message: 'Deu ruim'})
    }
    };


const fetchAvatar = async (req, res) => {
    const userId = req.userId;
    console.log('userId from token:', userId);
    try {
        if (!userId) {
            return res.status(400).json({ error: 'userId não fornecido' });
        }
        const avatar = await avatarModel.getAvatar(userId);
        console.log('avatar obtido do banco de dados:', avatar);
        
        if (avatar) {
            res.json({ avatarPath: avatar });
        } else {
            res.status(404).json({ error: 'Avatar não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao buscar o avatar:', error);
        res.status(500).json({ error: 'Erro ao buscar o avatar' });
    }
};

const saveAvatar = async (req, res) => {
    try {
      const userId = req.userId
      const avatarId = await avatarModel.setAvatar(userId)

      console.log('avatar atualizado no banco de dados');
      res.status(200).json(avatarId)
    } catch (err) {
      console.log(err)
      res.status(404).json({message: 'Deu ruim'})
    }
  };
   

module.exports = { createAvatar, saveAvatar, fetchAvatar };

