let rl = require('readline-sync');
// ============================================================
//   ATIVIDADE 11 – Interrompendo Laços (break / continue / return)
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Break simples
// ------------------------------------------------------------
// a) Use um for de 1 a 100.
// b) Exiba cada número.
// c) Quando o número for divisível por 7 E maior que 30, exiba:
//    "Primeiro múltiplo de 7 acima de 30: <número>" e encerre o laço com break.

// → Seu código aqui:

// for (let i = 1; i <= 100; i++) {
//       console.log(i)

//       if (i % 7 == 0 && i > 30) {
//             console.log(`Primeiro múltiplo de 7 acima de 30: ${i}`)
//             break;
//       }
// }

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Continue: filtrando vogais
// ------------------------------------------------------------
// a) Utilizando o array:
// const letras = ['a', 'b', 'c', 'e', 'f', 'i', 'k', 'o', 'p', 'u'];
// b) Usando for e continue, exiba apenas as consoantes
//    (pule as vogais: a, e, i, o, u).
// c) Ao final, exiba: "Consoantes exibidas: <quantidade>"

// → Seu código aqui:

// const letras = ['a', 'b', 'c', 'e', 'f', 'i', 'k', 'o', 'p', 'u'];
// let vogais = ['a', 'e', 'i', 'o', 'u'];
// let qtdconsoantes = 0;

// for (let i = 0; i < letras.length; i++) {
//       if (vogais.includes(letras[i])) {
//             continue;
//       }

//       console.log(letras[i]);
//       qtdconsoantes++;
// }

// console.log(`Consoantes exibidas: ${qtdconsoantes}`)
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Return: verificar aprovação
// ------------------------------------------------------------
// a) Dado o array de notas:
// const notasAlunoA = [8, 7, 6.2, 9, 5, 7.5, 9, 8.9, 2.2, 10, 7.4];
// const notasAlunoB = [8, 4.5, 6.3, 9];
// b) Percorra ambos os array com for - um for para cada array.
//    Se encontrar uma nota menor que 5, retorne imediatamente a mensagem:
//    "Reprovado na nota <nota> (índice <i>)" e pare o loop
// c) Se nenhuma nota for menor que 5, retorne: "Aprovado!"
// d) Teste com dois arrays:

// → Seu código aqui:

// const notasAlunoA = [8, 7, 6.2, 9, 5, 7.5, 9, 8.9, 2.2, 10, 7.4];
// const notasAlunoB = [8, 5.5, 6.3, 9];

// for (let i = 0; i < notasAlunoA.length; i++) {
//       if (notasAlunoA[i] < 5) {
//             console.log(`Reprovado na nota ${notasAlunoA[i]} - indice: ${i}`);
//             break;
//       }
//       if (i == notasAlunoA.length)
//             console.log("Aprovado");
// }

// for (let i = 0; i < notasAlunoB.length; i++) {
//       if (notasAlunoB[i] < 5) {
//             console.log(`Reprovado na nota ${notasAlunoB[i]} - indice: ${i}`);
//             break;
//       }
//       if (i == notasAlunoB.length)
//             console.log("Aprovado");

// }

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Break com input: adivinhe a palavra
// ------------------------------------------------------------
// a) Defina uma palavra secreta (ex: "javascript").
// b) Usando while(true) e break, repita:
//    - Peça ao usuário uma tentativa.
//    - Se acertar: exiba "Parabéns! Você acertou!" e pare o loop.
//    - Se errar: exiba "Errou! Tente novamente."
// c) Conte as tentativas e exiba ao final:
//    "Você precisou de <tentativas> tentativa(s)."

// → Seu código aqui:

// let palavraSecreta = "batata"
// let tentativas = 0
// let nome = rl.question("\nJogador(a),informe o seu nome: ")

// console.log(`\n${nome}, vamos jogar um jogo de adivinhacao!`)
// console.log("Instruções do jogo: a palavra possui apenas letras minusculas e nao ha limite de tentativas!")
// console.log("\nPrimeira dica: Se trata de um legume...")

// while (
//       palpite = rl.question(`\n${nome}, vamos la! Tente adivinhar qual e a palavra secreta: `)
// ) {
//       tentativas++
//       if (palpite == palavraSecreta) {
//             console.log("\nParabéns! Você acertou!")
//             break;
//       } else {
//             console.log(`\nErrouuuu ${nome}! Tente novamente.`)
//       }
// }

// console.log(`\n${nome}, você precisou de ${tentativas} tentativa(s) para acertar a palavra secreta.`)
// console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Continue com input: somando positivos
// ------------------------------------------------------------
// a) Usando while, peça números ao usuário até que ele digite 0.
// b) Se o número for negativo, exiba "Ignorando número negativo."
//    e ignore esse número para qualquer cálculo.
// c) Acumule e também some os números positivos.
// d) Ao digitar 0, saia do laço e exiba:
//    "Soma dos positivos: <soma>"
//    "Quantidade de positivos: <quantidade>"

// → Seu código aqui:

