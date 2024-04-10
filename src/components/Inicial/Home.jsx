import logo from '../../img/logovivo.svg'
import '../Inicial/home.css'
import { Link } from 'react-router-dom'



function Home () {
    return (
        <div className="container">
            <header className="header">
                <img className= 'logovivo' src={logo} alt="vivologo" />
                <h3>Faça Login ou Cadastre-se.</h3>
            </header>
         <form>
            <div className="logincontainer">
                <label htmlFor="email">E-mail:</label>
                <br />
                <input type="text" name="email" placeholder="example@telefonica.com" />
            </div>
            <div className="logincontainer">
                <label htmlFor="password">Senha:</label>
                <br />
                <input type="password" name="password" placeholder="****" />
            </div> <br />

            <a href="">Esqueci minha senha</a>
            <br />

            <div className="EntrarLogin">
                <button>Acessar 
                <img src="" alt="" /> </button>
                
            </div>
            
         </form>
        </div>
 )
    
}

export default Home