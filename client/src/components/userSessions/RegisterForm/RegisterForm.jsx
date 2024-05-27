import { useState } from 'react';
import './updateForm_style.css';
 
function ResetPasswordForm() {
 
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirmed, setNewPasswordConfirmed] = useState('');
 
    const handleResetPassword = async (e) => {
        e.preventDefault();
 
        try {
            const response = await fetch('http://localhost:3000/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, newPassword, newPasswordConfirmed }),
            });
 
            if (response.ok) {
                window.location.href = '/login';
            } else {
                alert('Ocorreu um erro ao redefinir a senha. Por favor, tente novamente.');
            }
 
        } catch (error) {
            console.error('Erro ao redefinir a senha:', error);
            alert('Ocorreu um erro ao redefinir a senha. Por favor, tente novamente.');
        }
    };
 
    return (
        <form onSubmit={handleResetPassword}>
            <input
                type="text"
                placeholder="Token de redefinição"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            />
            <input
                type="password"
                placeholder="Nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirmar nova senha"
                value={newPasswordConfirmed}
                onChange={(e) => setNewPasswordConfirmed(e.target.value)}
            />
            <button type="submit">Redefinir Senha</button>
        </form>
    );
}
 
export default ResetPasswordForm;