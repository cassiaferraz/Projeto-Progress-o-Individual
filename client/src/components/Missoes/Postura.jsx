import { useState, useEffect } from "react";

import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg"

export default function Postura({ serverIP }){
    const [POSTURA_COMUNICACAO, setCOMUNICACAO] = useState('')
    const [POSTURA_UNIFORME, setUNIFORME] = useState('')
    const [POSTURA_CRACHA, setCRACHA] = useState('')
    const [POSTURA_BOTA, setBOTA] = useState('')
    const [POSTURA_MALA, setMALA] = useState('')

    const [POSTURA_COMUNICACAO1, setCOMUNICACAO1] = useState('')
    const [POSTURA_UNIFORME1, setUNIFORME1] = useState('')
    const [POSTURA_CRACHA1, setCRACHA1] = useState('')
    const [POSTURA_BOTA1, setBOTA1] = useState('')
    const [POSTURA_MALA1, setMALA1] = useState('')

    
    const POSTURA_COMUNICACAOnull = "null"
    const POSTURA_MALAnull = "null"
    const POSTURA_CRACHAnull = "null"
    const POSTURA_UNIFORMEnull = "null"
    const POSTURA_BOTAnull = "null"

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

          setCOMUNICACAO1(data[1].POSTURA_COMUNICACAO)
          sessionStorage.setItem('posturacomunicacao1', data.POSTURA_COMUNICACAO)
          setUNIFORME1(data[1].POSTURA_UNIFORME)
          sessionStorage.setItem('posturauniforme1', data.POSTURA_UNIFORME)
          setCRACHA1(data[1].POSTURA_CRACHA)
          sessionStorage.setItem('posturacracha1', data.POSTURA_CRACHA)
          setBOTA1(data[1].POSTURA_BOTA)
          sessionStorage.setItem('posturabota1', data.POSTURA_BOTA)
          setMALA1(data[1].POSTURA_MALA)
          sessionStorage.setItem('posturamala1', data.POSTURA_MALA)

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
                    
                    {POSTURA_COMUNICACAO1 === true ? (
                    <button className="finish-todo"></button>) : 
                    POSTURA_COMUNICACAO1 === false ? 
                    (<button className="remove-todo"></button>) : 
                    (<button className="null"></button>)}

                    {(POSTURA_COMUNICACAOnull == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_COMUNICACAO={POSTURA_COMUNICACAOnull}/>}
                    </div>  

{/* ITEM 2 DE POSTURA */}
                    <div className= "todo">
                        <h5 className="atribuicao">Uniforme</h5>
                        {POSTURA_UNIFORME === true ? (
                        <button className="finish-todo"></button>) : 
                        POSTURA_UNIFORME === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {POSTURA_UNIFORME1 === true ? (
                        <button className="finish-todo"></button>) : 
                        POSTURA_UNIFORME1 === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(POSTURA_UNIFORMEnull == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_UNIFORME={POSTURA_UNIFORMEnull}/>}
 </div>
{/* ITEM 3 DE POSTURA */}
                    <div class= "todo">
                        <h5 className="atribuicao">Bota</h5>
                        {POSTURA_BOTA=== true ? (
                        <button className="finish-todo"></button>) : 
                        POSTURA_BOTA=== false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {POSTURA_BOTA1=== true ? (
                        <button className="finish-todo"></button>) : 
                        POSTURA_BOTA1=== false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(POSTURA_BOTAnull == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_BOTA={POSTURA_BOTAnull}/>}
                    </div>
                    <div class= "todo">
                        <h5 className="atribuicao">Crachá</h5>
                        {POSTURA_CRACHA === true ? (
                        <button className="finish-todo"></button>) : 
                        POSTURA_CRACHA === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {POSTURA_CRACHA1 === true ? (
                        <button className="finish-todo"></button>) : 
                        POSTURA_CRACHA1 === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(POSTURA_CRACHAnull == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_CRACHA={POSTURA_CRACHAnull}/>}
                    </div>

                    <div class= "todo">
                        <h5 className="atribuicao">Mala</h5>
                        {POSTURA_MALA === true ? (
                        <button className="finish-todo"></button>) : 
                        POSTURA_MALA === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {POSTURA_MALA1 === true ? (
                        <button className="finish-todo"></button>) : 
                        POSTURA_MALA1 === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(POSTURA_MALAnull == 'null') ? <button className="null"></button> : <NotNullButton POSTURA_MALA={POSTURA_MALAnull}/>}
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