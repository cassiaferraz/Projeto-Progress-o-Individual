import coin from "/img/svgs/moedaroxa.svg"
import check from "/img/svgs/check.svg"

import { useState, useEffect} from 'react'
 
export default function Laudos() {
      const [LAUDOS, setLAUDOS] = useState('');
      const LAUDOS2 = "null";

      useEffect(() => {
        async function pegarDadosLaudos() {
          try {
            const response = await fetch('http://localhost:3000/indicadores', {
              method: 'GET',
            });

            const data = await response.json();
            setLAUDOS(data[0].LAUDOS);
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

            {LAUDOS === true ? (
              <button className="remove-todo" style={{ backgroundColor: 'rgb(224, 19, 19)' }}></button>
            ) : (
              <button className="finish-todo" style={{ backgroundColor: 'rgb(96, 211, 165)' }}></button>
            )}

            {LAUDOS === true ? (
              <button className="remove-todo" style={{ backgroundColor: 'rgb(224, 19, 19)' }}></button>
            ) : (
              <button className="finish-todo" style={{ backgroundColor: 'rgb(96, 211, 165)' }}></button>
            )}

            {LAUDOS === true ? (
              <button className="remove-todo" style={{ backgroundColor: 'rgb(224, 19, 19)' }}></button>
            ) : (
              <button className="finish-todo" style={{ backgroundColor: 'rgb(96, 211, 165)' }}></button>
            )}

            {LAUDOS2 === 'null' ? (
              <button className="null" style={{ backgroundColor: '#fff' }}></button>
            ) : (
              <NotNullButton LAUDOS={LAUDOS2} />
            )} 

          </div>
             <div className="todo">
                 <div id="botao-laudospendentes">
                  <a style={{ textDecoration: 'none' }} href="laudospendentes">
                      Laudos Pendentes
                  </a>
              </div>           
              </div>

        </>
      );
    }