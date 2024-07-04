import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    nome: '',
    moedas: 0,
    xp: 0,
    nivel: 0,
  });

  useEffect(() => {

    async function fetchData() {
      try {
        const token = sessionStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/perfil` , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        })
        const data = await response.json()
        if (data[0].NOME !== user.nome || data[0].MOEDAS !== user.moedas || data[0].XP !== user.xp || data[0].NIVEL !== user.nivel) {
          setUser({
            ...user,
            nome: data[0].NOME,
            moedas: data[0].MOEDAS,
            xp: data[0].XP,
            nivel: data[0].NIVEL,
            // Adicione quaisquer outros valores que você queira incluir
          });
        }
      }
      catch (error) {
        console.log('Erro ao buscar os dados: ', error)
      }
    }

    fetchData();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;