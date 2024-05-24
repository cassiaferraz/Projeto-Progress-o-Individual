import Navmenu from "../Navbar/Navmenu"
import '../meu-perfil/Perfil'
import BoxPerfil from "../meu-perfil/BoxPerfil/BoxPerfil"

import Laudos from "./Laudos"
import Postura from "./Postura"
import Veivulo from "./Veiculo"
import Assiduidade from "./Assiduidade"
import QualityProgressIcon from "./QualityProgresso/QualityProgressIcon"

import coin from "../../../public/img/svgs/moedaroxa.svg"
import check from "../../../public/img/svgs/check.svg"
import xmark from "../../../public/img/svgs/xmark.svg"

import { useState, useEffect} from 'react'

import '../Missoes/missoes.css'
import '../pages/pages.css'

export default function Missoes () {

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
         setLAUDO(data[0].LAUDO)
 
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

                <h2 className="titulodapagina">Missões</h2>
                        <Laudos />

                    {/* ATRIBUTO NOVO */}
                    <div className= "todo">
                        <div className="atributodeavaliacao">
                        <h3>Qualidade</h3>
                        <img className="check"src={check} />+250
                        <img className= "moeda-roxa" src={coin} />   +250 EXP
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

                        {FISCALIZACAO === true ? (<button className="finish-todo"></button>) : (<button className="remove-todo"></button>)} 

                        {(FISCALIZACAO2 == 'null') ? <button className="null"></button> : <NotNullButton FISCALIZACAO={FISCALIZACAO2}/>}

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

function NotNullButton({FISCALIZACAO, LAUDO}){
    return (
        <div>
              <>
        {((FISCALIZACAO == true) ? 
        <button className="finish-todo"></button> : 
        <button className="remove-todo"></button>)}
        </>
        <>
        {((LAUDO == true) ? 
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