let rl = require('readline-sync');
// ============================================================
// ATIVIDADE 15 – Funções com Parâmetros e Retornos
// ============================================================
//
// IMPORTANTE: a partir de agora, as funções devem RECEBER
// PARÂMETROS e RETORNAR valores sempre que fizer sentido.
// Evite ficar misturando console.log() dentro de funções.
//
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Função com 1 parâmetro
// ------------------------------------------------------------
// a) Crie a função 'quadrado(n)' que retorna n elevado ao quadrado.
// b) Teste com 3, 7 e 10. Exiba cada resultado.

// → Seu código aqui:

// quadrado = (n) => {
//       return n ** 2;
// }

// quadrados = [3, 7, 10].map(quadrado);
// console.log(quadrados);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função com 2 parâmetros
// ------------------------------------------------------------
// a) Crie a função 'somar(a, b)' que retorna a soma de 2 numeros quaisquer (numeros passados ao chamar a função).
// b) Crie 'subtrair(a, b)', 'multiplicar(a, b)' e 'dividir(a, b)'.
//    Em dividir, retorne a string "Erro: divisão por zero" se b === 0.
// c) Teste cada uma com diversos valores e exiba os resultados.

// → Seu código aqui:

// somar = (a, b) => {
//       return a + b;
// }

// subtrair = (a, b) => {
//       return a - b;
// }

// multiplicar = (a, b) => {
//       return a * b;
// }

// dividir = (a, b) => {
//       if (b === 0) {
//             return "Erro, divisao por zero";
//       }
//       return a / b;
// }

// console.log(somar(4, 4));        // 8
// console.log(subtrair(10, 5));   // 5
// console.log(multiplicar(5, 5));   // 25
// console.log(dividir(50, 2));    // 25
// console.log(dividir(1, 0));    // "Erro, divisao por zero"
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Funções booleanas
// ------------------------------------------------------------
// a) Crie 'ehPar(n)' que retorna true se n for par, senão false.
// b) Crie 'ehMaiorDeIdade(idade)' que retorna true se idade >= 18.
// c) Crie 'ehVogal(letra)' que retorna true se letra for vogal
//    (considere maiúsculas e minúsculas).
// d) Teste cada função e exiba os resultados.

// → Seu código aqui:

// EhPar = (n) => {
//       return n % 2 === 0;
// }

// EhMaiorDeIdade = (idade) => {
//       return idade >= 18;
// }

// EhVogal = (letra) => {
//       const vogais = "aeiouAEIOU";
//       return vogais.includes(letra);
// }

// console.log(EhPar(8));        // true
// console.log(EhPar(5));        // false
// console.log(EhMaiorDeIdade(30));   // true
// console.log(EhMaiorDeIdade(17));   // false
// console.log(EhVogal("a"));        // true
// console.log(EhVogal("B"));        // false      
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Múltiplos returns (early return)
// ------------------------------------------------------------
// a) Crie a função 'classificarIMC(imc)' que retorna:
//    - "Abaixo do peso"   se imc < 18.5
//    - "Peso normal"      se imc < 25
//    - "Sobrepeso"        se imc < 30
//    - "Obesidade"        caso contrário
// b) Crie 'calcularIMC(peso, altura)' que retorna peso / (altura * altura).
// c) Pergunte peso e altura ao usuário.
// d) Combine as duas funções e exiba:
//    "IMC: <valor> – <classificação>"

// → Seu código aqui:

// classificarIMC = (imc) => {
//       if (imc < 18.5) {
//             return "Abaixo do peso";
//       }
//       if (imc < 25) {
//             return "Peso normal";
//       }  
//       if (imc < 30) {
//             return "Sobrepeso";
//       }
//       return "Obesidade";
// }

// calcularIMC = (peso, altura) => {
//       return peso / (altura * altura);
// }

// let peso = rl.question("Digite seu peso (kg): ");
// let altura = rl.question("Digite sua altura (m): ");
// let imc = calcularIMC(peso, altura);
// let classificacao = classificarIMC(imc);
// console.log(`IMC: ${imc.toFixed(2)} – ${classificacao}`);  
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Parâmetros padrão (default)
// ------------------------------------------------------------
// a) Crie a função 'precoComDesconto(valor, desconto = 10)' que retorna
//    o valor após aplicar o desconto em PORCENTAGEM.
// b) Teste:
//    - precoComDesconto(100)     → retorno esperado: 90
//    - precoComDesconto(100, 25  → retorno esperado: 75
//    - precoComDesconto(250, 5)  → retorno esperado: 237.5
// c) Exiba cada resultado formatado com toFixed(2).

