let rl = require('readline-sync');

// ============================================================
//   DESAFIOS (para quem já terminou a atividade 15)
//   Funções com Parâmetros e Retornos
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Validador de senhas
// ------------------------------------------------------------
// Crie um conjunto de funções para validar uma senha.
//
// a) 'temTamanhoMinimo(senha, min)'  → true/false (senha.length >= min).
// b) 'temNumero(senha)'              → true se houver algum dígito (0-9).
// c) 'temMaiuscula(senha)'           → true se houver alguma letra maiúscula.
// d) 'temEspecial(senha)'            → true se houver !@#$%&*?
// e) 'validarSenha(senha)'           → retorna um OBJETO com:
//        { valida, motivos }
//    'motivos' é um VETOR de strings com tudo que falta. Ex:
//        { valida: false, motivos: ["Mínimo de 8 caracteres", "Deve conter número"] }
// f) Pergunte uma senha ao usuário e exiba o resultado da validação.

// → Seu código aqui:

// tempodeSerSenha = "Abc123!";
// console.log(`Senha: ${tempodeSerSenha}`);

// temTamanhoMinimo = (senha, min) => senha.length >= min;
// console.log(`Tem tamanho mínimo? ${temTamanhoMinimo(tempodeSerSenha, 8)}`);

// temNumero = senha => /\d/.test(senha);
// console.log(`Tem número? ${temNumero(tempodeSerSenha)}`);
// temMaiuscula = senha => /[A-Z]/.test(senha);
// console.log(`Tem letra maiúscula? ${temMaiuscula(tempodeSerSenha)}`);
// temEspecial = senha => /[!@#$%&*?]/.test(senha);
// console.log(`Tem caractere especial? ${temEspecial(tempodeSerSenha)}`);

// validarSenha = senha => {
//     const motivos = [];
//     if (!temTamanhoMinimo(senha, 8)) motivos.push("Mínimo de 8 caracteres");
//     if (!temNumero(senha)) motivos.push("Deve conter número");
//     if (!temMaiuscula(senha)) motivos.push("Deve conter letra maiúscula");
//     if (!temEspecial(senha)) motivos.push("Deve conter caractere especial");
//     return { valida: motivos.length === 0, motivos };
// }
// const resultado = validarSenha(tempodeSerSenha);
// console.log(`Senha válida? ${resultado.valida}`);
// if (!resultado.valida) {
//     console.log("Motivos:");
//     resultado.motivos.forEach(motivo => console.log(`- ${motivo}`));
// }

// let senhaUsuario = rl.question("Digite uma senha para validar: ");
// const resultadoUsuario = validarSenha(senhaUsuario);
// console.log(`Senha válida? ${resultadoUsuario.valida}`);
// if (!resultadoUsuario.valida) {
//     console.log("Motivos:");
//     resultadoUsuario.motivos.forEach(motivo => console.log(`- ${motivo}`));
// }

// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// Crie uma "biblioteca" de funções de conversão.
//
// a) 'celsiusParaFahrenheit(c)'  → C * 1.8 + 32
// b) 'fahrenheitParaCelsius(f)'  → (F - 32) / 1.8
// c) 'kmParaMilhas(km)'          → km * 0.621371
// d) 'milhasParaKm(mi)'          → mi / 0.621371
// e) 'kgParaLibras(kg)'          → kg * 2.20462
// f) 'librasParaKg(lb)'          → lb / 2.20462
//
// g) Crie 'converter(valor, dePara)' que recebe a unidade de origem
//    e a unidade de destino e RETORNA o valor convertido, chamando a função correta.
//
// h) Faça um menu (do...while) onde o usuário digita o valor, e a unidade para qual deseja converter
//    e mostre o resultado formatado com toFixed(2).

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Quizz
// ------------------------------------------------------------
// a) Declare uma lista com 5 objetos, contendo cada objeto:
//    pergunta: "..."
//    jaRespondida: false
//    acertou: false
// b) Crie a função 'exibirPergunta' que exibe a pergunta de forma estilizada.
// c) Crie a função 'verificarResposta' que verifica se a resposta está correta.
// d) Crie a função 'iniciarQuiz' que chama as perguntas em sequência.
// e) Crie a função 'mostrarResultado' que exibe o resultado atual.
// f) Crie a função 'iniciarQuiz' para iniciar o quiz.

