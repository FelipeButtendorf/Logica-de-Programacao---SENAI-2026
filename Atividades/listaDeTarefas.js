const rs = require("readline-sync");

// ==============================
// Váriaveis globais
// ==============================
const listaDeTarefas = [];
const limiteCaracteresTitulo = 20;
const limiteCaracteresDescricao = 50;
let sair = false;

// ==============================
// Funções de exibição
// ==============================

function apagarLinhas(numeroDeLinhas) { // APAGA AS LINHAS ACIMA
    for (let i = 1; i < numeroDeLinhas; i++) {
        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
    }
}

function exibirMenuInicial() { // EXIBE O MENU PRINCIPAL
    console.log(`\n===========================`);
    console.log(`      LISTA DE TAREFAS`);
    console.log(`===========================`);
    console.log(`1 - Ver Lista de Tarefas`);
    console.log(`2 - Adicionar Tarefa`);
    console.log(`3 - Visualizar Item da Lista`);
    console.log(`4 - Editar Tarefa`);
    console.log(`5 - Excluir Tarefa`);
    console.log(`6 - Filtrar Tarefas`);
    console.log(`0 - Sair`);
    console.log(`===========================\n`);
}

function exibirTituloDaTarefa(indice) { // EXIBE APENAS O TITULO DE UMA TAREFA ESPECÍFICA
    console.log(`===============================`);
    console.log(`${indice + 1} - ${listaDeTarefas[indice].titulo}`);
    console.log(`===============================`);
}

function exibirTitulosDasTarefas() { // EXIBE TODOS OS TÍTULOS DAS TAREFAS CADASTRADAS(LOOP DA FUNÇÃO DE CIMA)
    for (let i = 0; i < listaDeTarefas.length; i++) {
        exibirTituloDaTarefa(i);
    }
}

function exibirTarefa(indice) { // EXIBE O TÍTULO E A DESCRIÇÃO DA UMA TAREFA ESPECÍFICA
    console.log(`========================================`);
    console.log(`Tarefa ${indice + 1}`);
    console.log(`----------------------------------------`);
    console.log(`Título    : ${listaDeTarefas[indice].titulo}`);
    console.log(`Descrição : ${listaDeTarefas[indice].descricao}`);
    console.log(`========================================`);
}

function informarListaVazia() { // MENSAGEM PARA QUANDO A LISTA DE TAREFAS ESTIVER VAZIA
    console.clear();
    console.log(`Atualmente a lista de tarefas está vazia.`);
    console.log(`Adicione uma nova tarefa através do menu principal.`);
}

// =================================
// Funções de verificação/validação
// =================================

function validarEscolha(minimo, maximo, valor) { // VALIDA SE O VALOR QUE O USUARIO DIGITOU ESTÁ ENTRE OS VALORES ESPERADOS
    return valor < minimo || valor > maximo;
}

function verificarListaDeTarefasVazia() { // VERIFICA SE A LISTA DE TAREFAS ESTÁ VAZIA E RETORNA UM BOOLEANO
    return listaDeTarefas.length === 0;
}

function verificarStringVazia(texto) { // VERIFICA SE A STRING ESTÁ VAZIA E RETORNA UM BOOLEANO
    if (texto === "") {
        console.log("O campo não pode ficar vazio.");
        return true;
    }
    return false;
}

function verificarLimiteTitulo(titulo) { // VERIICA SE O TITULO ULTRAPASSA O LIMITE DE CARACTERES ESTABELECIDO
    if (titulo.length > limiteCaracteresTitulo) {
        console.log(`O título pode possuir no máximo ${limiteCaracteresTitulo} caracteres.`);
        return true;
    }
    return false;
}

function verificarNumeroDaTarefa(numero) { // VERIFICA SE O NUMERO DIGITADO CORRESPONDE A UMA TAREFA DA LISTA
    if (!listaDeTarefas[numero - 1]) {
        console.log("Tarefa inexistente. Tente novamente.");
        return true;
    }
    return false;
}

function verificarLimiteDescricao(descricao) { // VERIICA SE A LISTA ULTRAPASSA O LIMITE DE CARACTERES ESTABELECIDO
    if (descricao.length > limiteCaracteresDescricao) {
        console.log(`A descrição pode possuir no máximo ${limiteCaracteresDescricao} caracteres.`);
        return true;
    }
    return false;
}

