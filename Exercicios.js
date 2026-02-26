// ============================================================
//   ATIVIDADE 01 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Declaração de variáveis
// ------------------------------------------------------------
// a) Declare uma variável com "var" chamada "meuNome" e atribua o seu nome.
// b) Declare uma variável com "var" chamada "naoUsarVar" e no valor, atribua a explicação de porque não é recomendado utilizar 'var'.
// c) Declare uma variável com "let" chamada "minhaIdade" e atribua a sua idade.
// d) Declare uma variável com "const" chamada "ANO_NASCIMENTO" e atribua o ano em que você nasceu.
// e) Exiba as quatro variáveis no console.

// → Seu código aqui:

var meuNome = "Juçara"          //a)
var naoUsarVar = "pois é ruim"  //b)
let minhaIdade = "30"           //c)
const ANO_NASCIMENTO = 1995     //d)

console.log(`Meu nome é ${meuNome}\nMinha idade é ${minhaIdade}\nNasci no ano de ${ANO_NASCIMENTO}\nNão uso Var ${naoUsarVar},é isso!`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Strings e template literals
// ------------------------------------------------------------
// a) Declare uma variável "cidade" com o nome da cidade onde você mora.
// b) Declare uma variável "pais" com o nome do seu país.
// c) Usando um template literal, crie a frase:
//    "Eu moro em <cidade>, no <pais>." e armazene em "fraseMoradia".
// d) Exiba "fraseMoradia" e seu tipo (typeof) no console.

// → Seu código aqui:

let cidade = "Jaraguá do Sul"                                //a)
let pais = "Brasil"                                          //b)
let fraseMoradia = `Eu moro em ${cidade}, no ${pais}`        //c)fraseMoradia é o que precisa armazenar


console.log (cidade)
console.log (pais)
console.log (fraseMoradia)
console.log (typeof fraseMoradia)                       //c)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Boolean
// ------------------------------------------------------------
// a) Declare "maiorDeIdade" como true se você tem 18 anos ou mais, false caso contrário.
// b) Declare "temCNH" com um valor booleano que represente se você tem carteira de motorista.
// c) Exiba as duas variáveis e seus tipos (typeof).

// → Seu código aqui:

let maiorDeIdade = true        //a)
let temCNH = false             //b)

console.log(maiorDeIdade)
console.log(temCNH)
console.log(typeof maiorDeIdade)          //c)
console.log(typeof temCNH)                //c)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Undefined e Null
// ------------------------------------------------------------
// a) Declare uma variável "apelido" sem atribuir nenhum valor.
// b) Declare uma variável "enderecoAtual" e atribua null intencionalmente.
// c) Exiba as duas variáveis e seus respectivos tipos (typeof).
// d) Explique (em um comentário) por que typeof null retorna "object".

// → Seu código aqui:

let apelido                    //a)
let enderecoAtual = null       //b)

console.log(apelido)  
console.log(enderecoAtual)
console.log(typeof apelido)          //c)
console.log(typeof enderecoAtual)    //c)
console.log("_______________________________");

//d)Ele retorna object pois se trata de uma regra do JS, era o que identificava o "null"


// ------------------------------------------------------------
// EXERCÍCIO 5 – Identificando tipos (typeof)
// ------------------------------------------------------------
// Para cada valor abaixo, use typeof e exiba o resultado no console.
// Tente adivinhar o resultado ANTES de executar!

// 42
// "texto"
// true
// undefined
// null
// 3.14

console.log(typeof 42)          // 42
console.log(typeof "texto")     // "texto"
console.log(typeof true)        // true
console.log(typeof undefined)   // undefined
console.log(typeof null)        // null
console.log(typeof 3.14)        // 3.14
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – DESAFIO: Mini perfil
// ------------------------------------------------------------
// Usando tudo que aprendeu, crie variáveis para armazenar:
//   • nome, idade, altura (número decimal), cidade, estudandoJS (boolean)
// Em seguida, exiba no console uma mensagem completa usando template literal:
//   "Olá! Meu nome é <nome>, tenho <idade> anos, moro em <cidade>,
//    meço <altura>m e estou estudando JavaScript: <estudandoJS>."

// → Seu código aqui:

let nome = "Juçara"
let idade = 30
let altura = 1.73
let local = "Jaraguá do Sul"
let estudandoJS = true
let frase = `Olá! Meu nome é ${nome}, tenho ${idade} anos, moro em ${local}, meço ${altura} e estou estudando JavaScript ${estudandoJS}`

console.log(typeof meuNome)
console.log(typeof idade)
console.log(typeof altura)
console.log(typeof local)
console.log(typeof estudandoJS)
console.log(frase)
console.log("_______________________________");