
let rs = require("readline-sync");

function exibirTabuleiro() {
    console.table(tabuleiro);
}

let tabuleiro = [
    ["P"," ","P"," ","P"," ","P"," "],
    [" ","P"," ","P"," ","P"," ","P"],
    ["P"," ","P"," ","P"," ","P"," "],
    [" "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "],
    ["B"," ","B"," ","B"," ","B"," "],
    [" ","B"," ","B"," ","B"," ","B"],
    ["B"," ","B"," ","B"," ","B"," "]
];

exibirTabuleiro();
let pecaInput = null
let deLinha = null
let deColuna = null

function pedirPeca () {
    pecaInput = rs.questionInt(`Digite a posicao da peca que voce quer mover (ex: "50" - Linha 5, coluna 0): `);
    deLinha = Math.floor(pecaInput/10);
    deColuna = pecaInput%10;
}
let pecaTipo = null
function validarPeca(pecaTipo) { 
    while(pecaTipo !== "P" || pecaTipo !== "B") {
        pedirPeca()
        pecaTipo = tabuleiro[deLinha][deColuna]
    }
}

let destinoInput = rs.questionInt(`Digite a posição de destino para a peça ${pecaTipo} (${deLinha},${deColuna}): `);
let paraLinha = destinoInput.charAt(0);
let paraColuna = destinoInput.charAt(1);

let movimentoLinhaValido = false;

if (pecaTipo === "P" && paraLinha === deLinha + 1) {
    movimentoLinhaValido = true;
}else if (pecaTipo === "B" && paraLinha === deLinha - 1) {
    movimentoLinhaValido = true;
}

let movimentoColunaValido = (paraColuna === deColuna + 1 || paraColuna === deColuna - 1);

if (movimentoLinhaValido && movimentoColunaValido) {
    tabuleiro[paraLinha][paraColuna] = pecaTipo;
    tabuleiro[deLinha][deColuna] = " ";
    exibirTabuleiro();
} else {
    console.log(`Movimento inválido! Você só pode mover uma casa na diagonal para a frente.`);
}







