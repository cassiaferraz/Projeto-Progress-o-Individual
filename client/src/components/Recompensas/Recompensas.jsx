import { Tooltip } from 'react-tooltip'
import Navmenu from "../Navbar/Navmenu"
import coin from '/img/svgs/moedaroxa.svg'
import BoxPerfil from "../meu-perfil/BoxPerfil/BoxPerfil"
import { useState, useEffect } from 'react'
import LogoutButton from '../userSessions/Logout/LogoutButton'
import Swal from "sweetalert2"

import '../Recompensas/recompensas.css'

export default function Recompensas ({serverIP}) {
    const token = sessionStorage.getItem("token")
    console.log(token)
    if(!token) {
        window.location.href = "/";
    }

     const [technicianRewards, setTechnicianRewards] = useState([]);
     const [technicianRewardsRedeemed, setTechnicianRewardsRedeemed] = useState([]);


     useEffect(() => {
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



     }, [serverIP])



    return(
        <div className="todocontainer">
            <Navmenu />
            <BoxPerfil serverIP={serverIP}/>

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
                        <button className="solicitar-recompensa">Solicitar</button>
                    </div>
                   
                    </>
                ))}
                </div>
                </div>


                {/* RECOMPENSAS RESGATADAS */}
                <div className="tablerecompensas">
                <h2 className="titulodapagina"> Recompensas Resgatadas</h2>
                <div className='coluna-tabela-recompensas'>
                    <li>Recompensa</li>
                    <li>Data de Resgate</li>
                    <li></li>
                    <li></li>
                </div>

                <div className='corpodatabela'>
                {technicianRewardsRedeemed.map((reward, index) => (
                    <>
                    <div key={index} className='linha-tabela-recompensa'>
                        <h4>{reward.NOME}</h4>
                        <p>Resgatada em: {reward.DATA_RESGATE}</p>
                       <p></p>
                       
                    </div>
                   
                    </>
                ))}
                </div>
                </div>
        </div>
    )
}