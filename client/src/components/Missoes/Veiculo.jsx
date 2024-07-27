import { useState, useEffect } from "react";

import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg"

export default function Veivulo({ serverIP }){

    
    const [VEICULO_LIMPEZAINTERNA, setVEICULO_LIMPEZAINTERNA] = useState('')
    const [VEICULO_LIMPEZAEXTERNA, setVEICULO_LIMPEZAEXTERNA] = useState('')
    const [VEICULO_ORGANIZACAOFRENTE, setVEICULO_ORGANIZACAOFRENTE] = useState('')
    const [VEICULO_ORGANIZACAOBAU, setVEICULO_ORGANIZACAOBAU] = useState('')
    const [VEICULO_RECARGA, setVEICULO_RECARGA] = useState('')
    const [VEICULO_MULTAS, setVEICULO_MULTAS] = useState('')
    const [VEICULO_SINISTROS, setVEICULO_SINISTROS] = useState('')
    const VEICULO_LIMPEZAINTERNA2 = "null"
    const VEICULO_LIMPEZAEXTERNA2 = "null"
    const VEICULO_ORGANIZACAOFRENTE2 = "null"
    const VEICULO_ORGANIZACAOBAU2 = "null"
    const VEICULO_RECARGA2 = "null"
    const VEICULO_MULTAS2 = "null"
    const VEICULO_SINISTROS2 = "null"
 
    const token = sessionStorage.getItem('token')
 
    useEffect(() => {
  
      async function pegarDadosVeivulo(){
        try {
          const response = await fetch (`${serverIP}/avaliacao/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        
          })
  
          const data = await response.json()
        //   console.log(data)
          setVEICULO_LIMPEZAINTERNA(data[0].VEICULO_LIMPEZAINTERNA)
          sessionStorage.setItem('veiculointerna', data.VEICULO_LIMPEZAINTERNA)
          setVEICULO_LIMPEZAEXTERNA(data[0].VEICULO_LIMPEZAEXTERNA)
          sessionStorage.setItem('veiculoexterna', data.VEICULO_LIMPEZAEXTERNA)
          setVEICULO_ORGANIZACAOFRENTE(data[0].VEICULO_ORGANIZACAOFRENTE)
          sessionStorage.setItem('veiculorganizacao', data.VEICULO_ORGANIZACAOFRENTE)
          setVEICULO_ORGANIZACAOBAU(data[0].VEICULO_ORGANIZACAOBAU)
          sessionStorage.setItem('veiculobau', data.VEICULO_ORGANIZACAOBAU)
          setVEICULO_MULTAS(data[0].VEICULO_MULTAS)
          sessionStorage.setItem('veiculomultas', data.VEICULO_MULTAS)
          setVEICULO_RECARGA(data[0].VEICULO_RECARGA)
          sessionStorage.setItem('veiculorecarga', data.VEICULO_RECARGA)
          setVEICULO_SINISTROS(data[0].VEICULO_SINISTROS)
          sessionStorage.setItem('veiculosinistros', data.VEICULO_SINISTROS)
  
        //   console.log(data[0].COMUNICACAO)
  
        //   console.log(data)
        //   console.log(data[0])
       } catch (error){
         console.log('Erro ao buscar dados',error)
         }
     } 
     pegarDadosVeivulo();
 
 }, [serverIP])

        return(
          <div>
            <div className= "todo">
                <div className="atributodeavaliacao">
                    <h3>Veículo </h3>
                    <img className="xmark" src={check} />+200
                    <img className= "moeda-roxa" src={coin} />+200 EXP
                 </div>
              
            </div>

{/* ITEM 1 DE Frota */}
                    <div class= "todo">
                        <h5 className="atribuicao">Limpeza Interna</h5>
                        {VEICULO_LIMPEZAINTERNA === true ? (
                        <button className="finish-todo"></button>) : 
                        VEICULO_LIMPEZAINTERNA === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(VEICULO_LIMPEZAINTERNA2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_LIMPEZAINTERNA={VEICULO_LIMPEZAINTERNA2}/>}
                        {(VEICULO_LIMPEZAINTERNA2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_LIMPEZAINTERNA={VEICULO_LIMPEZAINTERNA2}/>}
                    </div>  
{/* ITEM 2 DE Frota */}

                    <div class= "todo">
                        <h5 className="atribuicao">Limpeza Externa</h5>
                        {VEICULO_LIMPEZAEXTERNA === true ? (
                        <button className="finish-todo"></button>) : 
                        VEICULO_LIMPEZAEXTERNA === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(VEICULO_LIMPEZAEXTERNA2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_LIMPEZAEXTERNA={VEICULO_LIMPEZAEXTERNA2}/>}
                        {(VEICULO_LIMPEZAEXTERNA2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_LIMPEZAEXTERNA={VEICULO_LIMPEZAEXTERNA2}/>}
                    </div> 
{/* ITEM 3 DE Frota */}

                    <div class= "todo">
                        <h5 className="atribuicao">Organização Frente</h5>
                        {VEICULO_ORGANIZACAOFRENTE === true ? (
                        <button className="finish-todo"></button>) : 
                        VEICULO_ORGANIZACAOFRENTE === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(VEICULO_ORGANIZACAOFRENTE2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_ORGANIZACAOFRENTE={VEICULO_ORGANIZACAOFRENTE2}/>}
                        {(VEICULO_ORGANIZACAOFRENTE2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_ORGANIZACAOFRENTE={VEICULO_ORGANIZACAOFRENTE2}/>}
                    </div> 

                    <div class= "todo">
                        <h5 className="atribuicao">Sinistros</h5>
                        {VEICULO_SINISTROS === true ? (
                        <button className="finish-todo"></button>) : 
                        VEICULO_SINISTROS === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(VEICULO_SINISTROS2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_SINISTROS={VEICULO_SINISTROS2}/>}
                        {(VEICULO_SINISTROS2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_SINISTROS={VEICULO_SINISTROS2}/>}
                    </div> 

                    <div class= "todo">
                        <h5 className="atribuicao">Horário-Recarga</h5>
                        {VEICULO_RECARGA === true ? (
                        <button className="finish-todo"></button>) : 
                        VEICULO_RECARGA === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}
                        
                        {(VEICULO_RECARGA2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_RECARGA={VEICULO_RECARGA2}/>}
                        {(VEICULO_RECARGA2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_RECARGA={VEICULO_RECARGA2}/>}
                    </div> 

                    <div class= "todo">
                        <h5 className="atribuicao">Multas</h5>
                        {VEICULO_MULTAS === true ? (
                        <button className="finish-todo"></button>) : 
                        VEICULO_MULTAS === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(VEICULO_MULTAS2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_MULTAS={VEICULO_MULTAS2}/>}
                        {(VEICULO_MULTAS2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_MULTAS={VEICULO_MULTAS2}/>}
                    </div> 

                    <div class= "todo">
                        <h5 className="atribuicao">Organização Baú</h5>
                        {VEICULO_ORGANIZACAOBAU === true ? (
                        <button className="finish-todo"></button>) : 
                        VEICULO_ORGANIZACAOBAU === false ? 
                        (<button className="remove-todo"></button>) : 
                        (<button className="null"></button>)}

                        {(VEICULO_ORGANIZACAOBAU2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_ORGANIZACAOBAU={VEICULO_ORGANIZACAOBAU2}/>}
                        {(VEICULO_ORGANIZACAOBAU2 == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_ORGANIZACAOBAU={VEICULO_ORGANIZACAOBAU2}/>}
                    </div>
            </div>
        )
}     

function NotNullButton({VEICULO_LIMPEZAINTERNA}){
    return (
        <>
        {((VEICULO_LIMPEZAINTERNA == true) ? 
        <button className="finish-todo"></button> : 
        <button className="remove-todo"></button>)}
        </>
    )
}
