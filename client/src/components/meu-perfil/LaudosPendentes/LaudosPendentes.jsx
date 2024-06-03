import Navmenu from "../../Navbar/Navmenu"
import BoxPerfil from "../BoxPerfil/BoxPerfil"

import './laudospendentes.css'

import BackArrow from "../../../../public/img/svgs/voltar.svg"

export default function LaudosPendentes() {
    return (
        <div className="todocontainer">
            <BoxPerfil />
            <Navmenu />
            <div id="titulopagina">
                <a href="/perfil">
                    <img
                        className="btn-backPage"
                        src={BackArrow}
                        alt="Voltar"
                    />
                </a>
                <h2 className="titulodapagina">Laudos Pendentes</h2>
            </div>

            <div id="laudo-pendente">
                <ul id="cabecalho-tabelalaudo">
                    <li>Data</li>
                    <li>Tipo</li>
                    <li>Cidade</li>
                    <li>Bairro</li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="lista-pendente">
                    <li>10/06/2024</li>
                    <li>Instalação</li>
                    <li>São Paulo</li>
                    <li>Moema</li>
                    <a href="">
                    <button type="submit">Preencher</button></a>
                </div>

                <div className="lista-pendente">
                    <li>21/05/2024</li>
                    <li>Mudança</li>
                    <li>São Paulo</li>
                    <li>Barra Funda</li>
                    <a href="">
                    <button type="submit">Preencher</button></a>
                </div>

                <div className="lista-pendente">
                    <li>20/06/2024</li>
                    <li>Reparo</li>
                    <li>São Paulo</li>
                    <li>Lapa</li>
                    <a href="/">
                    <button type="submit">Preencher</button></a>
                </div>
            </div>
        </div>
    )
}