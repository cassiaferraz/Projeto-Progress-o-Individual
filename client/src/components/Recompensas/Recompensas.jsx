import { Tooltip } from 'react-tooltip'
import { useState, useEffect } from 'react'
import Navmenu from "../Navbar/Navmenu"
import coin from '/img/svgs/moedaroxa.svg'
import BoxPerfil from "../meu-perfil/BoxPerfil/BoxPerfil"
import { useAvatar } from '../Context/AvatarContext'
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
                    STATUS_RECOMPENSA: 0 // Valor booleano inicial
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

                        Swal.fire({
                            title: 'Sucesso!',
                            text: 'Recompensa resgatada com sucesso.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        }).then(() => {
                            // Atualize os dados após o resgate
                            window.location.reload();
                        });
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
          // const data2 = dadosRewards.technicianRewards.map(reward => {
          //   let canRequire = 
          // })
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
                      <div key={index} className='linha-tabela-recompensa'>
                          <h4>{reward.NOME}</h4>
                          <p>Req. Nível {reward.NIVEL_REQUERIDO}</p>
                          <p> {reward.CUSTO_MOEDAS}<img className= "moeda-roxa" src={coin} /></p>
                          {/*Verifica se o usuario tem o nivel necessário para resgatar a recompensa */}
                          {dadosRewards?.NIVEL >= reward.NIVEL_REQUERIDO ? (

                            <button className="solicitar-recompensa" onClick={() => solicitarRecompensa(reward)}>Solicitar</button>
                          ) : ( 
                            <button className="requer-nivel" disabled>Solicitar</button>
                          )} 
                          
                      </div>
                     
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
                            <p>Resgatada em: {reward.DATA_RESGATE}</p>
                        </div>
                    ))
                    )}
                </div>
            </div>
        </div>
    )
}