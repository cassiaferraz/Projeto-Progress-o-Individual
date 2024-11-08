import React, { useEffect, useState } from "react";
import Navmenu from "../Navbar/Navmenu";
import BoxPerfil from "../meu-perfil/BoxPerfil/BoxPerfil";
import Laudos from "./Laudos";
import Postura from "./Postura";
import Veiculo from "./Veiculo";
import Assiduidade from "./Assiduidade";
import LogoutButton from "../userSessions/Logout/LogoutButton";
import { Tooltip } from 'react-tooltip';
import { useAvatar } from '../../context/AvatarContext';

import coin from "/img/svgs/moedaroxa.svg";
import check from "/img/svgs/check.svg";
import xmark from "/img/svgs/xmark.svg";
import flechaEsquerda from "/img/svgs/Flecha-direita.svg";
import flechaDireita from "/img/svgs/flecha-esquerda.svg";


import NavegacaoTemporada from './Temporadas/navegationTemporada';

import '../Missoes/missoes.css';
import '../pages/pages.css';

export default function Missoes({ serverIP }) {
    const { avatar } = useAvatar();
    const token = sessionStorage.getItem("token");
    if (!token) {
        window.location.href = "/";
    }

   
    //Variavel contendo o ano de inicio e de fim da temporada
    const [dateTemporada, setDateTemporada] = useState(2024);
    const fimTemporada = dateTemporada + 1

    //Dados das missões
    const [dataMissions, setDataMissions] = useState([])

     //Funções de soma e subtração dos anos das temporadas
    const handleSubtrairTemporada = () => {
        setDateTemporada(prevDate => prevDate - 1);
      };
    
      const handleAdicionarTemporada = () => {
        setDateTemporada(prevDate => prevDate + 1);
      };


    
    
    // Função para buscar dados com base no ano selecionado
    async function pegarDados(ano) {
        try {
            const response = await fetch(`${serverIP}/avaliacao/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,         
                },
                body: JSON.stringify({dateTemporada: ano})

            });
            const data = await response.json();

            setDataMissions(data)
          

            console.log(ano)
            console.log(data)
        } catch (error) {
            console.log('Erro ao buscar dados', error);
        }
    }
    useEffect(() => {
        pegarDados(dateTemporada)
    }, [dateTemporada])

    // Condição para verificar se duas ou mais fiscalizações estão OK
    const fiscalizacaoOk = [dataMissions[0]?.FISCALIZACAO, dataMissions[1]?.FISCALIZACAO, dataMissions[2]?.FISCALIZACAO].filter(val => val === true).length >= 2;

    return (
        <React.Fragment>
            <Navmenu serverIP={serverIP} />
            <div className="todocontainer">
                <BoxPerfil serverIP={serverIP} avatar={avatar} />
                <div id="paginamissoes">
                    <h2 className="titulodapagina">Missões</h2>
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
                

                <Laudos serverIP={serverIP} dataMissions={dataMissions} />
                <div className="todo">
                    <div className="atributodeavaliacao">
                        <h3>Qualidade</h3>
                        +100
                        <img className="moeda-roxa" src={coin} />+100 EXP
                    </div>
                </div>

                <div className="todo">
                    <h5 className="atribuicao">Fiscalização
                        <img className="check" src={fiscalizacaoOk ? check : xmark} />
                    </h5>

                    <div data-tooltip-id="tooltipdata" data-tooltip-content={dataMissions[0]?.DATA} data-tooltip-place="top">
                        {dataMissions[0]?.FISCALIZACAO === true ? (<button className="finish-todo"></button>) :
                            dataMissions[0]?.FISCALIZACAO === false ? (<button className="remove-todo"></button>) :
                                (<button className="null"></button>)}
                    </div>

                    <div data-tooltip-id="tooltipdata" data-tooltip-content={dataMissions[1]?.DATA} data-tooltip-place="top">
                        {dataMissions[1]?.FISCALIZACAO === true ? (<button className="finish-todo"></button>) :
                           dataMissions[1]?.FISCALIZACAO  === false ? (<button className="remove-todo"></button>) :
                                (<button className="null"></button>)}
                    </div>

                    <div data-tooltip-id="tooltipdata" data-tooltip-content={dataMissions[2]?.DATA} data-tooltip-place="top">
                        {dataMissions[2]?.FISCALIZACAO === true ? (<button className="finish-todo"></button>) :
                            dataMissions[2]?.FISCALIZACAO === false ? (<button className="remove-todo"></button>) :
                                (<button className="null"></button>)}
                    </div>

                    <Tooltip id="tooltipdata" />
                </div>
                <Postura serverIP={serverIP} dataMissions={dataMissions} />
                <Veiculo serverIP={serverIP} dataMissions={dataMissions} />
                <Assiduidade serverIP={serverIP} dataMissions={dataMissions} />
            </div>
        </React.Fragment>
    );
}