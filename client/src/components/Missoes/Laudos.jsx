import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg"

import { useState, useEffect} from 'react'
 
export default function Laudos() {
      const [LAUDOS_PREENCHIDOS, setLAUDOS_PREENCHIDOS] = useState('');
      const LAUDOS_PREENCHIDOS2 = "null";
      const serverIP = 'http://192.168.15.56:3000';

      const token = sessionStorage.getItem('token')

      useEffect(() => {
        async function pegarDadosLaudos() {
          try {
            const response = await fetch(`${serverIP}/avaliacao/user`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }          
            });

            const data = await response.json();
            // console.log(data)
            setLAUDOS_PREENCHIDOS(data[0].LAUDOS_PREENCHIDOS);
            sessionStorage.setItem('userlaudo', data.LAUDOS_PREENCHIDOS)



          } catch (error) {
            console.log('Erro ao buscar dados', error);
          }
        }

        pegarDadosLaudos();
      }, []);

      return (
        <>
          <div className="todo">
            <div className="atributodeavaliacao">
              <h3>Laudos</h3>
              <img className="check" src={check} />
              +100<img className="moeda-roxa" src={coin} /> +100 EXP
            </div>
          </div>

          <div className="todo">
            <h5 className="atribuicao">Preenchidos</h5>

            {((LAUDOS_PREENCHIDOS == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)} 
            {((LAUDOS_PREENCHIDOS == true) ? <button className="finish-todo"></button> : <button className="remove-todo"></button>)} 
            {(LAUDOS_PREENCHIDOS2 == 'null') ? <button className="null"></button> : <NotNullButton LAUDOS_PREENCHIDOS={LAUDOS_PREENCHIDOS2}/>}
            {/* {(LAUDOS_PREENCHIDOS2 == 'null') ? <button className="null"></button> : <NotNullButton LAUDOS_PREENCHIDOS={LAUDOS_PREENCHIDOS2}/>} */}

          </div>
              {/* <div className="todo">
                <div id="botao-laudospendentes">
                  <a style={{ textDecoration: 'none' }} href="laudospendentes">
                      Laudos Pendentes
                  </a>
                </div>           
              </div> */}

        </>
      );
    }