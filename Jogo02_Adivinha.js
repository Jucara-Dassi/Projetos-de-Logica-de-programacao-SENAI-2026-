let rl = require('readline-sync');
// ============================================================
//   JOGO: Adivinhe o Número
// ============================================================
//
// O jogo tem DOIS modos, ambos devem ser implementados:
//
//   MODO 1 – Computador pensa, você adivinha
//     O computador sorteia um número de 1 a 100.
//     O jogador tem até 7 tentativas para descobrir qual é.
//     A cada erro, o programa diz se o palpite foi alto ou baixo.
//
//   MODO 2 – Você pensa, computador adivinha
//     O jogador pensa em um número de 1 a 100 (não digita).
//     O computador tenta adivinhar usando busca binária:
//        sempre chuta o meio do intervalo restante.
//     O jogador responde: 1 = correto | 2 = muito alto | 3 = muito baixo
//     O computador deve acertar em no máximo 7 tentativas.
//
// Para números aleatórios, utilize a função Math.random() do Javascript
// ============================================================

// let lerTeclado = require('readline-sync');

// ============================================================
// CONFIGURAÇÕES DO JOGO (não altere)
// ============================================================



// ============================================================
// MENU PRINCIPAL
// ============================================================

// console.log("|==============================|");
// console.log("|     ADIVINHE O NÚMERO        |");
// console.log("|==============================|");
// console.log("|  1 – Eu adivinho o número    |");
// console.log("|  2 – Computador adivinha     |");
// console.log("|  3 – Sair                    |");
// console.log("|==============================|");

// const modo = lerTeclado.questionInt("\nEscolha o modo: ");

// console.log("_______________________________");


// ============================================================
// MODO 1 – Computador pensa, jogador adivinha
// ============================================================
//
// Instruções para implementação do Modo 1:
//
// PASSO 1 – Gere o número secreto do computador Math.random();
// PASSO 2 – Passe as instruções do jogo.
// PASSO 3 – Use um for para as tentativas.
//  - Se acertou, exiba: "Parabéns! Você acertou em <i> tentativa(s)!", e encerre o jogo.
//  - Se o palpite for maior que o secreto, exiba: "Muito alto! Tente um número menor."
//  - Se o palpite for menor que o secreto, exiba: "Muito baixo! Tente um número maior."
//  - Ao final de cada tentativa errada, exiba quantas tentativas restam.
//  - Se o jogador NÃO acertou, exiba: "Fim de jogo! O número era <secreto>."
// PASSO 4 – Exiba um resumo:
//           "Número secreto: <secreto>"
//           "Tentativas usadas: <i>"
//           "Resultado: Vitória" ou "Resultado: Derrota"

// → Seu código do MODO 1 aqui:

// ============================================================
// MODO 1 – Computador pensa, jogador adivinha
// ============================================================
// ============================================================
// MODO 2 – Jogador pensa, computador adivinha
// ============================================================
//
// Instruções para implementação do Modo 2:
//
// PASSO 1 – Instrua o jogador a digitar um número inteiro entre 1 e 100;
// PASSO 2 – Inicialize o intervalo de busca:
//           let min = NUM_MIN;
//           let max = NUM_MAX;
// PASSO 3 – Use um for para as tentativas.
//   a) Calcule o palpite do computador: meio do intervalo
//   b) Exiba: "Tentativa <i>: Meu palpite é <palpite>!"
//   c) Pergunte ao jogador o resultado com questionInt():
//        "1 – Acertei | 2 – Muito alto | 3 – Muito baixo"
//   d) De acordo com a resposta, busque pelo meio do novo intervalo.
// PASSO 4 – Se o computador acertar, exiba uma mensagem de vitória, exiba quantas tentativas o computador usou e finalize o jogo.
// PASSO 5 – Se o computador não acertar, exiba uma mensagem de derrota e o número que o jogador estava pensando.

// Implemente seu código abaixo:

// ============================================================
// MODO 2 – Jogador pensa, computador adivinha
// ============================================================

console.log("|==============================|");
console.log("|     ADIVINHE O NÚMERO        |");
console.log("|==============================|");
console.log("|  1 – Eu adivinho o número    |");
console.log("|  2 – Computador adivinha     |");
console.log("|  3 – Sair                    |");
console.log("|==============================|");

let modo = rl.questionInt("\nEscolha o modo: ");

console.log("_______________________________");


// Instruções para implementação do Modo 1:

if (modo === 1) {
  console.log(`
JOGO DE ADIVINHAÇÃO!
Estou pensando em um número entre 1 e 100
Você tem 7 tentativas para acertar.
`);

const maximoTentativas = 7;
const numeroMinimo = 1;
const numeroMaximo = 100;

let numeroSecreto = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
let acertou = false;

for (let tentativa = 1; tentativa <= maximoTentativas; tentativa++) {
  let palpite = rl.questionInt(`Tentativa ${tentativa}/${maximoTentativas}. Digite um numero: `);

if (palpite === numeroSecreto) {
    console.log("Parabens! Voce acertou!");
    acertou = true;
    break;
} else if (palpite < numeroSecreto) {
    console.log("Errouuuu! O número é MAIOR");
} else {
    console.log("Errouuuu! O número é MENOR");
}
}

if (!acertou) {
  console.log(`Voce perdeu! O numero era ${numeroSecreto}`);
}
}

// Instruções para implementação do Modo 2:          

if (modo === 2) {
  console.log(`
JOGO DE ADIVINHAÇÃO!
Agora pense em um número inteiro entre 1 e 100.
Vou tentar adivinhar qual é!
`);

maximoTentativas = 7;
let numMinimo = 1;
let numMaximo = 100;
let acertou = false;

for (let i = 1; i <= maximoTentativas; i++) {
   let palpite = Math.floor((numMinimo + numMaximo) / 2);
   console.log(`Tentativa ${i}: Meu palpite é ${palpite}`);

let resposta = rl.questionInt("1 - Acertei | 2 - Muito alto | 3 - Muito baixo: ");

if (resposta === 1) {
    console.log(`Acertei em ${i} tentativa(s)!`);
    acertou = true;
    break;
} else if (resposta === 2) {
    numMaximo = palpite - 1;
} else if (resposta === 3) {
    numMinimo = palpite + 1;
} else {
    console.log("Resposta invalida!");
    i--;
}
}
  if (!acertou) {
    console.log("Nao consegui adivinhar seu numero!");
  }
}

  
