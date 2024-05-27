const express = require('express');
const router = express.Router();
const updateUser = require('../controller/UpdateController'); // Importe a função updateUser do arquivo back.js

router.post('/reset-password', async (req, res) => {
    const { token, newPassword, newPasswordConfirmed } = req.body;

    // Verifique se as senhas coincidem
    if (newPassword !== newPasswordConfirmed) {
        return res.status(400).json({ message: "As senhas não coincidem." });
    }

    // Chame a função updateUser para atualizar a senha no banco de dados
    try {
        const result = await updateUser(req.user.email, token, newPassword);
        res.status(200).json({ message: "Senha redefinida com sucesso." });
    } catch (error) {
        console.error('Erro ao redefinir a senha:', error);
        res.status(500).json({ message: "Ocorreu um erro ao redefinir a senha. Por favor, tente novamente." });
    }
});

module.exports = router;
