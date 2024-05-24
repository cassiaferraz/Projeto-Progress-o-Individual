import '../Habilidades/habilidades-perfil.css'
import '../Habilidades/progresso.css'


import 'primeicons/primeicons.css';

import { useState, useEffect} from 'react'

function Habilidades() {

  const [HAB_CONECTIVIDADE, setHAB_CONECTIVIDADE] = useState('')
  const [HAB_CASA_INTELIGENTE, setHAB_CASA_INTELIGENTE] = useState('')
  const [HAB_ELETRICA, setHAB_ELETRICA] = useState('')
  const [HAB_AUDIO_VIDEO, setHAB_AUDIO_VIDEO] = useState('')
  const [HAB_PABX_VOIP, setHAB_PABX_VOIP] = useState('')
  const [HAB_METALICO, setHAB_METALICO] = useState('')

    useEffect(() => {

        async function pegarDadosHabilidades(){
          try {
            const response = await fetch ('http://localhost:3000/hab', {method: 'GET'
          // headers:{
          //   'Content-Type': 'application/json',
          //     }
            })

            const data = await response.json()
            setHAB_CONECTIVIDADE(data[0].HAB_CONECTIVIDADE)
            setHAB_CASA_INTELIGENTE(data[0].HAB_CASA_INTELIGENTE)
            setHAB_ELETRICA(data[0].HAB_ELETRICA)
            setHAB_AUDIO_VIDEO(data[0].HAB_AUDIO_VIDEO)
            setHAB_PABX_VOIP(data[0].HAB_PABX_VOIP)
            setHAB_METALICO(data[0].HAB_METALICO)

            console.log(data[0].LAUDOS)


            // console.log(response);
            // console.log(response.json());
            console.log(data)
            console.log(data[0])
         } catch (error){
           console.log('Erro ao buscar dados',error)
           }
       }
       pegarDadosHabilidades();

   }, [])
    return(
        <div className="tabela-perfil">
            <div className='coluna-tabela-habilidades'>
                <h4>Habilidades</h4>
                <div className='coluna2'>
                    <div className='coluna-avaliacao'>
                      <span >Auto</span>Avaliação <button className="avaliacao-auto"></button> 
                    </div>
                    <div className='coluna-avaliacao'>
                      <span style={{visibility:'hidden'}}>s</span>Sugerido <button className="avaliacao-sugerido"></button>
                    </div>
                </div>
            </div>


            <div className="corpodatabela">
               <div className='linha-tabela-habilidades'>
                   <h4>Conectividade</h4>
                    <div className='barra-progresso-habilidades'>
                        <progress className="progresso-auto-avalicao" value="5" max="5" ></progress>
                        <progress className="progresso-sugerido" value="4" max="5" ></progress>
                    </div>
                      <p>{HAB_CONECTIVIDADE}</p>
                      <p>4</p>
                </div>

                <div className='linha-tabela-habilidades'>
                   <h4>Casa Intelig</h4>

                     <div className='barra-progresso-habilidades'>
                      <progress className="progresso-auto-avalicao" value="5" max="5" ></progress>
                      <progress className="progresso-sugerido" value="3" max="5" ></progress>
                     </div>
                        <p>{HAB_CASA_INTELIGENTE}</p>
                        <p>3</p>

                </div>

                <div className='linha-tabela-habilidades'>
                   <h4>Áudio/Vídeo</h4>

                    <div className='barra-progresso-habilidades'>
                      <progress className="progresso-auto-avalicao" value="3" max="5" ></progress>
                      <progress className="progresso-sugerido" value="3" max="5" ></progress>
                    </div>
                    <p>{HAB_AUDIO_VIDEO}</p>
                    <p>3</p>
                </div>

                <div className='linha-tabela-habilidades'>
                  <h4>Metálico</h4>

                    <div className='barra-progresso-habilidades'>
                      <progress className="progresso-auto-avalicao" value="3" max="5" ></progress>
                      <progress className="progresso-sugerido" value="4" max="5" ></progress>
                    </div>
                    <p>{HAB_METALICO}</p>
                    <p>5</p>
                </div>

                <div className='linha-tabela-habilidades'>
                  <h4>Elétrica</h4>

                    <div className='barra-progresso-habilidades'>
                      <progress className="progresso-auto-avalicao" value="4" max="5" ></progress>
                      <progress className="progresso-sugerido" value="4" max="5" ></progress>
                    </div>
                    <p>{HAB_ELETRICA}</p>
                    <p>4</p>
                </div>

                <div className='linha-tabela-habilidades'>
                  <h4>PABX</h4>

                    <div className='barra-progresso-habilidades'>
                      <progress className="progresso-auto-avalicao" value="3" max="5" ></progress>
                      <progress className="progresso-sugerido" value="3" max="5" ></progress>
                    </div>
                    <p>{HAB_PABX_VOIP}</p>
                    <p>4</p>
                </div>
            </div>
            {/* <div className='botao-avaliar'>
             <h5>Realize Auto Avaliação <a href="/AutoAvaliacao">Clique aqui</a></h5>
            </div> */}
         </div>

    )
}

export default Habilidades;
