import { useState, useEffect } from 'react'
import { Tooltip } from 'react-tooltip'
import Navmenu from '../Navbar/Navmenu'
import LogoutButton from '../userSessions/Logout/LogoutButton'
import React from 'react'
import { useAvatar } from "../../context/AvatarContext"

import '../Desafios/desafios.css'
import "../Navbar/navmenu.css"

import BoxPerfil from '../meu-perfil/BoxPerfil/BoxPerfil'

import coin from "/img/svgs/moedaroxa.svg"
// import check from "/img/svgs/checkVivo.svg" 
// import AlvoDesafios from "/img/svgs/AlvoVivo.svg" 
import flechaEsquerda from "/img/svgs/Flecha-direita.svg";
import flechaDireita from "/img/svgs/flecha-esquerda.svg";

import NavegacaoTemporada from '../Missoes/Temporadas/navegationTemporada'


export default function Desafios ({serverIP}) {
    const { avatar } = useAvatar();
    const token = sessionStorage.getItem("token")
    if(!token) {
        window.location.href = "/";
    }

    //Variavel contendo o ano de inicio e de fim da temporada
    const [dateTemporada, setDateTemporada] = useState(2024);
    const fimTemporada = dateTemporada + 1

    //Dados dos desafios
    const [incompleteChallenges, setIncompleteChallenges] = useState([]);
    const [completedChallenges, setCompletedChallenges] = useState([]);

    //Funções de soma e subtração dos anos das temporadas
    const handleSubtrairTemporada = () => {
        setDateTemporada(prevDate => prevDate - 1);
      };
    
      const handleAdicionarTemporada = () => {
        setDateTemporada(prevDate => prevDate + 1);
      };

      //Fetch para pegar os dados dos desafios com base no ano selecionado
        async function pegarDadosDesafios(ano){
            try {
                const response = await fetch (`${serverIP}/Challenge`, {
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json',
                        'x-access-token': token
                    },
                    body: JSON.stringify({dateTemporada: ano})
                });

                const data = await response.json()
                setIncompleteChallenges(data.incompleteChallenges || [])
                setCompletedChallenges(data.completedChallenges || [])

            console.log(ano)
            console.log(data)
            } catch (error){
                console.log('Erro ao buscar dados', error)
            }
        }
        useEffect(() =>{
            pegarDadosDesafios(dateTemporada)
        }, [dateTemporada])
   

    return (
        <div className="todocontainer">
            <Navmenu />
            <BoxPerfil serverIP={serverIP} avatar={avatar}/>

            <div id="pag-desafios">
                <div id="sair-app">
                    <h2 className="titulodapagina">Meus Desafios</h2>
                
                    <LogoutButton />
                </div>

                 {/* Componente de navegação de temporadas com botões e texto */}
                <NavegacaoTemporada 
                    dateTemporada={dateTemporada} 
                    fimTemporada={fimTemporada} 
                    handleSubtrairTemporada={handleSubtrairTemporada} 
                    handleAdicionarTemporada={handleAdicionarTemporada} 
                    flechaDireita={flechaDireita} 
                    flechaEsquerda={flechaEsquerda} 
                />

        <div className='estruturaDesafios'>
                <div className='coluna-tabela-desafios'>
                    <li>Desafios</li>
                    <li>Moedas</li>
                    <li>EXP</li>
                </div>

                <div className='corpodatabela-desafios'>
                    {incompleteChallenges.length === 0 ? (
                        <p><strong>Não há desafios atribuídos.</strong></p>
                    ) : (
                        incompleteChallenges.map((challenge, index) => (
                            <React.Fragment key={`challenge_${index}`}>
                                <div key={index} className='linha-tabela-desafios'>
                                    <h4 
                                        data-tooltip-id="nomeItem"
                                        data-tooltip-content={challenge.STATUS ? challenge.NOME : ""}
                                        data-tooltip-place="top">
                                        {challenge.NOME}
                                    </h4>
                                    <Tooltip id="nomeItem" />
                                    <div>
                                        <p>{challenge.MOEDAS}<img className="moeda-roxa" src={coin} /></p>
                                    </div>
                                    <div>
                                        <p>{challenge.XP} EXP</p>
                                    </div>
                                </div>

                                <div className='descricao-desafio'>
                                    <p className='textoDesafios'><strong>{challenge.DESCRICAO}</strong></p>
                                </div>
                            </React.Fragment>
                        ))
                    )}
                </div>
            </div>
            </div>

            <div id="pag-desafios">
                <div id="sair-app">
                    <h2 className="titulodapagina">Desafios Concluídos</h2>
                 
                </div>

                <div className='coluna-tabela-desafios'>
                    <li>Desafios</li>
                    <li>Moedas  </li>
                    <li>EXP </li>
                </div>

                <div className='corpodatabela-desafios'>
                    {completedChallenges.length === 0 ? (
                        <p><strong>Não há desafios completados.</strong></p>
                    ) : (
                        completedChallenges.map((challenge, index) => (
                            <React.Fragment key={`challengeComplete_${index}`}>
                                
                                <div key={index} className='linha-tabela-desafios'>
                                    <h4 
                                        data-tooltip-id="nomeItem"
                                        data-tooltip-content={challenge.STATUS ? challenge.NOME : ""}
                                        data-tooltip-place="top">
                                        {challenge.NOME}
                                    </h4>
                                    <Tooltip id="nomeItem" />
                                    <div>
                                        <p>{challenge.MOEDAS}<img className="moeda-roxa" src={coin} /></p>
                                    </div>
                                    <div>
                                        <p>{challenge.XP} EXP</p>
                                        
                                    </div>
                                    
                                </div>
                                
                                <div className='descricao-desafio'> 
                                    <p className='textoDesafios'><strong>{challenge.DESCRICAO}</strong></p>
                                </div>

                            </React.Fragment>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}