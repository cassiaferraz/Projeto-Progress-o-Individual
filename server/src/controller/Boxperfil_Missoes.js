const User = require('../models/getUserModel');
const Assiduidade = require('../models/Boxperfil_Components/Assiduidade');
const Fiscalizacao = require('../models/Boxperfil_Components/Fiscalizacao');
const Laudos = require('../models/Boxperfil_Components/Laudos');
const Postura = require('../models/Boxperfil_Components/Postura');
const Qualidade = require('../models/Boxperfil_Components/Qualidade');
const Veiculo = require('../models/Boxperfil_Components/Veiculo');

exports.Boxperfil_Missoes = async (userId) => {

    // console.log(req.userId)
    try {
        const user = await User.getUser(userId);

        if (user) {
            const assiduidadeData = await Assiduidade.findById(userId);
            const fiscalizacaoData = await Fiscalizacao.findById(userId);
            const laudosData = await Laudos.findById(userId);
            const posturaData = await Postura.findById(userId);
            const qualidadeData = await Qualidade.findById(userId);
            const veiculoData = await Veiculo.findById(userId);

            const countTrueFields = (fields) => fields.filter(Boolean).length;

            const components = [
                { name: 'Assiduidade', fields: [assiduidadeData.ASSIDUIDADE_ALMOX, assiduidadeData.ASSIDUIDADE_BANCO, assiduidadeData.ASSIDUIDADE_ROTA, assiduidadeData.ASSIDUIDADE_ALMOCO, assiduidadeData.ASSIDUIDADE_INICIO], reward: 200 },
                { name: 'Veiculo', fields: [veiculoData.VEICULO_FIELD1, veiculoData.VEICULO_FIELD2, veiculoData.VEICULO_FIELD3], reward: 200 },
                { name: 'Laudos', fields: [laudosData.LAUDOS_FIELD1, laudosData.LAUDOS_FIELD2], reward: 100 },
                { name: 'Postura', fields: [posturaData.POSTURA_FIELD1, posturaData.POSTURA_FIELD2, posturaData.POSTURA_FIELD3], reward: 250 },
                { name: 'Fiscalização', fields: [fiscalizacaoData.FISCALIZACAO], reward: 250 },
                { name: 'Qualidade', fields: [qualidadeData.TDNA, qualidadeData.IFI, qualidadeData.IRR], reward: 250 }
            ];

            let totalCoins = 0;
            let totalXp = 0;

            components.forEach(component => {
                const trueCount = countTrueFields(component.fields);
                const totalFields = component.fields.length;
                const threshold = 0.9 * totalFields;

                if (trueCount >= threshold) {
                    totalCoins += component.reward;
                    totalXp += component.reward;
                }
            });

            await User.updateUser(userId, user.coins + totalCoins, user.xp + totalXp);

            return { moedas: totalCoins, xp: totalXp };
        } else {
            throw new Error('Usuário não encontrado.');
        }
    } catch (error) {
        throw new Error('Erro ao atualizar recompensas.');
    }
};