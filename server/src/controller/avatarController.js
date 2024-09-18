const avatarModel = require('../models/avatarModel');
const path = require('path');
const fs = require('fs');

const listAvatars = async (req, res) => {
    try {
        const avatarDir = path.join(__dirname, '..', 'assets', 'avatar');
        fs.readdir(avatarDir, (err, files) => {
            if (err) {
                console.error("Erro ao listar avatares:", err);
                return res.status(500).json({ error: 'Erro ao listar avatares' });
            }
            console.log('avatares listados:', files);
            res.status(200).json(files);
        });
    } catch (err) {
        console.error("Erro em listAvatars:", err);
        res.status(500).json({ error: 'Erro ao listar avatares' });
    }
};

const saveAvatar = async (req, res) => {
    try {
        const userId = req.userId; 
        const { nameAvatar, avatarPath } = req.body;
        const avatarFilename = avatarPath.split('/').pop(); 

        console.log('dados recebidos para salvar o avatar', {userId, nameAvatar, avatarPath, avatarFilename})


        await avatarModel.createAvatar(nameAvatar, avatarFilename);
        console.log('avatar criado com sucesso');

        const avatarId = await avatarModel.getAvatar(userId);
        console.log('avatar id obtido:', avatarId);

        await avatarModel.setAvatar(userId, avatarId);
        console.log('avatar salvo no banco de dados');

        res.status(201).json({ message: 'Avatar salvo com sucesso' });
        
    } catch (err) {
        console.error("Erro em saveAvatar:", err);
        res.status(500).json({ error: 'Erro ao salvar avatar no banco de dados.' });
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

module.exports = { listAvatars, saveAvatar, fetchAvatar };

//gpt

// const avatarModel = require('../models/avatarModel');
// const path = require('path');
// const fs = require('fs').promises; // Usando a versão com promessas para melhor compatibilidade com async/await

// // Função para listar avatares disponíveis no diretório
// const listAvatars = async (req, res) => {
//     try {
//         const avatarDir = path.join(__dirname, '..', 'assets', 'avatar');
//         const files = await fs.readdir(avatarDir);
//         console.log('Avatares listados:', files);
//         res.status(200).json(files);
//     } catch (err) {
//         console.error("Erro ao listar avatares:", err);
//         res.status(500).json({ error: 'Erro ao listar avatares' });
//     }
// };

// // Função para criar ou atualizar um avatar e associá-lo a um colaborador
// const saveAvatar = async (req, res) => {
//     try {
//         const userId = req.userId; // Assumindo que o userId vem do token ou do contexto de autenticação
//         const { nameAvatar, avatarPath } = req.body;
//         const avatarFilename = path.basename(avatarPath); // Obtém o nome do arquivo

//         console.log('Dados recebidos para salvar o avatar', { userId, nameAvatar, avatarPath, avatarFilename });

//         // Cria ou atualiza o avatar no banco de dados
//         await avatarModel.createAvatar(nameAvatar, avatarFilename);
//         console.log('Avatar criado ou atualizado com sucesso');

//         // Obtém o ID do avatar criado ou atualizado
//         const avatar = await avatarModel.getAvatar(userId);
//         if (!avatar) {
//             return res.status(404).json({ error: 'Avatar não encontrado para o colaborador.' });
//         }

//         // Associa o avatar ao colaborador
//         await avatarModel.setAvatar(userId, avatar.ID_Avatar);
//         console.log('Avatar associado ao colaborador com sucesso');

//         res.status(201).json({ message: 'Avatar salvo com sucesso' });
//     } catch (err) {
//         console.error("Erro ao salvar avatar:", err);
//         res.status(500).json({ error: 'Erro ao salvar avatar no banco de dados.' });
//     }
// };

// // Função para buscar o avatar associado a um colaborador
// const fetchAvatar = async (req, res) => {
//     const userId = req.userId; // Assumindo que o userId vem do token ou do contexto de autenticação
//     console.log('userId do token:', userId);

//     try {
//         if (!userId) {
//             return res.status(400).json({ error: 'userId não fornecido' });
//         }

//         // Obtém o caminho do avatar associado ao colaborador
//         const avatar = await avatarModel.getAvatar(userId);
//         console.log('Avatar obtido do banco de dados:', avatar);

//         if (avatar) {
//             res.status(200).json(avatar);
//         } else {
//             res.status(404).json({ error: 'Avatar não encontrado' });
//         }
//     } catch (error) {
//         console.error('Erro ao buscar o avatar:', error);
//         res.status(500).json({ error: 'Erro ao buscar o avatar' });
//     }
// };

// module.exports = { listAvatars, saveAvatar, fetchAvatar };
 
