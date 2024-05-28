import Navmenu from "../../Navbar/Navmenu"
import BoxPerfil from "../BoxPerfil/BoxPerfil"

import './laudospendentes.css'

import { Link } from "react-router-dom"

import BackArrow from "../../../../public/img/svgs/voltar.svg"

export default function LaudosPendentes(){
    return(
        <div className="todocontainer">
            <BoxPerfil />
            <Navmenu />
            <div id="cabecalho">
                <a href="/perfil">
                    <img 
                        className="btn-backPage"
                        src={BackArrow} 
                        alt="Voltar"
                        />
                </a>
                <h2 className="titulodapagina">Laudos Pendentes</h2>
            </div>
        </div>
    )
}