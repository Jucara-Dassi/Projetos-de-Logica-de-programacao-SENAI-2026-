let notas = rl.questionInt("Informe suas notas (digite -1 para encerrar): ");
let somanotas = 0
let quantnotas = 0
let listanotas = []

while (notas !== -1) {
    somanotas += notas;
    quantnotas++;
    listanotas.push(notas)

if ((notas < 0 || notas > 10) && notas !== -1) {
    console.log("Nota inválida, digite novamente.")

    notas = rl.questionInt("Informe suas notas (digite -1 para encerrar): ");
}

let medianotas = somanotas / quantnotas

console.log(`A sua media é: ${medianotas}`)
console.log("_______________________________");