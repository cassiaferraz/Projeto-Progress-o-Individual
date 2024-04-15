import Navmenu from "../Navbar/Navmenu"
import usuario from '../../img/Usuario.svg'
import '../pages/pages.css'
import { Link } from "react-router-dom"
import '../Missoes/missoes.css'
import '../meu-perfil/Perfil'
import Logo from '/public/img/Vivo Purpura RGB.jpg';



export default function Missoes () {

    return (
    <>
     <Navmenu />
      <div className="todocontainer">
        { <Link to="/"> 
            <div id="Logo"> 
              <img src={Logo} /> 
            </div> </Link> }
                 <header className="headermissoes">
                    <div>
                        <div>
                          <img className= "usuario" src={usuario} alt="usuario" />
                       </div>
                    <Link to= "/Perfil">Roberto da Silva</Link><br />
                   <h5>Nível 20</h5>
                     </div>
                 </header>
                  
                <div id="toolbar">
                        <h3>Filtrar: <i className="fa-solid fa-list-check"></i></h3>
                            
                        <select id="filter-select">
                            <option value="all">Todos</option>
                            <option value="done">Feito</option>
                            <option value="todo">A fazer</option>
                            <option value="todo">Incompleto</option>
                        </select>
                    
                </div>

                <div className= "todo-list">
                    <div className= "todo">
                <h3 className="atributodeavaliacao">Postura</h3>
                    </div>
                    <div className= "todo">
                        <hr />
                        <h5>Comunicação</h5>
                        <button className="finish-todo">
                            <i className="fa-solid fa-check"></i>
                        </button>

                        <button className="finish-todo">
                            <i className="fa-solid fa-check"></i>
                        </button>
                        
                        <button className="remove-todo">
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <button className="remove-todo">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div className= "todo">
                        <h5>Uniforme</h5>
                        <button className="finish-todo">
                            <i className="fa-solid fa-check"></i>
                        </button>

                        <button className="finish-todo">
                            <i className="fa-solid fa-check"></i>
                        </button>

                        <button className="finish-todo">
                            <i className="fa-solid fa-check"></i>
                        </button>
                        
                        <button className="remove-todo">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    <div class= "todo">
                        <h5>Organização</h5>
                        <button className="finish-todo">
                            <i className="fa-solid fa-check"></i>
                        </button>

                        <button className="finish-todo">
                            <i className="fa-solid fa-check"></i>
                        </button>

                        <button className="remove-todo">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        
                        <button className="remove-todo">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div> <hr />

                    <div className= "todo">
                        <h3 className="atributodeavaliacao">Laudos</h3>
                    </div>

                    <div className= "todo">
                        <h5>Laudos Feitos:</h5>
                        <p>4/15</p>
                    
                    </div>
                </div>
                    
                    <div className= "todo">
                        <h3 className="atributodeavaliacao">Qualidade</h3>
                    </div>   

                    <div className= "todo">
                        <h5>TDNA:          0,48% <i className="fa-solid fa-check"></i></h5> 
                        <h5>IFI:  xxx%</h5>
                    </div> 
            </div>
        

    </>
    )
}