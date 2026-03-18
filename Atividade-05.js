// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:

/*
let a = 10
let b = 10

let c = 10
let d = "10"

let e = 0
let f = false 

let g = null
let h = undefined

let i = "JS"
let j = "JS"

console.log(`O Resultado de ${a} == ${b} : ${a == b}`)
console.log(`O Resultado de ${c} == ${d} : ${c == d}`)
console.log(`O Resultado de ${e} == ${f} : ${e == f}`)
console.log(`O Resultado de ${g} == ${h} : ${g == h}`)
console.log(`O Resultado de ${i} == ${j} : ${i == j}`)

console.log(`O Resultado de ${a} === ${b} : ${a === b}`)
console.log(`O Resultado de ${c} === ${d} : ${c === d}`)
console.log(`O Resultado de ${e} === ${f} : ${e === f}`)
console.log(`O Resultado de ${g} === ${h} : ${g === h}`)
console.log(`O Resultado de ${i} === ${j} : ${i === j}`)
console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:

/*
let a = 5
let b = 5

let c = 5
let d = "5"

let e = 7
let f = 3

let g = true
let h = 1

console.log(`O Resultado de ${a} != ${b} : ${a != b}`)
console.log(`O Resultado de ${a} != ${b} : ${a != b}`)
console.log(`O Resultado de ${c} != ${d} : ${c != d}`)
console.log(`O Resultado de ${e} != ${f} : ${e != f}`)
console.log(`O Resultado de ${g} != ${h} : ${g != h}`)

console.log(`O Resultado de ${a} !== ${b} : ${a !== b}`)
console.log(`O Resultado de ${c} !== ${d} : ${c !== d}`)
console.log(`O Resultado de ${e} !== ${f} : ${e !== f}`)
console.log(`O Resultado de ${g} !== ${h} : ${g !== h}`)
console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:

/*
let salarioA = 3500
let salarioB = 4200

console.log(salarioA > salarioB)
console.log(salarioA < salarioB)
console.log(salarioA >= salarioB)
console.log(salarioA <= salarioB)
console.log(salarioA === salarioB)


console.log(`Salário A (R$ ${salarioA}) > Salário B (R$ ${salarioB}):  ${salarioA > salarioB ? "sim" : "nao"} `)
console.log(`Salário A (R$ ${salarioA}) < Salário B (R$ ${salarioB}):  ${salarioA < salarioB ? "sim" : "nao"} `)
console.log(`Salário A (R$ ${salarioA}) >= Salário B (R$ ${salarioB}):  ${salarioA >= salarioB ? "sim" : "nao"} `)
console.log(`Salário A (R$ ${salarioA}) <= Salário B (R$ ${salarioB}):  ${salarioA <= salarioB ? "sim" : "nao"} `)
console.log(`Salário A (R$ ${salarioA}) === Salário B (R$ ${salarioB}):  ${salarioA === salarioB ? "sim" : "nao"} `)
console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:

/*
let estoque = 0
let temEstoque = estoque > 0
let estoqueZerado = estoque === 0
let temperatura = 36.5
let febre = temperatura >= 37.6

console.log(`Qual a quantidade de estoque atual?: ${estoque}`)
console.log(`Tem mercadoria no estoque?: ${temEstoque ? "sim" : "nao"}`)
console.log(`Falta produtos no estoque?: ${estoqueZerado ? "sim" : "nao"}`)
console.log(`Qual é a temperatura atual da criança? ${temperatura}°C`)
console.log(`Abaixo de 37.6°C é febre? ${febre ? "sim" : "nao"}`)
console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:

let num1 = perguntas.questionInt('Digite o primeiro numero: '); 
let num2 = perguntas.questionInt('Digite o segundo numero: ')


console.log("_______________________________");

/*
let a = num1 > num2
let b = num1 < num2
let c = num1 === num2
let d = num1 >= num2
*/
// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando idade
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:


console.log("_______________________________");