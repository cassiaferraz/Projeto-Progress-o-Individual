import { Link } from 'react-router-dom'
import usuario from "../../img/Usuario.svg"
import {FaStar} from "react-icons/fa"

import Navmenu from '../Navbar/Navmenu'

import '../Desafios/desafios.css'
import "../Navbar/navmenu.css"
import BoxPerfil from '../meu-perfil/BoxPerfil/BoxPerfil'


const yellowStarStyle = {
color: 'rgb(255, 255, 0)',
};

function Desafios () {
    return (
    <div className="todocontainer">
          <Navmenu />
          <BoxPerfil/>
        

     <div className="tabela-desafios">
            <div className="cabecalho">
                <h4>Desafios</h4>
                <div className="cabecalho2">
                    <h4>Moedas</h4>
                    <h4>EXP+</h4>
                </div>
            </div>

            <div>
                <tr>
                     <td className='tabela-lado-esquerdo'>
                       Mentalidade de Crescimento
                    </td>
                    <td className='tabela-lado-esquerdo'>300 <i class="fa-solid fa-coins"></i> 
                    </td>
                    <td className="tabela-lado-esquerdo">250 <FaStar/></td>
                </tr>

                <tr>
                    <td className='tabela-lado-direito'>
                       Apresentar certificado de algum curso; worshop; palestra ou atividades realizadas em 2024. 
                     </td>
                       <td className="tabela-lado-direito"> <i className="fa-solid fa-xmark"></i> </td>
                </tr>

                <tr>
                    <td className='tabela-lado-esquerdo'>
                       Execute uma ação com objetivo de melhorar algum indicador  
                    </td>
                    <td className="tabela-lado-esquerdo">400 <i class="fa-solid fa-coins"></i>
                    </td>
                         <td className="tabela-lado-esquerdo">550 <FaStar/></td>
                </tr>

                <tr>
                    <td className='tabela-lado-direito'>
                        Aumentar desempenho  
                    </td>
                    <td className="tabela-lado-direito"> <i className="fa-solid fa-check"></i> </td>
                </tr>

                <tr>
                     <td className='tabela-lado-esquerdo'>
                        Recomendar um livro 
                    </td>
                    <td className="tabela-lado-esquerdo">650 <i class="fa-solid fa-coins"></i> 
                     </td>
                         <td className="tabela-lado-esquerdo">850 <FaStar/></td>
                </tr>

                <tr>
                    <td className='tabela-lado-direito'>
                        Comprometido com Resultado
                    </td>
                    <td className="tabela-lado-direito">  <i className="fa-solid fa-check"></i></td>
                </tr>

                <tr>
                    <td className='tabela-lado-esquerdo'>
                      Engajado com cliente
                    </td>
                    <td className="tabela-lado-esquerdo">790  <i class="fa-solid fa-coins"></i>
                    </td>
                         <td className="tabela-lado-esquerdo">850 <FaStar/></td>
                </tr>

                <tr>
                    <td className='tabela-lado-direito'>
                        Receba 5 avaliações 100%
                    </td>
                    <td className="tabela-lado-direito">  <i className="fa-solid fa-xmark"></i></td>
                </tr>

            </div>
         </div>
    </div>
 )
    
}

export default Desafios