import { useState, useEffect } from 'react'
import { Tooltip } from 'react-tooltip'
import Navmenu from '../Navbar/Navmenu'
import LogoutButton from '../userSessions/Logout/LogoutButton'

import '../Desafios/desafios.css'
import "../Navbar/navmenu.css"

import BoxPerfil from '../meu-perfil/BoxPerfil/BoxPerfil'

import coin from "/img/svgs/moedaroxa.svg"


export default function Desafios ({serverIP}) {
    const token = sessionStorage.getItem("token")
    console.log(token)
    if(!token) {
        window.location.href = "/";
    }

    //FECH DESAFIOS
    const [ID_COLABORADOR, setID_COLABORADOR] = useState('')
    const [NOME, setNOME] = useState('')
    const [DESCRICAO, setDESCRICAO] = useState('')
    const [STATUS, setSTATUS] = useState('')
    const [MOEDAS, setMOEDAS] = useState('')
    const [XP, setXP] = useState('')



    
    const [NOME1, setNOME1] = useState('')
    const [DESCRICAO1, setDESCRICAO1] = useState('')
    const [STATUS1, setSTATUS1] = useState('')
    const [MOEDAS1, setMOEDAS1] = useState('')
    const [XP1, setXP1] = useState('')


    
    const [NOME2, setNOME2] = useState('')
    const [DESCRICAO2, setDESCRICAO2] = useState('')
    const [STATUS2, setSTATUS2] = useState('')
    const [MOEDAS2, setMOEDAS2] = useState('')
    const [XP2, setXP2] = useState('')

   

    // const token = sessionStorage.getItem('token')
   

   useEffect(() => {
 
     async function pegarDadosDesafios(){
       try {
         const response = await fetch (`${serverIP}/Challenge`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': token

           }
         })
 
         const data = await response.json()
         // setTecnico(data[0].tecnico.ID_TECNICO);
         setID_COLABORADOR(data[0].ID_COLABORADOR)
         setNOME(data[0].NOME);
         setDESCRICAO(data[0].DESCRICAO);
         setSTATUS(data[0].STATUS);
         setMOEDAS(data[0].MOEDAS);
         setXP(data[0].XP);

        
         setNOME1(data[1].NOME);
         setDESCRICAO1(data[1].DESCRICAO);
         setSTATUS1(data[1].STATUS);
         setMOEDAS1(data[1].MOEDAS);
         setXP1(data[1].XP);

        
         setNOME2(data[2].NOME);
         setDESCRICAO2(data[2].DESCRICAO);
         setSTATUS2(data[2].STATUS);
         setMOEDAS2(data[2].MOEDAS);
         setXP2(data[2].XP);
         
        
 
         console.log(data)
         console.log(data[0])
      } catch (error){
        console.log('Erro ao buscar dados',error)
        }
 
      
     }
     pegarDadosDesafios({serverIP});
 
   }, [serverIP])


    return (
    <div className="todocontainer">
          <Navmenu />
          <BoxPerfil serverIP={serverIP}/>

          <div id="pag-desafios">
                <div id="sair-app">
                        <h2 className="titulodapagina">Meus Desafios</h2>
                        <LogoutButton />
                </div>

             <div className='coluna-tabela-desafios'>
                    <li>Desafios</li>
                    <li>Moedas</li>
                    <li>XP</li>
             </div>

                <div className='corpodatabela-desafios'>
                    <div className='linha-tabela-desafios'>
                        <h4                     
                        data-tooltip-id="nomeItem"
                        data-tooltip-content={status ? status : NOME}
                        data-tooltip-place="top">{NOME}</h4>
                        <Tooltip id="nomeItem" />
                        <div>
                          <p>{MOEDAS}<img className= "moeda-roxa" src={coin} /></p>                          
                        </div>
                        <div>
                         <p>{XP} EXP</p>     
                        </div>
                    </div>
                    <p>{DESCRICAO} </p>

                    <div className='linha-tabela-desafios'>
                    <h4                     
                        data-tooltip-id="nomeItem"
                        data-tooltip-content={status ? status : NOME1}
                        data-tooltip-place="top">{NOME1}</h4>
                        <Tooltip id="nomeItem" />
                        <div>
                          <p>{MOEDAS1}<img className= "moeda-roxa" src={coin} /></p>                          
                        </div>
                        <div>
                         <p>{XP1} EXP</p>     
                        </div>
                    </div>
                    <p>{DESCRICAO1} </p>

                     <div className='linha-tabela-desafios'>
                     <h4                     
                        data-tooltip-id="nomeItem"
                        data-tooltip-content={status ? status : NOME2}
                        data-tooltip-place="top">{NOME2}</h4>
                        <Tooltip id="nomeItem" />
                        <div>
                          <p>{MOEDAS2}<img className= "moeda-roxa" src={coin} /></p>                          
                        </div>
                        <div>
                         <p>{XP2} EXP</p>     
                        </div>
                    </div>
                    <p>{DESCRICAO2} </p>

 
                </div>

          </div>
    </div>

        )
}