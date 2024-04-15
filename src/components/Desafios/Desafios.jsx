import "../Navbar/navmenu.css"
import Navmenu from '../Navbar/Navmenu'
import { Link } from 'react-router-dom'
import usuario from "../../img/Usuario.svg"
import '../Desafios/desafios.css'

function Desafios () {
    return (
    <div className="todocontainer">
        <div>
          <Navmenu />
            <header>
                <div>
                <img className= "usuario" src={usuario} alt="usuario" />
                </div>
                  <Link to= "/Perfil">Roberto da Silva </Link>
                  <h5>Nível 20</h5>
            </header>
         </div>
        
          <div className="tabela-desafios">
            <table>
            <thead className="cabecalho">
                <tr>
                <th className="titulodocabecalho2" scope="col">Desafios:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                     <td className='tabela-lado-esquerdo'>
                        Mentalidade de Crescimento +300 EXP
                    </td>
                </tr>

                <tr>
                    <td className='tabela-lado-direito'>
                       Apresentar certificado de algum curso; worshop; palestra ou atividades realizadas em 2024. +300 EXP
                    </td>
                </tr>

                <tr>
                    <td className='tabela-lado-esquerdo'>
                       Execute uma ação com objetivo de melhorar algum indicador <br/> +300 EXP
                    </td>
                </tr>

                <tr>
                    <td className='tabela-lado-direito'>
                        Aumentar produtividade +300 EXP
                    </td>
                </tr>

                <tr>
                     <td className='tabela-lado-esquerdo'>
                        Recomendar um livro +300 EXP
                        <i className="fa-solid fa-check"></i>
                    </td>
                </tr>

                <tr>
                    <td className='tabela-lado-direito'>
                        Comprometido com Resultado +300 EXP
                    </td>
                </tr>
            </tbody>
            
         </table>
         </div>
    </div>
 )
    
}

export default Desafios