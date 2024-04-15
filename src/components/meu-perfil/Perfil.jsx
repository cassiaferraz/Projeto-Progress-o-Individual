import Navmenu from "../Navbar/Navmenu"
import '../meu-perfil/perfil.css'
import '../meu-perfil/tabela.css'




function Perfil () {
    return (


     <div className="todocontainer">
         <Navmenu /> 
         
         <h1>MEU PERFIL</h1>
         
             <div className="calendario">
              <input type="month"  />
             </div>

         <table className="tabela-perfil">
            <thead className="cabecalho">
                <tr>
                <th className="titulodocabecalho" scope="col">Habilidades</th>
                <th className="titulodocabecalho" scope="col">Progresso</th>
                <th className="titulodocabecalho" scope="col">%</th>
                </tr>
            </thead>
            <tbody className="corpodatabela">
                <tr>
                <th  className= "linhas" scope="row">Conectividade</th>
                    <td><progress value="97" max="100"></progress></td>
                    <td>97%</td>
                </tr>

                <tr>
                <th className= "linhas"scope="row">Casa Inteligente</th>
                    <td><progress value="80" max="100"></progress></td>
                    <td>80%</td>
                </tr>

                <tr>
                <th  className= "linhas" scope="row">Áudio/Vídeo</th>
                    <td><progress value="75" max="100"></progress></td>
                    <td>75%</td>
                </tr>
                <tr>
                <th  className= "linhas" scope="row">Metálico</th>
                    <td><progress value="43" max="100"></progress></td>
                    <td>43%</td>
                </tr>

                <tr>
                <th  className= "linhas" scope="row">Elétrica</th>
                    <td><progress value="25" max="100"></progress></td>
                    <td>25%</td>
                </tr>

                <tr>
                <th  className= "linhas" scope="row">PABX</th>
                    <td><progress value="15" max="100"></progress></td>
                    <td>15%</td>
                </tr>
            </tbody>
         </table>

            
         <table className="cabecalho">
         <thead>
                <tr>
                <th className="titulodocabecalho2" scope="col">MEDALHAS</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                     <td>
                     <i class="fa-solid fa-trophy"> </i>
                     <p>Produtividade</p>
                    </td>
                </tr>

                <tr>
                    <td >
                    <i class="fa-solid fa-trophy"> </i>
                    <p>Destemido</p>
                    </td>
                </tr>

                <tr>
                    <td >
                    <i class="fa-solid fa-trophy"> </i>
                    <p>Criativo</p>
                    </td>
                </tr>

                <tr>
                    <td>
                    <i class="fa-solid fa-trophy"> </i>
                    <p>Inovador</p>
                    </td>
                </tr>

                <tr>
                     <td >
                     <i class="fa-solid fa-trophy"> </i>
                     <p>Corajoso</p>
                    </td>
                </tr>

                <tr>
                    <td>
                     <i class="fa-solid fa-trophy"> </i>
                     <p>Questionador</p>
                    </td>
                </tr>
            </tbody>
         </table>
   
     </div>
    )
}

export default Perfil