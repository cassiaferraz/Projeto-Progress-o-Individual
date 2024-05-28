import { useState } from 'react';
import './updateForm_style.css';
 
function ResetPasswordForm() {
 
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirmed, setNewPasswordConfirmed] = useState('');
    const [userConfirmedPassword, setUserConfirmedPassword] = useState("");
 
    const handleResetPassword = async (e) => {
        e.preventDefault();
 
  if (userPassword === userConfirmedPassword) {
     if (resultRegex) {
        try {
            const response = await fetch('http://localhost:3000/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, newPassword, newPasswordConfirmed }),
            });
 
            if (response.ok) {
                window.location.href = '/perfil';
            } else {
                alert('Ocorreu um erro ao redefinir a senha. Por favor, tente novamente.');
            }
 
        } catch (error) {
            console.error('Erro ao redefinir a senha:', error);
            alert('Ocorreu um erro ao redefinir a senha. Por favor, tente novamente.');
        }
        
    };
    
    setShowDifferentPasswordsError(false);
    setUserConfirmedPassword("");
} else {
    setShowDifferentPasswordsError(true);
    setUserConfirmedPassword("");
}
};

    return (
      <form className="register-form" onSubmit={handleResetPassword}>
         <div className="register-fields">

          <h4>Altere sua senha para ter acesso ao app!</h4>
            <input
                type="text"
                placeholder="Email de redefinição"
                value={token}
                onChange={(e) => setToken(e.target.value)}
            />
            <input
                type="password"
                placeholder="Nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                state={userPassword}
                showRegexError={true}
                setResultRegex={setResultRegex}
            />
            <input
                type="password"
                placeholder="Confirmar nova senha"
                value={newPasswordConfirmed}
                onChange={(e) => setNewPasswordConfirmed(e.target.value)}
                state={userConfirmedPassword}
                showRegexError={false}
            />
            <button type="submit">Redefinir Senha</button>
            </div>
        </form>
    );
}
 
export default ResetPasswordForm;