// const bcrypt = require('bcryptjs');
// const Register = require('../models/Register.js');
 
 
 
//     async function register(req, res) {
//         const { cpf, password, confirmedPassword } = req.body;
 
//         // Verificar se a senha e a confirmação são iguais
//         if (password !== confirmedPassword) {
//             return res.status(400).json({ error: 'As senhas não coincidem.' });
//         }
 
//         // Verificar se a senha é composta pelos 6 primeiros números do CPF
//         const cpfVerification = cpf.substring(0, 6);
//         if (password !== cpfVerification) {
//             return res.status(400).json({ error: 'A senha deve ser os 6 primeiros números do CPF.' });
//         }
 
//         try {
//             const userController = new UserController();
//             await userController.createUser(cpf, password);
//             res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     }
 
 
// module.exports = {
//     register
// }

const bcrypt = require('bcryptjs');
const Register = require('../models/Register.js');
 
 
 
 
    async function register(req, res) {
        const { userPassword, userConfirmedPassword } = req.body;
 
        // Verificar se a senha e a confirmação são iguais
        if (userPassword !== userConfirmedPassword) {
            return res.status(400).json({ error: 'As senhas não coincidem.' });
        }
 
        // Verificar se a senha é composta pelos 6 ultimos números do RE
        // const reVerification = RE.substring(0, 6);
        // if (userPassword !== reVerification) {
        //     return res.status(400).json({ error: 'A senha deve ser os 6 ultimos números do RE.' });
        // }
 
        try {
        // Gerar o hash da senha
        const hashedPassword = await bcrypt.hash(userPassword, 10);
 
        // Criar o usuário
        const id = req.params.id;
        const userData = await Register.updateUser(id, hashedPassword);
 
        res.status(200).json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário no banco de dados' });
    }
}
 
 
module.exports = {
    register
}