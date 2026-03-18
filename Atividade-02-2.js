// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:

const aluno = {
    Nome: "Juçara Dassi",                             //a)
    Idade: 30,                                        //a)
    Curso: "Tecnico em desenvolvimento de sistemas"   //a)
}

console.log(aluno.Nome)                              //b)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:

aluno.endereco= {
    cidade:"Jaraguá do Sul",
    rua: "Valdir Kaiser"
}

console.log(aluno.endereco.cidade);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:

aluno.habilidades = ["HTML","CSS","JavaScript"]

console.log(aluno.habilidades[0])
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:

aluno.notas = [5,7.5,9,10]
let frase = `O nome do aluno é ${aluno.Nome} e as suas notas foram ${aluno.notas}` 

console.log(frase)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:

aluno.responsavel= {
    nome: "Moacir Dassi",
    parentesco: "Pai"
}

console.log(aluno.responsavel.nome)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
const listaDeAlunos = [aluno]

let aluno2 = {
    Nome: "João da Silva",                             
    Idade: 28,                                        
    Curso: "Tecnico em desenvolvimento de sistemas"   
}
let aluno3 = {
    Nome: "Ana Maria",                             
    Idade: 29,                                        
    Curso: "Tecnico em desenvolvimento de sistemas"   
}

listaDeAlunos.push(aluno2);
listaDeAlunos.push(aluno3);

console.log(listaDeAlunos[2])
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:



const listaDeAluno= [
    {
        Nome: "João da Silva",                             
        Idade: 28,                                        
        Notas: [5,8.5,10]
    },
        
    {   Nome: "Juçara Dassi",                            
        Idade: 30,
        Notas:[7.5,9,10],
    },
    {   Nome: "Ana Maria",                             
        Idade: 29,                                        
        Notas: [6,8,9.5]
    }
]

console.log(listaDeAluno[0].Nome,listaDeAluno[0].Notas)
console.log(listaDeAluno[1].Nome,listaDeAluno[1].Notas)
console.log(listaDeAluno[2].Nome,listaDeAluno[2].Notas)
console.log("_______________________________");