import { useState, useEffect } from "react";

import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg"

export default function Assiduidade({serverIP}){
    
    const [ASSIDUIDADE_ALMOX, setASSIDUIDADE_ALMOX] = useState('')
    const [ASSIDUIDADE_BANCO, setASSIDUIDADE_BANCO] = useState('')
    const [ASSIDUIDADE_ROTA, setASSIDUIDADE_ROTA] = useState('')
    const [ASSIDUIDADE_ALMOCO, setASSIDUIDADE_ALMOCO] = useState('')
    const [ASSIDUIDADE_INICIO, setASSIDUIDADE_INICIO] = useState('')
    const ASSIDUIDADE_ALMOX2 = "null"
    const ASSIDUIDADE_BANCO2 = "null"
    const ASSIDUIDADE_ROTA2 = "null"
    const ASSIDUIDADE_ALMOCO2 = "null"
    const ASSIDUIDADE_INICIO2 = "null"

    const token = sessionStorage.getItem('token')

    useEffect(() => {

        async function pegarDadosAssiduidade(){
          try {
            const response = await fetch (`${serverIP}/avaliacao/user`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'x-access-token': token
              }

            })

            const data = await response.json()
            //console.log(data)
            setASSIDUIDADE_ALMOX(data[0].ASSIDUIDADE_ALMOX)
            sessionStorage.setItem('assiduidadealmox', data.ASSIDUIDADE_ALMOX)
            setASSIDUIDADE_BANCO(data[0].ASSIDUIDADE_BANCO)
            sessionStorage.setItem('assiduidadebanco', data.ASSIDUIDADE_BANCO)
            setASSIDUIDADE_ROTA(data[0].ASSIDUIDADE_ROTA)
            sessionStorage.setItem('assiduidaderota', data.ASSIDUIDADE_ROTA)
            setASSIDUIDADE_ALMOCO(data[0].ASSIDUIDADE_ALMOCO)
            sessionStorage.setItem('assiduidadealmoco', data.ASSIDUIDADE_ALMOCO)
            setASSIDUIDADE_INICIO(data[0].ASSIDUIDADE_INICIO)
            sessionStorage.setItem('assiduidadeinicio', data.ASSIDUIDADE_INICIO)

             console.log(data)
            // console.log(data[0])
         } catch (error){
           console.log('Erro ao buscar dados',error)
           }
       }
       pegarDadosAssiduidade();
   }, [serverIP])



     return(
        <div>
            <div className= "todo">
                <div  className="atributodeavaliacao">
                <h3>Assiduidade</h3>
                    <img className="check"src={check} /> +200
                    <img className= "moeda-roxa" src={coin}/>+200 EXP
                </div>
            </div>

                <div class= "todo">
                    <h5 className="atribuicao">Comparecimento Alm</h5>
                    {ASSIDUIDADE_ALMOX === true ? (
                    <button className="finish-todo"></button>) : 
                    ASSIDUIDADE_ALMOX === false ? 
                    (<button className="remove-todo"></button>) : 
                    (<button className="null"></button>)}

                    {(ASSIDUIDADE_ALMOX2 == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_ALMOX={ASSIDUIDADE_ALMOX2}/>}
                    {(ASSIDUIDADE_ALMOX2 == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_ALMOX={ASSIDUIDADE_ALMOX2}/>}
                    {/* {(ASSIDUIDADE_ALMOX2 == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_ALMOX={ASSIDUIDADE_ALMOX2}/>} */}
                </div>
                        
                <div class= "todo">
                    <h5 className="atribuicao">Horário de Almoço</h5>
                    {ASSIDUIDADE_ALMOCO === true ? (
                    <button className="finish-todo"></button>) : 
                    ASSIDUIDADE_ALMOCO === false ? 
                    (<button className="remove-todo"></button>) : 
                    (<button className="null"></button>)}


                    {(ASSIDUIDADE_ALMOCO2 == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_ALMOCO={ASSIDUIDADE_ALMOCO2}/>}
                    {(ASSIDUIDADE_ALMOCO2 == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_ALMOCO={ASSIDUIDADE_ALMOCO2}/>}
                </div>

                <div class= "todo">
                    <h5 className="atribuicao">Gestão de Rota</h5>
                    {ASSIDUIDADE_ROTA === true ? (
                    <button className="finish-todo"></button>) : 
                    ASSIDUIDADE_ROTA === false ? 
                    (<button className="remove-todo"></button>) : 
                    (<button className="null"></button>)}

                    {(ASSIDUIDADE_ROTA2 == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_ROTA={ASSIDUIDADE_ROTA2}/>}
                    {(ASSIDUIDADE_ROTA2 == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_ROTA={ASSIDUIDADE_ROTA2}/>}
                </div>

                <div class= "todo">
                    <h5 className="atribuicao">Banco de Horas</h5>
                    {ASSIDUIDADE_BANCO === true ? (
                    <button className="finish-todo"></button>) : 
                    ASSIDUIDADE_BANCO === false ? 
                    (<button className="remove-todo"></button>) : 
                    (<button className="null"></button>)}

                    {(ASSIDUIDADE_BANCO2 == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_BANCO={ASSIDUIDADE_BANCO2}/>}
                    {(ASSIDUIDADE_BANCO2 == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_BANCO={ASSIDUIDADE_BANCO2}/>}
                </div>

                <div class= "todo">
                    <h5 className="atribuicao">Inicio Atividade</h5>
                    {ASSIDUIDADE_INICIO === true ? (
                    <button className="finish-todo"></button>) : 
                    ASSIDUIDADE_INICIO === false ? 
                    (<button className="remove-todo"></button>) : 
                    (<button className="null"></button>)}

                    {(ASSIDUIDADE_INICIO2 == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_INICIO={ASSIDUIDADE_INICIO2}/>}
                    {(ASSIDUIDADE_INICIO2 == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_INICIO={ASSIDUIDADE_INICIO2}/>}
                </div>
        </div>
    )
}

function NotNullButton({ASSIDUIDADE_INICIO}){
    return (
        <>
        {((ASSIDUIDADE_INICIO == true) ?
        <button className="finish-todo"></button> :
        <button className="remove-todo"></button>)}
        </>
    )
}