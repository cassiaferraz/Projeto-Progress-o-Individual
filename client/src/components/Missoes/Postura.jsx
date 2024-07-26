import { useState, useEffect } from "react";

import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg"

export default function Postura({ serverIP }){
    const [POSTURA_COMUNICACAO, setCOMUNICACAO] = useState('')
    const [POSTURA_UNIFORME, setUNIFORME] = useState('')
    const [POSTURA_CRACHA, setCRACHA] = useState('')
    const [POSTURA_BOTA, setBOTA] = useState('')
    const [POSTURA_MALA, setMALA] = useState('')
    const POSTURA_COMUNICACAO2 = "null"
    const POSTURA_MALA2 = "null"
    const POSTURA_CRACHA2 = "null"
    const POSTURA_UNIFORME2 = "null"
    const POSTURA_BOTA2 = "null"

    const token = sessionStorage.getItem('token')


    useEffect(() => {

      async function pegarDadosPostura(){
        try {
          const response = await fetch (`${serverIP}/avaliacao/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }

          })

          const data = await response.json()
          // console.log(data)
          setCOMUNICACAO(data[0].POSTURA_COMUNICACAO)
          sessionStorage.setItem('posturacomunicacao', data.POSTURA_COMUNICACAO)
          setUNIFORME(data[0].POSTURA_UNIFORME)
          sessionStorage.setItem('posturauniforme', data.POSTURA_UNIFORME)
          setCRACHA(data[0].POSTURA_CRACHA)
          sessionStorage.setItem('posturacracha', data.POSTURA_CRACHA)
          setBOTA(data[0].POSTURA_BOTA)
          sessionStorage.setItem('posturabota', data.POSTURA_BOTA)
          setMALA(data[0].POSTURA_MALA)
          sessionStorage.setItem('posturamala', data.POSTURA_MALA)

        //   console.log(data[0].COMUNICACAO)

          // console.log(data)
          // console.log(data[0])
       } catch (error){
         console.log('Erro ao buscar dados',error)
         }
     }
     pegarDadosPostura();

 }, [serverIP])

        return(
          <div>
            <div className= "todo">
                 <div className="atributodeavaliacao">
                    <h3>Postura</h3>
                     <img className="xmark"src={check} />+250
                     <img className= "moeda-roxa" src={coin}/>+250 EXP
                 </div>
            </div>

 {/* ITEM 1 DE POSTURA */}

                    <div className= "todo">
                        <h5 className="atribuicao">Comunicação</h5>
                    {POSTURA_COMUNICACAO === true ? (
                    <button className="finish-todo"></button>) : 
                    POSTURA_COMUNICACAO === false ? 
                    (<button className="remove-todo"></button>) : 
                    (<button className="null"></button>)}
                    
                    {(POSTURA_COMUNICACAO2 == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_COMUNICACAO={POSTURA_COMUNICACAO2}/>}
                    {(POSTURA_COMUNICACAO2 == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_COMUNICACAO={POSTURA_COMUNICACAO2}/>}
                    </div>  

{/* ITEM 2 DE POSTURA */}
                    <div className= "todo">
                        <h5 className="atribuicao">Uniforme</h5>
                        {POSTURA_UNIFORME === true ? (
                        <button className="finish-todo"></button>) : 
                        POSTURA_UNIFORME === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(POSTURA_UNIFORME2 == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_UNIFORME={POSTURA_UNIFORME2}/>}
                        {(POSTURA_UNIFORME2 == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_UNIFORME={POSTURA_UNIFORME2}/>}
 </div>
{/* ITEM 3 DE POSTURA */}
                    <div class= "todo">
                        <h5 className="atribuicao">Bota</h5>
                        {POSTURA_BOTA=== true ? (
                        <button className="finish-todo"></button>) : 
                        POSTURA_BOTA=== false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(POSTURA_BOTA2 == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_BOTA={POSTURA_BOTA2}/>}
                        {(POSTURA_BOTA2 == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_BOTA={POSTURA_BOTA2}/>}
                    </div>
                    <div class= "todo">
                        <h5 className="atribuicao">Crachá</h5>
                        {POSTURA_CRACHA === true ? (
                        <button className="finish-todo"></button>) : 
                        POSTURA_CRACHA === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(POSTURA_CRACHA2 == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_CRACHA={POSTURA_CRACHA2}/>}
                        {(POSTURA_CRACHA2 == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_CRACHA={POSTURA_CRACHA2}/>}
                    </div>

                    <div class= "todo">
                        <h5 className="atribuicao">Mala</h5>
                        {POSTURA_MALA === true ? (
                        <button className="finish-todo"></button>) : 
                        POSTURA_MALA === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(POSTURA_MALA2 == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_MALA={POSTURA_MALA2}/>}
                        {(POSTURA_MALA2 == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_MALA={POSTURA_MALA2}/>}
                    </div>
            </div>
        )
}

 function NotNullButton({POSTURA_COMUNICACAO}){
     return (
         <>
         {((POSTURA_COMUNICACAO == true) ? 
         <button className="finish-todo"></button> : 
         <button className="remove-todo"></button>)}
         </>
     )
 }