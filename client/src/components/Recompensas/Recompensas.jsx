import Navmenu from "../Navbar/Navmenu"
import { Link } from 'react-router-dom'
import {FaStar, FaCoins} from "react-icons/fa";

import BoxPerfil from "../meu-perfil/BoxPerfil/BoxPerfil"

import '../Recompensas/recompensas.css'

// import TabelaRecompensas from "./TabelaRecompensas";

// import '../../assets/recompensas.json'
// import '../../assets/user.json'



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
            
          <div>
          <Navmenu />
          <BoxPerfil/>
         </div>

           <div className="tablerecompensas">
            {/* <TabelaRecompensas /> */}
            <table >
            <thead className="cabecalho">
                <tr>
                <th className="titulodocabecalho2" scope="col"><h3>Recompensas</h3></th>
                <th className="titulodocabecalho2" scope="col"><h3>Nível</h3></th>
                <th className="titulodocabecalho2" scope="col"><h3>Preço</h3></th>
                </tr>
            </thead>

              <tbody>
                  <tr>
                  <th  className= "linhas" scope="row">Consultoria Excel</th>
                      <td >Req. Nível 10</td>
                      <td>100 <FaCoins/></td>
                  </tr>
                  <tr>
                  <th className= "linhas"scope="row">Consultoria Casa Inteligente</th>
                      <td>Req. Nível 10</td>
                      <td>250 <FaCoins/></td>
                  </tr>
                  
                  <tr>
                  <th  className= "linhas" scope="row">Consultoria Áudio/Vídeo</th>
                      <td>Req. Nível 20</td>
                      <td>350 <FaCoins/></td>
                  </tr>
                  <tr>
                  <th  className= "linhas" scope="row">Consultoria Power Poitn</th>
                      <td className="bloqueado"> Req. Nível 25</td>
                      <td>400 <FaCoins/></td>
                  </tr>

                  <tr>
                  <th  className= "linhas" scope="row">Palestra Gestão </th>
                      <td className="bloqueado">Req. Nível 30</td>
                      <td>500 <FaCoins/></td>
                  </tr>
                  <tr>
                  <th className= "linhas"scope="row">Quick Massage</th>
                      <td className="bloqueado">Req. Nível 40</td>
                      <td>700 <FaCoins/></td>
                  </tr>

                  <tr>
                  <th  className= "linhas" scope="row">Sala Gaming</th>
                      <td className="bloqueado">Req. Nível 50 </td>
                      <td>800 <FaCoins/></td>
                  </tr>
                  
              </tbody>
              
            </table>
         </div>
  </div>
    )
}

export default Recompensas