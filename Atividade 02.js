// ============================================================
//   ATIVIDADE 02 – Arrays (Listas) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie uma array chamada "cores" com pelo menos 4 cores.
// b) Exiba a primeira e a última cor usando índices.

// → Seu código aqui:

let cores1= ["preto","branco","cinza","vermelho"];

console.log(cores1[0],cores1[3])
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Métodos básicos
// ------------------------------------------------------------
// a) Adicione uma nova cor ao final de "cores", utilizando as funções de array.
// b) Remova a primeira cor, utilizando as funções de array.
// c) Exiba o array resultante e depois a quantidade de itens armazendos (length).

// → Seu código aqui:

let cores2= ["preto","branco","cinza","vermelho"];
cores2.push("verde")               //a)
console.log("push", cores2);       //a)

cores2.shift("preto")              //b)
console.log("pop", cores2);        //b)

console.log(cores2.length);        //c)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Números
// ------------------------------------------------------------
// a) Crie um array de números.
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de números armazenados (quantidade de itens, não a soma)

// → Seu código aqui:

let number3=[5,10,20,30,40,50]        //a)          

console.log(number3,number3.length)   //b)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Todos os tipos
// ------------------------------------------------------------
// a) Crie um array com todos os tipos de dados que você conhece (number, string...).
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de itens armazenados

// → Seu código aqui:

let dados4= ["preto","branco","vermelho",10,20,30];    //a)

console.log(dados4,dados4.length)                      //b)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mudando a lista
// ------------------------------------------------------------
// a) Crie um array com vários dados de vários tipos diferentes.
// b) Exiba a lista.
// c) Remova o primeiro e o último item da lista, utilizando as funções de array.
// d) Exiba a lista novamente.
// e) Adicione um novo item no final e ou no início da lista.
// f) Exiba a lista final.

// → Seu código aqui:

let dados5= ["preto","branco","triangulo","quadrado",10,20,100,200];       //a)
console.log(dados5)                                                        //b)

dados5.shift("preto");                                                     //c)
console.log("shift",dados5);                                               //c)

dados5.pop(300);                                                           //c)
console.log("pop", dados5);                                                //c)

console.log(dados5)                                                        //d)

dados5.unshift("marrom");                                                  //e)
console.log("unshift", dados5);                                            //e)

dados5.push(300);                                                          //e)
console.log("push", dados5);                                               //e)

console.log(dados5)                                                        //f)
console.log("_______________________________");