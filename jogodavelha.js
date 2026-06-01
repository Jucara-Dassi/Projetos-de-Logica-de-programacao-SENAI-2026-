let rl = require('readline-sync');

// //VERSAO 1: Jogo da Velha SEM verificação de vencedor/SIMPLES:

// let tabuleiro = [
//     ["-", "-", "-"],
//     ["-", "-", "-"],
//     ["-", "-", "-"]
// ];

// console.table(tabuleiro);

// let jogadorX = "X"
// let jogadorY = "O"


// for (let i = 0; i < 9; i++) {
//     let linha = rl.questionInt("Digite a linha: ");
//     let coluna = rl.questionInt("Digite a coluna: ");
//     if (tabuleiro[linha][coluna] === "-") {
//         if (i % 2 === 0) {
//             tabuleiro[linha][coluna] = jogadorX;
//         } else {
//             tabuleiro[linha][coluna] = jogadorY;
//         }
//         console.table(tabuleiro);

//     } else {
//         console.log("Posição já ocupada. Tente novamente.");
//         i--;
//     }
// }

// console.table(tabuleiro);
// console.log("Fim do jogo!");


//VERSAO 2: Jogo da Velha COM verificação de vencedor:


// let tabuleiro = [      // Tabuleiro 3x3 vazio
//     ["-", "-", "-"],
//     ["-", "-", "-"],
//     ["-", "-", "-"]
// ];

// console.table(tabuleiro);

// let jogador1 = "X"   // Jogador 1 é "X"
// let jogador2 = "O"   // Jogador 2 é "O"

// let ganhou = false;  // Variável para controlar se houve um vencedor

// for (let jogadas = 0; jogadas < 9; jogadas++) {     // Loop para no máximo 9 jogadas (preenchimento total do tabuleiro)
//     let linha = rl.questionInt("Digite a linha desejada: ");   //   Solicita ao jogador a linha onde deseja jogar
//     if (linha < 0 || linha > 2) {   // Verifica se a linha digitada é válida (entre 0 e 2)
//         console.log("Linha inválida. Tente novamente.");
//         jogadas--;
//         let linha = rl.questionInt("Digite a linha desejada: ");
//     }
//     let coluna = rl.questionInt("Digite a coluna desejada: "); //   Solicita ao jogador a coluna onde deseja jogar
//     if (coluna < 0 || coluna > 2) { // Verifica se a coluna digitada é válida (entre 0 e 2)
//         console.log("Coluna inválida. Tente novamente.");
//         jogadas--;
//         let coluna = rl.questionInt("Digite a coluna desejada: ");
//     }

//     if (tabuleiro[linha][coluna] === "-") { // Verifica se a posição escolhida está vazia
//         let jogadorAtual; // Variável para armazenar o jogador atual (X ou O)

//         if (jogadas % 2 === 0) {  //Se o número de jogadas for par, é a vez do jogador 1 (X)
//             tabuleiro[linha][coluna] = jogador1;  //Marca a posição escolhida com "X"
//             jogadorAtual = jogador1;   //Define o jogador atual como "X"
//         } else {  //Se o número de jogadas for ímpar, é a vez do jogador 2 (O)
//             tabuleiro[linha][coluna] = jogador2; // Marca a posição escolhida com "O"
//             jogadorAtual = jogador2;   // Define o jogador atual como "O"
//         }

//         console.table(tabuleiro);   //Exibe o tabuleiro atualizado após a jogada

//         for (let linhas = 0; linhas < 3; linhas++) {  // Verifica se o jogador atual ganhou nas linhas
//             if (tabuleiro[linhas][0] === jogadorAtual && tabuleiro[linhas][1] === jogadorAtual && tabuleiro[linhas][2] === jogadorAtual) {
//                 ganhou = true;  // linhas
//             }
//         }

//         for (let colunas = 0; colunas < 3; colunas++) {  // Verifica se o jogador atual ganhou nas colunas
//             if (tabuleiro[0][colunas] === jogadorAtual && tabuleiro[1][colunas] === jogadorAtual && tabuleiro[2][colunas] === jogadorAtual) {
//                 ganhou = true;  // colunas
//             }

//         }  // Verifica se o jogador atual ganhou nas diagonais
//         if (tabuleiro[0][0] === jogadorAtual && tabuleiro[1][1] === jogadorAtual && tabuleiro[2][2] === jogadorAtual) {
//             ganhou = true; // diagonal principal, usado if pois so tem 2 diagonais, diferente das linhas e colunas que tem 3 cada

//         }
//         if (tabuleiro[0][2] === jogadorAtual && tabuleiro[1][1] === jogadorAtual && tabuleiro[2][0] === jogadorAtual) {
//             ganhou = true; // diagonal secundária, usado if pois so tem 2 diagonais, diferente das linhas e colunas que tem 3 cada
//         }


//         if (ganhou) {   // Se o jogador atual ganhou, exibe a mensagem e encerra o jogo
//             console.log("Ganhador:", jogadorAtual); // Exibe o nome do jogador vencedor
//             break;      //  Encerra o loop do jogo, pois já temos um vencedor
//         }

