let lerTeclado = require("readline-sync");
let linhaX = "XXX"
let linhaO = "OOO"
let stringLinha = ""
let stringDiagonal = ""



let tabuleiro = [
    ["-","-","-"],
    ["-","-","-"],
    ["-","-","-"]
]

let linha = 0
let coluna = null
let simbolo = "X"
let venceu = false

// 1 - PEDIR A LINHA E A COLUNA E VERIFICAR SE ELA JA ESTA OCUPADA, SE ESTIVER EXIBIR ERRO E PERGUNTAR DNV
// 2 - ADICIONAR E EXIBIR O SIMBOLO(X e O) NA LINHA E COLUNA QUE O USURARIO ESCOLHEU (console.table(tabuleiro))
// 3 - VERFIFIQUE SE ALGUMA COLUNA, LINHA OU DIAGONAL FOI PREENCHIDA POR SIMBOLOS IGUAIS
// 4 - VERIFIQUE SE O PLAYER 1 OU 2 QUE GANHOU E EXIBA O VENCEDOR
// 3 - Crie um loop de 5 repeticoes e encerre depos disso
console.log(`=========== INTRODUÇÃO ============`)
console.log(` Esse é um jogo da velha comum, ou seja,`)
console.log(`o primeiro jogador que fizer uma linha, co`)
console.log(`luna ou diagonal com o seu simbolo("X" ou "O")`)
console.log(`vence, sendo que o primeiro jogador inicia com`)
console.log(`o "X".`)
console.log(`===================================`)

console.table(tabuleiro)

for(let i = 9; i > 0; i--) { // LOOP DE JOGADAS MÁXIMAS ( 9 JOGADAS )
    do {
        if(simbolo === "X") { // EXIBE QUAL JOGADOR DEVE JOGAR
            console.log(`Jogador 1`)
        } else {
            console.log(`Jogador 2`)
        }

        linha = lerTeclado.questionInt(`Digite a linha: `)// PERGUNTA A LINHA DESEJADA
        coluna = lerTeclado.questionInt(`Digite a coluna: `)// PERGUNTA A COLUNA DESEJADA

    } while (tabuleiro[linha - 1][coluna - 1] === "X" || tabuleiro[linha - 1][coluna - 1] === "O") // CONDIÇÃO DE LOOP ATÉ QUE O JOGADOR ESCOLHA UMA POSIÇÃO QUE AINDA NÃO FOI ESCOLHIDA

    tabuleiro[linha - 1][coluna - 1] = simbolo // ADIONA O SIMBOLO A LINHA E COLUNA QUE O JOGADOR ESCOLHEU
    
    console.table(tabuleiro) // EXIBE O TABULEIRO APÓS A JOGADA

    for(let i = 0; i < 3; i ++) {
        if(tabuleiro[i][i] === "X" || tabuleiro[i][i] === "O") {//VERIFICA SE O ESPAÇO ESTA PREENCHIDO E O ADICIONA NUMA VARIAVEL DE VERIFICAÇÃO("XXX" ou "OOO")   
            stringDiagonal += tabuleiro[i][i]
        }
        if(stringDiagonal === linhaX || stringDiagonal === linhaO) { //VERIFICA SE A DIAGONAL PRINCIPAL ESTÁ PREENCHIDA PELO MESMO SIMBOLO
            venceu = true
            break
        }
    }
    for(let i = 0 ; i < 3; i++) {
        for(let j = 0 ; j < 3; j++) {// VERIFICA SE ALGUMA LINHA FOI PREENCHIDA COM O MESMO SIMBOLO E EXIBE O VENCEDOR CASO VERDADEIRO
            if(tabuleiro[i][j] === "X" || tabuleiro[i][j] === "O") {//VERIFICA SE O ESPAÇO ESTA PREENCHIDO E O ADICIONA NUMA VARIAVEL DE VERIFICAÇÃO("XXX" ou "OOO")   
                stringLinha += tabuleiro[i][j]
            }
            if(stringLinha === linhaX || stringLinha === linhaO) { //VERIFICA SE A DIAGONAL PRINCIPAL ESTÁ PREENCHIDA PELO MESMO SIMBOLO
                venceu = true
            }
        }
        if(venceu) {//QUEBRA O LOOP CASO O IF ACIMA FOR VERDADEIRO
            break
        }
        stringLinha = ""
    }

    for(let i = 0; i < 3; i++) {
        for(let j = 0 ; j < 3; j++) {
            if(tabuleiro[j][i] === "X" || tabuleiro[j][i] === "O") {
                stringLinha += tabuleiro[j][i]
            }
            if(stringLinha === linhaX || stringLinha === linhaO) {
                venceu = true
            }
        }  
        if(venceu) {
            break
        }
        stringLinha = "" 
    } 

    if(venceu) {//VERIFICA QUAL O VENCEDOR 
        if(simbolo === "X") {
            console.log(`Player 1 wins!`)
        } else {
            console.log(`Player 2 wins!`)
        }
        break
    }
    
    if(simbolo === "O") { // TROCA O SIMBOLO DEPOIS DE CADA JOGADA
        simbolo = "X"
    } else {
        simbolo = "O"
    }
}





