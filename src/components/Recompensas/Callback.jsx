import '../Recompensas/Recompensas'
import React from 'react';


export default function carregarRecompensas(callback) {
    fs.readFile('recompensas.json', 'utf8', (err, data) => {
      if (err) throw err;
      callback(JSON.parse(data));
    })

    const recompensas = [
        {"recompensas": "recompensa 1", "Nível": 10, "preço": 100},
        {"recompensas": "recompensa 2", "Nível": 10, "preço": 100},
        {"recompensas": "recompensa 3", "Nível": 20, "preço": 750},
        {"recompensas": "recompensa 4", "Nível": 25, "preço": 800},
        {"recompensas": "recompensa 5", "Nível": 30, "preço": 900},
        {"recompensas": "recompensa 6", "Nível": 40, "preço": 100},
        {"recompensas": "recompensa 7", "Nível": 50, "preço": 100},
      ];
      
      function verificarRecompensa(user) {
        const nivelUser = user.Nível;
        const recompensa = recompensas.find(r => r.Nível <= nivelUser);
        if (recompensa) {
          return `Você desbloqueou a ${recompensas.recompensa} por ${recompensa.preço} moedas.`;
        } 
        else {
          return "Você ainda não desbloqueou nenhuma recompensa.";
        }
      }
      
      const user = {"tecnico": "Joao"};
      console.log(verificarRecompensa(user));


  }