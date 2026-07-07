const rs = require("readline-sync");
let listaDeTarefas = []
let sair = null
const limiteCaracateresTitulo = 20
const limiteCaracateresDescricao = 50

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

function verificarFiltroNosTitulos(filtro) {
    let filtrosEncontrados = 0
    for(let i = 0; i < listaDeTarefas.length; i++) {
        if(listaDeTarefas[i].titulo.includes(filtro)) {
            exibirTituloDaTarefa(i)
            filtrosEncontrados ++
        }
    }
    if(filtrosEncontrados === 0) {
        console.log(`Nenhum titulo com esse filtro foi encontrado.`)
    }
}

function verificarFiltroNasDescricoes(filtro) {
    let filtrosEncontrados = 0
    for(let i = 0; i < listaDeTarefas.length; i++) {
        if(listaDeTarefas[i].descricao.includes(filtro)) {
            exibirDescricaoDaTarefa(i)
            filtrosEncontrados ++
        }
    }
    if(filtrosEncontrados === 0) {
        console.log(`Nenhuma descricao com esse filtro foi encontrado.`)
    }
}

function acessarTipoDeFiltro(escolha,filtro) {
    switch(escolha) {
        case 1:
            verificarFiltroNosTitulos(filtro)
            break
        case 2:
            verificarFiltroNasDescricoes(filtro)
            break
        case 0:
            console.log(`Saindo dos filtro...`)
            break
    }
}

function filtrarTarefa() {
    console.clear()
    console.log(`Digite o tipo de filtro que voce deseja procurar: 1 - Titulo | 2 - Descricao | 0 - Sair`)
    let tipoDeFiltro = escolhaDeValor(0,2)
    let filtroDoUsuario = rs.question(`Digite o texto que voce deseja filtrar: `)
    while(verificarStringVazia(filtroDoUsuario)) {
        filtroDoUsuario = rs.question(`Digite o texto que voce deseja filtrar: `)
    }
    acessarTipoDeFiltro(tipoDeFiltro,filtroDoUsuario)

}
function apagarLinhas(numeroDeLinhas) {
    for(let i = 1; i < numeroDeLinhas; i++) {
        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
    }
}

