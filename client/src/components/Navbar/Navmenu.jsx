import { Link, useLocation } from 'react-router-dom';
import './navmenu.css';
import alvo from '/img/svgs/alvo.svg';
import Trofeu from '/img/svgs/trofeu.svg';
import desafios from '/img/svgs/desafios.svg';

import alvo2 from '/img/svgs/alvo2.svg';
import Trofeu2 from '/img/svgs/trofeu2.svg';
import desafios2 from '/img/svgs/desafios2.svg';

import React, { useState, useEffect } from 'react';

function Navmenu() {
  const location = useLocation(); // Hook para detectar a rota atual
  const [activePage, setActivePage] = useState('Missoes'); // Define 'Missoes' como ativo por padrão

  const handleSetActive = (page) => {
    setActivePage(page); 
  };

  const getIcon = (page, defaultIcon, activeIcon) => {
    return activePage === page ? activeIcon : defaultIcon;
  };

  // Efeito para garantir que o ícone da página atual seja atualizado imediatamente
  useEffect(() => {
    const currentPage = location.pathname.includes('missoes') ? 'Missoes' :
                       location.pathname.includes('Desafios') ? 'Desafios' :
                       location.pathname.includes('Recompensas') ? 'Recompensas' : 'Missoes';
    setActivePage(currentPage);
  }, [location]);

  return (
    <div className='Navmenu'> 
      <li 
        className='botoesdenavegacao' 
        style={activePage === 'Missoes' ? { backgroundColor: 'rgb(178, 128, 204)' } : { backgroundColor: '' }}
        onClick={() => handleSetActive('Missoes')}
      >
        <Link to="/missoes" style={{ textDecoration: 'none' }}>
          <img className="icon" src={getIcon('Missoes', alvo2, alvo)} alt="Missões" /> 
          Missões
        </Link>
      </li>

      <li 
        className='botoesdenavegacao' 
        style={activePage === 'Desafios' ? { backgroundColor: 'rgb(178, 128, 204)' } : { backgroundColor: '' }}
        onClick={() => handleSetActive('Desafios')}
      >
        <Link to="/Desafios" style={{ textDecoration: 'none' }}>
          <img className="icon" src={getIcon('Desafios', desafios2, desafios)} alt="Desafios" />
          Desafios
        </Link>
      </li>

      <li 
        className='botoesdenavegacao' 
        style={activePage === 'Recompensas' ? { backgroundColor: 'rgb(178, 128, 204)' } : { backgroundColor: '' }}
        onClick={() => handleSetActive('Recompensas')}
      >
        <Link to="/Recompensas" style={{ textDecoration: 'none' }}>
          <img className="icon" src={getIcon('Recompensas', Trofeu2, Trofeu)} alt="Recompensas" /> 
          Recompensas
        </Link>
      </li>
    </div>
  );
}

export default Navmenu;