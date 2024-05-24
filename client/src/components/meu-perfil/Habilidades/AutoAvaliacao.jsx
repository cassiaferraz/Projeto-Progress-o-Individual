// import { useState, useEffect } from "react";
// import React from "react";

// export default function AutoAvalicao () {

//     document.getElementById("avaliacaoForm").addEventListener("submit", function(event) {
//         event.preventDefault(); // Impede o envio padrão do formulário
    
//         // Validação para cada campo de atividade
//         const atividade1 = parseFloat(document.getElementById("atividade1").value);
 
//         if (isNaN(atividade1) || atividade1 < 0 || atividade1 > 5) {
//             alert("Por favor, insira uma avaliação válida para a atividade 1 (entre 0 e 10).");
//             return;
//         }

//         alert("Avaliações enviadas com sucesso!");
//     });
//     return (
//         <div>
//             <form id="avaliacaoForm">
//             <label for="conectividade">Concetividade:</label>
//             <input type="number" id="atividade1" min="0" max="6" required />
            
//             <button type="submit">Enviar Avaliações</button>
//         </form>  
//         </div>
//     )
// }

import BoxPerfil from "../BoxPerfil/BoxPerfil"
import '../../pages/pages.css'



function AutoAvaliacao() {
    return (
        <div className="todocontainer">
            <BoxPerfil/>

           <div>
                <div>
                    <form id="avaliacaoForm">
                    <label>Concetividade:</label>
                    <input type="sprint" id="atividade1" min="0" max="5" required />


                    <button type="submit">Enviar Avaliações</button>
                    </form>  
                </div>
           </div>
        </div>
    )
}

export default AutoAvaliacao

