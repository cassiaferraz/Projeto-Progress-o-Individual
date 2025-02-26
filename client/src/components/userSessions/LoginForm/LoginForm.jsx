// MOSTRAR A MENSAGEM DE ALTERAR A SENHA NO 1º ACESSO
//   import { useState } from 'react';
//   import Swal from 'sweetalert2';
 
//   import EmailInput from '../EmailInput/EmailInput';
//   import PasswordInput from '../PasswordInput/passwordInput';
//   import Logo from '/img/svgs/logoprogressao.png'

 
//   function LoginForm() {
//       const [userEmail, setUserEmail] = useState('');
//       const [userPassword, setUserPassword] = useState('');
//       const [loginError, setLoginError] = useState(false);
 
//       const handleSubmit = async (event) => {
//        event.preventDefault();
  
//        try {
//            const response = await fetch('http://localhost:3000/login', {
//                method: 'POST',
//                headers: {
//                    'Content-Type': 'application/json'
//                },
//                body: JSON.stringify({ userEmail: userEmail, userPassword: userPassword })
//            });
  
//            console.log('Status:', response.status);
//            const responseData = await response.json();  //Armazene o resultado em uma variável
//            console.log('Response:', responseData);
  
//            if (response.ok) {
//                 //Verifique se o usuário já fez login antes
//                const isFirstLogin = !localStorage.getItem('hasLoggedIn');
  
//                if (isFirstLogin) {
//                    Swal.fire({
//                        title: 'Aviso',
//                        text: 'Por favor, altere sua senha após o primeiro acesso.',
//                        icon: 'warning',
//                        confirmButtonText: 'OK',
//                    }).then(() => {
//                        window.location.href = '/perfil';  
//                    });
//                } else {
                
//                    window.location.href = '/perfil';
//                }
  
//                // Marque que o usuário já fez login
//                localStorage.setItem('hasLoggedIn', 'true');
//            } else {
//                setLoginError(true); // Exibir mensagem de erro caso o login falhe
//            }
//        } catch (error) {
//            console.error('Erro ao fazer login:', error);
//            alert("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
//        }
//    };


//       return (
//               <div className="login-container">
//                 <form className='login-form' onSubmit={handleSubmit}>
//                 <img src={Logo} className="vivo-icon" alt="vivo icon" />

//                   <EmailInput
//                       value={userEmail}
//                       onChange={setUserEmail}
//                   />
//                   <PasswordInput
//                       state={userPassword}
//                       onChange={setUserPassword}
//                       placeholder={"Insira sua senha"}
//                       showRegexError={false}
//                   />
//                   <button type='submit'>Acessar</button>
//                 </form>
//                 {/* <small className='register-text'>Primeiro acesso? <a href="/register">Clique aqui</a></small> */}
//                   {loginError && <p className="login-error">Email ou senha incorretos</p>}
//                 </div>
//       );
//   }
 
//   export default LoginForm;


// MOSTRAR A MENSAGEM DE ALTERAR A SENHA EM TODOS OS ACESSOS
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useAvatar } from '../../../context/AvatarContext';
import EmailInput from '../EmailInput/EmailInput';
import PasswordInput from '../PasswordInput/passwordInput';
import Logo from '/img/svgs/logoprogressao.png';
import { useNavigate } from 'react-router-dom'

function LoginForm({ serverIP }) {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const { setAvatar } = useAvatar();

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await fetch(`${serverIP}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userEmail: userEmail, userPassword: userPassword })
            });

            const data = await response.json();
            //console.log('Resposta da API:', data); 

            if (response.ok) {
                //console.log('Login bem-sucedido, armazenando token e userId');
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('userId', data.userId);

                //console.log('Token armazenado no sessionStorage:', sessionStorage.getItem('token'));
                //console.log('User ID armazenado no sessionStorage:', sessionStorage.getItem('userId'));

                fetch(`${serverIP}/avatar/get-avatar?userId=${data.userId}`, {
                    headers: {
                        'x-access-token': data.token
                    }
                })
                .then(responsee => {
                    if (!responsee.ok) {
                        throw new Error('Erro ao buscar o avatar');
                    }
                    return responsee.json();
                })
                .then(dataa => {
                    if (dataa && dataa.avatarPath) {
                        // Atualize para usar avatarId em vez de avatarPath
                        setAvatar(dataa.avatarPath); // Armazene o ID do avatar
                    } else {
                        console.error('ID do avatar não encontrado na resposta:', dataa);
                    }
                })
                .catch(error => console.error('Erro ao buscar o avatar:', error));


                if (data.isFirstAccess) {
                    Swal.fire({
                        title: 'Aviso!',
                        text: 'Por favor, altere sua senha após o primeiro acesso.',
                        icon: 'warning',
                        confirmButtonText: 'OK',
                    }).then(() => {
                        navigate ('/update');
                    });
                } else {
                    navigate ('/missoes');
                }
            } else {
                setLoginError(true);
                console.log('Falha no login:', data.message); // Log da falha no login
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
            {loginError && <p className="login-error">Email ou senha incorretos</p>}
        </div>
    );
}

export default LoginForm;