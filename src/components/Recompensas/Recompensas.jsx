import Navmenu from "../Navbar/Navmenu"
import { Link } from 'react-router-dom'
import usuario from '../../img/Usuario.svg'
import '../Recompensas/recompensas.css'
import Logo from '/public/img/Vivo Purpura RGB.jpg';
// import TabelaRecompensas from "./TabelaRecompensas";
// import Callback from '../Recompensas/Callback'

import '../../assets/recompensas.json'
import '../../assets/user.json'



function Recompensas () {
// definindo objetos de recompensa

    // const recompensas = [
    //     {"recompensas": "recompensa 1", "Nível": 10, "preço": 100},
    //     {"recompensas": "recompensa 2", "Nível": 10, "preço": 100},
    //     {"recompensas": "recompensa 3", "Nível": 20, "preço": 750},
    //     {"recompensas": "recompensa 4", "Nível": 25, "preço": 800},
    //     {"recompensas": "recompensa 5", "Nível": 30, "preço": 900},
    //     {"recompensas": "recompensa 6", "Nível": 40, "preço": 100},
    //     {"recompensas": "recompensa 7", "Nível": 50, "preço": 100},
    //   ];
      
    //   function verificarRecompensa(user) {
    //     const nivelUser = user.Nível;
    //     const recompensa = recompensas.find(r => r.Nível <= nivelUser);
    //     if (recompensa) {
    //       return `Você desbloqueou a ${recompensas.recompensa} por ${recompensa.preço} moedas.`;
    //     } 
    //     else {
    //       return "Você ainda não desbloqueou nenhuma recompensa.";
    //     }
    //   }
      
    //   // Exemplo de uso:
    //   const user = {"tecnico": "Joao"};
    //   console.log(verificarRecompensa(user));



    return (
        <div className="todocontainer">
            <div id="Logo"> 
              <img src={Logo} /> 
            </div>
          <div>
          <Navmenu />
            <header>
                <div>
                <img className= "usuario" src={usuario} alt="usuario" />
                </div>
                  <Link to= "/Perfil" style={{ textDecoration: 'none' }}>Roberto da Silva</Link>
                  <h5>Nível 20</h5>
            </header>
         </div>

           <div className="tablerecompensas">
            {/* <TabelaRecompensas /> */}
            <table >
            <thead className="cabecalho">
                <tr>
                <th className="titulodocabecalho2" scope="col">Recompensas:</th>
                <th className="titulodocabecalho2" scope="col">Nível:</th>
                <th className="titulodocabecalho2" scope="col">Preço:</th>
                </tr>
            </thead>

              <tbody>
                  <tr>
                  <th  className= "linhas" scope="row">Consultoria Excel</th>
                      <td >Req. Nível 10</td>
                      <td>100 <i>&#x20AC;</i></td>
                  </tr>
                  <tr>
                  <th className= "linhas"scope="row">Consultoria Casa Inteligente</th>
                      <td>Req. Nível 10</td>
                      <td>100 <i>&#x20AC;</i></td>
                  </tr>
                  
                  <tr>
                  <th  className= "linhas" scope="row">Consultoria Áudio/Vídeo</th>
                      <td>Req. Nível 20</td>
                      <td>750 <i>&#x20AC;</i></td>
                  </tr>
                  <tr>
                  <th  className= "linhas" scope="row">Consultoria Power Poitn</th>
                      <td className="bloqueado"> Req. Nível 25</td>
                      <td>800 <i>&#x20AC;</i></td>
                  </tr>

                  <tr>
                  <th  className= "linhas" scope="row">Palestra Gestão </th>
                      <td className="bloqueado">Req. Nível 30</td>
                      <td>900 <i>&#x20AC;</i></td>
                  </tr>
                  <tr>
                  <th className= "linhas"scope="row">Quick Massage</th>
                      <td className="bloqueado">Req. Nível 40</td>
                      <td>1000 <i>&#x20AC;</i></td>
                  </tr>

                  <tr>
                  <th  className= "linhas" scope="row">Sala Gaming</th>
                      <td className="bloqueado">Req. Nível 50 </td>
                      <td>1000 <i>&#x20AC;</i></td>
                  </tr>
                  
              </tbody>
              
            </table>
         </div>
  </div>
    )
}

export default Recompensas