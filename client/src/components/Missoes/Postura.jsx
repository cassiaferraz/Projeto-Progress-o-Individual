import { useState, useEffect } from "react";

import coin from "../../../public/img/svgs/moedaroxa.svg"
import xmark from "../../../public/img/svgs/xmark.svg"

export default function Postura(){
    const [COMUNICACAO, setCOMUNICACAO] = useState('')
    const [UNIFORME, setUNIFORME] = useState('')
    const [CRACHA, setCRACHA] = useState('')
    const [BOTA, setBOTA] = useState('')
    const [MALA, setMALA] = useState('')
    const COMUNICACAO2 = "null"
    const MALA2 = "null"
    const CRACHA2 = "null"
    const UNIFORME2 = "null"
    const BOTA2 = "null"


    useEffect(() => {

      async function pegarDadosPostura(){
        try {
          const response = await fetch ('http://localhost:3000/avaliacao/user', {method: 'GET'

          })

          const data = await response.json()
          setCOMUNICACAO(data[0].COMUNICACAO)
          setUNIFORME(data[0].UNIFORME)
          setCRACHA(data[0].CRACHA)
          setBOTA(data[0].BOTA)
          setMALA(data[0].MALA)

        //   console.log(data[0].COMUNICACAO)

          console.log(data)
          console.log(data[0])
       } catch (error){
         console.log('Erro ao buscar dados',error)
         }
     }
     pegarDadosPostura();

 }, [])

        return(
          <div>
            <div className= "todo">
                 <div className="atributodeavaliacao">
                    <h3>Postura</h3>
                     <img className="xmark"src={xmark} />+250
                     <img className= "moeda-roxa" src={coin}/>+250 EXP
                 </div>
            </div>

 {/* ITEM 1 DE POSTURA */}

                    <div className= "todo">
                        <h5 className="atribuicao">Comunicação</h5>

                        {((COMUNICACAO == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)} 

                        {COMUNICACAO === true ? (<button className="finish-todo"></button>) : (<button className="remove-todo"></button>)}

                        {(COMUNICACAO2 == 'null') ? <button className="null"></button> : <NotNullButton COMUNICACAO={COMUNICACAO2}/>}

                        {(COMUNICACAO2 == 'null') ? <button className="null"></button> : <NotNullButton COMUNICACAO={COMUNICACAO2}/>}
                    </div>

{/* ITEM 2 DE POSTURA */}
                    <div className= "todo">
                        <h5 className="atribuicao">Uniforme</h5>
                        {((UNIFORME == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)} 

                        {((UNIFORME == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)}  

                        {(UNIFORME2 == 'null') ? <button className="null"></button> : <NotNullButton UNIFORME={UNIFORME2}/>}

                        {(UNIFORME2 == 'null') ? <button className="null"></button> : <NotNullButton UNIFORME={UNIFORME2}/>}
                    </div>
{/* ITEM 3 DE POSTURA */}
                    <div class= "todo">
                        <h5 className="atribuicao">Bota</h5>
                        {((BOTA == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)} 

                        {(BOTA2 == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>}

                        {(BOTA2 == 'null') ? <button className="null"></button> : <NotNullButton BOTA={BOTA2}/>}

                        {(BOTA2 == 'null') ? <button className="null"></button> : <NotNullButton BOTA={BOTA2}/>}
                    </div>
                    <div class= "todo">
                        <h5 className="atribuicao">Crachá</h5>
                        {((CRACHA == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)} 

                        {(CRACHA === true) ? (<button className="finish-todo"></button>) : (<button className="remove-todo"></button>)}

                        {(CRACHA2 == 'null') ? <button className="null"></button> : <NotNullButton CRACHA={CRACHA2}/>}

                        {(CRACHA2 == 'null') ? <button className="null"></button> : <NotNullButton CRACHA={CRACHA2}/>}
                    </div>
                    <div class= "todo">
                        <h5 className="atribuicao">Mala</h5>
                        {((MALA == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)} 

                        {((MALA == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)} 

                        {(MALA2 == 'null') ? <button className="null"></button> : <NotNullButton MALA={MALA2}/>}

                        {(MALA2 == 'null') ? <button className="null"></button> : <NotNullButton MALA={MALA2}/>}
                    </div>
            </div>
        )
}

 function NotNullButton({COMUNICACAO}){
     return (
         <>
         {((COMUNICACAO == true) ? 
         <button className="finish-todo"></button> : 
         <button className="remove-todo"></button>)}
         </>
     )
 }