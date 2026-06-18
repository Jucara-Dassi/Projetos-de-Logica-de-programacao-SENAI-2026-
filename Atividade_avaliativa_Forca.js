const rl = require('readline-sync');  // para efetuar perguntas ao usuario

// //1ª VERSAO DO JOGO (USANDO APENAS UMA FUNCAO):

// function jogarForca() {          // Declara a função principal do jogo

//     let palavra = "INFERNO";     //Palavra escolhida, pode ser alterada

//     let letrasDescobertas = Array(palavra.length).fill("_");
//     // Array(palavra.length) - Cria um array com o mesmo tamanho da palavra e preenche todas as posições com "_"
//     // Cada "_" representa uma letra que ainda não foi descoberta no jogo e o .fill("_") -  preenche com "_" 

//     let tentativas = 6;  //numero de tentativas possiveis

//     console.log("\nO temivel jogo da forca! A palavra está escondida… Você consegue encontrá-la antes que seja tarde?")  //Frase de impacto kkk

//     let player = rl.question("\nInforme o seu nome jogador(a): ")  //Pede o nome do jogador(a)

//     console.log(`\nBem-vindo ao jogo da forca ${player}!`);  //Mensagem de boas vindas para o jogador
//     console.log(`\nVamos iniciar o jogo ${player}! Você tem poucas chances… use cada uma com sabedoria`) //Mensagem para avisar que o jogo irá iniciar

//     // Loop do jogo usando while
//     while (tentativas > 0 && letrasDescobertas.includes("_")) { // letrasDescobertas.includes("_") - Verifica se ainda existe "_" no array (ou seja, letras não descobertas ainda), retorna true se faltar letra ou false se a palavra estiver completa
//         console.log("\nPalavra:", letrasDescobertas.join(" ")); // letrasDescobertas.join(" ") - Junta todos os elementos do array em uma única string, colocando um espaço " " entre cada letra para exibir no formato do jogo

//         // Pede uma letra ao usuário
//         let letra = rl.question("Digite uma letra: ").toUpperCase();  //toUpperCase pois a palavra esta em letra maiscula e precisa converter caso o usuario digite minuscula

//         // if para verificar se digitou algo válido
//         if (!letra || letra.length !== 1) {
//             // Se o usuário não digitou nada OU digitou mais de um caractere
//             console.log("Digite apenas uma letra!");
//             continue;  /// Volta para o início do loop
//         } else if (!letra.match(/^[A-Z]$/)) {
//             // Se o que foi digitado NÃO é uma letra de A a Z (ex: número ou símbolo)
//             console.log("Digite apenas uma letra válida!");
//             continue;  // volta para o início do loop
//         }


//         // Verifica a letra digitada pelo usuario 
//         if (palavra.includes(letra)) {  // Se a palavra contém a letra digitada
//             for (let i = 0; i < palavra.length; i++) {  // Percorre cada posição da palavra
//                 if (palavra[i] === letra) {    // Se a letra digitada for igual à letra na posição atual
//                     letrasDescobertas[i] = letra;   // Substitui o "_" pela letra correta na mesma posição
//                 }
//             }
//             console.log("Boa, voce acertou uma!");  // Mensagem de acerto

//         } else {  // Caso a letra NÃO esteja na palavra
//             tentativas--; // Diminui uma tentativa do jogador
//             console.log("Letra errada! Tentativas restantes:", tentativas); // Mostra mensagem de erro e quantas tentativas ainda restam

//         }
//     }

//     // Resultado final
//     if (!letrasDescobertas.includes("_")) {    // verifica se NÃO existe mais "_" (ou seja, todas as letras foram descobertas)
//         console.log(`\nParabéns! Você venceu ${player}!`);   // mensagem exibida quando o jogador acerta a palavra inteira
//     } else {
//         console.log(`\nFim de jogo ${player}! A palavra era:`, palavra);  // mensagem exibida quando as tentativas acabam e o jogador perde
//     }
// }

// jogarForca();  // Inicia o jogo


//2ª VERSAO DO JOGO E FINAL (USANDO APENAS MAIS DE UMA FUNCAO):

function jogarForca() {     // Declara a função principal do jogo

    let palavra = "FESTA";  //Palavra escolhida, pode ser alterada

    let letrasDescobertas = Array(palavra.length).fill("_");
    // Array(palavra.length) - Cria um array com o mesmo tamanho da palavra e preenche todas as posições com "_"
    // Cada "_" representa uma letra que ainda não foi descoberta no jogo e o .fill("_") -  preenche com "_" 

    let tentativas = 6; // Define o número máximo de tentativas

    console.log("\nTe apresento o temivel jogo da forca! A palavra está escondida… Você consegue encontrá-la?"); //Frase de impacto KKK

    let player = rl.question("\nInforme o seu nome jogador(a): ");   //Pede o nome do jogador(a)

    console.log(`\nBem vindo(a) ${player}! Vamos iniciar o jogo, você tem poucas chances… use cada uma com sabedoria!`) //Mensagem para avisar que o jogo irá iniciar

    //Função para validar entrada (letra digitada)
    function validarEntrada(letra) {        // Função que valida se a entrada é válida
        if (!letra || letra.length !== 1) {   // Verifica se está vazio ou se tem mais de um caractere
            console.log("Digite apenas uma letra!");
            return false; // Retorna falso se inválido
        }

        if (!letra.match(/^[A-Z]$/)) { // Verifica se não é uma letra de A a Z
            console.log("Digite apenas letras (sem números ou símbolos)!");
            return false; // Retorna falso se inválido
        }
        return true; // Retorna verdadeiro se a entrada for válida
    }

    //Função para verificar e aplicar a letra
    function verificarLetra(letra) {     // Função que processa a letra digitada
        if (palavra.includes(letra)) {   // Verifica se a letra existe na palavra

            for (let i = 0; i < palavra.length; i++) {  // Percorre todas as letras da palavra

                if (palavra[i] === letra) {       // Compara cada posição com a letra digitada
                    letrasDescobertas[i] = letra; // Substitui "_" pela letra correta na posição
                }
            }
        } else { // Caso a letra não esteja na palavra
            tentativas--; // Diminui o número de tentativas
            console.log("Letra errada! Tentativas restantes:", tentativas); // Mostra mensagem de erro e quantas tentativas ainda restam
        }
    }

    // Função principal de rodada (substitui o while utilizado na versão anterior)
    function rodada() {     // Função responsável por controlar o fluxo do jogo
        if (tentativas === 0 || !letrasDescobertas.includes("_")) {   // Verifica se acabou o jogo

            if (!letrasDescobertas.includes("_")) {   // Verifica se o jogador descobriu toda a palavra
                console.log(`\nParabéns ${player}, você venceu!`);
            } else {   // Caso ainda existam "_" e as tentativas acabaram
                console.log(`\nFim de jogo ${player}! A palavra era:`, palavra);
            }
            return; // Encerra a execução da função
        }

        console.log("\nPalavra:", letrasDescobertas.join(" ")); // Mostra a palavra com espaços

        let letra = rl.question("Digite uma letra: ").toUpperCase(); // Lê a letra digitada e converte para maiúscula

        if (!validarEntrada(letra)) {  // Valida a entrada do usuário
            return rodada();          // Repete a rodada se for inválida
        }

        verificarLetra(letra);  // Chama a função que processa a letra
        rodada();              // Chama novamente a função (recursão) para continuar o jogo
    }

    rodada(); // Inicia a primeira rodada do jogo
}
jogarForca(); // Executa o jogo chamando a função principal