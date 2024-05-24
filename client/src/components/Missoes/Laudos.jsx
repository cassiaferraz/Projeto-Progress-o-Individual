import coin from "../../../public/img/svgs/moedaroxa.svg"
import check from "../../../public/img/svgs/check.svg"

import { useState, useEffect} from 'react'
 
 export default function Laudos () {

    const [LAUDOS, setLAUDOS] = useState('')
    const LAUDOS2 = "null"

    useEffect(() => {
 
        async function pegarDadosLaudos(){
          try {
            const response = await fetch ('http://localhost:3000/indicadores', {method: 'GET'
          // headers:{
          //   'Content-Type': 'application/json',
          //     }
            })
    
            const data = await response.json()
            setLAUDOS(data[0].LAUDOS)
    
            console.log(data[0].LAUDOS)
          
    
            // console.log(response);
            // console.log(response.json());
            console.log(data)
            console.log(data[0])
         } catch (error){
           console.log('Erro ao buscar dados',error)
           }
       } 
       pegarDadosLaudos();
   
   }, [])
   
   return (
    <>
 {/* ATRIBUTO NOVO */}
                
                    <div className= "todo">
                        <div className="atributodeavaliacao">
                        <h3>Laudos</h3>
                        <img className="check"src={check} />
                        +250<img className= "moeda-roxa" src={coin} />   +250 EXP
                        </div>
                        
                    </div>   

{/* ITEM DE LAUDO */}
                    <div className= "todo">
                        <h5 className="atribuicao">Preenchidos</h5>
                        {((LAUDOS == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)} 

                        {((LAUDOS == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)} 

                        {((LAUDOS == true) ? <button className="remove-todo"></button> : <button className="finish-todo"></button>)}

                        {(LAUDOS2 == 'null') ? <button className="null"></button> : <NotNullButton LAUDOS={LAUDOS2}/>}
                    </div>
</>
   )
}