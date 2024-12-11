import BoxPerfil from "../BoxPerfil/BoxPerfil"
import Navmenu from "../../Navbar/Navmenu"
import LogoutButton from "../../userSessions/Logout/LogoutButton"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import { useAvatar } from "../../../context/AvatarContext"
import Lua from '/img/svgs/Lua.svg'
import BackArrow from "/img/svgs/voltar.svg"

import '../Config/config.css'



export default function Config ({serverIP}) {

    const navigate = useNavigate();
    const { avatar } = useAvatar();
    
    // const token = sessionStorage.getItem("token")
    // // console.log(token)
    // if(!token) {
    //     window.location.href = "/";
    // }



    return(
     <div className="todocontainer">
        <BoxPerfil serverIP={serverIP} avatar={avatar}/>
        <Navmenu />
            <div className="pag-config">
                <div id="sair-app">
                <span className="telaconfig-spanvoltar"
                onClick={() => navigate("/perfil")}>
                    <img
                        className="btn-backPage"
                        src={BackArrow}
                        alt="Voltar"
                    />
                </span>
                    <h2 id="titulopagina">Configurações</h2>
                    <LogoutButton></LogoutButton>
                </div>
               <div id="itens-config">

                    <Link style={{ textDecoration: 'none' }} to="/Update">
                        <button>Alterar Senha</button>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to="/Avatar">
                        <button>Alterar Avatar</button>
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
