import Navmenu from "../Navbar/Navmenu"
import { Link } from 'react-router-dom'
import usuario from '../../img/Usuario.svg'
import '../Recompensas/recompensas.css'
  

function Recompensas () {
    return (
        <div className="todocontainer">
          <div>
          <Navmenu />
            <header>
                <div>
                <img className= "usuario" src={usuario} alt="usuario" />
                </div>
                  <Link to= "/Perfil">Roberto da Silva</Link>
                  <h5>Nível 20</h5>
            </header>
         </div>

           <div className="table">
              <h2>RECOMPENSAS:</h2>

            <table >
            <thead className="colunas">
                <tr>
                <th scope="col">Recompensas:</th>
                <th scope="col">Nível:</th>
                <th scope="col">Preço:</th>
                </tr>
            </thead>

              <tbody>
                  <tr>
                  <th  className= "linhas" scope="row">Consultoria Excel</th>
                      <td >Req. Nível 10</td>
                      <td>100  ♦</td>
                  </tr>
                  <tr>
                  <th className= "linhas"scope="row">Consultoria Casa Inteligente</th>
                      <td>Req. Nível 10</td>
                      <td>100  ♦</td>
                  </tr>
                  
                  <tr>
                  <th  className= "linhas" scope="row">Consultoria Áudio/Vídeo</th>
                      <td>Req. Nível 20</td>
                      <td>750  ♦</td>
                  </tr>
                  <tr>
                  <th  className= "linhas" scope="row">Consultoria Power Poitn</th>
                      <td className="bloqueado"> Req. Nível 25</td>
                      <td>800  ♦</td>
                  </tr>

                  <tr>
                  <th  className= "linhas" scope="row">Palestra Gestão </th>
                      <td className="bloqueado">Req. Nível 40</td>
                      <td>900  ♦</td>
                  </tr>
                  <tr>
                  <th className= "linhas"scope="row">Quick Massage</th>
                      <td className="bloqueado">Req. Nível 30</td>
                      <td>1000 ♦</td>
                  </tr>

                  <tr>
                  <th  className= "linhas" scope="row">Sala Gaming</th>
                      <td className="bloqueado">Req. Nível 50 </td>
                      <td>1000 ♦</td>
                  </tr>
                  
              </tbody>
              
            </table>
         </div>
  </div>
    )
}

export default Recompensas