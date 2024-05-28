// controllers/userController.js
const updateUserPassword = async (req, res) => {
    const { EMAIL, PASSWORD } = req.body;

    try {

        const result = await updateUser(EMAIL, PASSWORD);

        return result;
 
    } catch (error) {
 
        console.error('Erro ao redefinir a senha:', error);
 
        throw error;
 
    }
 
}

module.exports = { updateUserPassword };