// → Seu código aqui:

let quiz = [
    {
        pergunta: "Qual é a capital de Santa Catarina?",
        resposta: "Florianopolis",
        jaRespondida: false,
        acertou: false
    },
    {
        pergunta: "Quanto é 2 + 2?",
        resposta: "4",
        jaRespondida: false,
        acertou: false
    },
    {
        pergunta: "Qual é o nome que se dá ao profissional de cozinha",
        resposta: "Chef",
        jaRespondida: false,
        acertou: false,
    },
    {
        pergunta: "Quanto é 50 + 50",
        resposta: "100",
        jaRespondida: false,
        acertou: false,
    },
    {
        pergunta: "Qual é a capital do RS?",
        resposta: "Porto Alegre",
        jaRespondida: false,
        acertou: false,
    },
]

function exibirPergunta(pergunta) {
    console.log(`Pergunta: ${pergunta}`);
}

function verificarResposta(respostaUsuario, respostaCorreta) {
    return respostaUsuario.trim().toLowerCase() === respostaCorreta.trim().toLowerCase();
}

function iniciarQuiz() {
    quiz.forEach((item, index) => {
        if (!item.jaRespondida) {
            exibirPergunta(item.pergunta);
            const respostaUsuario = rl.question("Resposta: ");
            item.jaRespondida = true;
            item.acertou = verificarResposta(respostaUsuario, item.resposta);
        }

        mostrarResultado(index);
    });
}

function mostrarResultado(index) {
    const item = quiz[index];
    if (item.acertou) {
        console.log("Resposta correta!");
    } else {
        console.log(`Resposta incorreta! A resposta correta é: ${item.resposta}`);
    }
    console.log(`Status: ${item.jaRespondida ? "Respondida" : "Pendente"}`);
    console.log("_______________________________");
}

iniciarQuiz();
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Banco de funcionários
// ------------------------------------------------------------
//
// a) Estrutura do funcionário:
//        { id, nome, cargo, salario, ativo }
// b) Crie funções:
//    - 'criarFuncionario(lista, nome, cargo, salario)' → adiciona um novo objeto (funcionário) em uma lista de funcionários.
//    - 'buscarPorId(lista, id)'                        → retorna o objeto ou null.
//    - 'atualizarSalario(lista, id, novoSalario)'      → true/false (atualizou ou não).
//    - 'desligar(lista, id)'                           → marca ativo = false; true/false.
//    - 'reintegrar(lista, id)'                         → marca ativo = true; true/false.
//    - 'totalFolha(lista)'                             → soma dos salários dos ATIVOS.
//    - 'mediaSalarial(lista)'                          → média dos salários dos ATIVOS.
//    - 'maiorSalario(lista)'                           → retorna o funcionário ATIVO
//                                                        com maior salário.
// c) Construa um menu (do...while + switch) que permita usar todas as funções.
// d) Após cada operação, exiba a lista atualizada com console.table().

// → Seu código aqui:

function criarFuncionario(lista, nome, cargo, salario) {
    
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Jogo de adivinhação modularizado
// ------------------------------------------------------------
// Recrie o "jogo da adivinhação", agora SEPARADO em funções.
//
// a) 'sortearNumero(min, max)'              → retorna um inteiro aleatório no intervalo.
// b) 'pedirPalpite(min, max)'               → pergunta e retorna um inteiro válido
//                                              (refaz a pergunta se estiver fora).
// c) 'compararPalpite(palpite, alvo)'       → retorna "maior", "menor" ou "acertou".
// d) 'classificarTentativas(qtd)'           → retorna uma string:
//                                              1     → "Sorte de principiante!"
//                                              2-3   → "Excelente!"
//                                              4-6   → "Bom!"
//                                              7-10  → "Regular."
//                                              >10   → "Continue tentando!"
// e) 'jogar(min, max)'                      → executa o jogo completo:
//                                              sorteia, faz o loop de palpites,
//                                              e RETORNA a quantidade de tentativas.
// f) No programa principal, pergunte se o usuário quer jogar de novo (keyInYN()).
//    Mantenha um vetor 'historico' com todas as partidas:
//        { partida, tentativas, classificacao }
//    Ao final, exiba console.table(historico).

// → Seu código aqui:


console.log("_______________________________");