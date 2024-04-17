import "../Navbar/navmenu.css"
import Navmenu from '../Navbar/Navmenu'
import { Link } from 'react-router-dom'
import usuario from "../../img/Usuario.svg"
import '../Desafios/desafios.css'
import Logo from '/public/img/Vivo Purpura RGB.jpg';


function Desafios () {
    return (
    <div className="todocontainer">
                 <div id="Logo"> 
              <img src={Logo} /> 
            </div>
        <div>
          <Navmenu />
            <header>
                <div>
                <img className= "usuario" src={usuario} alt="usuario" />
                </div>
                  <Link to= "/Perfil" style={{ textDecoration: 'none' }}>Roberto da Silva </Link>
                  <h5>Nível 20</h5>
            </header>
         </div>
        
          <div className="tabela-desafios">
            <table>
            <thead className="cabecalho">
                <tr>
                <th className="titulodocabecalho2" scope="col">Desafios:</th>
                <th className="titulodocabecalho2" scope="col">Moedas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                     <td className='tabela-lado-esquerdo'>
                        Mentalidade de Crescimento 
                    </td>
                    <td className='tabela-lado-esquerdo'>+300 
                    <i>&#x20AC;</i> </td>
                </tr>

                <tr>
                    <td className='tabela-lado-direito'>
                       Apresentar certificado de algum curso; worshop; palestra ou atividades realizadas em 2024. 
                     </td>
                       <td className="tabela-lado-direito">+800 
                         <i>&#x20AC;</i> </td>
                </tr>

                <tr>
                    <td className='tabela-lado-esquerdo'>
                       Execute uma ação com objetivo de melhorar algum indicador <br/>
                    </td>
                    <td className="tabela-lado-esquerdo">+400 
                         <i>&#x20AC;</i> </td>
                </tr>

                <tr>
                    <td className='tabela-lado-direito'>
                        Aumentar produtividade
                    </td>
                    <td className="tabela-lado-direito">+250 
                         <i>&#x20AC;</i> </td>
                </tr>

                <tr>
                     <td className='tabela-lado-esquerdo'>
                        Recomendar um livro
                    </td>
                    <td className="tabela-lado-esquerdo">+250 
                         <i>&#x20AC;</i> </td>
                </tr>

                <tr>
                    <td className='tabela-lado-direito'>
                        Comprometido com Resultado
                    </td>
                    <td className="tabela-lado-esquerdo">+550 
                         <i>&#x20AC;</i> </td>
                </tr>
            </tbody>
            
         </table>
         </div>
    </div>
 )
    
}

export default Desafios