//Exercicios - Aula 3 

// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:

let meuNome0 = "Juçara"
let idade0 = 30
let hobby0 = "tocar violão"
let frase0 = `Olá! Meu nome é ${meuNome0}, tenho ${idade0} anos e meu hobby é ${hobby0}` 

console.log (frase0)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:

let cidade1 = "Jaraguá do Sul"
let temperatura1 = 25
let fazer1 = "passear no parque"
let frase1 = `Hoje em ${cidade1} esta fazendo ${temperatura1}°C, perfeito para ${fazer1}`

console.log (frase1)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:

let string2 = "festa"
let number2 = 31
let estudandoHoje2 = true 
let semValor2 
let tempo2 = null 
let frase2 = `Hoje tenho uma ${string2} top ${typeof string2} `
let frase21 = `Vou fazer ${number2} anos mes que vem ${typeof number2}`
let frase23 = `${estudandoHoje2} e ${typeof estudandoHoje2}`
let frase24 = `${semValor2} e ${typeof semValor2}`
let frase25 = `${tempo2} e ${typeof tempo2}`

console.log(frase2)
console.log(frase21)
console.log(frase23)
console.log(frase24)
console.log(frase25)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:

let personagem3 = "Homem de ferro"
let idade3 = 65
let cidade3 = "Guaramirim"
let missão3 = "deter os criminosos"
let frase3 = `Em um certo dia estava acontecendo um crime em ${cidade3}, o ${personagem3} estava por perto e quis ${missão3}, porém eram muitos inimigos e o ${personagem3} sabia que estava muito doente em decorrencia de sua idade, pois já passava dos ${idade3} anos. Portanto contra sua vontade apenas apareceu para amedontrar os criminosos e deixou a policia os capturar. Após esse evento o ${personagem3} decidiu se aposentar e morar na Praia`

console.log(frase3)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:

let meuNome4 = "Juçara"
let objetivo4 = "foque em atingir suas metas e conquistas"
let frase4 = `A mensagem para 2026 é ${objetivo4}, ${meuNome4}`

console.log(frase4)
console.log("_______________________________")

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:

console.log("=================================");
console.log("       SISTEMA DO USUÁRIO")
console.log("=================================");
console.log("1 - Ver Perfil")
console.log("2 - Editar Perfil")
console.log("3 - Configurações")
console.log("4 - Notificações")
console.log("5 - Relatórios")
console.log("6 - Ajuda")
console.log("7 - Sobre o Sistema")
console.log("8 - Sair")
console.log("==================================");
console.log("Digite o número da opção desejada")
console.log("==================================")