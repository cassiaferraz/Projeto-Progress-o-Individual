import Navmenu from "../../Navbar/Navmenu"
import Habilidades from '../Habilidades/Habilidades'
import BoxPerfil from "../BoxPerfil/BoxPerfil"

import '../Perfil/perfil.css'
import '../tabela.css'

import Ajustes from '../../../../public/img/svgs/Ajustes.svg'
import Premio from '../../../../public/img/svgs/Premio.svg'

import { Link } from "react-router-dom"
import Swal from 'sweetalert2';

function Perfil () {
     //deve conter esse cod abaixo em todas as pag para exigir login
    //  const token = sessionStorage.getItem("token")
    //  console.log(token)
    //  if(!token) {
    //      window.location.href = "/Login";
    //  }

    return (

     <div className="todocontainer">
         <Navmenu /> 
         <BoxPerfil/>
            
            <div id="titulo-config">
            <h2 className="titulodapagina">Meu Perfil</h2>
                <div id="config">
                    <Link to="/Config" style={{ textDecoration: 'none' }}>
                    <img src={Ajustes} alt="config" /></Link>
                </div>
            </div>
         <Habilidades />
        
        
        <div className="tabela-medalhas-recompensas">
        
            <div className="cabecalho-medalhas">Medalhas</div>
            <div className="medalhas-adquiridas">
                <div className="coluna-medalhas">
                <img className= "icon-medalhas-perfil" src={Premio}/> 
                    <h4>Curiosidade</h4>
                    <p>Temporada 1</p>
                </div>

                 <div className="coluna-medalhas">
                 <img className= "icon-medalhas-perfil" src={Premio}/> 
                   <h4>Empático</h4>
                    <p>Temporada 1</p>
                 </div>
                
                 <div className="coluna-medalhas">
                 <img className= "icon-medalhas-perfil" src={Premio}/> 
                    <h4>Colaborativo</h4>
                    <p>Temporada 2</p>
                 </div>
                  
                 <div  className="coluna-medalhas">
                 <img className= "icon-medalhas-perfil" src={Premio}/> 
                   <h4>Questionador</h4>
                    <p>Temporada 3</p>
                </div> 
            </div>
        </div>
         
     </div>
    )
}

export default Perfil