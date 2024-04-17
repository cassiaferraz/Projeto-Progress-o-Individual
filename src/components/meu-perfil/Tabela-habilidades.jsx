import tabelahabilidades from '../../assets/perfil.json'


import React, { useState } from 'react';

const habilidades = [
  { nome: 'Conectividade', valor: "" },
  { nome: 'Casa Inteligente', valor: "" },
  { nome: 'Áudio/Vídeo', valor: "" },
  { nome: 'Metálico', valor: "" },
  { nome: 'Elétrica', valor: "" },
  { nome: 'PABX', valor: "" }
];

const TabelaHabilidades = () => {
  const [valores, setValores] = useState(habilidades);

  const handleAvaliacao = (index, valor) => {
    const novasHabilidades = [...valores];
    novasHabilidades[index].valor = valor;
    setValores(novasHabilidades);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Habilidade</th>
            <th>Avaliação</th>
          </tr>
        </thead>
        <tbody>
          {valores.map((habilidade, index) => (
            <tr key={index}>
              <td>{habilidade.nome}</td>
              <td>
                <input
                  type="number"
                  value={habilidade.valor}
                  onChange={(e) => handleAvaliacao(index, e.target.value)}
                  min="0"
                  max="10"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tabelahabilidades}
    </div>
  );
};

export default TabelaHabilidades;