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


export default function Missoes () {
    // const token = sessionStorage.getItem("token")
    // console.log(token)
    // if(!token) {
    //     window.location.href = "/perfil";
    // }

    const allMissionsComplete = true; 
    const { user, setUser, isFetching } = useContext(UserContext); // Usando o contexto do usuário
    const [TDNA, setTDNA] = useState('');
    const [IFI, setIFI] = useState('');
    const [IRR, setIRR] = useState('');
    const [FISCALIZACAO, setFISCALIZACAO] = useState('');
    const FISCALIZACAO2 = "null";
    
    // O isFetching é uma variável de estado que usamos para indicar se 
    //os dados estão sendo carregados ou não. Ele é útil para gerenciar o 
    //estado de carregamento em componentes React, 
    //especialmente quando estamos fazendo requisições assíncronas para buscar dados de uma API.
    // Use um estado separado (isFetching) para controlar a atualização dos dados do usuário.

    const token = sessionStorage.getItem('token')
    

    useEffect(() => {
      async function pegarDadosQualidade() {
          try {
              const response = await fetch('http://localhost:3000/indicadores', { 
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                }           
            });
              const data = await response.json();
              console.log(data)
              setTDNA(data[0].TDNA);
              sessionStorage.setItem('usertdna', data.TDNA)
              setIFI(data[0].IFI);
              sessionStorage.setItem('userifi', data.IFI)
              setIRR(data[0].IRR);
              sessionStorage.setItem('userirr', data.IRR)

              console.log(data);
          } catch (error) {
              console.log('Erro ao buscar dados', error);
          }
      }
      pegarDadosQualidade();
  }, []);

  useEffect(() => {
    async function pegarDadosFiscalizacao() {
        try {
            const response = await fetch('http://localhost:3000/avaliacao/user', { 
              method: 'GET', 
              headers: {
                  'Content-Type': 'application/json',
                  'x-access-token': token
              }           
          });
            const data = await response.json();

            setFISCALIZACAO(data[0].FISCALIZACAO);
            sessionStorage.setItem('userfiscalizacao', data.FISCALIZACAO)

            console.log(data);
        } catch (error) {
            console.log('Erro ao buscar dados', error);
        }
    }
    pegarDadosFiscalizacao();
}, []);

 
    const completarMissao = async () => {
        if (allMissionsComplete) {
            try {
                if (user && user.id) { // Verifique se o objeto user não é nulo e possui a propriedade id
                    const response = await fetch('http://localhost:3000/complete', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-access-token': token
                        },
                        body: JSON.stringify({ userId: user.id }),
                    });
                    const data = await response.json();
                    setUser(prevUser => ({
                        ...prevUser,
                        moedas: prevUser.moedas + data.user.moedas,
                        xp: prevUser.xp + data.user.xp,
                    }));
                } else {
                    console.log('Erro: Objeto user é nulo ou não possui a propriedade id.');
                }
            } catch (error) {
                console.log('Erro ao completar missão', error);
            }
        }
    };

    if (isFetching) {
        return <div>Carregando...</div>; // Mostra um indicador de carregamento enquanto os dados estão sendo buscados
    }

  return (
      <>
          <Navmenu />
          <div className="todocontainer">
              <BoxPerfil />
              <div id="paginamissoes">
                  <h2 className="titulodapagina">Missões</h2>
                  <LogoutButton />
              </div>
              <Laudos />
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
              <div className="todo">
                  <h5 className="atribuicao">Fiscalização</h5>
                  {FISCALIZACAO ? <button className="finish-todo"></button> : <button className="remove-todo"></button>}
                  {FISCALIZACAO2 === 'null' ? <button className="null"></button> : <NotNullButton FISCALIZACAO={FISCALIZACAO2} />}
              </div>
              <Postura />
              <Veiculo />
              <Assiduidade />
              {/* <button onClick={completarMissao}>Completar Missão</button> */}
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