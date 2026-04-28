// ============================================================
//   ATIVIDADE 09 – Estruturas de Controle (Repetição - For)
// ============================================================
let lerTeclado = require("readline-sync");
// ------------------------------------------------------------
// EXERCÍCIO 1 – Contagem simples
// ------------------------------------------------------------
// a) Usando um for, exiba no console os números de 5 a 12, um por linha.
//    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// b) Ao final, exiba: "Contagem concluída!"

// → Seu código aqui:
// for(let i = 5; i <= 12 ; i++) {
//     console.log(i)
// }
// console.log("Contagem concluída!")

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Contagem decrescente
// ------------------------------------------------------------
// a) Usando um for, exiba os números de 10 até 3 em ordem decrescente.
//    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// b) Ao final, exiba: "Lançamento! 🚀"

// → Seu código aqui:
// for(let i = 10; i >= 3 ; i--) {
//     console.log(i)
// }
// console.log("Lançamento! 🚀")

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Números pares
// ------------------------------------------------------------
// a) Usando um for com passo 2, exiba todos os números pares de 0 a 30.
// b) Ao final, exiba quantos números pares foram exibidos.
// let contador = 0
// // → Seu código aqui:
//     for (let i = 0; i <= 30 ; i+=2) {
//         if(i % 2 === 0) {
//             contador ++
//             console.log(i)
//         }
//     }
// console.log(`Contador : ${contador}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Tabuada
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro (questionInt()).
// b) Exiba a tabuada desse número de 1 a 10 no formato:
//    "<número> x <i> = <resultado>"
// if(N>=0){
//     process.exit
// }

// → Seu código aqui:
// let num = lerTeclado.questionInt(`Insira um número inteiro`)
// for(let tabuada = 1; tabuada <= 10; tabuada++) {
//     let resultado = tabuada * num
//     console.log(`${tabuada} x ${num} = ${resultado}`)
// }

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Soma acumulada
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro positivo N (questionInt()).
// b) Usando um for, calcule a soma de todos os inteiros de 1 até N.
// c) Exiba: "A soma de 1 até <N> é <soma>"

// → Seu código aqui:
// let soma = 0
// let N = lerTeclado.questionInt(`Digite um número inteiro: `)
// if(N>=0){
//     process.exit
// }
// for(let inicio = 1; inicio <= N ; inicio++) {
//     soma += inicio
// }
// console.log(`Soma de todos os números inteiros de 1 até ${N}: ${soma}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Fatorial
// ------------------------------------------------------------
// a) Peça ao usuário um número inteiro de 1 a 10 (questionInt()).
// b) Calcule o fatorial desse número usando um for.
//    Fatorial de N (N!) = 1 × 2 × 3 × ... × N
//    Exemplo: 5! = 1 × 2 × 3 × 4 × 5 = 120
// c) Exiba: "<N>! = <resultado>"

// → Seu código aqui:
// let resultado = 1
// let N = lerTeclado.questionInt(`Digite um número inteiro entre 1 até 10: `)
// for( let i = 1 ; i<=N ; i++) {
//     resultado *= i
// }
// console.log(`${N}! = ${resultado}`)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 7 – Percorrendo um array
// ------------------------------------------------------------
// a) Utilizando o array:
const cidades = [
  "São Paulo",
  "Rio de Janeiro",
  "Curitiba",
  "Salvador",
  "Fortaleza"
];
// b) Utilizando de um for, exiba cada cidade com seu índice no formato:
//    "[<indice>] - <Cidade>"
// c) Ao final, exiba: "Total de cidades: <quantidade>"

// → Seu código aqui:
// let i = null
// let contador = 0
// for( i = 0; i < cidades.length ; i++) {
//     console.log(`[${i}] - ${cidades[i]}`)
//     contador++
// }
// console.log(`Total de cidades: ${contador}`)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 8 – Maior e menor valor
// ------------------------------------------------------------
// a) Declare o array:
//    const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];
// b) Usando um for, encontre o maior e o menor valor do array.
// c) Exiba:
//    "Maior temperatura: <maior>°C"
//    "Menor temperatura: <menor>°C"

// → Seu código aqui:
// const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25]
// let maior = temperaturas[0]
// for(let i = 1; i < temperaturas.length ; i++) {
//     if(temperaturas[i] > maior) {
//         maior = temperaturas[i]
//     }
// }
// let menor = temperaturas[0]
// for(let i = 1; i < temperaturas.length ; i++) {
//     if(temperaturas[i] < menor) {
//         menor = temperaturas[i]
//     }
// }
// console.log(`"Maior temperatura: ${maior}°C
// Menor temperatura: ${menor}°C`)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 9 – Contando com condição
// ------------------------------------------------------------
// a) Utilizando do array:
const idades = [12, 25, 17, 34, 15, 42, 16, 29, 8, 19];
// b) Usando um for, conte:
//    - Quantas pessoas são menores de idade (< 18)
//    - Quantas são maiores de idade (>= 18)
// c) Exiba os dois totais.

