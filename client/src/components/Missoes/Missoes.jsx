import Navmenu from "../Navbar/Navmenu"
import '../meu-perfil/Perfil/Perfil'
import BoxPerfil from "../meu-perfil/BoxPerfil/BoxPerfil"

import Laudos from "./Laudos"
import Postura from "./Postura"
import Veiculo from "./Veiculo"
import Assiduidade from "./Assiduidade"
import QualityProgressIcon from "./QualityProgresso/QualityProgressIcon"

import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg" 

import { useState, useEffect, useContext} from 'react'

import '../Missoes/missoes.css'
import '../pages/pages.css'
import LogoutButton from "../userSessions/Logout/LogoutButton"

import UserContext from '../meu-perfil/BoxPerfil/UserContext';


export default function Missoes ({ serverIP }) {
    // const token = sessionStorage.getItem("token")
    // console.log(token)
    // if(!token) {
    //     window.location.href = "/perfil";
    // }

    const token = sessionStorage.getItem('token')

    const allMissionsComplete = true; 
    const { user, setUser, isFetching } = useContext(UserContext); // Usando o contexto do usuário
    const [TDNA, setTDNA] = useState('');
    const [IFI, setIFI] = useState('');
    const [IRR, setIRR] = useState('');
    const [FISCALIZACAO, setFISCALIZACAO] = useState('');
    const FISCALIZACAO2 = "null";
     

    useEffect(() => {
      async function pegarDadosQualidade() {
          try {
              const response = await fetch(`${serverIP}/indicadores`, { 
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                }           
            });
              const data = await response.json();
              //console.log(data)
              setTDNA(data[0].TDNA);
              sessionStorage.setItem('usertdna', data.TDNA)
              setIFI(data[0].IFI);
              sessionStorage.setItem('userifi', data.IFI)
              setIRR(data[0].IRR);
              sessionStorage.setItem('userirr', data.IRR)
            //   console.log(data);
          } catch (error) {
              console.log('Erro ao buscar dados', error);
          }
      }
      pegarDadosQualidade();
  }, [serverIP]);

  useEffect(() => {
    async function pegarDadosFiscalizacao() {
        try {
            const response = await fetch(`${serverIP}/avaliacao/user`, { 
              method: 'GET', 
              headers: {
                  'Content-Type': 'application/json',
                  'x-access-token': token
              }           
          });
            const data = await response.json();

            setFISCALIZACAO(data[0].FISCALIZACAO);
            sessionStorage.setItem('userfiscalizacao', data.FISCALIZACAO)

            // console.log(data);
        } catch (error) {
            console.log('Erro ao buscar dados', error);
        }
    }
    pegarDadosFiscalizacao();
}, [serverIP]);

 
// const completeMission = async (missionId) => {
//     const mission = missions.find(m => m.id === missionId);
//     if (mission) {
//       try {
//         const response = await fetch('http://localhost:3000/complete', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'x-access-token': token
            
//           },
//           body: JSON.stringify({ userId: 1, coins: mission.reward, xp: mission.rewardXP }) // Substitua 1 pelo ID real do usuário e adicione rewardXP
//         });
//         if (response.ok) {
//           const updatedUser = await response.json();
//           setMoedas(updatedUser.MOEDAS);
//           setXp(updatedUser.XP);
//           sessionStorage.setItem('usermoedas', updatedUser.MOEDAS);
//           sessionStorage.setItem('userxp', updatedUser.XP);
//           alert(`Missão completada! Você ganhou ${mission.reward} moedas e ${mission.rewardXP} XP.`);
//         } else {
//           alert('Erro ao atualizar moedas e XP');
//         }
//       } catch (error) {
//         console.error('Erro ao completar missão:', error);
//       }
//     }
//   };

  return (
      <>
          <Navmenu serverIP={serverIP}/>
          <div className="todocontainer">
              <BoxPerfil serverIP={serverIP}/>
              <div id="paginamissoes">
                  <h2 className="titulodapagina">Missões</h2>
                  <LogoutButton />
              </div>
              <Laudos serverIP={serverIP}/>
              <div className="todo">
                  <div className="atributodeavaliacao">
                      <h3>Qualidade</h3>
                      <img className="check" src={check} />+250
                      <img className="moeda-roxa" src={coin} />+250 EXP
                  </div>
              </div>
              <div className="todo">
                  <h5 className="atribuicao">TDNA:<QualityProgressIcon value={TDNA} realMax="5" referenceValue="5" /></h5>
              </div>
              <div className="todo">
                  <h5 className="atribuicao">IFI: <QualityProgressIcon value={IFI} referenceValue="1" percent="true" style={{ backgroundColor: IFI >= 1 ? 'blue' : 'yellow' }} /></h5>
              </div>
              <div className="todo">
                  <h5 className="atribuicao">IRR: <QualityProgressIcon value={IRR} referenceValue="1" percent="true" /></h5>
              </div>

              {/* <div className="todo">
                  <h5 className="atribuicao">Fiscalização: <QualityProgressIcon value={FISCALIZACAO} referenceValue="1" percent="true" /></h5>
              </div> */}
              <div className="todo">
                  <h5 className="atribuicao">Fiscalização</h5>
                   {FISCALIZACAO === true ? (
                    <button className="finish-todo"></button>) : 
                    FISCALIZACAO === false ? 
                    (<button className="remove-todo"></button>) : 
                    (<button className="null"></button>)}

                  {FISCALIZACAO2 === 'null' ? <button className="null"></button> : 
                  <NotNullButton FISCALIZACAO={FISCALIZACAO2} />}

                  {FISCALIZACAO2 === 'null' ? <button className="null"></button> : 
                  <NotNullButton FISCALIZACAO={FISCALIZACAO2} />}
              </div>
              <Postura serverIP={serverIP}/>
              <Veiculo serverIP={serverIP} />
              <Assiduidade serverIP={serverIP}/>
          </div>
      </>
  );
}

function NotNullButton({ FISCALIZACAO }) {
  return (
      <>
          {FISCALIZACAO ? <button className="finish-todo"></button> : <button className="remove-todo"></button>}
      </>
  );
}

{/*                   
                <div id="toolbar">
                        <h3>Filtrar: <i className="fa-solid fa-list-check"></i></h3>
                            
                        <select id="filter-select">
                            <option value="all">Todos</option>
                            <option value="done">Feito</option>
                            <option value="todo">A fazer</option>
                            <option value="todo">Incompleto</option>
                        </select>
                </div> */}