//     } else { // Se a posição já estiver ocupada, exibe a mensagem e permite que o jogador tente novamente
//         console.log("Posição já ocupada. Tente novamente.");
//         jogadas--;
//     }
// }

// console.table(tabuleiro);  // Exibe o tabuleiro final após o término do jogo

// if (!ganhou) {  // Se ninguém ganhou após 9 jogadas, é um empate
//     console.log("Deu empate!");
// }
// console.log("Fim do jogo!");  // Exibe a mensagem de fim do jogo, independentemente do resultado (vitória ou empate).


//VERSAO 3 (FINAL): Jogo da Velha COM verificação de vencedor e tratamento de erros (LINHA E COLUNA INVALIDAS):

let tabuleiro = [      // Tabuleiro 3x3 vazio
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];

console.table(tabuleiro);

let jogador1 = "X"   // Jogador 1 é "X"
let jogador2 = "O"   // Jogador 2 é "O"

let ganhou = false;  // Variável para controlar se houve um vencedor

for (let jogadas = 0; jogadas < 9; jogadas++) {     // Loop para no máximo 9 jogadas (preenchimento total do tabuleiro)
    let linha = rl.questionInt("Digite a linha desejada: ");   //   Solicita ao jogador a linha onde deseja jogar

    while (linha < 0 || linha > 2) {   // Verifica se a linha digitada é válida (entre 0 e 2)
        console.log("Linha inválida. Tente novamente.");
        linha = rl.questionInt("Digite a linha desejada: ");
    }
    let coluna = rl.questionInt("Digite a coluna desejada: "); //   Solicita ao jogador a coluna onde deseja jogar

    while (coluna > 2 || coluna < 0) { // Verifica se a coluna digitada é válida (entre 0 e 2)
        console.log("Coluna inválida. Tente novamente.");
        coluna = rl.questionInt("Digite a coluna desejada: ");
    }

    if (tabuleiro[linha][coluna] === "-") { // Verifica se a posição escolhida está vazia

        let jogadorAtual; // Variável para armazenar o jogador atual (X ou O)

        if (jogadas % 2 === 0) {  //Se o número de jogadas for par, é a vez do jogador 1 (X)
            tabuleiro[linha][coluna] = jogador1;  //Marca a posição escolhida com "X"
            jogadorAtual = jogador1;   //Define o jogador atual como "X"
        } else {    //Se o número de jogadas for ímpar, é a vez do jogador 2 (O)
            tabuleiro[linha][coluna] = jogador2; // Marca a posição escolhida com "O"
            jogadorAtual = jogador2;   // Define o jogador atual como "O"
        }

        console.table(tabuleiro);   //Exibe o tabuleiro atualizado após a jogada

        for (let linhas = 0; linhas < 3; linhas++) {  // Verifica se o jogador atual ganhou nas linhas
            if (tabuleiro[linhas][0] === jogadorAtual && tabuleiro[linhas][1] === jogadorAtual && tabuleiro[linhas][2] === jogadorAtual) {
                ganhou = true;  // linhas
            }
        }

        for (let colunas = 0; colunas < 3; colunas++) {  // Verifica se o jogador atual ganhou nas colunas
            if (tabuleiro[0][colunas] === jogadorAtual && tabuleiro[1][colunas] === jogadorAtual && tabuleiro[2][colunas] === jogadorAtual) {
                ganhou = true;  // colunas
            }

        }  // Verifica se o jogador atual ganhou nas diagonais
        if (tabuleiro[0][0] === jogadorAtual && tabuleiro[1][1] === jogadorAtual && tabuleiro[2][2] === jogadorAtual) {
            ganhou = true; // diagonal principal, usado if pois so tem 2 diagonais, diferente das linhas e colunas que tem 3 cada

        }
        if (tabuleiro[0][2] === jogadorAtual && tabuleiro[1][1] === jogadorAtual && tabuleiro[2][0] === jogadorAtual) {
            ganhou = true; // diagonal secundária, usado if pois so tem 2 diagonais, diferente das linhas e colunas que tem 3 cada
        }


        if (ganhou) {   // Se o jogador atual ganhou, exibe a mensagem e encerra o jogo
            console.log("Ganhador:", jogadorAtual); // Exibe o nome do jogador vencedor
            break;      //  Encerra o loop do jogo, pois já temos um vencedor
        }

    } else { // Se a posição já estiver ocupada, exibe a mensagem e permite que o jogador tente novamente
        console.log("Posição já ocupada. Tente novamente.");
        jogadas--;
    }
}

console.table(tabuleiro);  // Exibe o tabuleiro final após o término do jogo

if (!ganhou) {             // Se ninguém ganhou após 9 jogadas, é um empate
    console.log("Deu empate!");
}
console.log("Fim do jogo!");  // Exibe a mensagem de fim do jogo, independentemente do resultado (vitória ou empate).