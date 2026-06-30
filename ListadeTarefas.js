//lista de tarefas

// To-Do List em JavaScript Puro (Terminal)
// Autor: Juçara Vilma Dassi
// Curso Técnico em Desenvolvimento de Sistemas
// Disciplina: Lógica de Programação
// -------------------------------------------

//VERSAO 1 - SIMPLES, SEM READLINE

// Lista de tarefas (array de objetos)
// let tarefas = []; //C4/C10 - PASSO 1

// // Função para mostrar o menu
// function mostrarMenu() {
//   console.log("\n=== MENU ===");
//   console.log("1 - Adicionar");
//   console.log("2 - Visualizar lista");
//   console.log("3 - Visualizar item");
//   console.log("4 - Editar");
//   console.log("5 - Excluir");
//   console.log("6 - Filtrar");
//   console.log("7 - Encerrar");
// }

// // Função para adicionar tarefa - C1/C3/C7/C8 - PASSO 2
// function adicionarTarefa (titulo,descricao) {
//     if (titulo.trim() === "" || descricao.trim() === ""){
//         console.log("Erro... O titulo e a descricao nao podem estar vazios");
//         return;
//     }
//     tarefas.push({titulo: titulo, descricao: descricao});
//     console.log("Tarefa adicionada com sucesso");
// }


// // Função para visualizar lista - C1/C3/C7 - PASSO 3
// function visualizarLista() {
//     console.log("\n=== LISTA DE TAREFAS ===");
//     for (let i = 0; i < tarefas.length; i++) {
//         console.log((i + 1) + " - " + tarefas[i].titulo);
//     }
// }

// // Função para visualizar item - C1/C2/C8 - PASSO 4
// function visualizarItem(indice) {
//   if (indice >= 0 && indice < tarefas.length) {
//     console.log("Título: " + tarefas[indice].titulo);
//     console.log("Descrição: " + tarefas[indice].descricao);
//   } else {
//     console.log("Tarefa não encontrada.");
//   }
// }

// // Função para editar tarefa - C1/C3/C7 - PASSO 5
// function editarTarefa(indice, novoTitulo, novaDescricao) {
//   if (indice >= 0 && indice < tarefas.length) {
//     if (novoTitulo) tarefas[indice].titulo = novoTitulo;
//     if (novaDescricao) tarefas[indice].descricao = novaDescricao;
//   } else {
//     console.log("Tarefa não encontrada.");
//   }
// }

// // Função para excluir tarefa - C1/C3/C4 - PASSO 6
// function excluirTarefa(indice) {
//   if (indice >= 0 && indice < tarefas.length) {
//     tarefas.splice(indice, 1);
//   } else {
//     console.log("Tarefa não encontrada.");
//   }
// }

// // Função para filtrar tarefas - C1/C2/C7/C8 - PASSO 7
// function filtrarTarefas(termo) {
//     console.log("\n=== RESULTADO(S) DO(S) FILTRO(S) ===");
//     for (let i = 0; i < tarefas.length; i++) {
//         if (tarefas[i].titulo.toLowerCase().includes(termo.toLowerCase())) {
//             console.log((i + 1) + " - " + tarefas[i.titulo]);
//         }
//     }
// }

// mostrarmenu()

//VERSAO 2 - COM READLINE - CODIGO SIMPLES

// let rl = require('readline-sync');

// // Lista de tarefas (array de objetos)
// let tarefas = []; //C4/C10 - PASSO 1

// // Função para mostrar o menu
// function mostrarMenu() {
//     console.log("\n=== MENU ===");
//     console.log("1 - Adicionar tarefa");
//     console.log("2 - Visualizar lista");
//     console.log("3 - Visualizar item");
//     console.log("4 - Editar tarefa");
//     console.log("5 - Excluir tarefa");
//     console.log("6 - Filtrar tarefa");
//     console.log("7 - Encerrar programa");

//     opcao = rl.questionInt("Escolha uma opcao do menu: ");

//     switch (opcao) {
//         case 1: adicionarTarefa(); break;
//         case 2: visualizarLista(); break;
//         case 3: visualizarItemTarefa(); break;
//         case 4: editarTarefa(); break;
//         case 5: excluirTarefa(); break;
//         case 6: filtrarTarefas(); break;
//         case 7: console.log("Encerrando o programa"); break;
//         default: console.log("Opcao invalida, tente novamente");
//     }

