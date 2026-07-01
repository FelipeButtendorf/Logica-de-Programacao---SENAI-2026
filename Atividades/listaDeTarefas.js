let rs = require("readline-sync");
let listaDeTarefas = []
let sair = null

function exibirMenuInicial() {
    console.log(`\n===========================`)
    console.log(`     LISTA DE TAREFAS`)
    console.log(`===========================`)
    console.log(`1 - Ver Lista de Tarefas`)
    console.log(`2 - Adicionar Tarefa`)
    console.log(`3 - Vizualizar Item da Lista`)
    console.log(`4 - Editar Tarefa`)
    console.log(`5 - Excluir Tarefa`)
    console.log(`6 - Filtrar Tarefas`)
    console.log(`0 - Sair`)
    console.log(`===========================\n`)
}

function formatarDataHora(dataHora) {
    return new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        dateStyle: 'full',
        timeStyle: 'short'
    }).format(dataHora);
}

function apagarLinhas(numeroDeLinhas) {
    for(let i = 1; i < numeroDeLinhas; i++) {
        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
    }
}

function coletarDataHoraAtual() {
    dataHoraBrasil = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        dateStyle: 'full',
        timeStyle: 'short'
    }).format(new Date());
    return dataHoraBrasil
}

function escolhaDeValor(numMin, numMax){// PEDIR OPCAO DESEJADA
    opcao = rs.questionInt(`Digite a opcao desejada : `)
    apagarLinhas(1)
    while(validarEscolha(numMin, numMax, opcao)){
        console.log("Valor invalido, tente novamente");
        opcao = rs.questionInt(`\nDigite a opcao desejada : `)
        apagarLinhas(2)
    }
    return opcao
}

function validarEscolha(numMin, numMax, valorEscolhido){ // VALIDAR DIGITOS DO USUARIO
    if(valorEscolhido < numMin || valorEscolhido > numMax) return true
    return false
}

function acessarOpcaoInicial(escolha) {
    switch(escolha){
        case 1:
            verListaDeTarefas()
            break
        case 2:
            adicionarTarefa()
            break
        case 3:
            vizualizarItemDaLista()
            break
        case 4:
            editarTarefa()
            break
        case 5:
            excluirTarefa()
            break
        case 6:
            filtrarTarefa()
            break
        case 0:
            console.log(`Saindo...`)
            sair = true
            break
    }
}

function vizualizarItemDaLista() {
    let numeroItem = rs.qeustionInt(`Digite o numero do item da lista que voce deseja vizualizar: `)
}

function verificarListaDeTarefasVazia() {
    if(listaDeTarefas.length === 0) return true
    return false
}

function verListaDeTarefas() {
    if(verificarListaDeTarefasVazia()) {
        console.clear()
        console.log(`Atualmente a lista de tarefas esta vazia.\nAguarde alguem adicionar uma nova tarefa ou\nadicione voce mesmo através do menu inicial`)
        return
    }else{
    console.log("\n".repeat(100))
    console.table(listaDeTarefas)
    }
}

function exibirTodasAsTarefas() {
    for(let i = 0; i < listaDeTarefas.length; i++) {
        exibirTarefaAdicionada(i)
    }
}

function iniciar() {
    sair = false
    do{
        exibirMenuInicial()
        acessarOpcaoInicial(escolhaDeValor(0,6))
    }while(sair !== true)
}

function verificarStringVazia(string) {
    if(string === "") {
        console.log(`A caixa de texto está vazia.\nPor favor, insira um texto válido.`)
        return true
    }
    return false
}

function pedirTitulo() {
    let tituloDaTarefa = rs.question(`Escreva o titulo da tarefa.\nDica: escolha um titulo que melhor descreve essa tarefa, evite usar descricoes muito especificas.\nTitulo: `)
    while(verificarStringVazia(tituloDaTarefa)) {
        tituloDaTarefa = rs.question(`Escreva o titulo da tarefa.\nDica: escolha um titulo que melhor descreve essa tarefa, evite usar descricoess muito especificas.\nTitulo: `)
    }
    console.clear()
    return tituloDaTarefa
}

function pedirDescricao() {
    let descricaoDaTarefa = rs.question(`Escreva a descricao da tarefa.\nDica: Evite informacoes irrelevantes e coloque observacoes se necessario.\nDescricao: `)
    while(verificarStringVazia(descricaoDaTarefa)) {
        descricaoDaTarefa = rs.question(`Escreva a descricao da tarefa.\nDica: Evite informacoes irrelevantes e coloque observacoes se necessario.\nDescricao: `)
    }
    console.clear()
    return descricaoDaTarefa
}

function verificarFormatoDataHora(data,hora) {
    const formatoData = /^\d{4}-\d{2}-\d{2}$/
    const formatoHora = /^([01]\d|2[0-3]):([0-5]\d)$/
    if(!formatoHora.test(hora)) return true
    if(!formatoData.test(data)) return true
    return false
}

function verificarPrazoDaTarefa(data,hora) {
    if(verificarFormatoDataHora(data,hora)) {
        console.log(`Formato de data ou hora invalidos. Por favor tente novamente.`)
        return true
    }
    return false
}

function pedirPrazoDaTarefa() {
    let data = rs.question("Digite a data prazo desta tarefa (AAAA-MM-DD):");
    let hora = rs.question("Digite a hora prazo desta tarefa (HH:MM):");
    apagarLinhas(3)
    while(verificarPrazoDaTarefa(data,hora)) {
        data = rs.question("Digite a data prazo desta tarefa (AAAA-MM-DD):");
        hora = rs.question("Digite a hora prazo desta tarefa (HH:MM):");  
        apagarLinhas(4)
    }
    let dataHora = new Date(`${data}T${hora}`);
    dataHora = formatarDataHora(dataHora)
    console.clear()
    return dataHora
}

function exibirTarefaAdicionada(indiceTarefa) {
    console.log(`==============================`)
    console.log(`Titulo: ${listaDeTarefas[indiceTarefa].titulo}`)
    console.log(`------------------------------`)
    console.log(`Descricao: ${listaDeTarefas[indiceTarefa].descricao}`)
    console.log(`------------------------------`)
    console.log(`Data de inclusao da tarefa: ${listaDeTarefas[indiceTarefa].dataAndHoraRegistro}`)
    console.log(`Prazo de conclusao: ${listaDeTarefas[indiceTarefa].prazoDaTarefa}`)
    console.log(`==============================`)
    
} 

function adicionarTarefa() {
    console.clear()
    listaDeTarefas.push({titulo: pedirTitulo(),descricao: pedirDescricao(), prazoDaTarefa: pedirPrazoDaTarefa(), dataAndHoraRegistro: coletarDataHoraAtual()})
    console.clear()
    exibirTarefaAdicionada((listaDeTarefas.length) - 1)
}

console.clear()
iniciar()