function verificarFiltroNosTitulos(filtro) { // VERIFICA SE HÁ ALGUMA PALAVRA NO TITULO DE ACORDO COM O FILTRO QUE O USUÁRIO COLOCOU
    let encontrou = false;
    filtro = filtro.toLowerCase();
    for (let i = 0; i < listaDeTarefas.length; i++) {
        if (
            listaDeTarefas[i]
                .titulo
                .toLowerCase()
                .includes(filtro)
        ) {
            exibirTarefa(i);
            encontrou = true;
        }
    }
    if (!encontrou) {
        console.log("Nenhuma tarefa encontrada.");
    }
}

function verificarFiltroNasDescricoes(filtro) { // VERIFICA SE HÁ ALGUMA PALAVRA NA DESCRICAO DE ACORDO COM O FILTRO QUE O USUÁRIO COLOCOU
    let encontrou = false;
    filtro = filtro.toLowerCase();
    for (let i = 0; i < listaDeTarefas.length; i++) {
        if (
            listaDeTarefas[i]
                .descricao
                .toLowerCase()
                .includes(filtro)
        ) {
            exibirTarefa(i);
            encontrou = true;
        }
    }
    if (!encontrou) {
        console.log("Nenhuma tarefa encontrada.");
    }
}

// =========================================
// Funcoes de acesso(que usam switch/case)
// =========================================

function acessarTipoDeFiltro(tipo, filtro) { // ACESSA O TIPO DE FILTRO ESCOLHIDO PELO USUÁRIO
    switch (tipo) {
        case 1:
            verificarFiltroNosTitulos(filtro);
            break;
        case 2:
            verificarFiltroNasDescricoes(filtro);
            break;
        case 0:
            console.log("Saindo...");
            break;
    }
}

function acessarEscolhaEdicao(opcao, indice) { // ACESSA A OPCAO QUE O USUARIO DESEJA EDITAR DO ITEM
    switch (opcao) {
        case 1:
            listaDeTarefas[indice].titulo = pedirTitulo();
            console.log("Título alterado com sucesso!");
            break;
        case 2:
            listaDeTarefas[indice].descricao = pedirDescricao();
            console.log("Descrição alterada com sucesso!");
            break;
        case 0:
            console.log("Edição cancelada.");
            break;
    }
}

function acessarOpcaoInicial(opcao) { // ACESSA AS OPCOES DO MENU PRINCIPAL(ADICIONAR,EXCLUIR,EDITAR,ETC...)
    switch (opcao) {
        case 1:
            verListaDeTarefas();
            break;
        case 2:
            adicionarTarefa();
            break;
        case 3:
            visualizarItemDaLista();
            break;
        case 4:
            editarTarefa();
            break;
        case 5:
            excluirTarefa();
            break;
        case 6:
            filtrarTarefa();
            break;
        case 0:
            console.log("Saindo...");
            sair = true;
            break;
    }
}

// ============================================
// Funcoes de retorno(que aguardam um retorno)
// ============================================

function pedirTitulo() { // RETORNA O TITULO
    console.clear();
    let titulo = rs.question(
        "Digite o titulo da tarefa:\n" +
        "Dica: utilize um titulo curto e objetivo.\n\nTitulo: "
    );
    while (
        verificarStringVazia(titulo) ||
        verificarLimiteTitulo(titulo)
    ) {
        titulo = rs.question(
            "Digite o titulo da tarefa:\n\nTitulo: "
        );
        console.clear();
    }
    console.clear();
    return titulo;
}

function pedirDescricao() { // RETORNA A DESSCRICAO
    console.clear();
    let descricao = rs.question(
        "Digite a descricao da tarefa:\n" +
        "Dica: informe apenas informações importantes.\n\nDescricao: "
    );
    while (
        verificarStringVazia(descricao) ||
        verificarLimiteDescricao(descricao)
    ) {
        descricao = rs.question(
            "Digite a descricao da tarefa:\n\nDescricao: "
        );
    }
    console.clear();
    return descricao;
}

function pedirNumeroDaTarefa(mensagem) { // PEDE O NUMERO DA TAREFA E RETORNA O INDICE DESSA TAREFA
    let numero = rs.questionInt(mensagem);
    while (verificarNumeroDaTarefa(numero)) {
        numero = rs.questionInt(mensagem);
    }
    return numero - 1;
}

