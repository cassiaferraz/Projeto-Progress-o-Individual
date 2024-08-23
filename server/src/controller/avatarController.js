const avatarModel = require('../models/avatarModel');


const listAvatars = async (req, res) => {
    try {
        const avatarDir = path.join(__dirname, '..', 'assets', 'avatar');
        fs.readdir(avatarDir, (err, files) => {
            if (err) {
                console.error("Erro ao listar avatares:", err);
                return res.status(500).json({ error: 'Erro ao listar avatares' });
            }
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

        await avatarModel.setAvatar(userId, nameAvatar, avatarPath);

        res.status(201).json({ message: 'Avatar salvo com sucesso' });
    } catch (err) {
        console.error("Erro em saveAvatar:", err);
        res.status(500).json({ error: 'Erro ao salvar avatar no banco de dados.' });
    }
};

const getAvatar = async (req, res) => {
    try {
        const userId = req.query.userId;
        const result = await avatarModel.getAvatar(userId);
        res.status(200).json(result);
    } catch (err) {
        console.error("Erro em getAvatar:", err);
        res.status(500).json({ error: 'Erro ao buscar avatar no banco de dados.' });
    }
};

module.exports = { listAvatars, saveAvatar, getAvatar };











// const avatarModel = require('../models/avatarModel');

// const listAvatars = async (req, res) => {
//     try {
//         const avatarDir = path.join(__dirname, '..', 'public', 'avatar');
//         fs.readdir(avatarDir, (err, files) => {
//             if (err) {
//                 console.error("Erro ao listar avatares:", err);
//                 return res.status(500).json({ error: 'Erro ao listar avatares' });
//             }
//             res.status(200).json(files);
//         });
//     } catch (err) {
//         console.error("Erro em listAvatars:", err);
//         res.status(500).json({ error: 'Erro ao listar avatares' });
//     }
// };

// const saveAvatar = async (req, res) => {
//     try {
//         const userId = req.userId;
//         const { nameAvatar, avatar } = req.body;

//         await avatarModel.setAvatar(userId, nameAvatar, avatar);

//         res.status(201).json({ message: 'Avatar salvo com sucesso' });
//     } catch (err) {
//         console.error("Erro em saveAvatar:", err);
//         res.status(500).json({ error: 'Erro ao salvar avatar no banco de dados.' });
//     }
// };

// const getAvatar = async (req, res) => {
//     try {
//         const userId = req.query.userId;
//         const result = await avatarModel.getAvatar(userId);
//         res.status(200).json(result);
//     } catch (err) {
//         console.error("Erro em getAvatar:", err);
//         res.status(500).json({ error: 'Erro ao buscar avatar no banco de dados.' });
//     }
// };

// module.exports = { listAvatars, saveAvatar, getAvatar };