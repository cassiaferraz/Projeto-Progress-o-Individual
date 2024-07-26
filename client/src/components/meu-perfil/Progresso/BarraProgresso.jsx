import React from "react";


import '../Progresso/barraprogresso.css'

import ProgressBar from "@ramonak/react-progress-bar";

function BarraProgresso({xp}) {
  const string = xp + "/100"

  const completion = (xp/100)*10;


  return (

    <div className = "progresso">
      
        <ProgressBar
             completed={completion}
            bgColor="#F24194"
             customLabel= {string}
             labelClassName="label "
             transitionDuration="2s"
             transitionTimingFunction="ease-in-out"
/>
    </div>

  )

};

export default BarraProgresso