import { Tooltip } from 'react-tooltip'
import Navmenu from "../Navbar/Navmenu"
import coin from '/img/svgs/moedaroxa.svg'
import BoxPerfil from "../meu-perfil/BoxPerfil/BoxPerfil"
import { useAvatar } from '../../context/AvatarContext'
import { useState, useEffect } from 'react'
import LogoutButton from '../userSessions/Logout/LogoutButton'
import Swal from "sweetalert2"

import '../Recompensas/recompensas.css'

export default function Recompensas ({serverIP}) {
    const { avatar } = useAvatar();
    const token = sessionStorage.getItem("token")
    // console.log(token)
    if(!token) {
        window.location.href = "/";
    }

     const [technicianRewards, setTechnicianRewards] = useState([]);
     const [technicianRewardsRedeemed, setTechnicianRewardsRedeemed] = useState([]);

     const [dadosRewards, setdadosRewards] = useState([]);

    
        const [hoveredRewardIndex, setHoveredRewardIndex] = useState(null)


    //Verificação se o usuario possui moedas suficientes

    // Função para verificar e resgatar recompensa
    const solicitarRecompensa = async (reward) => {
        // Verificar se o usuário tem moedas suficientes
        if (dadosRewards.MOEDAS < reward.CUSTO_MOEDAS) {
            Swal.fire({
                title: 'Moedas insuficientes!',
                text: 'Você não tem moedas suficientes para resgatar esta recompensa.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }
    
        // Confirmação com o usuário

        Swal.fire({
            title: 'Deseja resgatar essa recompensa?',
            text: `Essa recompensa custará ${reward.CUSTO_MOEDAS} moedas.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, resgatar',
            cancelButtonText: 'Não, cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Capturar data e hora atual
                const getCurrentDateTime = () => {
                  const now = new Date();
                  const year = now.getFullYear();
                  const month = String(now.getMonth() + 1).padStart(2, '0');
                  const day = String(now.getDate()).padStart(2, '0');
                  const hours = String(now.getHours()).padStart(2, '0');
                  const minutes = String(now.getMinutes()).padStart(2, '0');
                  const seconds = String(now.getSeconds()).padStart(2, '0');
                  
                  
                  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
              };


                const currentDate = getCurrentDateTime()
    
                // Dados para enviar ao backend
                const formBodyData = {
                    ID_RECOMPENSA: reward.ID_RECOMPENSA,
                    ID_TECNICO: dadosRewards.ID_COLABORADOR, // Pegue o ID do técnico logado
                    DATA_RESGATE: currentDate,
                    STATUS_RECOMPENSA: 0, // Valor booleano inicial
                    CUSTO_MOEDAS: reward.CUSTO_MOEDAS,
                    MOEDAS_SUBTRAIDAS: reward.MOEDAS_SUBTRAIDAS
                };
                console.log(formBodyData)
    
                try {
                    const response = await fetch(`${serverIP}/RewardTechnician`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-access-token': token
                        },
                        body: JSON.stringify(formBodyData)
                    });
    
                    if (response.ok) {

                        const responseSubtration = await fetch(`${serverIP}/getSubtration`,{
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'x-access-token': token
                            }
                        })
                       

                        const notification = {
                            notificationCategory: 'recompensas.solicitacao',
                            receiverId: '40417761000', //Alterar pelo ID do Coordenador responsavel
                            senderId: dadosRewards.ID_COLABORADOR,
                            complementaryData: {
                                technicianName: dadosRewards.NOME,
                                rewardId: technicianRewards.ID_RECOMPENSA
                            }
                        
                        }
                        const responseNotification = await fetch(`${serverIP}/createNotification`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(notification)
                            
                        })
                        if(!responseNotification.ok) {
                            console.log(responseNotification)
                            alert('ERROU')
                        }

                        if(responseSubtration) {
                        Swal.fire({
                            title: 'Sucesso!',
                            text: 'Recompensa resgatada com sucesso, aguarde a aprovação pelo seu coordenador.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        }).then(() => {
                            // Atualize os dados após o resgate
                            window.location.reload();
                        });
                    }
                    } else {
                        Swal.fire({
                            title: 'Erro!',
                            text: 'Ocorreu um erro ao resgatar a recompensa.',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    }
                } catch (error) {
                    console.error('Erro ao resgatar recompensa:', error);
                }
            }
        });
    };


    // Função para verificar recompensas nulas e realizar extorno
    // const verificarRecompensasNulas = async () => {
    //     try {
    //         const response = await fetch(`${serverIP}/VerificationNull`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'x-access-token': token
    //             }
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             if (data.newTotalMoedas) {
    //                 Swal.fire({
    //                     title: 'Resgate de Recompensa, recusado!',
    //                     text: `Extorno de moedas realizado.`,
    //                     icon: 'success',
    //                     confirmButtonText: 'OK'
    //                 });
    //             }
    //         } else {
    //             console.error('Erro ao realizar o extorno das recompensas nulas.');
    //         }
    //     } catch (error) {
    //         console.error('Erro ao verificar recompensas nulas:', error);
    //     }
    // };

  

     useEffect(() => {

        // Fetch DADOS do Usuario(NIVEL E MOEDAS)
        async function DadosRewards(){
          try {
            const response = await fetch(`${serverIP}/getUserData`, {
              method: 'GET',
              headers:{
                  'Content-Type': 'application/json',
                  'x-access-token': token
              }
            })


            const data = await response.json()
            setdadosRewards(data)

            console.log(data)

          }catch (error){
          console.log('Erro ao buscar dados', error)
          }
        }
        DadosRewards({serverIP});




        // Fetch RECOMPENSAS DISPONIVEIS
      async function PushRewards(){
        try {
          const response = await fetch(`${serverIP}/Rewards`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': token
            }
          })

          const data = await response.json()
        
          setTechnicianRewards(data.technicianRewards)
          

          console.log(data)

        }catch (error){
        console.log('Erro ao buscar dados', error)
        }
    }
    PushRewards({serverIP});




    
    // Fetch RECOMPENSAS RESGATADAS
    async function PushRewardsRedeemed(){
        try {
          const response = await fetch(`${serverIP}/RewardsRedeemed`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': token
            }
          })

          const data = await response.json()
          setTechnicianRewardsRedeemed(data.technicianRewardsRedeemed)

          console.log(data)

        }catch (error){
        console.log('Erro ao buscar dados', error)
        }
      }
      PushRewardsRedeemed({serverIP});


      // Fetch para verificar recompensas nulas e realizar extorno
    const verificarRecompensasNulas = async () => {
        try {
            const response = await fetch(`${serverIP}/VerificationNull`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                }
            });

            const data = await response.json()
  
            console.log(data)
  
          }catch (error){
          console.log('Erro ao buscar dados', error)
          }
        }

      verificarRecompensasNulas({serverIP});

     }, [serverIP])

     
     

    return(
        <div className="todocontainer">
            <Navmenu />
            <BoxPerfil serverIP={serverIP} avatar={avatar}/>

                {/* RECOMPENSAS DISPONIVEIS */}
                <div className="tablerecompensas">
                <h2 className="titulodapagina"> Recompensas Disponiveis</h2>
                <div className='coluna-tabela-recompensas'>
                    <li>Recompensa</li>
                    <li>Nível</li>
                    <li>Preço</li>
                    <li></li>
                    <li></li>
                </div>

                  <div className='corpodatabela'>
                  {technicianRewards.map((reward, index) => (
                            <>
                <div 
                key={index} 
                className='linha-tabela-recompensa'
                onMouseEnter={() => setHoveredRewardIndex(index)}  // Definir o índice ao passar o mouse
                onMouseLeave={() => setHoveredRewardIndex(null)}   // Limpar o índice ao sair o mouse
                style={hoveredRewardIndex == index ? {borderBottom: 'none'} : {}}
                >
                <h4>{reward.NOME}</h4>
                <p>Req. Nível {reward.NIVEL_REQUERIDO}</p>
                <p>{reward.CUSTO_MOEDAS}<img className="moeda-roxa" src={coin} /></p>
                
                {/* Verifica se o usuário tem o nível necessário para resgatar a recompensa */}
                {dadosRewards?.NIVEL >= reward.NIVEL_REQUERIDO ? (
                    <button className="solicitar-recompensa" onClick={() => solicitarRecompensa(reward)}>Solicitar</button>
                ) : (
                    <button className="requer-nivel" disabled>Solicitar</button>
                )}
        
                
                </div>
                
                {hoveredRewardIndex == index && (
                    <div className="descricao-recompensa" style={{borderTop: 'none'}}>
                    <p>{reward.DESCRICAO}</p>
                    </div>
                    
                )}
        </>
            ))}
            </div>
         
                
                </div>

            {/* RECOMPENSAS RESGATADAS */}
            <div className="tablerecompensas">
                <h2 className="titulodapagina">Recompensas Resgatadas</h2>
                <div className='coluna-tabela-recompensas'>
                    <li>Recompensa</li>
                    <li>Data de Resgate</li>
                    <li></li>
                    <li></li>
                </div>

                <div className='corpodatabela'>
                {technicianRewardsRedeemed.length === 0 ? (
                        <p><strong>Nenhuma recompensa resgatada.</strong></p>
                    ) : (
                    technicianRewardsRedeemed.map((reward, index) => (
                        <div key={index} className='linha-tabela-recompensa'>
                            <h4>{reward.NOME}</h4>
                            <p>Resgatada em: {formatDatetime(reward.DATA_RESGATE)}</p>
                        </div>
                    ))
                    )}
                </div>
            </div>
            
        </div>
        
    )
    
}
// IN: "2024-08-05T09:45:00.000Z"
// OUT: "05/08/24 09:45"

 function formatDatetime(dateStr) {
    let date = dateStr?.split("T")[0]
    let dateParts = date?.split("-")
    let time = dateStr?.split("T")[1].split(".")[0]
    
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0].slice(-2)} ${time}`
}