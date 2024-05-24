import React from "react";


import '../Progresso/barraprogresso.css'

import ProgressBar from "@ramonak/react-progress-bar";

function BarraProgresso({xp}) {
  const string = xp + "/1000"

  const completion = (xp/1000)*100;


  return (

    <div className = "progresso">
      
        <ProgressBar
             completed={completion}
            bgColor="#F24194"
             customLabel= {string}
             labelClassName="label "
/>
    </div>

  )

};

export default BarraProgresso