// let string = ""
// let simbolo = "X"
// string += simbolo
// string += simbolo
// string += simbolo
// console.log(string)

// let tabuleiro = [
//     ["X","X","X"],
//     ["-","-","-"],
//     ["-","-","-"]
// ]
// let linhaX = "XXX"
// let linhaO = "OOO"
// let string = ""
// let simbolo = "X"

// for(let i = 0 ; i < 3; i++) {
//     for(let j = 0 ; j < 3; j++) {// VERIFICA SE ALGUMA LINHA FOI PREENCHIDA COM O MESMO SIMBOLO E EXIBI O VENCEDOR CASO VERDADEIRO
//         if(tabuleiro[i][j] === "X" || tabuleiro[i][j] === "O") {
//         string += tabuleiro[i][j]
//         console.log(string)
//         }
//         if(string === linhaX || string === linhaO) {
//             venceu = true 
//         }
//     }
// }
// if(venceu) {
//     if(simbolo === "X") {
//         console.log(`Player 1 wins!`)
//     } else {
//         console.log(`Player 2 wins!`)
//     }
// }
let array = ["X","X","X"]
array.toString("")
console.log(array)
1,1
2,1
3,1

1,2
2,2
3,2

1,3
2,3
3,3
for(let i = 0; i < 3; i++) {
    for(let j ; j < 3; j++) {
        stringColuna+= tabuleiro[j][i]
        if(stringColuna === linhaX || stringColuna === linhaO) {
            venceu = true
        }
    }
    stringColuna = ""   
    if(venceu) {
        break
    }
}

