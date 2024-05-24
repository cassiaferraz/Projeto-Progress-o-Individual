import { useState, useEffect } from "react";

import coin from "../../../public/img/svgs/moedaroxa.svg"
import xmark from "../../../public/img/svgs/xmark.svg"

export default function Veivulo(){
    const [LIMPEZAINTERNA, setLIMPEZAINTERNA] = useState('')
    const [LIMPEZAEXTERNA, setLIMPEZAEXTERNA] = useState('')
    const [ORGANIZACAOFRENTE, setORGANIZACAOFRENTE] = useState('')
    const [ORGANIZACAOBAU, setORGANIZACAOBAU] = useState('')
    const [RECARGA, setRECARGA] = useState('')
    const [MULTAS, setMULTAS] = useState('')
    const [SINISTROS, setSINISTROS] = useState('')
    const LIMPEZAINTERNA2 = "null"
    const LIMPEZAEXTERNA2 = "null"
    const ORGANIZACAOFRENTE2 = "null"
    const ORGANIZACAOBAU2 = "null"
    const RECARGA2 = "null"
    const MULTAS2 = "null"
    const SINISTROS2 = "null"
 
    useEffect(() => {
  
      async function pegarDadosVeivulo(){
        try {
          const response = await fetch ('http://localhost:3000/avaliacao/user', {method: 'GET'
        
          })
  
          const data = await response.json()
          setLIMPEZAINTERNA(data[0].LIMPEZAINTERNA)
          setLIMPEZAEXTERNA(data[0].LIMPEZAEXTERNA)
          setORGANIZACAOFRENTE(data[0].ORGANIZACAOFRENTE)
          setORGANIZACAOBAU(data[0].ORGANIZACAOBAU)
          setMULTAS(data[0].MULTAS)
          setRECARGA(data[0].RECARGA)
          setSINISTROS(data[0].SINISTROS)
  
        //   console.log(data[0].COMUNICACAO)
  
          console.log(data)
          console.log(data[0])
       } catch (error){
         console.log('Erro ao buscar dados',error)
         }
     } 
     pegarDadosVeivulo();
 
 }, [])

        return(
          <div>
            <div className= "todo">
                <div className="atributodeavaliacao">
                    <h3>Veículo </h3>
                    <img className="xmark" src={xmark} />+200
                    <img className= "moeda-roxa" src={coin} />+200 EXP
                 </div>
              
            </div>

{/* ITEM 1 DE Frota */}
                    <div class= "todo">
                        <h5 className="atribuicao">Limpeza Interna</h5>
                        {((LIMPEZAINTERNA == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)}
                        {((LIMPEZAINTERNA == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)}
                        {(LIMPEZAINTERNA2 == 'null') ? <button className="null"></button> : <NotNullButton LIMPEZAINTERNA={LIMPEZAINTERNA2}/>}
                        {(LIMPEZAINTERNA2 == 'null') ? <button className="null"></button> : <NotNullButton LIMPEZAINTERNA={LIMPEZAINTERNA2}/>}
                    </div> 
{/* ITEM 2 DE Frota */}

                    <div class= "todo">
                        <h5 className="atribuicao">Limpeza Externa</h5>
                        {((LIMPEZAEXTERNA == false) ? <button className="finish-todo"></button> : <button className="finish-todo"></button>)}
                        {((LIMPEZAEXTERNA == false) ? <button className="finish-todo"></button> : <button className="finish-todo"></button>)}
                        {(LIMPEZAEXTERNA2 == 'null') ? <button className="null"></button> : <NotNullButton LIMPEZAEXTERNA={LIMPEZAEXTERNA2}/>}
                        {(LIMPEZAEXTERNA2 == 'null') ? <button className="null"></button> : <NotNullButton LIMPEZAEXTERNA={LIMPEZAEXTERNA2}/>}
                    </div> 
{/* ITEM 3 DE Frota */}

                    <div class= "todo">
                        <h5 className="atribuicao">Organização Frente</h5>
                        {((ORGANIZACAOFRENTE == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)}
                        {((ORGANIZACAOFRENTE == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)}
                        {(ORGANIZACAOFRENTE2 == 'null') ? <button className="null"></button> : <NotNullButton ORGANIZACAOFRENTE={ORGANIZACAOFRENTE2}/>}
                        {(ORGANIZACAOFRENTE2 == 'null') ? <button className="null"></button> : <NotNullButton ORGANIZACAOFRENTE={ORGANIZACAOFRENTE2}/>}
                    </div> 

                    <div class= "todo">
                        <h5 className="atribuicao">Sinistros</h5>
                        {((SINISTROS == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)}
                        {((SINISTROS == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)}
                        {(SINISTROS2 == 'null') ? <button className="null"></button> : <NotNullButton SINISTROS={SINISTROS2}/>}
                        {(SINISTROS2 == 'null') ? <button className="null"></button> : <NotNullButton SINISTROS={SINISTROS2}/>}
                    </div> 

                    <div class= "todo">
                        <h5 className="atribuicao">Horário-Recarga</h5>
                        {((RECARGA == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)}
                        {((RECARGA == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)}
                        {(RECARGA2 == 'null') ? <button className="null"></button> : <NotNullButton RECARGA={RECARGA2}/>}
                        {(RECARGA2 == 'null') ? <button className="null"></button> : <NotNullButton RECARGA={RECARGA2}/>}
                    </div> 

                    <div class= "todo">
                        <h5 className="atribuicao">Multas</h5>
                        {((MULTAS == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)}
                        {((MULTAS == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)}
                        {(MULTAS2 == 'null') ? <button className="null"></button> : <NotNullButton MULTAS={MULTAS2}/>}
                        {(MULTAS2 == 'null') ? <button className="null"></button> : <NotNullButton MULTAS={MULTAS2}/>}
                    </div> 

                    <div class= "todo">
                        <h5 className="atribuicao">Organização Baú</h5>
                        {((ORGANIZACAOBAU == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)}
                        {((ORGANIZACAOBAU == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)}  
                        {(ORGANIZACAOBAU2 == 'null') ? <button className="null"></button> : <NotNullButton ORGANIZACAOBAU={ORGANIZACAOBAU2}/>}
                        {(ORGANIZACAOBAU2 == 'null') ? <button className="null"></button> : <NotNullButton ORGANIZACAOBAU={ORGANIZACAOBAU2}/>}
                    </div>
            </div>
        )
}     

 function NotNullButton({ORGANIZACAOBAU}){
     return (
         <>
         {((ORGANIZACAOBAU == true) ? 
         <button className="finish-todo"></button> : 
         <button className="remove-todo"></button>)}
         </>
     )
 }