function escolhaDeValor(minimo, maximo) { // PEDE QUAL OPCAO O USUARIO DESEJA ACESSAR E RETORNA ESSE VALOR
    let opcao = rs.questionInt("Digite a opcao desejada: ");
    apagarLinhas(1);
    while (validarEscolha(minimo, maximo, opcao)) {
        console.log("Valor invalido, tente novamente.");
        opcao = rs.questionInt("Digite a opcao desejada: ");
        apagarLinhas(1);
    }
    return opcao;
}

// ==============================
// Funcoes do menu
// ==============================

function esperarUsuario() { // ESPERA O USUARIO DIGITAR 0 PARA CONTINUAR A RODAR O CÓDIGO
    let voltar = rs.questionInt("Digite 0 para voltar ao menu: ");
    apagarLinhas(2)
    while (voltar !== 0) {
        voltar = rs.questionInt("Digite 0 para voltar ao menu: ");
        apagarLinhas(2)
    }
    console.clear();
}

function verListaDeTarefas() { // MOSTRA A LISTA DE TAREFAS(NUMERO E TITULO DAS TAREFAS)
    console.clear();
    if (verificarListaDeTarefasVazia()) {
        informarListaVazia();
        return;
    }
    exibirTitulosDasTarefas();
    esperarUsuario();
}

function visualizarItemDaLista() { // MOSTRA A DESCRICAO DE UMA TAREFA ESPECIFICA
    console.clear();
    if (verificarListaDeTarefasVazia()) {
        informarListaVazia();
        return;
    }
    console.log("Tarefas cadastradas:");
    exibirTitulosDasTarefas();
    const indice = pedirNumeroDaTarefa(
        "\nDigite o número da tarefa que deseja visualizar: "
    );
    console.clear();
    exibirTarefa(indice);
    esperarUsuario();
}

function filtrarTarefa() { // FILTRA AS TAREFAS DA LISTA
    console.clear();
    if (verificarListaDeTarefasVazia()) {
        informarListaVazia();
        return;
    }
    console.log("1 - Filtrar por título");
    console.log("2 - Filtrar por descrição");
    console.log("0 - Voltar");
    const tipo = escolhaDeValor(0, 2);
    if (tipo === 0) {
        return;
    }
    let filtro = rs.question("Digite o texto do filtro: ");
    while (verificarStringVazia(filtro)) {
        filtro = rs.question("Digite o texto do filtro: ");
    }
    console.clear();
    acessarTipoDeFiltro(tipo, filtro);
    esperarUsuario();
}

function adicionarTarefa() { // ADIONA UAM TAREFA NA LISTA
    console.clear();
    const titulo = pedirTitulo();
    const descricao = pedirDescricao();
    listaDeTarefas.push({
        titulo,
        descricao
    });
    console.clear();
    console.log("Tarefa cadastrada com sucesso!");
}

function editarTarefa() { // EDITA O TITULO/DESCRICAO DE UMA TAREFA
    console.clear();
    if (verificarListaDeTarefasVazia()) {
        informarListaVazia();
        return;
    }
    console.log("Tarefas cadastradas:");
    exibirTitulosDasTarefas();
    const indice = pedirNumeroDaTarefa(
        "\nDigite o número da tarefa que deseja editar: "
    );
    console.clear();
    exibirTarefa(indice);
    console.log("\n1 - Editar título");
    console.log("2 - Editar descrição");
    console.log("0 - Cancelar");
    const opcao = escolhaDeValor(0, 2);
    console.clear();
    acessarEscolhaEdicao(opcao, indice);
}

function excluirTarefa() { // EXCLUI A TAREFA QUE O USUARIO DESEJAR
    console.clear();
    if (verificarListaDeTarefasVazia()) {
        informarListaVazia();
        return;
    }
    console.log("Tarefas cadastradas:");
    exibirTitulosDasTarefas();
    const indice = pedirNumeroDaTarefa(
        "\nDigite o número da tarefa que deseja excluir: "
    );
    console.clear();
    exibirTarefa(indice);
    const confirmar = rs.question(
        "\nDeseja realmente excluir esta tarefa? (S/N): "
    ).toUpperCase();
    if (confirmar === "S") {
        listaDeTarefas.splice(indice, 1);
        console.log("Tarefa excluída com sucesso!");
    } else {
        console.log("Exclusão cancelada.");
    }
}

// ==============================
// Inicia o programa
// ==============================

function iniciar() {
    sair = false;
    do {
        exibirMenuInicial();
        const opcao = escolhaDeValor(0, 6);
        acessarOpcaoInicial(opcao);
    } while (!sair);
}

// ==============================
// Execução do programa
// ==============================
console.clear();
iniciar();