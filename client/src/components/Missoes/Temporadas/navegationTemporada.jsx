import React from 'react';

//Armazena os botões, texto e ano das temporadas
const NavegacaoTemporada = ({ dateTemporada, fimTemporada, handleSubtrairTemporada, handleAdicionarTemporada, flechaDireita, flechaEsquerda }) => (
  <div className='temporada-atual'>
    <img
      className="voltar-temporadas"
      src={flechaDireita}
      alt="Voltar Temporada"
      onClick={handleSubtrairTemporada}
      style={dateTemporada > 2024 ? {} : { visibility: 'hidden' }}
    />
    
  <h4>
  <span className='temporada-destaque'>Temporada {dateTemporada}</span>  (Março/{dateTemporada} - Fevereiro/{fimTemporada})
  </h4>
    
    <img
      className="voltar-temporadas"
      src={flechaEsquerda}
      alt="Avançar Temporada"
      onClick={handleAdicionarTemporada}
      style={dateTemporada < 2025 ? {} : { visibility: 'hidden' }}
    />
  </div>
);

export default NavegacaoTemporada;