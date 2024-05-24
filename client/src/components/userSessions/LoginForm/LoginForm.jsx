 import { useState } from 'react';
 import EmailInput from '../EmailInput/EmailInput';
 import PasswordInput from '../PasswordInput/passwordInput';
 import './loginForm_style.css';
 import Logo from '../../../../public/img/svgs/logoprogressao.png'

 
 function LoginForm() {
     const [userEmail, setUserEmail] = useState('');
     const [userPassword, setUserPassword] = useState('');
     const [loginError, setLoginError] = useState(false);
 
     const handleSubmit = async (event) => {
         event.preventDefault();
 
         try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userEmail: userEmail, userPassword: userPassword })
            });
    
            console.log('Status:', response.status);
            const responseData = await response.json(); // Armazene o resultado em uma variável
            console.log('Response:', responseData);
    
            if (response.ok) {
                window.location.href = "/perfil"; // Redirecionar para a página do perfil após o login bem-sucedido
            } else {
                setLoginError(true); // Exibir mensagem de erro caso o login falhe
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
        }
    };
     return (
             <div className="login-container">
               <form className='login-form' onSubmit={handleSubmit}>
               <img src={Logo} className="vivo-icon" alt="vivo icon" />

                 <EmailInput
                     value={userEmail}
                     onChange={setUserEmail}
                 />
                 <PasswordInput
                     state={userPassword}
                     onChange={setUserPassword}
                     placeholder={"Insira sua senha"}
                     showRegexError={false}
                 />
                 <button type='submit'>Acessar</button>
               </form>
               <small className='register-text'>Primeiro acesso? <a href="/register">Clique aqui</a></small>
                 {loginError && <p className="login-error">Email ou senha incorretos</p>}
               </div>
     );
 }
 
 export default LoginForm;



// import { useState } from 'react';
// import EmailInput from '../EmailInput/EmailInput';
// import PasswordInput from '../PasswordInput/passwordInput';
// import Logo from '../../../../public/img/svgs/logoprogressao.png'
// import loginData from '../../../assets/login.json'; // Importando os dados de login
// import './loginForm_style.css';
 
// function LoginForm() {
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [loginError, setLoginError] = useState(false);
 
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Verificar se o email e a senha correspondem a algum usuário nos dados de login
//     const user = loginData.users.find(item => item.login === userEmail && item.senha === userPassword);
 
//     if (user) {
//       // Login bem-sucedido, fazer algo, como redirecionar para outra página
//       sessionStorage.setItem("token", user.token);
//       window.location.href = "/Missoes";

//     } else {

//       // Email ou senha incorretos
//       alert("Email ou senha incorretos");
//     }
//   };
 
//   return (

//     <div className="login-container">

//       <form className='login-form' onSubmit={handleSubmit}>
//       <img src={Logo} className="vivo-icon" alt="vivo icon" />
//         <EmailInput
//           value={userEmail}
//           onChange={setUserEmail}
//         />
 
//         <PasswordInput
//           state={userPassword}
//           onChange={setUserPassword}
//           placeholder={"Insira sua senha"}
//           showRegexError={false}
//         />
 
//         <button type='submit'>Acessar</button>
//       </form>
 
//       <small className='register-text'>Não tem cadastro? <a href="/register">Clique aqui</a></small>

//       {loginError && <p className="login-error">Email ou senha incorretos</p>}

//     </div>

//   );

// }
 
// export default LoginForm;
