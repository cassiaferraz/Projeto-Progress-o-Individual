import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg"
import xmark from "/img/svgs/xmark.svg"


import { useState, useEffect} from 'react'
import { Tooltip } from 'react-tooltip'
 
export default function Laudos({dataMissions}) {
    

      const laudos = [dataMissions[0]?.LAUDOS_PREENCHIDOS, dataMissions[1]?.LAUDOS_PREENCHIDOS, dataMissions[2]?.LAUDOS_PREENCHIDOS].filter(val => val === true).length >= 2;


      return (
        <>
          <div className="todo">
            <div className="atributodeavaliacao">
              <h3>Laudos</h3>
              +100
              <img className="moeda-roxa" src={coin} /> +100 EXP
            </div>
          </div>

          <div className="todo">
            <h5 className="atribuicao">Preenchidos
            {/* Condicional que muda a imagem baseada nos valores de LAUDOS */}
            <img className="check" src={laudos ? check : xmark} />
            </h5>
            <div                
            data-tooltip-id="laudos"
            data-tooltip-content={status ? status : dataMissions[0]?.DATA}
            data-tooltip-place="top">{dataMissions[0]?.LAUDOS_PREENCHIDOS === true ? (
              <button className="finish-todo"></button>) : 
              dataMissions[0]?.LAUDOS_PREENCHIDOS === false ? 
              (<button className="remove-todo"></button>) : 
              (<button className="null"></button>)} </div>
           
                        
            <div                
            data-tooltip-id="laudos"
            data-tooltip-content={status ? status :dataMissions[1]?.DATA}
            data-tooltip-place="top">{dataMissions[1]?.LAUDOS_PREENCHIDOS === true ? (
              <button className="finish-todo"></button>) : 
              dataMissions[1]?.LAUDOS_PREENCHIDOS === false ? 
              (<button className="remove-todo"></button>) : 
              (<button className="null"></button>)}</div>
            

            <div                
            data-tooltip-id="laudos"
            data-tooltip-content={status ? status : dataMissions[2]?.DATA}
            data-tooltip-place="top">{dataMissions[2]?.LAUDOS_PREENCHIDOS === true ? (
              <button className="finish-todo"></button>) : 
              dataMissions[2]?.LAUDOS_PREENCHIDOS === false ? 
              (<button className="remove-todo"></button>) : 
              (<button className="null"></button>)}  </div>
                                                  
            <Tooltip id="laudos" />

            {/* {(LAUDOS_PREENCHIDOSnull == 'null') ? <button className="null"></button> : <NotNullButton LAUDOS_PREENCHIDOS={LAUDOS_PREENCHIDOSnull}/>} */}

          </div>
              {/* <div className="todo">
                <div id="botao-laudospendentes">
                  <a style={{ textDecoration: 'none' }} href="laudospendentes">
                      Laudos Pendentes
                  </a>
                </div>           
              </div> */}

        </>
      );
    }