// let soma = 0
// let positivos = 0
// let numeros = []

// numeros = rl.question("Digite um numero (0 para sair): ")

// while (numeros != 0) {
//       if (numeros < 0) {
//             console.log("Ignorando numero negativo.")
//       } else {
//             soma += numeros
//             positivos++
//       }
//       numeros = rl.question("Digite um numero (0 para sair): ")
// }

// console.log(`Soma dos positivos: ${soma}`)
// console.log(`Quantidade de positivos: ${positivos}`)
// console.log("_______________________________");



// ------------------------------------------------------------
// EXERCÍCIO 6 – Return: busca em array de objetos
// ------------------------------------------------------------
// a) Dado o array de alunos:
// b) Crie um array que retorna o primeiro aluno com nota < 5.
//    Se não houver, retorna null.

// → Seu código aqui:

const alunos = [       
      { nome: "Ana", nota: 8.5 },
      { nome: "Bruno", nota: 6.0 },
      { nome: "Carlos", nota: 9.2 },
      { nome: "Diana", nota: 4.8 },
      { nome: "Eva", nota: 7.1 },
      { nome: "Fernando", nota: 3.8 }
];   // Array de alunos, cada um com nome e nota

let alunoReprovado = null;  // Variável para armazenar o primeiro aluno com nota < 5

for (let i = 0; i < alunos.length; i++) {    // Laço para percorrer o array de alunos
      if (alunos[i].nota < 5) {              // Verifica se a nota do aluno é menor que 5     
            alunoReprovado = alunos[i];     // Se for, armazena o aluno na variável alunoReprovado
            break;                          // Encerra o laço após encontrar o primeiro aluno reprovado
      }
}

if (alunoReprovado) {   //    Verifica se um aluno reprovado foi encontrado
      console.log(`Primeiro aluno(a) com nota < 5: ${alunoReprovado.nome} - Nota: ${alunoReprovado.nota}`);  // Exibe o nome e a nota do primeiro aluno reprovado encontrado
} else {    // Se nenhum aluno reprovado for encontrado, exibe a mensagem correspondente
      console.log("Nenhum aluno(a) com nota < 5 encontrado.");  
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Continue: relatório de vendas
// ------------------------------------------------------------
// a) Dado o array:
//    (valores -1 representam vendas canceladas)
// b) Usando for e continue, ignore as vendas canceladas (-1).
// c) Acumule o total das vendas válidas e conte quantas há.
// d) Exiba ao final:
//    "Vendas válidas: <quantidade>"
//    "Total arrecadado: R$ <total>"
//    "Ticket médio: R$ <média>"

// → Seu código aqui:

// const vendas = [320, -1, 150, -1, 80, 410, -1, 200]; // Array de vendas, onde -1 representa vendas canceladas
// let totalVendas = 0; // Variável para acumular o total das vendas válidas
// let qtdVendas = 0; // Variável para contar a quantidade de vendas válidas

// for (let i = 0; i < vendas.length; i++) {  // Laço para percorrer o array de vendas
//       if (vendas[i] === -1) {  //   Verifica se a venda é cancelada (valor -1)
//             continue;  // Se for uma venda cancelada, pula para a próxima iteração do laço
//       }
//       totalVendas += vendas[i]; // Acumula o valor da venda válida no total
//       qtdVendas++;  // Incrementa a contagem de vendas válidas
// }

// let ticketMedio = qtdVendas > 0 ? (totalVendas / qtdVendas).toFixed(2) : 0; // Calcula o ticket médio, verificando se há vendas válidas para evitar divisão por zero

// console.log(`Vendas válidas: ${qtdVendas}`);   
// console.log(`Total arrecadado: R$ ${totalVendas}`);
// console.log(`Ticket médio: R$ ${ticketMedio}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Break + continue juntos
// ------------------------------------------------------------
// a) Use um for de 1 a 50.
// b) Pule os múltiplos de 5 com continue.
// c) Pare o laço completamente quando a soma acumulada
//    dos números NÃO-múltiplos de 5 ultrapassar 200.
// d) Exiba cada número somado: "Somando: <i> | Acumulado: <soma>"
// e) Ao final: "Laço encerrado em i = <i> | Soma final: <soma>"

// → Seu código aqui:

// let soma = 0; // Variável para acumular a soma dos números não-múltiplos de 5

// for (let i = 1; i <= 50; i++) { //  Laço de 1 a 50
//       if (i % 5 === 0) { // Verifica se o número é múltiplo de 5      
//             continue; // Se for múltiplo de 5, pula para a próxima iteração          
//       }
//       soma += i; // Acumula o número na soma
//       console.log(`Somando: ${i} | Acumulado: ${soma}`); // Exibe o número somado e o acumulado
//       if (soma > 200) { // Verifica se a soma ultrapassou 200
//             console.log(`Laço encerrado em i = ${i} | Soma final: ${soma}`); // Exibe a mensagem de encerramento do laço
//             break; // Encerra o laço
//       }
// }

// console.log("_______________________________");