// }

// // Função para adicionar tarefa - C1/C3/C7/C8 - PASSO 2
// function adicionarTarefa() {
//     let titulo = rl.question("Informe o Titulo da tarefa: ");
//     let descricao = rl.question("Informe a Descricao da tarefa: ");

//     if (titulo.trim() === "" || descricao.trim() === "") {
//         console.log("Erro... O titulo e a descricao nao podem estar vazios");
//         return;
//     }
//     tarefas.push({ titulo: titulo, descricao: descricao });
//     console.log("Tarefa adicionada com sucesso");
// }


// // Função para visualizar lista - C1/C3/C7 - PASSO 3
// function visualizarLista() {
//     console.log("\n=== LISTA DE TAREFAS ===");
//     for (let i = 0; i < tarefas.length; i++) {
//         console.log((i + 1) + " - " + tarefas[i].titulo);
//     }
// }

// // Função para visualizar item - C1/C2/C8 - PASSO 4
// function visualizarItemTarefa() {
//     let num = rl.questionInt("Numero da tarefa: ");
//     let indice = num - 1;

//     if (indice >= 0 && indice < tarefas.length) {
//         console.log("Título: " + tarefas[indice].titulo);
//         console.log("Descrição: " + tarefas[indice].descricao);
//     } else {
//         console.log("Tarefa não encontrada.");
//     }
// }

// // Função para editar tarefa - C1/C3/C7 - PASSO 5
// function editarTarefa() {
//     let num = rl.questionInt("Numero da tarefa: ");
//     let indice = num - 1;

//     if (indice >= 0 && indice < tarefas.length) {
//         let novoTitulo = rl.question("Novo titulo ou pressione Enter para seguir: ");
//         let novaDescricao = rl.question("Nova descricao ou pressione Enter para seguir: ");

//         if (novoTitulo.trim() !== "") tarefas[indice].titulo = novoTitulo;
//         if (novaDescricao.trim() !== "") tarefas[indice].descricao = novaDescricao;
//         console.log("Tarefa atualizada com sucesso");
//     } else {
//         console.log("Tarefa nao encontrada, tente novamente");
//     }
// }

// // Função para excluir tarefa - C1/C3/C4 - PASSO 6
// function excluirTarefa() {
//     let num = rl.questionInt("Informe o numero da tarefa que deseja excluir: ");
//     let indice = num - 1;

//     if (indice >= 0 && indice < tarefas.length) {
//         tarefas.splice(indice, 1);
//         console.log("Tarefa excluida com sucesso!");
//     } else {
//         console.log("Tarefa não encontrada, tente novamente");
//     }
// }

// // Função para filtrar tarefas - C1/C2/C7/C8 - PASSO 7
// function filtrarTarefas() {
//     let filtro = rl.question("Digite o que deseja filtrar: ");
//     console.log("\n=== RESULTADO(S) DO(S) FILTRO(S) ===");
//     for (let i = 0; i < tarefas.length; i++) {
//         if (tarefas[i].titulo.toLowerCase().includes(filtro.toLowerCase())) {
//             console.log((i + 1) + " - " + tarefas[i.titulo]);
//         }
//     }
// }

// mostrarMenu();

//VERSAO 3 - COM READLINE, VERIFICACOES E LOOP'S

let rl = require('readline-sync');

// Lista de tarefas (array de objetos)
let tarefas = []; //C4/C10 - PASSO 1

// Função para mostrar o menu
function mostrarMenu() {
    let opcao = 0;
    while (opcao !== 7) {
        console.log("\n=== MENU ===");
        console.log("1 - Adicionar tarefa");
        console.log("2 - Visualizar lista");
        console.log("3 - Visualizar tarefa");
        console.log("4 - Editar tarefa");
        console.log("5 - Excluir tarefa");
        console.log("6 - Filtrar tarefa");
        console.log("7 - Encerrar programa");

        opcao = rl.questionInt("Escolha uma opcao do menu: ");

        switch (opcao) {
            case 1: adicionarTarefa(); break;
            case 2: visualizarLista(); break;
            case 3: visualizarItemTarefa(); break;
            case 4: editarTarefa(); break;
            case 5: excluirTarefa(); break;
            case 6: filtrarTarefas(); break;
            case 7: console.log("Encerrando o programa..."); break;
            default: console.log("Opcao invalida, tente novamente...");
        }
    }
}

