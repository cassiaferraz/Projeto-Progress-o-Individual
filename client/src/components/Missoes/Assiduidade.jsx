import { useState, useEffect } from "react";

import coin from "../../../public/img/svgs/moedaroxa.svg"
import check from "../../../public/img/svgs/check.svg"

export default function Assiduidade(){
    const [ALMOX, setALMOX] = useState('')
    const [BANCO, setBANCO] = useState('')
    const [ROTA, setROTA] = useState('')
    const [ALMOCO, setALMOCO] = useState('')
    const [INICIO, setINICIO] = useState('')
    const ALMOX2 = "null"
    const BANCO2 = "null"
    const ROTA2 = "null"
    const ALMOCO2 = "null"
    const INICIO2 = "null"
  
 
    useEffect(() => {
  
      async function pegarDadosAssiduidade(){
        try {
          const response = await fetch ('http://localhost:3000/avaliacao/user', {method: 'GET'
        
          })
  
          const data = await response.json()
          setALMOX(data[0].ALMOX)
          setBANCO(data[0].BANCO)
          setROTA(data[0].ROTA)
          setALMOCO(data[0].ALMOCO)
          setINICIO(data[0].INICIO)
          
   
          console.log(data)
          console.log(data[0])
       } catch (error){
         console.log('Erro ao buscar dados',error)
         }
     } 
     pegarDadosAssiduidade();
 }, [])

 

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
                        {((ALMOX == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)} 

                        {((ALMOX == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)} 

                        {(ALMOX2 == 'null') ? <button className="null"></button> : <NotNullButton ALMOX={ALMOX2}/>}

                        {(ALMOX2 == 'null') ? <button className="null"></button> : <NotNullButton ALMOX={ALMOX2}/>}
                    </div>   
                    <div class= "todo">
                        <h5 className="atribuicao">Horário de Almoço</h5>
                        {((ALMOCO == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)} 

                        {((ALMOCO == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)} 

                        {(ALMOCO2 == 'null') ? <button className="null"></button> : <NotNullButton ALMOCO={ALMOCO2}/>}

                        {(ALMOCO2 == 'null') ? <button className="null"></button> : <NotNullButton ALMOCO={ALMOCO2}/>}
                    </div> 

                    <div class= "todo">
                        <h5 className="atribuicao">Gestão de Rota</h5>
                        {((ROTA == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)} 

                        {((ROTA == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)} 

                        {(ROTA2 == 'null') ? <button className="null"></button> : <NotNullButton ROTA={ROTA2}/>}

                        {(ROTA2 == 'null') ? <button className="null"></button> : <NotNullButton ROTA={ROTA2}/>}
                    </div> 

                    <div class= "todo">
                        <h5 className="atribuicao">Banco de Horas</h5>
                        {((BANCO == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)} 

                        {((BANCO == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)} 

                        {(BANCO2 == 'null') ? <button className="null"></button> : <NotNullButton BANCO={BANCO2}/>}

                        {(BANCO2 == 'null') ? <button className="null"></button> : <NotNullButton BANCO={BANCO2}/>}
                    </div> 

                    <div class= "todo">
                        <h5 className="atribuicao">Inicio Atividade</h5>
                        {((INICIO == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)} 

                        {((INICIO == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)} 

                        {(INICIO2 == 'null') ? <button className="null"></button> : <NotNullButton INICIO={INICIO2}/>}

                        {(INICIO2 == 'null') ? <button className="null"></button> : <NotNullButton INICIO={INICIO2}/>}
                    </div>
                </div>
        )
}      

function NotNullButton({INICIO}){
    return (
        <>
        {((INICIO == true) ? 
        <button className="finish-todo"></button> : 
        <button className="remove-todo"></button>)}
        </>
    )
}