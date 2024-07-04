import Navmenu from "../Navbar/Navmenu"
import '../meu-perfil/Perfil/Perfil'
import BoxPerfil from "../meu-perfil/BoxPerfil/BoxPerfil"

import Laudos from "./Laudos"
import Postura from "./Postura"
import Veivulo from "./Veiculo"
import Assiduidade from "./Assiduidade"
import QualityProgressIcon from "./QualityProgresso/QualityProgressIcon"

import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg"

import { useState, useEffect, useContext} from 'react'

import '../Missoes/missoes.css'
import '../pages/pages.css'
import LogoutButton from "../userSessions/Logout/LogoutButton"

import UserContext from '../meu-perfil/BoxPerfil/UserContext';


export default function Missoes () {
    // const token = sessionStorage.getItem("token")
    // console.log(token)
    // if(!token) {
    //     window.location.href = "/perfil";
    // }

    
  const { user, setUser } = useContext(UserContext);

  // Função para completar missão de qualidade
  function completeQualityMission() {
    // Verifique se a missão de qualidade foi concluída
    if (TDNA >= 5 && IFI >= 1 && IRR >= 20) {
      // Atualize o xp e as moedas do usuário
      setUser(user => ({
        ...user,
        xp: user.xp + 250,  
        moedas: user.moedas + 250  
      }));
    }
  }

    const [TDNA, setTDNA] = useState('')
    const [IFI, setIFI] = useState('')
    const [IRR, setIRR] = useState('')
    const [FISCALIZACAO, setFISCALIZACAO] = useState('')
    const FISCALIZACAO2 = "null"
    

   useEffect(() => {
 
     async function pegarDadosQualidade(){
       try {
         const response = await fetch ('http://localhost:3000/indicadores', {method: 'GET'
       // headers:{
       //   'Content-Type': 'application/json',
       //     }
         })
 
         const data = await response.json()
         setTDNA(data[0].TDNA);
         setIFI(data[0].IFI);
         setIRR(data[0].IRR);
         setFISCALIZACAO(data[0].FISCALIZACAO)
 
         console.log(data[0].TDNA)
         console.log(data[0].IFI)
         console.log(data[0].IRR)
 
         // console.log(response);
         // console.log(response.json());
         console.log(data)
         console.log(data[0])
      } catch (error){
        console.log('Erro ao buscar dados',error)
        }
    } 
    pegarDadosQualidade();

}, [])



    return (
    <>
     <Navmenu />
      <div className="todocontainer">
            <BoxPerfil />
                <div id="paginamissoes">
                       <h2 className="titulodapagina">Missões</h2>
                       <LogoutButton/>
                </div>
             
                        <Laudos />

                    <div className= "todo">
                    <div className="atributodeavaliacao">
                        <h3>Qualidade</h3>
                        <img className="check" src={check} onClick={completeQualityMission} />+250
                        <img className="moeda-roxa" src={coin} />   +250 EXP
                    </div>
                    </div>   
                    
                    <div className= "todo">
                        <h5 className="atribuicao">TDNA:<QualityProgressIcon
                         value= {TDNA}
                         realMax= "5"
                         referenceValue="5"
                         
                        /></h5> 
                    </div> 

                    <div className= "todo">
                        <h5 className="atribuicao">IFI: <QualityProgressIcon
                         value= {IFI}
                         referenceValue="1"
                         percent= "true"
                         style={{ backgroundColor: IFI >= 1 ? 'blue' : 'yellow' }}
                        /></h5>
                    </div> 

                    <div className= "todo">
                        <h5 className="atribuicao">IRR: <QualityProgressIcon 
                        value= {IRR}
                        referenceValue="1"
                        percent= "true"/></h5>
                    </div> 

                    <div className= "todo">
                        <h5 className="atribuicao">Fiscalização</h5>
                        {((FISCALIZACAO == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)} 
                        {((FISCALIZACAO == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)} 
                        {(FISCALIZACAO2 == 'null') ? <button className="null"></button> : <NotNullButton FISCALIZACAO={FISCALIZACAO2}/>}
                        {(FISCALIZACAO2 == 'null') ? <button className="null"></button> : <NotNullButton FISCALIZACAO={FISCALIZACAO2}/>}
                    </div>  

 {/* ATRIBUTO NOVO */}                       

                    <Postura />

{/* ATRIBUTO NOVO */}

                    <Veivulo />

{/* ATRIBUTO NOVO */}  
                    <Assiduidade/>

                
            </div>
        

    </>
    )
}

function NotNullButton({FISCALIZACAO}){
    return (
        <div>
              <>
        {((FISCALIZACAO == true) ? 
        <button className="finish-todo"></button> : 
        <button className="remove-todo"></button>)}
        </>

        </div>
    )
}


{/*                   
                <div id="toolbar">
                        <h3>Filtrar: <i className="fa-solid fa-list-check"></i></h3>
                            
                        <select id="filter-select">
                            <option value="all">Todos</option>
                            <option value="done">Feito</option>
                            <option value="todo">A fazer</option>
                            <option value="todo">Incompleto</option>
                        </select>
                </div> */}