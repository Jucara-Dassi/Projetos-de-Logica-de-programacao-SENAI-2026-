let perguntas = require('readline-sync');
//============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
//
// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão: 
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:

// let jogador = {
//     nome: perguntas.question("Digite o seu nome: "), 
//     pontos: 0
// }

// console.log(`Bem-vindo ${jogador.nome}!, este quiz é sobre JOGOS e iremos testar o seu conhecimento nesta area, se prepare que o jogo irá começar!!!`)
// console.log("_______________________________________________________________________________________________________");

// console.log("Questao 1: Qual o jogo criado pela Rockstar Games que tem como tematica o Faroeste?")
// console.log("1) Gta III")
// console.log("2) The witcher")
// console.log("3) Red dead redemption")
// console.log("4) Black")

// let resposta1 = perguntas.questionInt("Escolha uma opcao 1 a 4:  ")

// switch (resposta1) {
//   case 3:
//     console.log("Resposta correta, muito bem!")
//     jogador.pontos = jogador.pontos + 1;
//     break;
//   case 1:
//   case 2:
//   case 4:
//     console.log("Vixe, resposta incorreta! A opcao certa era a 3.")
//     break;
//     default:
//         console.log("Opcao invalida, nenhum ponto atribuido.")
// }
// console.log("_______________________________________________________________________________________________________");

// console.log("Questao 2: Qual é o jogo que tem tres personagens como principais protagonistas?")
// console.log("1) Gta V")
// console.log("2) The last of us")
// console.log("3) Red dead redemption")
// console.log("4) Mafia")

// let resposta2 = perguntas.questionInt("Escolha uma opcao 1 a 4:  ")

// switch (resposta2) {
//   case 1:
//     console.log("Resposta correta, muito bem!")
//     jogador.pontos = jogador.pontos + 1;
//     break;
//   case 2:
//   case 3:
//   case 4:
//     console.log("Vixe, resposta incorreta! A opcao certa era a 1.")
//     break;
//     default:
//         console.log("Opcao invalida, nenhum ponto atribuido.")
// }
// console.log("_______________________________________________________________________________________________________");

// console.log("Questao 3: Qual das opcoes abaixo se trata de um jogo de corrida?")
// console.log("1) Black");
// console.log("2) Farming simulator");
// console.log("3) The Sims");
// console.log("4) The crew");

// let resposta3 = perguntas.questionInt("Escolha uma opcao 1 a 4:  ");

// switch (resposta3) {
//   case 4:
//     console.log("Resposta correta, muito bem!")
//     jogador.pontos = jogador.pontos + 1;
//     break;
//   case 1:
//   case 2:
//   case 3:
//     console.log("Vixe, resposta incorreta! A opcao certa era a 4.")
//     break;
//     default:
//         console.log("Opcao invalida, nenhum ponto atribuido.")
// }
// console.log("_______________________________________________________________________________________________________");

// console.log("Questao 4: Qual foi o jogo mais vendido em 2025 considerando todas as plataformas?")
// console.log("1) NBA 2K26");
// console.log("2) Battlefield 6");
// console.log("3) Borderlands 4");
// console.log("4) Monster Hunter: Wilds");

// let resposta4 = perguntas.questionInt("Escolha uma opcao 1 a 4:  ");

// switch (resposta4) {
//   case 2:
//     console.log("Resposta correta, muito bem!")
//     jogador.pontos = jogador.pontos + 1;
//     break;
//   case 1:
//   case 3:
//   case 4:
//     console.log("Vixe, resposta incorreta! A opcao certa era a 2.")
//     break;
//     default:
//         console.log("Opcao invalida, nenhum ponto atribuido.")
// }
// console.log("_______________________________________________________________________________________________________");

// console.log("Questao 5: Qual jogo abaixo NAO tem disponivel no formato multiplataforma?")
// console.log("1) Call of Duty: Warzone");
// console.log("2) Rocket League");
// console.log("3) Borderlands 4");
// console.log("4) Gta San Andreas");

// let resposta5 = perguntas.questionInt("Escolha uma opcao 1 a 4:  ");

// switch (resposta5) {
//   case 4:
//     console.log("Resposta correta, muito bem!")
//     jogador.pontos = jogador.pontos + 1;
//     break;
//   case 1:
//   case 2:
//   case 3:
//     console.log("Vixe, resposta incorreta! A opcao certa era a 2.")
//     break;
//     default:
//         console.log("Opcao invalida, nenhum ponto atribuido.")
// }
// console.log("_______________________________________________________________________________________________________");

// console.log(`${jogador.nome}, "Você fez ${jogador.pontos} de 5 pontos.`)


// if (jogador.pontos === 5) {
//         console.log("Perfeito! Você é um expert em jogos!")
// } else if (jogador.pontos === 4) {
//         console.log("Muito bem! Quase lá!")
// } else if (jogador.pontos === 3) {
//         console.log("Bom trabalho, mas pode melhorar.")
// } else if (jogador.pontos === 1 || 2) {
//         console.log("Nheee!")
// } else if (jogador.pontos === 0) {
//         console.log("Vixe, tente novamente!")
// }

// let resultado = {
//     Jogador: jogador.nome,
//     Pontos: jogador.pontos,
//     Aprovado:  jogador.pontos >= 3
// }
    
// console.table(resultado)
