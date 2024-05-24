import { useState } from 'react';
import PasswordInput from '../PasswordInput/passwordInput';
// import EmailInput from '../EmailInput/EmailInput';
import './registerForm_style.css';

 
function RegisterForm() {
    // const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmedPassword, setUserConfirmedPassword] = useState("");
    const [resultRegex, setResultRegex] = useState(false);
    const [showDifferentPasswordsError, setShowDifferentPasswordsError] = useState(false);
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        if (userPassword === userConfirmedPassword) {
            if (resultRegex) {
                try {
                    const response = await fetch('http://localhost:3000/registro', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email: userEmail, password: userPassword })
                    });
 
                    if (response.ok) {
                        window.location.href = "/login"; // Redirecionar para a página de login após o cadastro
                    } else {
                        alert("Ocorreu um erro ao cadastrar. Por favor, tente novamente.");
                    }
                } catch (error) {
                    console.error('Erro ao cadastrar:', error);
                    alert("Ocorreu um erro ao cadastrar. Por favor, tente novamente.");
                }
            }
 
            setShowDifferentPasswordsError(false);
            setUserConfirmedPassword("");
        } else {
            setShowDifferentPasswordsError(true);
            setUserConfirmedPassword("");
        }
    };
 
    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-fields">

                <h4>jose.afonso@telefonica.com</h4>

                {/* <EmailInput
                    value={userEmail}
                    onChange={setUserEmail}
                /> */}
                <PasswordInput
                    placeholder={"Insira sua senha"}
                    state={userPassword}
                    onChange={setUserPassword}
                    showRegexError={true}
                    setResultRegex={setResultRegex}
                />
                <PasswordInput
                    placeholder={"Confirme sua senha"}
                    state={userConfirmedPassword}
                    onChange={setUserConfirmedPassword}
                    showRegexError={false}
                />
            </div>
            {showDifferentPasswordsError && (
                <div className="containerAlert">
                    <h4 className='differentPasswordsError'>Senhas divergentes!</h4>
                </div>
            )}
            <button type='submit'>Cadastrar</button>
        </form>
    );
}
export default RegisterForm;



// import { useState } from 'react';
// import PasswordInput from '../PasswordInput/passwordInput';
// import EmailInput from '../EmailInput/EmailInput';
 
// import './registerForm_style.css';
// import loginData from '../../../assets/login.json'; // Importando os dados de login
 
// function RegisterForm() {
//     const fs = require('fs');
//     const [userEmail, setUserEmail] = useState("");
//     const [userPassword, setUserPassword] = useState("");
//     const [userConfirmedPassword, setUserConfirmedPassword] = useState("");
//     const [resultRegex, setResultRegex] = useState(false);
//     const [showDifferentPasswordsError, setShowDifferentPasswordsError] = useState(false);
 
//     const handleSubmit = async (e) => {
//         e.preventDefault();
 
//         if (userPassword === userConfirmedPassword) {
//             if (resultRegex) {
//                 // Verificar se o email já está cadastrado
//                 const userExists = loginData.users.some(item => item.login === userEmail);
//                 if (userExists) {
//                     alert("Este email já está cadastrado");
//                 } else {
//                     // Adicionar novo usuário ao arquivo JSON
//                     loginData.users.push({ login: userEmail, senha: userPassword });
//                     // Redirecionar para outra página ou fazer algo após o cadastro
//                     window.location.href = "/";
//                     console.log(userEmail);
//                 }
//             }
 
//             setShowDifferentPasswordsError(false);
//             setUserConfirmedPassword("");
//         } else {
//             setShowDifferentPasswordsError(true);
//             setUserConfirmedPassword("");
//         }
//     };
 
//     return (
// <form className="register-form" onSubmit={handleSubmit}>
// <div className="register-fields">
// <EmailInput
//                     value={userEmail}
//                     onChange={setUserEmail}
//                 />
// <PasswordInput
//                     placeholder={"Insira sua senha"}
//                     state={userPassword}
//                     onChange={setUserPassword}
//                     showRegexError={true}
//                     setResultRegex={setResultRegex}
//                 />
// <PasswordInput
//                     placeholder={"Confirme sua senha"}
//                     state={userConfirmedPassword}
//                     onChange={setUserConfirmedPassword}
//                     showRegexError={false}
//                 />
// </div>
//             {showDifferentPasswordsError && (
// <div className="containerAlert">
// <h4 className='differentPasswordsError'>Senhas divergentes!</h4>
// </div>
//             )}
// <button type='submit'>Cadastrar</button>
// </form>
//     );
// }
 
// export default RegisterForm;