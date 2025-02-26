import '../Habilidades/habilidades-perfil.css'
import '../Habilidades/progresso.css'

import { Tooltip } from 'react-tooltip'
import 'primeicons/primeicons.css';
 import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
 
function Habilidades({serverIP}) {
 // SUGERIDA
  const [HAB_CONECTIVIDADE, setHAB_CONECTIVIDADE] = useState('')
  const [HAB_CASA_INTELIGENTE, setHAB_CASA_INTELIGENTE] = useState('')
  const [HAB_ELETRICA, setHAB_ELETRICA] = useState('')
  const [HAB_AUDIO_VIDEO, setHAB_AUDIO_VIDEO] = useState('')
  const [HAB_PABX_VOIP, setHAB_PABX_VOIP] = useState('')
  const [HAB_METALICO, setHAB_METALICO] = useState('')

  const [avaliacaoDisponivel, setAvaliacaoDisponivel] = useState('');
  const navigate = useNavigate();

  const token = sessionStorage.getItem('token')
 //AUTOAVALIACAO
  const [CONECTIVIDADE, setCONECTIVIDADE] = useState('')
  const [CASA_INTELIGENTE, setCASA_INTELIGENTE] = useState('')
  const [ELETRICA, setELETRICA] = useState('')
  const [AUDIO_VIDEO, setAUDIO_VIDEO] = useState('')
  const [PABX_VOIP, setPABX_VOIP] = useState('')
  const [METALICO, setMETALICO] = useState('')
 


  useEffect(() => {


    async function pegarDadosHabilidades(){
      try {
        const response = await fetch (`${serverIP}/Sugerida`, {
          method: 'GET',
          headers:{
              'Content-Type': 'application/json',
              'x-access-token': token
          }
        })

        const data = await response.json()
        //console.log(data)
        setHAB_CONECTIVIDADE(data[0].CONECTIVIDADE)
        sessionStorage.setItem('habconectividade', data.CONECTIVIDADE)
        setHAB_CASA_INTELIGENTE(data[0].CASA_INTELIGENTE)
        sessionStorage.setItem('habcasainteligente', data.CASA_INTELIGENTE)
        setHAB_ELETRICA(data[0].ELETRICA)
        sessionStorage.setItem('habeletrica', data.ELETRICA)
        setHAB_AUDIO_VIDEO(data[0].AUDIO_VIDEO)
        sessionStorage.setItem('habaudiovideo', data.AUDIO_VIDEO)
        setHAB_PABX_VOIP(data[0].PABX_VOIP)
        sessionStorage.setItem('habpabxvoip', data.PABX_VOIP)
        setHAB_METALICO(data[0].METALICO)
        sessionStorage.setItem('habmetalico', data.METALICO)

        // console.log(data[0].LAUDOS)
        // console.log(response);
        // console.log(response.json());
        // console.log(data)
        // console.log(data[0])
     } catch (error){
       console.log('Erro ao buscar dados',error)
       }
   }
   pegarDadosHabilidades();



   async function pegarDadosAutoavaliacao(){
    try {
      const response = await fetch (`${serverIP}/Auto`, {
        method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'x-access-token': token

        }
      })

      const data = await response.json()
      console.log(data)
      setCONECTIVIDADE(data[0].CONECTIVIDADE)
      sessionStorage.setItem('conectividade', data.CONECTIVIDADE)
      setCASA_INTELIGENTE(data[0].CASA_INTELIGENTE)
      sessionStorage.setItem('casainteligente', data.CASA_INTELIGENTE)
      setELETRICA(data[0].ELETRICA)
      sessionStorage.setItem('eletrica', data.ELETRICA)
      setAUDIO_VIDEO(data[0].AUDIO_VIDEO)
      sessionStorage.setItem('audiovideo', data.AUDIO_VIDEO)
      setPABX_VOIP(data[0].PABX_VOIP)
      sessionStorage.setItem('pabxvoip', data.PABX_VOIP)
      setMETALICO(data[0].METALICO)
      sessionStorage.setItem('metalico', data.METALICO)


      // console.log(response);
      // console.log(response.json());
   } catch (error){
     console.log('Erro ao buscar dados',error)
     }
 }
 pegarDadosAutoavaliacao();
    async function verificarAvaliacaoDisponivel() {
    try{
        const response = await fetch (`${serverIP}/Auto/Verificar`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
          }
        })

        const data = await response.json();
        setAvaliacaoDisponivel(data.disponivel);
        //console.log(response)
        //console.log(data)
      } catch (error) {
        console.log('Erro ao verificar disponibilidade de avaliação', error);
      } 
    }
    verificarAvaliacaoDisponivel();

    const intervalId = setInterval(() => {
        verificarAvaliacaoDisponivel();
    }, 10000); //Verifica a cada 10 segundos
    
    return () => clearInterval(intervalId); //Limpa o intervalo ao desmontar o componente

}, [serverIP])

   
    return(
        <div className="tabela-perfil">
            <div className='coluna-tabela-habilidades'>
                <h4>Habilidades</h4>
                <div className='coluna2'>
                    <div className='coluna-avaliacao'>
                    <span                     
                    data-tooltip-id="nomeItem"
                    data-tooltip-content={status ? status : 'Avaliação Sugerida'}
                    data-tooltip-place="top">Sug. </span>
                    <Tooltip id="nomeItem" />
                    <button className="avaliacao-sugerido"></button>
                    </div>
                    <div className='coluna-avaliacao'>
                      
                    <span
                    data-tooltip-id="nomeItem"
                    data-tooltip-content={status ? status : 'Auto Avaliação'}
                    data-tooltip-place="top">Auto</span> 
                    <Tooltip id="nomeItem" />
                    <button className="avaliacao-auto"></button>
                    </div>
                </div>
            </div>
 
 
            <div className="corpodatabela">
               <div className='linha-tabela-habilidades'>
                   <h4>Conectividade</h4>
                    <div className='barra-progresso-habilidades'>
                        <progress className="progresso-sugerido" value={HAB_CONECTIVIDADE} max="5" ></progress>
                        <progress className="progresso-auto-avalicao" value={CONECTIVIDADE} max="5" ></progress>
                    </div>
                      <p>{HAB_CONECTIVIDADE}</p>
                      <p>{CONECTIVIDADE}</p>
                </div>
 
                <div className='linha-tabela-habilidades'>
                   <h4>Casa Inteligente</h4>
 
                     <div className='barra-progresso-habilidades'>
                      <progress className="progresso-sugerido" value={HAB_CASA_INTELIGENTE} max="5" ></progress>
                      <progress className="progresso-auto-avalicao" value={CASA_INTELIGENTE} max="5" ></progress>
                     </div>
                        <p>{HAB_CASA_INTELIGENTE}</p>
                        <p>{CASA_INTELIGENTE}</p>
 
                </div>
 
                <div className='linha-tabela-habilidades'>
                   <h4>Áudio/Vídeo</h4>
 
                    <div className='barra-progresso-habilidades'>
                      <progress className="progresso-sugerido" value={HAB_AUDIO_VIDEO} max="5" ></progress>
                      <progress className="progresso-auto-avalicao" value={AUDIO_VIDEO} max="5" ></progress>
                    </div>
                    <p>{HAB_AUDIO_VIDEO}</p>
                    <p>{AUDIO_VIDEO}</p>
                </div>
 
                <div className='linha-tabela-habilidades'>
                  <h4>Metálico</h4>
 
                    <div className='barra-progresso-habilidades'>
                      <progress className="progresso-sugerido" value={HAB_METALICO} max="5" ></progress>
                      <progress className="progresso-auto-avalicao" value={METALICO} max="5" ></progress>
                    </div>
                    <p>{HAB_METALICO}</p>
                    <p>{METALICO}</p>
                </div>
 
                <div className='linha-tabela-habilidades'>
                  <h4>Elétrica</h4>
 
                    <div className='barra-progresso-habilidades'>
                      <progress className="progresso-sugerido" value={HAB_ELETRICA} max="5" ></progress>
                      <progress className="progresso-auto-avalicao" value={ELETRICA} max="5" ></progress>
                    </div>
                    <p>{HAB_ELETRICA}</p>
                    <p>{ELETRICA}</p>
                </div>
 
                <div className='linha-tabela-habilidades'>
                  <h4>PABX</h4>
 
                    <div className='barra-progresso-habilidades'>
                      <progress className="progresso-sugerido" value={HAB_PABX_VOIP} max="5" ></progress>
                      <progress className="progresso-auto-avalicao" value={PABX_VOIP} max="5" ></progress>
                    </div>
                    <p>{HAB_PABX_VOIP}</p>
                    <p>{PABX_VOIP}</p>
                </div>
            </div>
            <div className='botao-avaliar'>
            <button id='realizarautoavaliacao'
                style={{
                    textDecoration: 'none',
                    pointerEvents: avaliacaoDisponivel ? 'auto' : 'none',
                    color: avaliacaoDisponivel ? 'white' : 'white',
                }}
                onClick={() => {
                    if (avaliacaoDisponivel) {
                        navigate("/AutoAvaliacao");
                    }
                }}
                disabled={!avaliacaoDisponivel}
            >
                {avaliacaoDisponivel ? 'Realize auto avaliação aqui.' : 'Limite de autoavaliações atingido para hoje.'}
            </button>

            </div>
         </div>
 
    )
}
 
export default Habilidades;