// → Seu código aqui:
// let menores = [null]
// let maiores = [null]
// for(let i = 0; i < idades.length; i++){
//     if(idades[i] >= 18) {
//         maiores.push(idades[i])
//     }else {
//         menores.push(idades[i])
//     }
// }
// console.log(`Menores de idade: ${menores}
// Maiores de idade; ${maiores}`)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 10 – Média com array
// ------------------------------------------------------------
// a) Utilizando do array:
const salarios = [1800, 3200, 950, 4500, 2100, 1500, 7800, 2900];
// b) Usando um for, calcule a média salarial.
// c) Exiba a média no formato: "Média salarial: R$ <media>"
// d) Usando outro for, exiba cada salário e se está acima ou abaixo da média:
//    "R$ 1800,00 – Abaixo da média"
//    "R$ 3200,00 – Acima da média"

// → Seu código aqui:
// let total = 0
// for(let i = 0; i < salarios.length; i++) {
//     total += salarios[i]
// }
// const media = total / salarios.length
// console.log(`Média salárial: ${Number(media)}`)
// let abaixo = [null]
// let acima = [null]
// for(let i = 0; i < salarios.length; i++) {
//     if(salarios[i] < 1800) {
//         abaixo.push(salarios[i])
//     }if(salarios[i] > 3200) {
//         acima.push(salarios[i])
//     }
// }
// console.log(`Acima da média: ${acima}
// Abaixo da média: ${abaixo}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 11 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Calcule a média das notas da turma e armazene em uma variável 'media'.
// e) Percorra o array e para cada aluno exiba no console:
//    "<nome>: <nota> – <situação>"
//    A situação deve ser:
//      "Aprovado"    → nota >= 7
//      "Recuperação" → nota >= 5 e < 7
//      "Reprovado"   → nota < 5
// f) Ao final, exiba a média da turma no formato:
//    "Média da turma: <media>"
// g) Exiba o array 'turma' com console.table().

// → Seu código aqui:
// const qntAlunos = 3
// let turma = []
// let somaNotas = 0
// for(let i = 0; i < 3; i++) {
//     const nomeAluno = lerTeclado.question(`Nome do aluno ${i + 1}: `)
//     const nota =  lerTeclado.questionFloat(`Nota de ${nomeAluno}: `)
//     somaNotas += nota
//     turma.push( {
//         nome: nomeAluno,
//         notas: nota
//         }
//     )
// }
// let media= somaNotas / qntAlunos
// for(let i = 0; i < turma.length; i++) {
//     if(turma[i].notas >= 7) {
//         turma[i].situacao = "Aprovado"
//     }else if(turma[i].notas >= 5 && turma[i].notas < 7) {
//         turma[i].situacao = "Recuperação"
//     }else if(turma[i].notas < 5) {
//         turma[i].situacao = "Reprovado"
//     }
//     console.log(`${turma[i].nome}: ${turma[i].notas} - ${turma[i].situacao}`)
// }
// console.log(`Média da turma: ${Number(media.toFixed(2))}`)
// console.table(turma)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 12 – Coletando dados com for e input
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos produtos quer cadastrar (questionInt()).
// b) Usando um for, colete de cada produto:
//    - nome (question())
//    - preco (questionFloat())
// c) Armazene cada produto como objeto em um array 'estoque'.
// d) Após o cadastro, percorra o array e exiba cada produto no formato:
//    "<nome>: R$ <preco>"
// e) Exiba o produto mais caro e o mais barato.
// f) Exiba o array com console.table().

// → Seu código aqui:
// let qntProdutos = lerTeclado.questionInt(`Quantos produtos voce gostaria de cadastrar?
// Digite sua resposta:`)
// let estoque = []
// for(let i = 0; i < qntProdutos; i++) {
//     const nome = lerTeclado.question(`Nome do produto ${i + 1}:`)
//     const preco = lerTeclado.questionFloat(`Preco do produto ${nome}:`)
//     estoque.push( {
//         nome: nome,
//         preco: preco
//     }
//     )
// }
// console.log(`============= PRODUTOS EM ESTOQUE =============`)
// for(let i = 0; i < qntProdutos; i++) {
//     console.log(`${estoque[i].nome}: R$ ${estoque[i].preco}`)
// }
// console.log(`===============================================`)
// let caroNum = estoque[0].preco
// let baratoNum = estoque[0].preco
// let caroText = estoque[0].nome
// let baratoText = estoque[0].nome
// for(let i = 1; i < qntProdutos; i++) {
//     if(caroNum < estoque[i].preco) {
//         caroNum = estoque[i].preco
//         caroText = estoque[i].nome
//     }
// }
// for(let i = 1; i < qntProdutos; i++) {
//     if(baratoNum > estoque[i].preco) {
//         baratoNum = estoque[i].preco
//         baratoText = estoque[i].nome
//     }
// }
// console.log(`Produto mais caro: ${caroText}
// Produto mais barato: ${baratoText}`)
// console.table(estoque)

console.log("_______________________________");
