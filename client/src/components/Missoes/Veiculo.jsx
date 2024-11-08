import { useState, useEffect } from "react";

import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg"
import xmark from "/img/svgs/xmark.svg"
import { Tooltip } from 'react-tooltip'

export default function Veivulo({ dataMissions }){

    
   
 
    const token = sessionStorage.getItem('token')
 
    

 // Verifica se dois ou mais valores de VEICULO são TRUE
    const veiculoLimpezainterna = [dataMissions[0]?.VEICULO_LIMPEZAINTERNA, dataMissions[1]?.VEICULO_LIMPEZAINTERNA, dataMissions[2]?.VEICULO_LIMPEZAINTERNA].filter(val => val === true).length >= 2;
    const veiculoLimpezaexterna = [dataMissions[0]?.VEICULO_LIMPEZAEXTERNA, dataMissions[1]?.VEICULO_LIMPEZAEXTERNA, dataMissions[2]?.VEICULO_LIMPEZAEXTERNA].filter(val => val === true).length >= 2;
    const veiculoOrganizacaobau = [dataMissions[0]?.VEICULO_ORGANIZACAOFRENTE, dataMissions[1]?.VEICULO_ORGANIZACAOFRENTE, dataMissions[2]?.VEICULO_ORGANIZACAOFRENTE].filter(val => val === true).length >= 2;
    const veiculoOrganizacaofrente = [dataMissions[0]?.VEICULO_ORGANIZACAOFRENTE, dataMissions[1]?.VEICULO_ORGANIZACAOFRENTE, dataMissions[2]?.VEICULO_ORGANIZACAOFRENTE].filter(val => val === true).length >= 2;
    const veiculoSinistros = [dataMissions[0]?.VEICULO_SINISTROS, dataMissions[1]?.VEICULO_SINISTROS, dataMissions[2]?.VEICULO_SINISTROS].filter(val => val === true).length >= 2;
    const veiculoMultas = [dataMissions[0]?.VEICULO_MULTAS, dataMissions[1]?.VEICULO_MULTAS, dataMissions[2]?.VEICULO_MULTAS].filter(val => val === true).length >= 2;
    const veiculoRecarga = [dataMissions[0]?.VEICULO_RECARGA, dataMissions[1]?.VEICULO_RECARGA, dataMissions[2]?.VEICULO_RECARGA].filter(val => val === true).length >= 2;




        return(
          <div>
            <div className= "todo">
                <div className="atributodeavaliacao">
                    <h3>Veículo </h3>
                    +250
                    <img className= "moeda-roxa" src={coin} />+250 EXP
                 </div>
              
            </div>

{/* ITEM 1 DE Frota */}
                    <div className= "todo">
                        <h5 className="atribuicao">Limpeza Interna
                        {/* Condicional que muda a imagem baseada nos valores de VEICULO */}
                        <img className="check" src={veiculoLimpezainterna ? check : xmark} />
                        </h5>
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top"> {dataMissions[0]?.VEICULO_LIMPEZAINTERNA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[0]?.VEICULO_LIMPEZAINTERNA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top"> {dataMissions[1]?.VEICULO_LIMPEZAINTERNA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[1]?.VEICULO_LIMPEZAINTERNA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top"> {dataMissions[2]?.VEICULO_LIMPEZAINTERNA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[2]?.VEICULO_LIMPEZAINTERNA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                          <Tooltip id="tooltipdata" />

                        {/* {(VEICULO_LIMPEZAINTERNAnull == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_LIMPEZAINTERNA={VEICULO_LIMPEZAINTERNAnull}/>} */}
                    </div>  
{/* ITEM 2 DE Frota */}

                    <div className= "todo">
                        <h5 className="atribuicao">Limpeza Externa
                       <img className="check" src={veiculoLimpezaexterna ? check : xmark} />
                        </h5>
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top"> {dataMissions[0]?.VEICULO_LIMPEZAEXTERNA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[0]?.VEICULO_LIMPEZAEXTERNA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>


                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top"> {dataMissions[1]?.VEICULO_LIMPEZAEXTERNA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[1]?.VEICULO_LIMPEZAEXTERNA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top"> {dataMissions[2]?.VEICULO_LIMPEZAEXTERNA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[2]?.VEICULO_LIMPEZAEXTERNA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                          <Tooltip id="tooltipdata" />


                        {/* {(VEICULO_LIMPEZAEXTERNAnull == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_LIMPEZAEXTERNA={VEICULO_LIMPEZAEXTERNAnull}/>} */}
                    </div> 
{/* ITEM 3 DE Frota */}

                    <div className= "todo">
                        <h5 className="atribuicao">Organização Frente
                        <img className="check" src={veiculoOrganizacaofrente ? check : xmark} />
                        </h5>
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top"> {dataMissions[0]?.VEICULO_ORGANIZACAOFRENTE === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[0]?.VEICULO_ORGANIZACAOFRENTE === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top"> {dataMissions[1]?.VEICULO_ORGANIZACAOFRENTE === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[1]?.VEICULO_ORGANIZACAOFRENTE === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top"> {dataMissions[2]?.VEICULO_ORGANIZACAOFRENTE === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[2]?.VEICULO_ORGANIZACAOFRENTE === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                          <Tooltip id="tooltipdata" />

                        {/* {(VEICULO_ORGANIZACAOFRENTEnull == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_ORGANIZACAOFRENTE={VEICULO_ORGANIZACAOFRENTEnull}/>} */}
                    </div> 

                    <div className= "todo">
                        <h5 className="atribuicao">Sinistros
                        <img className="check" src={veiculoSinistros ? check : xmark} />
                        </h5>
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top"> {dataMissions[0]?.VEICULO_SINISTROS === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[0]?.VEICULO_SINISTROS === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top"> {dataMissions[1]?.VEICULO_SINISTROS === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[1]?.VEICULO_SINISTROS === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top"> {dataMissions[2]?.VEICULO_SINISTROS === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[2]?.VEICULO_SINISTROS === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                          <Tooltip id="tooltipdata" />

                        {/* {(VEICULO_SINISTROSnull == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_SINISTROS={VEICULO_SINISTROSnull}/>} */}
                    </div> 

                    <div className= "todo">
                        <h5 className="atribuicao">Horário-Recarga
                        <img className="check" src={veiculoRecarga ? check : xmark} />
                        </h5>
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top"> {dataMissions[0]?.VEICULO_RECARGA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[0]?.VEICULO_RECARGA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top"> {dataMissions[1]?.VEICULO_RECARGA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[1]?.VEICULO_RECARGA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top"> {dataMissions[2]?.VEICULO_RECARGA === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[2]?.VEICULO_RECARGA === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                          <Tooltip id="tooltipdata" />

                        {/* {(VEICULO_RECARGAnull == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_RECARGA={VEICULO_RECARGAnull}/>} */}
                    </div> 

                    <div className= "todo">
                        <h5 className="atribuicao">Multas
                        <img className="check" src={veiculoMultas ? check : xmark} />
                        </h5>
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top"> {dataMissions[0]?.VEICULO_MULTAS === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[0]?.VEICULO_MULTAS === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top"> {dataMissions[1]?.VEICULO_MULTAS === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[1]?.VEICULO_MULTAS === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top"> {dataMissions[2]?.VEICULO_MULTAS === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[2]?.VEICULO_MULTAS === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                          <Tooltip id="tooltipdata" />

                        {/* {(VEICULO_MULTASnull == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_MULTAS={VEICULO_MULTASnull}/>} */}
                    </div> 
                    
                    <div className= "todo">
                        <h5 className="atribuicao">Organização Baú
                        <img className="check" src={veiculoOrganizacaobau ? check : xmark} />
                    
                        </h5>
                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[0]?.DATA}
                        data-tooltip-place="top"> {dataMissions[0]?.VEICULO_ORGANIZACAOBAU === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[0]?.VEICULO_ORGANIZACAOBAU === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[1]?.DATA}
                        data-tooltip-place="top"> {dataMissions[1]?.VEICULO_ORGANIZACAOBAU === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[1]?.VEICULO_ORGANIZACAOBAU === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                        <div                
                        data-tooltip-id="tooltipdata"
                        data-tooltip-content={status ? status : dataMissions[2]?.DATA}
                        data-tooltip-place="top"> {dataMissions[2]?.VEICULO_ORGANIZACAOBAU === true ? (
                          <button className="finish-todo"></button>) : 
                          dataMissions[2]?.VEICULO_ORGANIZACAOBAU === false ? 
                          (<button className="remove-todo"></button>) : 
                          (<button className="null"></button>)}</div>

                          <Tooltip id="tooltipdata" />


                        {/* {(VEICULO_ORGANIZACAOBAUnull == 'null') ? <button className="null"></button> : <NotNullButton VEICULO_ORGANIZACAOBAU={VEICULO_ORGANIZACAOBAUnull}/>} */}
                    </div>
            </div>
        )
}     

function NotNullButton({VEICULO_LIMPEZAINTERNA}){
    return (
        <>
        {((VEICULO_LIMPEZAINTERNA == true) ? 
        <button className="finish-todo"></button> : 
        <button className="remove-todo"></button>)}
        </>
    )
}