// → Seu código aqui:

// precoComDesconto = (valor, desconto = 10) => {
//       return valor * (1 - desconto / 100);
// }

// console.log(precoComDesconto(100).toFixed(2));       // 90.00
// console.log(precoComDesconto(100, 25).toFixed(2));   // 75.00
// console.log(precoComDesconto(250, 5).toFixed(2));   // 237.50
// console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções que recebem vetores
// ------------------------------------------------------------
// a) Crie a função 'somarVetor(vet)' que retorna a soma dos elementos de um vetor.
// b) Crie 'mediaVetor(vet)' que retorna a média (REAPROVEITE somarVetor).
// c) Crie 'maiorDoVetor(vet)' que retorna o maior valor de um vetor.
// d) Crie 'menorDoVetor(vet)' que retorna o menor valor de um vetor.
// e) Teste com:
// numeros = [12, 7, 25, 3, 18, 9, 31, 14];

// → Seu código aqui:

// somarVetor = (vet) => {
//       let soma = 0;
//       for (let num of vet) {
//             soma += num;
//       }
//       return soma;
// }

// mediaVetor = (vet) => {
//       return somarVetor(vet) / vet.length;
// }

// maiorDoVetor = (vet) => {
//       let maior = vet[0];
//       for (let num of vet) {
//             if (num > maior) {
//                   maior = num;
//             }
//       }
//       return maior;
// }

// menorDoVetor = (vet) => {
//       let menor = vet[0];
//       for (let num of vet) {
//             if (num < menor) {
//                   menor = num;
//             }
//       }
//       return menor;
// }

// console.log(`Vetor: [${numeros}]`);
// console.log(`Soma: ${somarVetor(numeros)}`);
// console.log(`Média: ${mediaVetor(numeros).toFixed(2)}`);
// console.log(`Maior: ${maiorDoVetor(numeros)}`);
// console.log(`Menor: ${menorDoVetor(numeros)}`);
// console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 7 – Função que retorna objeto
// ------------------------------------------------------------
// a) Crie a função 'criarAluno(nome, idade, nota)' que retorna um objeto:
//    { nome, idade, nota, situacao }
//    onde 'situacao' é "Aprovado" se nota >= 7, senão "Reprovado".
// b) A verificação de aprovação deve ser feita por uma função específica para isso.
// c) Crie 3 alunos chamando a função e exiba-os com console.table([a1, a2, a3]).

// → Seu código aqui:

// criarAluno = (nome, idade, nota) => {
//       const situacao = verificarAprovacao(nota);
//       return { nome, idade, nota, situacao };
// }

// verificarAprovacao = (nota) => {
//       return nota >= 7 ? "Aprovado" : "Reprovado";
// }

// const aluno1 = criarAluno("Rodolfo", 25, 8.5);
// const aluno2 = criarAluno("Ana", 30, 6.0);
// const aluno3 = criarAluno("Bruno", 28, 7.0);

// console.table([aluno1, aluno2, aluno3]);
// console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 8 – Função que retorna vetor
// ------------------------------------------------------------
// a) Crie a função 'gerarPares(inicio, fim)' que retorna um vetor
//    com todos os números PARES entre 'inicio' e 'fim' (inclusive).
// b) Teste com gerarPares(1, 20) e exiba o vetor.
// c) Crie 'filtrarMaioresQue(vet, limite)' que retorna um novo vetor
//    apenas com os elementos maiores que 'limite'.
// d) Combine: gere pares de 1 a 50 e filtre os maiores que 30.

// → Seu código aqui:

// gerarPares = (inicio, fim) => {
//       const pares = [];
//       for (let i = inicio; i <= fim; i++) {
//             if (i % 2 === 0) {
//                   pares.push(i);
//             }
//       }
//       return pares;
// }

// filtrarMaioresQue = (vet, limite) => {
//       const filtrados = [];
//       for (let num of vet) {
//             if (num > limite) {
//                   filtrados.push(num);
//             }
//       }
//       return filtrados;
// }

// const pares1a20 = gerarPares(1, 20);
// console.log(`Pares entre 1 e 20: [${pares1a20}]`);
// const pares1a50 = gerarPares(1, 50);
// const paresMaioresQue30 = filtrarMaioresQue(pares1a50, 30);
// console.log(`Pares entre 1 e 50 maiores que 30: [${paresMaioresQue30}]`);
// console.log("_______________________________");