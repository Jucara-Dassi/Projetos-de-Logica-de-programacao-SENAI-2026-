let rl = require('readline-sync')


console.log("=== CALCULADORA ===")
console.log("1 - Iniciar")
console.log("2 - Sair")

let opcaoMenu = rl.questionInt("Escolha uma opcao: ")

if (opcaoMenu === 2) {
    console.log("Programa encerrado.")
    return
}

let resultadoAnterior = null

while (true) {

    let resultado
    let simbolo
    let numeroA
    let numeroB

    let continuar = rl.question("Pressione ENTER para continuar ou digite OFF para sair: ")

    if (continuar == "OFF" || continuar == "off") {
        console.log("Calculadora encerrada.")
        break
    }

    if (resultadoAnterior !== null) {
        console.log("Resultado anterior:", resultadoAnterior)
        numeroA = resultadoAnterior

    } else {
        numeroA = rl.questionFloat("Digite um numero: ")
    }
    numeroB = rl.questionFloat("Digite um numero: ")

    let calculo = {
        operacao: rl.questionInt("Digite uma opcao: | 1) Soma | 2) Subtracao | 3) Multiplicacao | 4) Divisao: ")
    }

    while (calculo.operacao < 1 || calculo.operacao > 4) {
        console.log("Opcao invalida, digite de 1 a 4")

        calculo.operacao = rl.questionInt("Digite uma opcao: | 1) Soma | 2) Subtracao | 3) Multiplicacao | 4) Divisao: ")
    }

    switch (calculo.operacao) {
        case 1:
            resultado = numeroA + numeroB
            simbolo = "+"
            break
        case 2:
            resultado = numeroA - numeroB
            simbolo = "-"
            break
        case 3:
            resultado = numeroA * numeroB
            simbolo = "x"
            break
        case 4:
            simbolo = "/"

            if (numeroB !== 0) {
                resultado = numeroA / numeroB
            } else {
                console.log("Erro: divisao por zero")
                continue
            }
            break
    }
    console.log(`${numeroA} ${simbolo} ${numeroB} = ${resultado}`)

    resultadoAnterior = resultado
}