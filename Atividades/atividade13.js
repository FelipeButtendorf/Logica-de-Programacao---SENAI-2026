// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================
let lerTeclado = require("readline-sync");

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [10, 20, 30],
//      [40, 50, 60],
//      [70, 80, 90],
//    ];
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:

// console.log(`Linhas: ${m.length}, Colunas: ${m[0].length}`)
// console.log(m[1][1])
// console.log(m[2][2])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12],
//    ];
//    let soma = null
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:
// for(let i = 0; i < m.length ; i++) {
//     for(let j = 0; j < m[i].length; j++) {
//         soma += m[i][j]
//     }
// }
// console.log(soma)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
//    const m = [
//      [12,  7, 25],
//      [ 3, 18,  9],
//      [31, 14, 22],
//    ];
//    let maior = m[0][0]
//    let menor = m[0][0]
//    let maiorMatriz = null
//    let menorMatriz = null
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:

// for(let i = 0; i < m.length ; i++) {
//     for(let j = 0; j < m[i].length; j++) {
//         if(maior < m[i][j]) {
//             maior = m[i][j]
//             maiorMatriz = [i, j]
//         } else if(menor > m[i][j]) {
//             menor = m[i][j]
//             menorMatriz = [i, j]
//         }
//     }
// }
// console.log(`Maior: ${maior}, Linha : ${maiorMatriz[0] + 1}, Coluna: ${maiorMatriz[1] + 1}`)
// console.log(`Menor: ${menor}, Linha : ${menorMatriz[0] + 1}, Coluna: ${menorMatriz[1] + 1}`)


console.log("_______________________________");
// const m = [
//     [12,  7, 25],
//     [ 3, 18,  9],
//     [31, 14, 22],
//   ];

// let somaLinha = null
// let somaColuna = null
// let somaDiagonal = null
// let colunas = 3
// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:
// for(let i = 0; i < m.length; i++) { // SOMA DA LINHA
//     for(let j = 0; j < m[i].length; j++) {
//         somaLinha += m[i][j]
//         if( i === j) { // VERIFICAÇÃO SE O NUMERO DA LINHA É IGUAL AO DA COLUNA
//             somaDiagonal += m[i][j] // SOMA DA DIAGONAL PRINCIPAL
//         }
//     }
//     console.log(`Soma da linha ${i + 1} : ${somaLinha}`)
//     somaLinha = null
// }

// for(let j = 0; j < m.length; j++) { // SOMA DAS COLUNAS
//     for(let i = 0; i < colunas; i ++) {
//         somaColuna += m[i][j]
//     }
//     console.log(`Soma da coluna ${j + 1}: ${somaColuna}`)
//     somaColuna = null
// }

// console.log(`Soma da Diagonal principal: ${somaDiagonal}`) // EXIBIANDO A SOMA DA DIAGONAL PRINCIPAL



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:
// m = []

// let linhas = null
// let colunas = 0
// let valor = null

// while(linhas <= 0) {
//     linhas  = lerTeclado.questionInt(`Quantas linhas voce quer que tenha a matriz?
// Digite aqui `)
// }
// while(colunas <= 0)
//     colunas  = lerTeclado.questionInt(`Quantas colunas voce quer que tenha a matriz?
// Digite aqui `)

// for(let i = 0 ; i < linhas; i ++) {
//     m.push([])
//     for(let j = 0; j < colunas ; j++ ) {
//         valor = lerTeclado.questionFloat(`Digite m[${i}][${j}]: `)
//         m[i].push(valor)
//     }
// }
// console.table(m)


console.log("_______________________________");