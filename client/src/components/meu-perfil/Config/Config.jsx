import BoxPerfil from "../BoxPerfil/BoxPerfil"
import { Link } from "react-router-dom"
import Navmenu from "../../Navbar/Navmenu"

import Lua from '/img/svgs/Lua.svg'
import BackArrow from "/img/svgs/voltar.svg"

import LogoutButton from "../../userSessions/Logout/LogoutButton"

import '../Config/config.css'

export default function Config () {

//    const token = sessionStorage.getItem("token")
//    console.log(token)
//    if(!token) {
//        window.location.href = "/perfil";
//    }

    return(
     <div className="todocontainer">
        <BoxPerfil />
        <Navmenu />
            <div className="pag-config">
                <div id="sair-app">
                <a href="/perfil">
                    <img
                        className="btn-backPage"
                        src={BackArrow}
                        alt="Voltar"
                    />
                </a>
                    <h2 id="titulopagina">Configurações</h2>
                    <LogoutButton></LogoutButton>
                </div>
               <div id="itens-config">
                    <Link style={{ textDecoration: 'none' }} to="/Update">
                        <button>Alterar Senha</button>
                    </Link>

                    <Link to="" style={{ textDecoration: 'none' }}>
                        <button>Notificações</button>
                    </Link>

                    <Link to="" style={{ textDecoration: 'none' }}>
                        <button>Tema <img id="lua" src={Lua}/></button>
                    </Link>

                    <Link to="" style={{ textDecoration: 'none' }}>
                        <button>Privacidade</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
