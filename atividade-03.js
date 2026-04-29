let rl = require('readline-sync');

// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:


// console.log("Iniciando o programa...")
// console.info('Info:A atividade atual é sobre Imput e Output')
// console.warn('Aviso:Sempre iniciar o programa com node e com o nome do arquivo')
// console.error('Error: Não foi possivel executar sua ação')
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:


// let nomeUsuario = perguntas.question('Digite seu nome: ');
// let idadeUsuario = perguntas.questionInt('Digite sua idade: ')

// console.log(`Olá, ${nomeUsuario}!Voce tem ${idadeUsuario} anos`);
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:

// let ficha = {
//     nome: rl.question('Digite seu nome: '),
//     idade: rl.questionInt('Digite sua idade: '),
//     cidade: rl.question('Digite sua cidade: '),
// }

// console.table([ficha])
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:


// let gostadedormir = perguntas.keyInYN('Voce gosta de dormir?')
// let gostadeacademia = perguntas.keyInYN('Voce gosta de fazer academia?')


// console.log(`Você gosta de dormir?: ${gostadedormir ? "gosta" : "não gosta"}`)
// console.log(`Você gosta de fazer academia?: ${gostadeacademia ? "gosta" : "não gosta"}`)
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:

/*
let comida1= perguntas.question("Digite sua primeira comida favorita:")
let comida2= perguntas.question("Digite sua segunda comida favorita:")
let comida3= perguntas.question("Digite sua terceira comida favorita:")
let comidasFavoritas = []
comidasFavoritas.push(comida1)
comidasFavoritas.push(comida2)
comidasFavoritas.push(comida3)

console.table(comidasFavoritas)
console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:
/*
let cadastroPessoal = {
    nome:perguntas.question('Digite seu nome:'),
    profissao:perguntas.question("Digite sua profissao:"),
    cidade:perguntas.question("Digite sua cidade:")
}

console.log(`Me chamo ${cadastroPessoal.nome}.Profissão: ${cadastroPessoal.profissao} e moro na cidade de ${cadastroPessoal.cidade}`);
console.table([cadastroPessoal])
console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
/*
const usuário1 = {
    nome: perguntas.question('Digite seu nome:'),
    idade: perguntas.question('Digite sua idade:'),
    endereco: {
        cidade:"Jaragua",
        rua: "Valdir Kaiser",
        numero: 89
    }
}
const usuário2 = {
    nome: perguntas.question('Digite seu nome:'),
    idade: perguntas.question('Digite sua idade:'),
    endereco: {
        cidade:"Jaragua",
        rua: "Dona Lidia",
        numero: 100
    }
}
const usuário3 = {
    nome: perguntas.question('Digite seu nome:'),
    idade: perguntas.question('Digite sua idade:'),
    endereco: {
        cidade:"Jaragua",
        rua: "Jose Teodoro Ribeiro",
        numero: 250
    }
}
let listaDeUsuarios = [usuário1,usuário2,usuário3]


console.log(listaDeUsuarios[1].nome, listaDeUsuarios[1].idade)
console.log(listaDeUsuarios[2].endereco)
console.log(listaDeUsuarios[0].nome)
console.log(listaDeUsuarios[0].endereco.rua)
console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:


// const aluno1 = {
//     nome: perguntas.question('Digite seu nome:'),
//     notas: {
//         PrimeiraNota: 4.5,
//         SegundaNota: 8,
//         TerceiraNota: 10
//         }
//     }
// const aluno2 = {
//     nome: perguntas.question('Digite seu nome:'),
//     notas: {
//         PrimeiraNota: 4.5,
//         SegundaNota: 8,
//         TerceiraNota: 10
//         }
//     }
// const aluno3 = {
//     nome: perguntas.question('Digite seu nome:'),
//     notas: perguntas.questionInt('primeita nota:');
//     perguntas.questionInt('segunda nota:'); 
//     perguntas.questionInt('terceira nota:')
//     }
//     }
// let turma = [aluno1,aluno2,aluno3]

// console.table([turma])
// console.log(turma[1].nome,turma[1].notas.PrimeiraNota)
// console.log(turma[2].nome,turma[2].notas.SegundaNota)
// console.log(turma[0].nome,turma[0].notas.TerceiraNota)
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:

// let produto = {
//     nome: perguntas.question("Nome do produto: "),
//     categoria: perguntas.question("Categoria do produto: "),
//     preco: perguntas.questionFloat("Preco do produto: "),
//     quantidade: perguntas.questionInt("Quantidade em estoque: "),
//     disponivel: perguntas.keyInYN("Produto esta disponivel ara venda? : y)Sim : n)Nao"),
// }

// console.table(produto)
// console.log(`Produto: ${produto.nome}| Categoria: ${produto.categoria} | Estoque: ${produto.quantidade} un`)
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

// let medicamento1 = {
//     nome: perguntas.question("Nome do medicamento: "),
//     preco: perguntas.questionFloat("Preco do produto: "),
//     emEstoque: perguntas.keyInYN("Produto em estoque? : y)Sim : n)Nao"),
// }

// let medicamento2 = {
//     nome: perguntas.question("Nome do medicamento: "),
//     preco: perguntas.questionFloat("Preco do produto: "),
//     emEstoque: perguntas.keyInYN("Produto em estoque? : y)Sim : n)Nao"),
// }

// let estoquefarmacia = []
// estoquefarmacia.push(medicamento1)
// estoquefarmacia.push(medicamento2)

// console.table(estoquefarmacia)
// console.log(medicamento2.nome)
// console.log(medicamento2.preco)
// console.log(medicamento1.nome)
// console.log(medicamento1.emEstoque)
