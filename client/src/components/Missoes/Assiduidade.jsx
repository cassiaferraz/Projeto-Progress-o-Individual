import { useState, useEffect } from "react";

import { Tooltip } from 'react-tooltip'

import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg"
import xmark from "/img/svgs/xmark.svg"


export default function Assiduidade({dataMissions}){
  

    const token = sessionStorage.getItem('token')

    

   // Verifica se dois ou mais valores de POSTURA sãoTRUE
  const assiduidadeAlmoco = [dataMissions[0]?.ASSIDUIDADE_ALMOCO, dataMissions[1]?.ASSIDUIDADE_ALMOCO, dataMissions[2]?.ASSIDUIDADE_ALMOCO].filter(val => val === true).length >= 2;
  const assiduidadeAlmox = [dataMissions[0]?.ASSIDUIDADE_ALMOX, dataMissions[1]?.ASSIDUIDADE_ALMOX, dataMissions[2]?.ASSIDUIDADE_ALMOX].filter(val => val === true).length >= 2;
  const assiduidadeBanco = [dataMissions[0]?.ASSIDUIDADE_BANCO, dataMissions[1]?.ASSIDUIDADE_BANCO, dataMissions[2]?.ASSIDUIDADE_BANCO].filter(val => val === true).length >= 2;
  const assiduidadeInicio = [dataMissions[0]?.ASSIDUIDADE_INICIO, dataMissions[1]?.ASSIDUIDADE_INICIO, dataMissions[2]?.ASSIDUIDADE_INICIO].filter(val => val === true).length >= 2;
  const assiduidadeRota = [dataMissions[0]?.ASSIDUIDADE_ROTA, dataMissions[1]?.ASSIDUIDADE_ROTA, dataMissions[2]?.ASSIDUIDADE_ROTA].filter(val => val === true).length >= 2;



     return(
        <div>
            <div className= "todo">
                <div  className="atributodeavaliacao">
                <h3>Assiduidade</h3>
                     +200
                    <img className= "moeda-roxa" src={coin}/>+200 EXP
                </div>
            </div>

                <div className= "todo">
                    <h5 className="atribuicao">Comparecimento Alm
                     {/* Condicional que muda a imagem baseada nos valores de ASSIDUIDADE */}
                     <img className="check" src={assiduidadeAlmox ? check : xmark} />
                     
                    </h5>
                    <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top">{dataMissions[0]?.ASSIDUIDADE_ALMOX === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[0]?.ASSIDUIDADE_ALMOX === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                    

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top">{dataMissions[1]?.ASSIDUIDADE_ALMOX === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[1]?.ASSIDUIDADE_ALMOX === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                        

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top">{dataMissions[2]?.ASSIDUIDADE_ALMOX === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[2]?.ASSIDUIDADE_ALMOX === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                        <Tooltip id="tooltipdata" />

                    {/* {(ASSIDUIDADE_ALMOXnull == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_ALMOX={ASSIDUIDADE_ALMOXnull}/>} */}
                </div>
                        
                <div className= "todo">
                    <h5 className="atribuicao">Horário de Almoço
                    <img className="check" src={assiduidadeAlmoco ? check : xmark} />
                    </h5>
                    <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top">{dataMissions[0]?.ASSIDUIDADE_ALMOCO === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[0]?.ASSIDUIDADE_ALMOCO === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                      
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top">{dataMissions[1]?.ASSIDUIDADE_ALMOCO === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[1]?.ASSIDUIDADE_ALMOCO === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                       
                       <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top">{dataMissions[2]?.ASSIDUIDADE_ALMOCO === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[2]?.ASSIDUIDADE_ALMOCO === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                        <Tooltip id="tooltipdata" />


                    {/* {(ASSIDUIDADE_ALMOCOnull == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_ALMOCO={ASSIDUIDADE_ALMOCOnull}/>} */}
                </div>

                <div className= "todo">
                    <h5 className="atribuicao">Gestão de Rota
                    <img className="check" src={assiduidadeRota ? check : xmark} />
                    </h5>
                    <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top">{dataMissions[0]?.ASSIDUIDADE_ROTA === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[0]?.ASSIDUIDADE_ROTA === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                        


                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top">{dataMissions[1]?.ASSIDUIDADE_ROTA === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[1]?.ASSIDUIDADE_ROTA === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                        


                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top">{dataMissions[2]?.ASSIDUIDADE_ROTA === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[2]?.ASSIDUIDADE_ROTA === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                        <Tooltip id="tooltipdata" />


                    {/* {(ASSIDUIDADE_ROTAnull == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_ROTA={ASSIDUIDADE_ROTAnull}/>} */}
                </div>

                <div className= "todo">
                    <h5 className="atribuicao">Banco de Horas
                    <img className="check" src={assiduidadeBanco ? check : xmark} />
                    </h5>
                    <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top">{dataMissions[0]?.ASSIDUIDADE_BANCO === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[0]?.ASSIDUIDADE_BANCO === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                      

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top">{dataMissions[1]?.ASSIDUIDADE_BANCO === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[1]?.ASSIDUIDADE_BANCO === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                        

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top">{dataMissions[2]?.ASSIDUIDADE_BANCO === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[2]?.ASSIDUIDADE_BANCO === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                        <Tooltip id="tooltipdata" />

                    {/* {(ASSIDUIDADE_BANCOnull == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_BANCO={ASSIDUIDADE_BANCOnull}/>} */}
                </div>

                <div className= "todo">
                    <h5 className="atribuicao">Inicio Atividade
                    <img className="check" src={assiduidadeInicio ? check : xmark} />
                    </h5>
                    <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top">{dataMissions[0]?.ASSIDUIDADE_INICIO === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[0]?.ASSIDUIDADE_INICIO === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                  

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top">{dataMissions[1]?.ASSIDUIDADE_INICIO === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[1]?.ASSIDUIDADE_INICIO === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                     
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top">{dataMissions[2]?.ASSIDUIDADE_INICIO === true ? (
                            <button className="finish-todo"></button>) : 
                            dataMissions[2]?.ASSIDUIDADE_INICIO === false ? 
                            (<button className="remove-todo"></button>) : 
                            (<button className="null"></button>)}</div>
                        <Tooltip id="tooltipdata" />

                    {/* {(ASSIDUIDADE_INICIOnull == 'null') ? <button className="null"></button> : <NotNullButton ASSIDUIDADE_INICIO={ASSIDUIDADE_INICIOnull}/>} */}
                </div>
        </div>
    )
}