function escolhaDeValor(numMin, numMax){// PEDIR OPCAO DESEJADA
    opcao = rs.questionInt(`Digite a opcao desejada : `)
    apagarLinhas(1)
    while(validarEscolha(numMin, numMax, opcao)){
        console.log("Valor invalido, tente novamente");
        opcao = rs.questionInt(`\nDigite a opcao desejada : `)
        apagarLinhas(1)
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

function verificarNumeroDoItem(numeroItem) {
    if(listaDeTarefas[numeroItem - 1]){
        return false
    }
    console.log(`O item que voce digitou não existe, por favor tente um número válido`)
    return true
}

function vizualizarItemDaLista() {
    console.clear()
    let numeroItem = rs.questionInt(`Digite o numero do item da lista que voce deseja vizualizar: `)
    apagarLinhas(1)
    while(verificarNumeroDoItem(numeroItem)) {
        numeroItem = rs.questionInt(`Digite o numero do item da lista que voce deseja vizualizar: `)
        console.clear()
    }
    console.clear()
    exibirDescricaoDaTarefa(numeroItem - 1)
}

function exibirTituloDasTarefas() {
    for(let i = 0; i < listaDeTarefas.length; i++) {
        exibirTituloDaTarefa(i)
    } 
}

function exibirDescricaoDaTarefa(indiceTarefa) {
    console.log(`====================================`)
    console.log(`${indiceTarefa + 1} - Descricao: ${listaDeTarefas[indiceTarefa].descricao}`)
    console.log(`====================================`)
}

function exibirTituloDaTarefa(indiceTarefa) {
    console.log(`====================================`)
    console.log(`${indiceTarefa + 1} - Titulo: ${listaDeTarefas[indiceTarefa].titulo}`)
    console.log(`====================================`)
}

function verificarListaDeTarefasVazia() {
    if(listaDeTarefas.length === 0) return true
    return false
}

function esperarUsuarioDigitarZero() {
    let sair = rs.questionInt(`Digite 0 para voltar ao menu inicial : `)
    apagarLinhas(1)
    while(sair !== 0) {
        sair = rs.questionInt(`Digite 0 para voltar ao menu inicial : `)
    }
    console.clear()
}

function verListaDeTarefas() {
    console.clear()
    if(verificarListaDeTarefasVazia()) {
        console.log(`Atualmente a lista de tarefas esta vazia.\nAguarde alguem adicionar uma nova tarefa ou\nadicione voce mesmo através do menu inicial`)
        return
    }else{
        exibirTituloDasTarefas()
        esperarUsuarioDigitarZero()
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

function verificarLimiteDeCaracteresTitulo(titulo) {
    if(titulo.length > limiteCaracateresTitulo) {
        console.log(`Limite de caracteres atingido. Por favor tente colocar outro titulo.`)
        return true
    }
    return false
}

function verificarLimiteDeCaracteresDescricao(descricao) {
    if(descricao.length > limiteCaracateresDescricao) {
        console.log(`Limite de caracteres atingido. Por favor tente colocar outra descricao.`)
        return true
    }
    return false
}

function pedirTitulo() {
    console.clear()
    let tituloDaTarefa = rs.question(`Escreva o titulo da tarefa.\nDica: escolha um titulo que melhor descreve essa tarefa, evite usar descricoes muito especificas.\nTitulo: `)
    while(verificarStringVazia(tituloDaTarefa) || verificarLimiteDeCaracteresTitulo(tituloDaTarefa)) {
        tituloDaTarefa = rs.question(`Escreva o titulo da tarefa.\nDica: escolha um titulo que melhor descreve essa tarefa, evite usar descricoess muito especificas.\nTitulo: `)
        console.clear()
    }
    console.clear()
    return tituloDaTarefa
}

function pedirDescricao() {
    console.clear()
    let descricaoDaTarefa = rs.question(`Escreva a descricao da tarefa.\nDica: Evite informacoes irrelevantes e coloque observacoes se necessario.\nDescricao: `)
    while(verificarStringVazia(descricaoDaTarefa) || verificarLimiteDeCaracteresDescricao(descricaoDaTarefa)) {
        descricaoDaTarefa = rs.question(`Escreva a descricao da tarefa.\nDica: Evite informacoes irrelevantes e coloque observacoes se necessario.\nDescricao: `)
    }
    return descricaoDaTarefa
}

function adicionarTarefa() {
    console.clear()
    listaDeTarefas.push({titulo: pedirTitulo(),descricao: pedirDescricao()})
    console.clear()
    console.log(`Tarefa cadastrada com sucesso!`)
}

function excluirTarefa() {
    console.clear()
    if(verificarListaDeTarefasVazia()) {
        console.clear()
        console.log(`Atualmente a lista de tarefas esta vazia.\nAguarde alguem adicionar uma nova tarefa ou\nadicione voce mesmo através do menu inicial`)
        return
    }
    let numeroTarefa = rs.questionInt(`Digite o numero do item que voce deseja remover da lista : `)
    while(verificarNumeroDoItem(numeroTarefa)) {
        numeroTarefa = rs.question(`Digite o numero do item que voce deseja remover da lista : `)
    }
        listaDeTarefas.splice((numeroTarefa - 1), 1)
        console.log(`Tarefa excluida com sucesso!`)
}

function acessarEscolhaEdicao(escolha,indiceTarefa) {
    switch(escolha) {
        case 1:
            listaDeTarefas[indiceTarefa].titulo = pedirTitulo()
            break
        case 2:
            listaDeTarefas[indiceTarefa].descricao = pedirDescricao()
            break
        case 0:
            console.log(`Saindo da edicao...`)
            break
    }
}

function editarTarefaDeNumero(indiceTarefa) {
    exibirTituloDaTarefa(indiceTarefa)
    exibirDescricaoDaTarefa(indiceTarefa)
    console.log(`O que voce deseja editar? 1 - Titulo | 2 - Descricao | 0 - Sair`)
    let escolha = escolhaDeValor(0,2)
    console.clear()
    acessarEscolhaEdicao(escolha,indiceTarefa)
}

function editarTarefa() {
    console.clear()
    if(verificarListaDeTarefasVazia()) {
        console.clear()
        console.log(`Atualmente a lista de tarefas esta vazia.\nAguarde alguem adicionar uma nova tarefa ou\nadicione voce mesmo através do menu inicial`)
        return
    }
    let numeroTarefa = rs.questionInt(`Digite o numero do item que voce deseja remover da lista : `)
    while(verificarNumeroDoItem(numeroTarefa)) {
        numeroTarefa = rs.question(`Digite o numero do item que voce deseja remover da lista : `)
    }
    editarTarefaDeNumero(numeroTarefa - 1)
}

console.clear()
iniciar()