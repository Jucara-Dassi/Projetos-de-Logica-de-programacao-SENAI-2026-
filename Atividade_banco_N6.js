//criar funcao e exibir em um menu primeiro so com deposito, saque e extrato

//criar menu com as funcoes

//conta vai ser uma variavel com objetos e os objetos podem ter objetos
// let conta = {
//     historico:
//     limites: //vai ser objeto dentro do objeto,
//     tipo:  //vai ser objeto dentro do objeto,
//     informacoespessoais:   //vai ser objeto dentro do objeto e objeto (endereço) dentro do objeto
//     saldo:   //vai ser objeto dentro do objeto,
//     bonus: //vai ser objeto dentro do objeto,
//     logado: //bool
// }

//1.0 - variaveis: 

//dinheiro
//taxas (fazer objeto - saque, extrato,transferencia, taxa limite de credito, lcp )

//2.0 - function(funçoes)

//abrircaixinha
//notificações(cartao vencido, valores em atraso, novo limite, etc)
//acesso
//cadastro
//exclusao
//gerar infos(numero conta, senha)
//deposito
//saque
//transferencia (pix, ted, doc)
//emprestimo
//investimento (renda fixa/renda variavel)
//extrato (o que, quanto, data/hora, DD/MM/AAAA) - dentro da função
//sistema de ajuda 
//cashback
//recargacelular

//3.0 - validador 

//segurança
//validações


//Codigo:

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// =============================
// "BANCO" (OBJETO CONTA)
// =============================
let conta = {
    historico: [],
    saldo: 0,
    logado: false,
    numeroConta: "",
    senha: "",
    informacoes: {
        nome: "",
        email: ""
    }
};

// =============================
// GERAR INFOS (CONTA + SENHA)
// =============================
function gerarInfos() {
    conta.numeroConta = Math.floor(Math.random() * 100000);
    conta.senha = Math.floor(Math.random() * 1000000);

    console.log(`Conta criada ✅`);
    console.log(`Número: ${conta.numeroConta}`);
    console.log(`Senha: ${conta.senha}`);
}

// =============================
// CADASTRO
// =============================
function cadastro() {
    rl.question("Nome: ", (nome) => {
        rl.question("Email: ", (email) => {

            conta.informacoes.nome = nome;
            conta.informacoes.email = email;

            gerarInfos();
            menu();
        });
    });
}

// =============================
// ACESSO (LOGIN)
// =============================
function acesso() {
    rl.question("Número da conta: ", (num) => {
        rl.question("Senha: ", (senha) => {

            if (num == conta.numeroConta && senha == conta.senha) {
                conta.logado = true;
                console.log("Login realizado ✅");
            } else {
                console.log("Dados inválidos ❌");
            }

            menu();
        });
    });
}

// =============================
// DEPÓSITO
// =============================
function deposito() {
    if (!conta.logado) return console.log("Faça login primeiro!");

    rl.question("Valor depósito: ", (valor) => {

        valor = Number(valor);

        if (valor <= 0) {
            console.log("Valor inválido!");
        } else {
            conta.saldo += valor;
            registrar("Depósito", valor);
        }

        menu();
    });
}

// =============================
// SAQUE
// =============================
function saque() {
    if (!conta.logado) return console.log("Faça login primeiro!");

    rl.question("Valor saque: ", (valor) => {

        valor = Number(valor);

        if (valor > conta.saldo) {
            console.log("Saldo insuficiente!");
        } else {
            conta.saldo -= valor;
            registrar("Saque", valor);
        }

        menu();
    });
}

// =============================
// TRANSFERÊNCIA
// =============================
function transferencia() {
    if (!conta.logado) return console.log("Faça login primeiro!");

    rl.question("Valor transferência: ", (valor) => {

        valor = Number(valor);

        if (valor > conta.saldo) {
            console.log("Saldo insuficiente!");
        } else {
            conta.saldo -= valor;
            registrar("Transferência", valor);
            console.log("Transferência enviada ✅");
        }

        menu();
    });
}

// =============================
// EMPRÉSTIMO
// =============================
function emprestimo() {
    if (!conta.logado) return console.log("Faça login primeiro!");

    rl.question("Valor empréstimo: ", (valor) => {

        valor = Number(valor);

        conta.saldo += valor;
        registrar("Empréstimo", valor);

        menu();
    });
}

// =============================
// INVESTIMENTO
// =============================
function investimento() {
    if (!conta.logado) return console.log("Faça login primeiro!");

    rl.question("Valor investir: ", (valor) => {

        valor = Number(valor);

        if (valor > conta.saldo) {
            console.log("Saldo insuficiente!");
        } else {
            conta.saldo -= valor;
            registrar("Investimento", valor);
        }

        menu();
    });
}

// =============================
// EXTRATO
// =============================
function extrato() {
    if (!conta.logado) return console.log("Faça login primeiro!");

    console.log("\n=== EXTRATO ===");

    conta.historico.forEach(item => {
        console.log(`${item.data} | ${item.tipo} | R$${item.valor}`);
    });

    console.log(`Saldo: R$${conta.saldo}`);

    menu();
}

// =============================
// REGISTRAR HISTÓRICO
// =============================
function registrar(tipo, valor) {
    conta.historico.push({
        tipo,
        valor,
        data: new Date().toLocaleString("pt-BR")
    });
}

// =============================
// NOTIFICAÇÕES
// =============================
function notificacoes() {
    if (conta.saldo < 0) {
        console.log("⚠️ Você está negativado!");
    } else {
        console.log("Sem notificações.");
    }
    menu();
}

// =============================
// CASHBACK
// =============================
function cashback() {
    let valor = conta.saldo * 0.01;
    conta.saldo += valor;

    console.log(`Cashback recebido: R$${valor.toFixed(2)}`);
    menu();
}

// =============================
// RECARGA CELULAR
// =============================
function recargaCelular() {
    rl.question("Valor recarga: ", (valor) => {

        valor = Number(valor);

        if (valor > conta.saldo) {
            console.log("Saldo insuficiente!");
        } else {
            conta.saldo -= valor;
            registrar("Recarga", valor);
        }

        menu();
    });
}

// =============================
// SISTEMA DE AJUDA
// =============================
function ajuda() {
    console.log("Use o menu digitando números.");
    menu();
}

// =============================
// EXCLUSÃO DE CONTA
// =============================
function exclusao() {
    conta = {};
    console.log("Conta excluída!");
    menu();
}

// =============================
// MENU
// =============================
function menu() {

    console.log("\n=== MENU ===");
    console.log("1 Cadastro");
    console.log("2 Login");
    console.log("3 Depósito");
    console.log("4 Saque");
    console.log("5 Transferência");
    console.log("6 Empréstimo");
    console.log("7 Investimento");
    console.log("8 Extrato");
    console.log("9 Notificações");
    console.log("10 Cashback");
    console.log("11 Recarga");
    console.log("12 Ajuda");
    console.log("13 Excluir conta");
    console.log("0 Sair");

    rl.question("Escolha: ", (op) => {

        switch (op) {
            case "1": cadastro(); break;
            case "2": acesso(); break;
            case "3": deposito(); break;
            case "4": saque(); break;
            case "5": transferencia(); break;
            case "6": emprestimo(); break;
            case "7": investimento(); break;
            case "8": extrato(); break;
            case "9": notificacoes(); break;
            case "10": cashback(); break;
            case "11": recargaCelular(); break;
            case "12": ajuda(); break;
            case "13": exclusao(); break;
            case "0": rl.close(); break;
            default: console.log("Inválido"); menu();
        }
    });
}

// =============================
// INICIAR
// =============================
menu();
``
