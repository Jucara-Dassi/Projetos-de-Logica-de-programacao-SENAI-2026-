let rl = require('readline-sync');
// ============================================================
//   ATIVIDADE 04 – Operadores Aritméticos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-04.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Operações básicas
// ------------------------------------------------------------
// Declare duas variáveis: "num1" com valor 18 e "num2" com valor 5.
// Calcule e exiba no console, usando template literal, o cálculo e o resultado:
//    Exemplo: console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);
// a) A soma dos dois números.
// b) A subtração (num1 - num2).
// c) A multiplicação.
// d) A divisão (use toFixed() para limitar o resultado a 2 casas decimais).
// e) O resto da divisão (módulo %).
// f) num1 elevado a num2 (potência).

// → Seu código aqui:

/*
let num1 = 18
let num2 = 5
console.log(`Calculo soma: ${num1 + num2}`);                  // a)
console.log(`Calculo subtracao: ${num1 - num2}`);             // b)
console.log(`Calculo multiplicacao: ${num1 * num2}`);         // c)
console.log(`Calculo divisao = ${(num1/num2).toFixed(2)}`);    // d)
console.log(`Calculo modulo: ${num1 % num2}`);                 // e)
console.log(`Calculo potencia: ${num1 ** num2}`);              // f)
console.log("_______________________________");           
*/

// ------------------------------------------------------------
// EXERCÍCIO 2 – Área e perímetro
// ------------------------------------------------------------
// a) Declare as variáveis "largura" (valor 8) e "altura" (valor 5).
// b) Calcule a área do retângulo (largura * altura) e armazene em "area".
// c) Calcule o perímetro (2 * largura + 2 * altura) e armazene em "perimetro".
// d) Exiba no console usando template literal:
//    "Retângulo | Largura: <largura> | Altura: <altura> | Área: <area> | Perímetro: <perimetro>"

// → Seu código aqui:

/*
let largura = 8;                                      
let altura = 5;
let area = ("Area:", largura * altura)
let perimetro = ("Perimetro:", 2 * largura + 2 * altura)
let retangulo = (`Retângulo | Largura: ${largura}| Altura: ${altura} | Área: ${area} | Perímetro: ${perimetro}`)
console.log(retangulo)
console.log("_______________________________")
*/

// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculando desconto
// ------------------------------------------------------------
// a) Declare a variável "precoOriginal" com o valor 250.
// b) Declare a variável "percentualDesconto" com o valor 15 (representa 15%).
// c) Calcule o valor do desconto e armazene em "valorDesconto".
//    Dica: valorDesconto = precoOriginal * (percentualDesconto / 100)
// d) Calcule o preço final (precoOriginal - valorDesconto) e armazene em "precoFinal".
// e) Exiba no console usando template literal:
//    "Preço original: R$ <precoOriginal> | Desconto: R$ <valorDesconto> | Preço final: R$ <precoFinal>"
//    Use toFixed(2) nos valores em reais.

// → Seu código aqui:

// let precoOriginal = 250
// let percentualDesconto = 15

// let valorDesconto = precoOriginal * (percentualDesconto / 100)

// let precoFinal = precoOriginal - valorDesconto

// console.log(`Preço original: R$ ${precoOriginal.toFixed(2)} | Desconto: R$ ${valorDesconto.toFixed(2)} | Preço final: R$ ${precoFinal.toFixed(2)}`) // e)          
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Operadores de atribuição composta
// ------------------------------------------------------------
// a) Declare uma variável "pontos" com o valor 100.
// b) Some 50 pontos usando +=. Exiba o resultado.
// c) Subtraia 30 pontos usando -=. Exiba o resultado.
// d) Multiplique por 2 usando *=. Exiba o resultado.
// e) Divida por 4 usando /=. Exiba o resultado.
// f) Para cada operação, use template literal:
//    "Pontos após <tipo da operação>: <valor>"

// → Seu código aqui:

// let pontos = 100
// pontos += 50
// console.log(`Pontos após soma: ${pontos}`)
// pontos -= 30
// console.log(`Pontos após substracao: ${pontos}`)
// pontos *= 2
// console.log(`Pontos após multiplicacao: ${pontos}`)
// pontos /= 4
// console.log(`Pontos após divisao: ${pontos}`)


// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Incremento e decremento
// ------------------------------------------------------------
// a) Declare uma variável "vidas" com valor 3.
// b) Exiba o valor atual com console.log().
// c) Use ++ para incrementar "vidas" duas vezes, exibindo após cada incremento.
// d) Use -- para decrementar "vidas" uma vez, exibindo o resultado.
// e) Declare uma variável "nivel" com valor 1.
// f) Incremente "nivel" três vezes usando ++nivel (prefixo) e exiba cada resultado.

// → Seu código aqui:

// let vidas = 3
// console.log(`Vidas atuais: ${vidas}`)
// vidas++
// console.log(`Vidas após 1º incremento: ${vidas}`)
// vidas--
// console.log(`Vidas após decremento: ${vidas}`)

// let nivel = 1
// ++nivel
// console.log(`Nivel atual: ${nivel}`)


// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções matemáticas (Math)
// ------------------------------------------------------------
// a) Declare "nota" com o valor 7.3.
// b) Exiba o resultado de Math.round(nota), Math.floor(nota) e Math.ceil(nota).
//    Use template literal para identificar cada um.
// c) Declare "temperatura" com o valor -12.5.
// d) Exiba o valor absoluto usando Math.abs(temperatura).
// e) Use Math.max() para encontrar o maior entre: 42, 17, 89, 5, 63. Exiba o resultado.
// f) Use Math.min() para encontrar o menor entre 42, 17, 89, 5, 63. Exiba o resultado.

// → Seu código aqui:

// let nota = 7.3

