import BoxPerfil from "../BoxPerfil/BoxPerfil"
import { Link } from "react-router-dom"
import Navmenu from "../../Navbar/Navmenu"

import Lua from '../../../../public/img/svgs/Lua.svg'

import '../Config/config.css'

export default function Config () {

    return(
     <div className="todocontainer">
        <BoxPerfil />
        <Navmenu />
            <div className="pag-config">
                 <h2 className="titulodapagina">Configurações</h2>
               <div id="itens-config">
                    <Link to="/Update">
                        <button>Alterar Senha</button>
                    </Link>

                    <Link to="">
                        <button>Notificações</button>
                    </Link>

                    <Link to="">
                        <button>Tema <img id="lua" src={Lua}/></button>
                    </Link>

                    <Link to="">
                        <button>Privacidade</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