// Função para adicionar tarefa - C1/C3/C7/C8 - PASSO 2

function adicionarTarefa() {
    let titulo;
    let descricao;

    while (true) {
        titulo = rl.question("Informe o titulo da tarefa (ou digite 'cancelar' para sair): ");
        if (titulo.toLowerCase() === "cancelar") {
            console.log("Operacao cancelada pelo usuario.");
            return;
        }

        descricao = rl.question("Informe a descricao da tarefa (ou digite 'cancelar' para sair): ");
        if (descricao.toLowerCase() === "cancelar") {
            console.log("Operacao cancelada pelo usuario.");
            return;
        }

        // Verificações
        if (titulo.trim() === "" || descricao.trim() === "") {
            console.log("Erro... O titulo e a descricao nao podem estar vazios.");
            continue;
        } else if (/[\d]/.test(titulo.trim()) || /[\d]/.test(descricao.trim())) {
            console.log("Erro... O titulo e descricao nao podem conter numeros.");
            continue;
        } else if (!/^[A-Za-zÀ-ÿ\s]+$/.test(titulo.trim()) || !/^[A-Za-zÀ-ÿ\s]+$/.test(descricao.trim())) {
            console.log("Erro: titulo e descricao devem conter apenas letras e espacos.");
            continue;
        }

        break; // Sai do loop se tudo estiver válido
    }

    tarefas.push({ titulo: titulo, descricao: descricao });
    console.log("Tarefa adicionada com sucesso!");
}

// Função para visualizar lista - C1/C3/C7 - PASSO 3
function visualizarLista() {
    console.log("\n=== LISTA DE TAREFAS ===");
    for (let i = 0; i < tarefas.length; i++) {
        console.log((i + 1) + " - " + tarefas[i].titulo);
    }
}

// Função para visualizar item - C1/C2/C8 - PASSO 4
function visualizarItemTarefa() {
    let num = rl.questionInt("Informe o numero da tarefa que deseja visualizar: ");
    let indice = num - 1;

    if (indice >= 0 && indice < tarefas.length) {
        console.log("Título: " + tarefas[indice].titulo);
        console.log("Descrição: " + tarefas[indice].descricao);
    } else {
        console.log("Tarefa não encontrada.");
    }
}

// Função para editar tarefa - C1/C3/C7 - PASSO 5
function editarTarefa() {
    let num = rl.questionInt("Numero da tarefa: ");
    let indice = num - 1;

    if (indice >= 0 && indice < tarefas.length) {
        let novoTitulo = rl.question("Novo titulo ou pressione Enter para seguir: ");
        let novaDescricao = rl.question("Nova descricao ou pressione Enter para seguir: ");

        if (novoTitulo.trim() !== "") tarefas[indice].titulo = novoTitulo;
        if (novaDescricao.trim() !== "") tarefas[indice].descricao = novaDescricao;
        console.log("Tarefa atualizada com sucesso");
    } else {
        console.log("Tarefa nao encontrada, tente novamente");
    }
}

// Função para excluir tarefa - C1/C3/C4 - PASSO 6
function excluirTarefa() {
    let num = rl.questionInt("Informe o numero da tarefa que deseja excluir: ");
    let indice = num - 1;

    if (indice >= 0 && indice < tarefas.length) {
        tarefas.splice(indice, 1);
        console.log("Tarefa excluida com sucesso!");
    } else {
        console.log("Tarefa não encontrada, tente novamente");
    }
}

// Função para filtrar tarefas - C1/C2/C7/C8 - PASSO 7
function filtrarTarefas() {
    let filtro = rl.question("Digite o que deseja filtrar: ");
    console.log("\n=== RESULTADO(S) DO(S) FILTRO(S) ===");
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].titulo.toLowerCase().includes(filtro.toLowerCase())) {
            console.log((i + 1) + " - " + tarefas[i.titulo]);
        }
    }
}

mostrarMenu();
