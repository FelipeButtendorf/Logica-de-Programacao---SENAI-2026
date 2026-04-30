// ============================================================
//   ATIVIDADE 10 – Estruturas de Controle (Repetição - While)
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – While simples
// ------------------------------------------------------------
// a) Declare uma variável 'n' com valor 1.
// b) Usando while, exiba os números de 1 a 7 no console.
// c) Ao final, exiba: "Fim da contagem!"

// → Seu código aqui:
// let n = 1
// while(n < 8) {
//     console.log(`A contagem está em : ${n}`)
//     n ++
// }
// console.log(`Fim da contagem!`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem regressiva
// ------------------------------------------------------------
// a) Declare uma variável 'regressiva' com valor 10.
// b) Usando while, exiba a contagem de 10 até 1.
// c) Ao final, exiba: "Lançamento ON!"

// → Seu código aqui:
// let contagem = 10
// console.log(`Contagem regressiva para o lançamento`)
// while(contagem > 0) {
//     console.log(`Lançando em : ${contagem}`)
//     contagem --
// }
// console.log(`Lançamento ON!`)


console.log("_______________________________");
let lerTeclado = require("readline-sync");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Validação de entrada
// ------------------------------------------------------------
// a) Usando while, peça ao usuário um número entre 1 e 5 e repita enquanto o valor for inválido.
//    A cada entrada inválida, exiba: "Valor fora do intervalo. Tente novamente."
// b) Quando o valor for válido, exiba: "Você escolheu: <número>"

// → Seu código aqui:

// let numero = lerTeclado.questionInt(`Escolha um número entre 1 e 5
// Digite sua resposta: `)
// while(numero < 1 || numero > 5) {
// numero = lerTeclado.questionInt(`Número inválido. Escolha um número entre 1 e 5
// Digite sua resposta: `)
// } 
// console.log(`O número que voce escolheu é ${numero}`)




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Acumulador com while
// ------------------------------------------------------------
// a) Usando while, peça ao usuário números até que ele digite 0.
// b) Acumule a soma de todos os números digitados.
// c) Conte quantos números foram digitados (exceto o 0).
// d) Ao final, exiba a soma, a quantidade de numeros digitados e quais foram os números digitados.

// → Seu código aqui:
// let numero = lerTeclado.questionInt(`Digite 0
// R: `)
// let soma = 0
// let array = []
// while(numero !== 0) {
//     numero = lerTeclado.questionInt(`Número inválido. Digite 0
//     R: `)
//     soma += numero
//     array.push(numero)   
// }
// if(array.length === 0) {
//     console.log(`Parabéns! Você digitou o número que eu pedi de primeira!`)
// }else{
// array.pop()
// console.log(`Parabéns! Você finalente digitou zero.
// Soma dos números que você digitou: ${soma}
// Quantidade de números digitados: ${array.length}
// Números digitados: ${array}`)
// }


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Média com while e validação
// ------------------------------------------------------------
// a) Usando while, peça ao usuário notas de 0 a 10 até que ele digite -1 para encerrar.
//    Se a nota for inválida (< 0 e diferente de -1, ou > 10), exiba: "Nota inválida." e peça novamente.
// b) Calcule e exiba a média.

// → Seu código aqui:
// let nota = lerTeclado.questionInt(`Digite suas notas uma de cada vez. Caso não queira mais adicionar notas digite -1.
// : `)
// let soma = 0
// let notas = []
// let media = (soma / notas.length).toFixed(2)
// while(nota !== -1) {
//     while((nota < 0 && nota !== -1) || nota > 10) {
//         nota = lerTeclado.questionInt(`Número Inválido. Continue digitando suas notas ou encerrre com -1.`)
//     }
//     notas.push(nota)
//     soma += nota
//     nota = lerTeclado.questionInt(`Continue digitando suas notas ou encerrre com -1.`)   
// }
// if(notas.length === 0) {
//     console.log(`Você não tem nenhuma nota registrada no sistema.`)
// }else {
//     console.log(`A média das suas notas é ${Number(media)}`)
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Do...while: menu simples
// ------------------------------------------------------------
// a) Usando do...while, exiba um menu repetitivo:
//    1 – Exibir hora atual  (use: new Date().toLocaleTimeString())
//    2 – Exibir data atual  (use: new Date().toLocaleDateString())
//    0 – Sair
// b) Processe a opção com switch/case.
// c) O menu deve repetir até o usuário escolher 0.

// → Seu código aqui:
// let opcao = null
// do {
// console.log(`==================================`)
// console.log(`     1 - Exibir hora atual        `)
// console.log(`     2 - Exibir data atual        `)
// console.log(`     0- Sair                      `)
// console.log(`==================================`)
// opcao = lerTeclado.questionInt(`Selecione a opcao desejada.
// Digite aqui: `)
// switch(opcao) {
//     case 1:
//         console.log(new Date().toLocaleTimeString())
//         break
//     case 2:
//         console.log(new Date().toLocaleDateString())
//         break
//     case 0:
//         console.log(`Saindo. Até logo...`)
//         break
//     default:
//     console.log(`Opção inválida.`)    
// } 
// } while(opcao !== 0 )



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Adivinhe o número (while)
// ------------------------------------------------------------
// a) Gere um número secreto aleatório de 1 a 50 (Math.random())
// b) Peça o nome do jogador.
// c) Usando while, repita até o jogador acertar:
//    - Peça um palpite.
//    - Se muito alto, exiba: "Muito alto! Tente menor."
//    - Se muito baixo, exiba: "Muito baixo! Tente maior."
//    - Se acertou, saia do while.
// d) Ao acertar, exiba:
//    "<nome> acertou após <tentativas> tentativa(s)! O número era <secreto>."

// → Seu código aqui:
let secreto = Math.floor(Math.random() * (10 + 1))
let nome = lerTeclado.question(`Nome do jogador:`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Tabuada com while
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro.
// b) Usando while, exiba a tabuada desse número de 1 a 10:
//    Formato para exibição: "<número> x <i> = <resultado>"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Contador com condição composta
// ------------------------------------------------------------
// a) Declare 'saldo' com valor 1000 e 'rodada' com valor 0.
// b) Usando while, simule saques aleatórios enquanto o saldo for maior que 0 E a rodada for menor que 10:
//    - A cada rodada, gere um saque aleatório de 50 a 200:
//    - Se o saque for maior que o saldo, exiba: "Saldo insuficiente. Fim!" e encerre.
//    - Caso contrário, desconte do saldo e exiba:
//      "Rodada <rodada>: sacou R$ <saque> | Novo saldo: R$ <saldo>"
// c) Ao final, exiba o saldo restante e o total de rodadas.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Do...while: cadastro em loop
// ------------------------------------------------------------
// a) Crie um array vazio 'contatos'.
// b) Usando do...while, repita:
//    - Peça nome e telefone do contato.
//    - Adicione um objeto { nome, telefone } ao array.
//    - Pergunte: "Adicionar outro contato?" (keyInYN()).
//    - Repita enquanto o usuário responder que sim.
// c) Ao sair do loop, exiba todos os contatos com console.table().
// d) Exiba: "Total de contatos cadastrados: <qtd>"

// → Seu código aqui:


console.log("_______________________________");