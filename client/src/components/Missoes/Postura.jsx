import { useState, useEffect } from "react";

import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg"
import xmark from "/img/svgs/xmark.svg"




import { Tooltip } from 'react-tooltip'

export default function Postura({ dataMissions }){

    
   const token = sessionStorage.getItem('token')



  // Verifica se dois ou mais valores de POSTURA sãoTRUE
  const posturaUniforme = [dataMissions[0]?.POSTURA_UNIFORME, dataMissions[1]?.POSTURA_UNIFORME, dataMissions[2]?.POSTURA_UNIFORME].filter(val => val === true).length >= 2;
  const posturaCracha = [dataMissions[0]?.POSTURA_CRACHA, dataMissions[1]?.POSTURA_CRACHA, dataMissions[2]?.POSTURA_CRACHA].filter(val => val === true).length >= 2;
  const posturaComunicacao = [dataMissions[0]?.POSTURA_COMUNICACAO, dataMissions[1]?.POSTURA_COMUNICACAO, dataMissions[2]?.POSTURA_COMUNICACAO].filter(val => val === true).length >= 2;
  const posturaBota = [dataMissions[0]?.POSTURA_BOTA, dataMissions[1]?.POSTURA_BOTA, dataMissions[2]?.POSTURA_BOTA].filter(val => val === true).length >= 2;
  const posturaMala = [dataMissions[0]?.POSTURA_MALA, dataMissions[1]?.POSTURA_MALA, dataMissions[2]?.POSTURA_MALA].filter(val => val === true).length >= 2;
 


        return(
          <div>
            
            <div className= "todo">
                 <div className="atributodeavaliacao">
                    <h3>Postura</h3>
                     +250
                     <img className= "moeda-roxa" src={coin}/>+250 EXP
                 </div>
            </div>

 {/* ITEM 1 DE POSTURA */}

                    <div className= "todo">
                        <h5 className="atribuicao">Comunicação
                         {/* Condicional que muda a imagem baseada nos valores de POSTURA */}
                         <img className="check" src={posturaComunicacao ? check : xmark} />
                        </h5>
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top"> {dataMissions[0]?.POSTURA_COMUNICACAO === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[0]?.POSTURA_COMUNICACAO === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                    
<div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top"> {dataMissions[1]?.POSTURA_COMUNICACAO === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[1]?.POSTURA_COMUNICACAO === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

<div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top"> {dataMissions[2]?.POSTURA_COMUNICACAO === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[2]?.POSTURA_COMUNICACAO === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                          <Tooltip id="tooltipdata" />

                    </div>  

{/* ITEM 2 DE POSTURA */}
                    <div className= "todo">
                        <h5 className="atribuicao">Uniforme
                        <img className="check" src={posturaUniforme ? check : xmark} />
                        </h5>
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top"> {dataMissions[0]?.POSTURA_UNIFORME === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[0]?.POSTURA_UNIFORME === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

<div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top"> {dataMissions[1]?.POSTURA_UNIFORME === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[1]?.POSTURA_UNIFORME === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

<div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA }
                        data-tooltip-place="top"> {dataMissions[2]?.POSTURA_UNIFORME === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[2]?.POSTURA_UNIFORME === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

 </div>
{/* ITEM 3 DE POSTURA */}
                    <div className= "todo">
                        <h5 className="atribuicao">Bota
                        <img className="check" src={posturaBota ? check : xmark} />
                        </h5>
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top"> {dataMissions[0]?.POSTURA_BOTA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[0]?.POSTURA_BOTA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

<div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top"> {dataMissions[1]?.POSTURA_BOTA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[1]?.POSTURA_BOTA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

<div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top"> {dataMissions[2]?.POSTURA_BOTA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[2]?.POSTURA_BOTA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                          <Tooltip id="tooltipdata" />

                    </div>
                    <div className= "todo">
                        <h5 className="atribuicao">Crachá
                        <img className="check" src={posturaCracha ? check : xmark} />
                        </h5>
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top"> {dataMissions[0]?.POSTURA_CRACHA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[0]?.POSTURA_CRACHA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top"> {dataMissions[1]?.POSTURA_CRACHA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[1]?.POSTURA_CRACHA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top"> {dataMissions[2]?.POSTURA_CRACHA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[2]?.POSTURA_CRACHA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                          <Tooltip id="tooltipdata" />

                    </div>

                    <div className= "todo">
                        <h5 className="atribuicao">Mala
                        <img className="check" src={posturaMala ? check : xmark} />
                        </h5>
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top"> {dataMissions[0]?.POSTURA_MALA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[0]?.POSTURA_MALA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top"> {dataMissions[1]?.POSTURA_MALA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[1]?.POSTURA_MALA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top"> {dataMissions[2]?.POSTURA_MALA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[2]?.POSTURA_MALA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                          <Tooltip id="tooltipdata" />

                    </div>
            </div>
        )
}