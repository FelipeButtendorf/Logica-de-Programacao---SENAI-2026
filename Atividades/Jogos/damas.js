let rs = require("readline-sync");
let pecaInput = null
let deLinha = null
let deColuna = null
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
do{
    do{
        pecaInput = rs.question(`Digite a posicao da peca que voce quer mover (ex: "50" - Linha 5, coluna 0): `);
        deLinha = Number(pecaInput.charAt(0));
        deColuna = Number(pecaInput.charAt(1));
    }while(deLinha < 0 || deLinha > 7 || deColuna < 0 || deColuna > 7)
}while(tabuleiro[deLinha][deColuna] !== "P" || tabuleiro[deLinha][deColuna] !== "B")

let pecaTipo = tabuleiro[deLinha][deColuna];

let destinoInput = rs.question(`Digite a posição de destino para a peça ${pecaTipo} (${deLinha},${deColuna}): `);
let paraLinha = Number(destinoInput.charAt(0));
let paraColuna = Number(destinoInput.charAt(1));

let movimentoLinhaValido = false;

if (pecaTipo === "P" && paraLinha === deLinha + 1) {
    movimentoLinhaValido = true;
}

if (pecaTipo === "B" && paraLinha === deLinha - 1) {
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







