import Navmenu from "../Navbar/Navmenu"
import Habilidades from "./Habilidades/Habilidades"

import '../meu-perfil/perfil.css'
import '../meu-perfil/tabela.css'
import BoxPerfil from "./BoxPerfil/BoxPerfil"

import Premio from '../../img/Premio.svg'

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
           <h2 className="titulodapagina">Meu Perfil</h2>
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