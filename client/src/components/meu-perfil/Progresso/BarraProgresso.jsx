import React from "react";


import '../Progresso/barraprogresso.css'

import ProgressBar from "@ramonak/react-progress-bar";

function BarraProgresso({ xp }) {
  // Define o valor máximo de XP para reiniciar ou dividir
  const maxXP = 100;

  // Calcula o valor de conclusão como uma porcentagem
  let completion;
  let displayXP;

  // Se xp for maior ou igual ao valor máximo definido,
  // divide xp por maxXP e multiplica por 100 para obter uma porcentagem.
  if (xp >= maxXP) {
    completion = ((xp % maxXP) / maxXP) * 100;
    displayXP = xp % maxXP; 
  } else {
    completion = (xp / maxXP) * 10;
    displayXP = xp;
  }

  const string = `${displayXP}/${maxXP}`;

  return (
    <div className="progresso">
      <ProgressBar
        completed={completion}
        bgColor="#F24194"
        customLabel={string}
        labelClassName="label"
        transitionDuration="2s"
        transitionTimingFunction="ease-in-out"
      />
    </div>
  );
}

export default BarraProgresso;