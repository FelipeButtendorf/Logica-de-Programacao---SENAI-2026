// let rs = require("readline-sync");

// function exibirTabuleiro() {
//     console.table(tabuleiro)
// }

// let tabuleiro = [
//     ["P"," ","P"," ","P"," ","P"," "],
//     [" ","P"," ","P"," ","P"," ","P"],
//     ["P"," ","P"," ","P"," ","P"," "],
//     [" "," "," "," "," "," "," "," "],
//     [" "," "," "," "," "," "," "," "],
//     ["B"," ","B"," ","B"," ","B"," "],
//     [" ","B"," ","B"," ","B"," ","B"],
//     ["B"," ","B"," ","B"," ","B"," "]
// ]
// exibirTabuleiro()
// let peca = rs.questionInt(`Digite a posicao da peca que voce quer mover(ex: "12" - Linha 1, coluna 2) :`)
// peca = peca.toString()
// let posicao = rs.questionInt(`Digite a posição que voce quer mover a peca ${tabuleiro[peca.charAt(0)][peca.charAt(1)]}(${peca.charAt(0)},${peca.charAt(1)}) :`)
// posicao = posicao.toString()
// if(Number(posicao.charAt(1)) === (Number(posicao.charAt(1)) + 1 || Number(posicao.charAt(1) - 1)) && Number(posicao.charAt(0)) === Number(posicao.charAt(0) - 1)) {
//     tabuleiro[posicao.charAt(0)][posicao.charAt(1)] = tabuleiro[peca.charAt(0)][peca.charAt(1)]
//     tabuleiro[peca.charAt(0)][peca.charAt(1)] = " "
//     exibirTabuleiro()
// } else {
//     console.log(`deu merda`)
// }
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

// 1. Coleta e converte a peça atual
let pecaInput = rs.question(`Digite a posicao da peca que voce quer mover (ex: "50" - Linha 5, coluna 0): `);
let deLinha = Number(pecaInput.charAt(0));
let deColuna = Number(pecaInput.charAt(1));

let pecaTipo = tabuleiro[deLinha][deColuna];

// 2. Coleta e converte o destino
let destinoInput = rs.question(`Digite a posição de destino para a peça ${pecaTipo} (${deLinha},${deColuna}): `);
let paraLinha = Number(destinoInput.charAt(0));
let paraColuna = Number(destinoInput.charAt(1));

// 3. Validação da Diagonal Simples
let movimentoLinhaValido = false;

// Se for peça Preta (P), move para baixo: a nova linha deve ser a atual + 1
if (pecaTipo === "P" && paraLinha === deLinha + 1) {
    movimentoLinhaValido = true;
}
// Se for peça Branca (B), move para cima: a nova linha deve ser a atual - 1
if (pecaTipo === "B" && paraLinha === deLinha - 1) {
    movimentoLinhaValido = true;
}

// A nova coluna deve ser a atual + 1 OU a atual - 1 (esquerda ou direita)
let movimentoColunaValido = (paraColuna === deColuna + 1 || paraColuna === deColuna - 1);

// 4. Executa o movimento se ambos forem válidos
if (movimentoLinhaValido && movimentoColunaValido) {
    tabuleiro[paraLinha][paraColuna] = pecaTipo;
    tabuleiro[deLinha][deColuna] = " ";
    exibirTabuleiro();
} else {
    console.log(`Movimento inválido! Você só pode mover uma casa na diagonal para a frente.`);
}