// console.log(`Math.round(${nota}) = ${Math.round(nota)}`)
// console.log(`Math.floor(${nota}) = ${Math.floor(nota)}`)
// console.log(`Math.ceil(${nota}) = ${Math.ceil(nota)}`)

// let temperatura = -12.5

// console.log(`Valor absoluto de ${temperatura} = ${Math.abs(temperatura)}`)
// console.log(`Maior entre 42, 17, 89, 5, 63 = ${Math.max(42, 17, 89, 5, 63)}`)
// console.log(`Menor entre 42, 17, 89, 5, 63 = ${Math.min(42, 17, 89, 5, 63)}`)

// console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 7 – Média de notas
// ------------------------------------------------------------
// a) Peça ao usuário 3 notas (use questionFloat()).
// b) Calcule a média aritmética das 3 notas.
// c) Exiba no console:
//    "Nota 1: <n1> | Nota 2: <n2> | Nota 3: <n3>"
//    "Média: <media>" (com 2 casas decimais usando toFixed(2))

// → Seu código aqui:

// let nota  = []
// nota.push(rl.questionFloat("Digite a sua primeira nota: "))
// nota.push(rl.questionFloat("Digite a sua segunda nota: "))
// nota.push(rl.questionFloat("Digite a sua terceira nota: "))

// let media = nota.reduce((acc, nota) => acc + nota, 0) / nota.length;

// console.log(`Nota 1: ${nota[0]} | Nota 2: ${nota[1]} | Nota 3: ${nota[2]}`);
// console.log(`Média: ${media.toFixed(2)}`);
// console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 8 – Calculadora de troco
// ------------------------------------------------------------
// a) Peça ao usuário o valor total da compra (questionFloat()).
// b) Peça ao usuário o valor entregue pelo cliente (informando que deve ser maior que o valor da compra) (questionFloat()).
// c) Calcule o troco (valorEntregue - totalCompra).
// d) Exiba no console:
//    "Total da compra:  R$ <total>"
//    "Valor entregue:   R$ <entregue>"
//    "Troco:            R$ <troco>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:

// let totalCompra = rl.questionFloat("Digite o valor total da compra: R$ ");

// let valorEntregue;

// do {
//   valorEntregue = rl.questionFloat("Digite o valor entregue pelo cliente (deve ser maior que o total da compra): R$ ");
//   if (valorEntregue <= totalCompra) {
//     console.log("Valor entregue deve ser maior que o total da compra. Tente novamente.");
//   }
// } while (valorEntregue <= totalCompra);

// let troco = valorEntregue - totalCompra;
// console.log(`Total da compra:  R$ ${totalCompra.toFixed(2)}`);
// console.log(`Valor entregue:   R$ ${valorEntregue.toFixed(2)}`);
// console.log(`Troco:            R$ ${troco.toFixed(2)}`);
// console.log("_______________________________");

//feito em junho.


// ------------------------------------------------------------
// EXERCÍCIO 9 – Valor total de listas
// ------------------------------------------------------------
// a) Dada uma lista de preços, calcule e exiba o total.
// let precos = [29.90, 49.99, 15.75, 99.90];
// // b) Dada uma lista de notas, calcule e exiba a média.
// let notas = [7.5, 8.2, 6.5, 9.0];
// // c) Dada uma lista de idades, exiba a maior e a menor idade utilizando das funções Math().
// let idades = [15, 22, 30, 18, 25];

// → Seu código aqui:

// let totalPrecos = precos.reduce((acc, preco) => acc + preco, 0);
// console.log(`Total dos preços: R$ ${totalPrecos.toFixed(2)}`);

// let mediaNotas = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
// console.log(`Média das notas: ${mediaNotas.toFixed(2)}`);

// console.log(`Maior idade: ${Math.max(...idades)}`);
// console.log(`Menor idade: ${Math.min(...idades)}`);
// console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 10 – Trabalhando com objetos
// ------------------------------------------------------------
// Dado o objeto turma:

// let turma = {
//   aluno1: {
//     nome: "João",
//     notas: []
//   },
//   aluno2: {
//     nome: "Maria",
//     notas: []
//   },
//   aluno3: {
//     nome: "Pedro",
//     notas: []
//   }
// }

// a) Sem alterar o objeto (utilize somente push), peça para o usuário 3 notas para cada aluno, indicando a quem pertencerá cada nota
// b) Calcule a média de notas de cada aluno e exiba no console, indicando a quem pertence cada média
// c) Exiba a média geral da turma
// d) Exiba a nota mais alta e a mais baixa de cada aluno
// e) Exiba a nota mais alta e a mais baixa da turma

// → Seu código aqui:

// let alunos = Object.values(turma);

// for (let aluno of alunos) {
//   console.log(`Digite as notas para ${aluno.nome}:`);
//   for (let i = 0; i < 3; i++) {
//     let nota = rl.questionFloat(`Nota ${i + 1}: `);
//     aluno.notas.push(nota);
//   }

//   let media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
//   console.log(`Média de ${aluno.nome}: ${media.toFixed(2)}`);
//   console.log(`Nota mais alta de ${aluno.nome}: ${Math.max(...aluno.notas)}`);
//   console.log(`Nota mais baixa de ${aluno.nome}: ${Math.min(...aluno.notas)}`);
//   console.log("_______________________________");
// }

// let todasNotas = alunos.flatMap(aluno => aluno.notas);
// let mediaGeral = todasNotas.reduce((acc, nota) => acc + nota, 0) / todasNotas.length;


// console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
// console.log(`Nota mais alta da turma: ${Math.max(...todasNotas)}`);
// console.log(`Nota mais baixa da turma: ${Math.min(...todasNotas)}`);
// console.log("_______________________________");

//ATIVIDADE FINALIZA EM JUNHO.