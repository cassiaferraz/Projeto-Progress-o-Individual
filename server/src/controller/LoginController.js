const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
 
async function login(req, res) {
    const { userEmail, userPassword } = req.body;
    try {
        const user = await User.authenticateUser(userEmail, userPassword);
        if (!user) {
            return res.status(401).json({ auth: false, message: 'Credenciais inválidas' });
        }
 
        const token = jwt.sign({ userId: user.ID_COLABORADOR }, 'secreto', { expiresIn: '1h' });
        const isFirstAccess = user.ID_COLABORADOR == userPassword;
        // res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ auth: true, token:token, message: 'Login bem-sucedido', isFirstAccess });
    } catch (err) {
        console.error(err);
        res.status(500).json({ auth: false, message: 'Erro interno do servidor' });
    }
}
 
module.exports = {
    login
};