import React, { useState, useEffect } from 'react';
import '../Recompensas/recompensas.css'

//json
import '../../assets/recompensas.json'
import '../../assets/user.json'



function TabelaRecompensas() {
  const [recompensas, setRecompensas] = useState([]);

  useEffect(() => {
    
    fetch('../../assets/recompensas.json')
      .then(response => response.json())
      .then(data => setRecompensas(data))
      .catch(error => console.error('Erro ao carregar as recompensas:', error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Recompensa</th>
          <th>Nível</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {recompensas.map((recompensa, index) => (
          <tr key={index}>
            <td>{recompensa.recompensa}</td>
            <td>{recompensa.nível}</td>
            <td>{recompensa.preço}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaRecompensas;