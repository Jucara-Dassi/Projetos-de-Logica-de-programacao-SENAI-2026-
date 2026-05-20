let rl = require('readline-sync');
// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:

// const matriz = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90],
// ];

// console.log(`Linhas: ${matriz.length}`); // b
// console.log(`Colunas: ${matriz[0].length}`); // b
// console.log(matriz[2][2]); //c
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:

// const matriz1 = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
// ];

// let soma = 0;

// for (let i = 0; i < matriz1.length; i++) {                  
//     for (let j = 0; j < matriz1[i].length; j++) {
//         console.log(`m[${i}][${j}] = ${matriz1[i][j]}`);
//         soma += matriz1[i][j];

//     }
// }

// console.log(`Soma de todos os elementos: ${soma}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:

// const matriz2 = [
//      [12,  7, 25],
//      [ 3, 18,  9],
//      [31, 14, 22],
// ];

// let maior = matriz2[0][0];
// let menor = matriz2[0][0];
// let localMaior = { linha: 0, coluna: 0 };
// let localMenor = { linha: 0, coluna: 0 };

// for (let i = 0; i < matriz2.length; i++) {
//     for (let j = 0; j < matriz2[i].length; j++) {
//         if (matriz2[i][j] > maior) {
//             maior = matriz2[i][j];
//             localMaior = {linha: i, coluna: j};
//         }
//         if (matriz2[i][j] < menor) {
//             menor = matriz2[i][j];
//             localMenor = {linha: i, coluna: j};
//         }   
//     }
// }


// console.log(`Maior valor: ${maior} na posição (${localMaior.linha}, ${localMaior.coluna})`);
// console.log(`Menor valor: ${menor} na posição (${localMenor.linha}, ${localMenor.coluna})`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:

// const matriz3 = [
//     [12, 7, 25],
//     [3, 18, 9],
//     [31, 14, 22],
// ];

// for (let i = 0; i < matriz3.length; i++) {
//     let somaLinha = 0
//     let somaColuna = 0

//     for (let j = 0; j < matriz3[i].length; j++) {
//         somaLinha += matriz3[i][j];
//         somaColuna += matriz3[j][i];
//     }

//     console.log(`Linha ${i}: ${somaLinha}`);
//     console.log(`Coluna ${i}: ${somaColuna}`);

// }

// let somaDiagonal = 0;

// for (let i = 0; i < matriz3.length; i++) {
//     somaDiagonal += matriz3[i][i];
// }

// console.log(`Diagonal principal: ${somaDiagonal}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:

// let qtdLinhas = rl.questionInt("Quantas linhas tera a matriz? ");
// let qtdColunas = rl.questionInt("Quantas colunas tera a matriz? ");

// let matriz4 = [];

// for (let i = 0; i < qtdLinhas; i++) {
//     matriz4[i] = [];
//     for (let j = 0; j < qtdColunas; j++) {
//         matriz4[i][j] = rl.questionInt(`Digite m[${i}][${j}]: `);
//     }
// }

// console.table(matriz4);
// console.log("_______________________________");