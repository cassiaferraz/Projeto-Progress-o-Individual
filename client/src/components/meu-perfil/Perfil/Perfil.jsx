import Navmenu from "../../Navbar/Navmenu"
import Habilidades from '../Habilidades/Habilidades'
import BoxPerfil from "../BoxPerfil/BoxPerfil"

import { Tooltip } from 'react-tooltip'

import { useState, useEffect } from "react";

import '../Perfil/perfil.css'
// import '../tabela.css'

import Ajustes from '/img/svgs/Ajustes.svg'
import Premio from '/img/svgs/Premio.svg'

import { Link } from "react-router-dom"

function Perfil ({serverIP}) {

    // deve conter esse cod abaixo em todas as pag para exigir login
    const token = sessionStorage.getItem("token")
    console.log(token)
    if(!token) {
        window.location.href = "/";
    }


    
 
    const [medalsTechnician, setmedalsTechnician] = useState([])
    
   

    useEffect(() => {
 
        async function getMedals(){
          try {
            const response = await fetch (`${serverIP}/Medalhas`, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'x-access-token': token

              }
            })
 
            const data = await response.json()
            setmedalsTechnician(data.medalsTechnician)

            console.log(data)
          
         } catch (error){
           console.log('Erro ao buscar dados',error)
           }
       }
       getMedals({serverIP});
 
   }, [serverIP]);
 
 

     
   
    return (

     <div className="todocontainer">
         <Navmenu /> 
         <BoxPerfil serverIP={serverIP}/>
            
            <div id="titulo-config">
            <h2 className="titulodapagina">Meu Perfil</h2>
                <div id="config">
                    <Link to="/Config"  
                    data-tooltip-id="nomeItem"
                    data-tooltip-content={status ? status : 'Configurações'}
                    data-tooltip-place="top">
                    <img src={Ajustes} alt="config"/>
                   </Link> <Tooltip id="config" />
                </div>
            </div>
         <Habilidades serverIP={serverIP}/>
        
        
        <div className="tabela-medalhas-recompensas">
        
            <div className="cabecalho-medalhas">Medalhas</div>
            {medalsTechnician.map((medal, index) => (
                
             <div key={index} className="medalhas-adquiridas">
                <div className="coluna-medalhas"
                data-tooltip-id="nomeItem"
                    data-tooltip-content={status ? status : medal.DESCRICAO_MEDALHA}
                    data-tooltip-place="top">
                <img className= "icon-medalhas-perfil" src={Premio}/> 
                <Tooltip id="medal" />
                    <h4>{medal.NOME_MEDALHA}</h4>
                    <p></p>
                </div>

                  {/* <div className="coluna-medalhas">
                  <img className= "icon-medalhas-perfil" src={Premio}/> 
                    <h4>{medal.NOME_MEDALHA}</h4>
                     <p></p>
                 </div> */}
                
                 {/* <div className="coluna-medalhas">
                 <img className= "icon-medalhas-perfil" src={Premio}/> 
                    <h4>{NOME_MEDALHAS3}</h4>
                    <p>Temporada 2</p>
                 </div>
                  
                 <div  className="coluna-medalhas">
                 <img className= "icon-medalhas-perfil" src={Premio}/> 
                   <h4>{NOME_MEDALHAS4}</h4>
                    <p>Temporada 3</p>
                </div>  */}
            </div>
            
            ))}
            </div>
        
       
    

     </div>
    )
}

export default Perfil