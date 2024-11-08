const avaliacaoModel = require('../models/avaliacaoMissoesModel');
const collaboratorModel = require('../models/getUserModel');
const { AdicionarNivelMoedas } = require('./LevelController');

 

const getUserAvaliations = async (req, res) => {
  try {
    const userId = req.userId;
    const anoSelecionado = req.body.dateTemporada
    console.log(anoSelecionado)
    const avaliacaoData = await avaliacaoModel.getUser(userId, anoSelecionado);


    avaliacaoData.forEach(avaliacao => {
      const dateOnly = avaliacao.DATA.toISOString().split('T')[0];
      avaliacao.DATA = dateOnly;
    });
  

    res.status(200).json(avaliacaoData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Erro ao buscar as avaliações' });
  }
};

// const getYear = async (req, res) => {
//   try {
//     const { ano } = req.body;
//     if (ano) {
//       anoAtual = ano;
//       res.status(200).send('Ano atualizado com sucesso');
//     } else {
//       res.status(400).send('Ano inválido');
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Erro ao atualizar o ano' });
//   }
// };




const TotalAvaliations = async (req, res) => {
  try {
    // let moedasXP
    const technicians = await collaboratorModel.getUserByRole('tecnico');

    let data = []
    for (let i = 0; i < technicians.length; i++) {
      const technician = technicians[i]
      const technicianAvaliations = await avaliacaoModel.getUser(technician.ID_COLABORADOR);
      const techXpAndMoedas = VerificarXpAvaliations(technicianAvaliations)
      const techData = {
        techId: technician.ID_COLABORADOR,
        xp: techXpAndMoedas.xp,
        moedas: techXpAndMoedas.moedas
      }
      AdicionarNivelMoedas(techData);

      data.push(techData)
    }

    res.status(200).json({ message: 'Upando de lv' , data: data});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};




const VerificarXpAvaliations = (avaliacoes) => {
  let xp = 0;
  let moedas = 0;



  // Valores fixos de XP e moedas para cada característica
  const valores = {
    "POSTURA_UNIFORME": { xp: 50, moedas: 50 },
    "POSTURA_CRACHA": { xp: 50, moedas: 50 },
    "POSTURA_BOTA": { xp: 50, moedas: 50 },
    "POSTURA_MALA": { xp: 50, moedas: 50 },
    "POSTURA_COMUNICACAO": { xp: 50, moedas: 50 },
    "ASSIDUIDADE_ALMOX": { xp: 40, moedas: 40 },
    "ASSIDUIDADE_BANCO": { xp: 40, moedas: 40 },
    "ASSIDUIDADE_ROTA": { xp: 40, moedas: 40 },
    "ASSIDUIDADE_ALMOCO": { xp: 40, moedas: 40 },
    "ASSIDUIDADE_INICIO": { xp: 40, moedas: 40 },
    "VEICULO_LIMPEZAINTERNA": { xp: 35, moedas: 35 },
    "VEICULO_LIMPEZAEXTERNA": { xp: 35, moedas: 35 },
    "VEICULO_ORGANIZACAOFRENTE": { xp: 35, moedas: 35 },
    "VEICULO_ORGANIZACAOBAU": { xp: 35, moedas: 35 },
    "VEICULO_RECARGA": { xp: 35, moedas: 35 },
    "VEICULO_MULTAS": { xp: 35, moedas: 35 },
    "VEICULO_SINISTROS": { xp: 35, moedas: 35 },
    "LAUDOS_PREENCHIDOS": { xp: 100, moedas: 100 },
    "FISCALIZACAO": { xp: 100, moedas: 100 }
  };


  // Definir as características e seus valores
  const caracteristicas = [
    "POSTURA_UNIFORME",
    "POSTURA_CRACHA",
    "POSTURA_BOTA",
    "POSTURA_MALA",
    "POSTURA_COMUNICACAO",
    "ASSIDUIDADE_ALMOX",
    "ASSIDUIDADE_BANCO",
    "ASSIDUIDADE_ROTA",
    "ASSIDUIDADE_ALMOCO",
    "ASSIDUIDADE_INICIO",
    "VEICULO_LIMPEZAINTERNA",
    "VEICULO_LIMPEZAEXTERNA",
    "VEICULO_ORGANIZACAOFRENTE",
    "VEICULO_ORGANIZACAOBAU",
    "VEICULO_RECARGA",
    "VEICULO_MULTAS",
    "VEICULO_SINISTROS",
    "LAUDOS_PREENCHIDOS",
    "FISCALIZACAO"
  ];

  avaliacoes.forEach(avaliation => {
    console.log("VALORES DE POSTURA:")
    console.log(avaliation.POSTURA_UNIFORME)
    console.log(avaliation.POSTURA_CRACHA)
    console.log(avaliation.POSTURA_BOTA)
    console.log(avaliation.POSTURA_MALA)
    console.log(avaliation.POSTURA_COMUNICACAO)

    console.log("VALORES DE ASSIDUIDADE:")
    console.log(avaliation.ASSIDUIDADE_ALMOX)
    console.log(avaliation.ASSIDUIDADE_ALMOCO)
    console.log(avaliation.ASSIDUIDADE_BANCO)
    console.log(avaliation.ASSIDUIDADE_INICIO)
    console.log(avaliation.ASSIDUIDADE_ROTA)

    console.log("VALORES DE VEICULO:")
    console.log(avaliation.VEICULO_LIMPEZAEXTERNA)
    console.log(avaliation.VEICULO_LIMPEZAINTERNA)
    console.log(avaliation.VEICULO_MULTAS)
    console.log(avaliation.VEICULO_ORGANIZACAOBAU)
    console.log(avaliation.VEICULO_SINISTROS)
    console.log(avaliation.VEICULO_RECARGA)
    console.log(avaliation.VEICULO_ORGANIZACAOFRENTE)

    console.log("VALOR FISCALIZAÇÃO E LAUDOS")
    console.log(avaliation.FISCALIZACAO)
    console.log(avaliation.LAUDOS_PREENCHIDOS)
  })

  

  // Para cada característica, conte quantos registros possuem 'true'
  caracteristicas.forEach((caracteristica) => {
    let contadorTrue = 0;

    // Itera por cada avaliação e conta quantas vezes a característica é 'true'
    for (let avaliacao in avaliacoes) {
      if (avaliacoes[avaliacao][caracteristica] === true) {
        contadorTrue++;
      }
    }

    // Se pelo menos 2 dos registros para a característica forem 'true', atribui XP e moedas
    if (contadorTrue >= 2) {
      xp += valores[caracteristica].xp;
      moedas += valores[caracteristica].moedas;
    }
  });

  return { xp, moedas };
};



//----------------------------------------------
// function verifyXpByAttribute(avaliacoes) {
//   let xp = 0;
//   let moedas = 0;
//   let contTrue = 0;

//   avaliacoes.foeEach(avaliation => {
//     if (avaliation.POSTURA_UNIFORME) {
//       contTrue++;
//     }
//     if (contTrue >= 2) {
//       xp += 50
//       moedas += 50
//     }
//   })

//   const resultados = {
//     xp: xp,
//     moedas: moedas
//   }

//   return resultados
// }

//------------------------------------------------

// Exemplo de uso:
// const avaliacoes = [
//   {
//     POSTURA_UNIFORME: true,
//     POSTURA_CRACHA: false,
//     POSTURA_BOTA: false,
//     POSTURA_MALA: false,
//     POSTURA_COMUNICACAO: false,
//     ASSIDUIDADE_ALMOX: false,
//     ASSIDUIDADE_BANCO: false,
//     ASSIDUIDADE_ROTA: false,
//     ASSIDUIDADE_ALMOCO: false,
//     ASSIDUIDADE_INICIO: false,
//     VEICULO_LIMPEZAINTERNA: false,
//     VEICULO_LIMPEZAEXTERNA: false,
//     VEICULO_ORGANIZACAOFRENTE: false,
//     VEICULO_ORGANIZACAOBAU: false,
//     VEICULO_RECARGA: false,
//     VEICULO_MULTAS: false,
//     VEICULO_SINISTROS: false,
//     LAUDOS_PREENCHIDOS: false,
//     FISCALIZACAO: false,
//   },
//   {
//     POSTURA_UNIFORME: true,
//     POSTURA_CRACHA: false,
//     POSTURA_BOTA: false,
//     POSTURA_MALA: false,
//     POSTURA_COMUNICACAO: false,
//     ASSIDUIDADE_ALMOX: false,
//     ASSIDUIDADE_BANCO: false,
//     ASSIDUIDADE_ROTA: false,
//     ASSIDUIDADE_ALMOCO: false,
//     ASSIDUIDADE_INICIO: false,
//     VEICULO_LIMPEZAINTERNA: false,
//     VEICULO_LIMPEZAEXTERNA: false,
//     VEICULO_ORGANIZACAOFRENTE: false,
//     VEICULO_ORGANIZACAOBAU: false,
//     VEICULO_RECARGA: false,
//     VEICULO_MULTAS: false,
//     VEICULO_SINISTROS: false,
//     LAUDOS_PREENCHIDOS: false,
//     FISCALIZACAO: false,
//   },
//   {
//     POSTURA_UNIFORME: false,
//     POSTURA_CRACHA: false,
//     POSTURA_BOTA: false,
//     POSTURA_MALA: false,
//     POSTURA_COMUNICACAO: false,
//     ASSIDUIDADE_ALMOX: false,
//     ASSIDUIDADE_BANCO: false,
//     ASSIDUIDADE_ROTA: false,
//     ASSIDUIDADE_ALMOCO: false,
//     ASSIDUIDADE_INICIO: false,
//     VEICULO_LIMPEZAINTERNA: false,
//     VEICULO_LIMPEZAEXTERNA: false,
//     VEICULO_ORGANIZACAOFRENTE: false,
//     VEICULO_ORGANIZACAOBAU: false,
//     VEICULO_RECARGA: false,
//     VEICULO_MULTAS: false,
//     VEICULO_SINISTROS: false,
//     LAUDOS_PREENCHIDOS: false,
//     FISCALIZACAO: false,
//   }
// ];

// const resultado = VerificarXpAvaliations(avaliacoes);
// console.log(resultado); // Retorna { xp: total, moedas: total }
// console.log(typeof avaliacoes)



module.exports = {
  getUserAvaliations,
  TotalAvaliations
};











 