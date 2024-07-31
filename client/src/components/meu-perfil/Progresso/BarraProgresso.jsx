import React from "react";


import '../Progresso/barraprogresso.css'

import ProgressBar from "@ramonak/react-progress-bar";

function BarraProgresso({ xp }) {
  const maxXP = 100;

  let completion;
  let displayXP;

  
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