// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerTeclado = require("readline-sync");

// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:
// let a = 10
// let b = 10
// console.log(`${a} == ${b} → ${a == b}`)
// console.log(`${a} === ${b} → ${a === b}`)
// a = 10
// b = "10"
// console.log(`${a} == ${b} → ${a == b}`)
// console.log(`${a} === ${b} → ${a === b}`)
// a = 0
// b = false
// console.log(`${a} == ${b} → ${a == b}`)
// console.log(`${a} === ${b} → ${a === b}`)
// a = null
// b = undefined
// console.log(`${a} == ${b} → ${a == b}`)
// console.log(`${a} === ${b} → ${a === b}`)
// a = "JS"
// b = "JS"
// console.log(`${a} == ${b} → ${a == b}`)
// console.log(`${a} === ${b} → ${a === b}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:
// let a = 5
// let b = 5
// console.log(`${a} != ${b} → ${a != b}`)
// console.log(`${a} !== ${b} → ${a !== b}`)
// a = 5
// b = "5"
// console.log(`${a} != ${b} → ${a != b}`)
// console.log(`${a} !== ${b} → ${a !== b}`)
// a = 7
// b = 3
// console.log(`${a} != ${b} → ${a != b}`)
// console.log(`${a} !== ${b} → ${a !== b}`)
// a = true
// b = 1
// console.log(`${a} != ${b} → ${a != b}`)
// console.log(`${a} !== ${b} → ${a !== b}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:
// let salarioA = 3500
// let salarioB = 4200
// let calculo1 = salarioA > salarioB
// let calculo2 = salarioA < salarioB
// let calculo3 = salarioA >= salarioB
// let calculo4 = salarioA <= salarioB
// let calculo5 = salarioA === salarioB
// console.log(`Salário A (R$ ${salarioA}) > Salário B (R$ ${salarioB}): ${calculo1}`)
// console.log(`Salário A (R$ ${salarioA}) < Salário B (R$ ${salarioB}): ${calculo2}`)
// console.log(`Salário A (R$ ${salarioA}) >= Salário B (R$ ${salarioB}): ${calculo3}`)
// console.log(`Salário A (R$ ${salarioA}) <= Salário B (R$ ${salarioB}): ${calculo4}`)
// console.log(`Salário A (R$ ${salarioA}) === Salário B (R$ ${salarioB}): ${calculo5}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:
// let estoque = 0
// let temEstoque = estoque > 0
// let estoqueZerado = estoque === 0
// let temperatura = 36.5
// let febre = temperatura >= 37.6
// console.log(`Meu estoque agora é ${estoque}`)
// console.log(`Tem estoque: ${temEstoque}`)
// console.log(`O estoque está zerado: ${estoqueZerado}`)
// console.log(`Minha temperatura agora é de C°${temperatura}`)
// console.log(`Eu estou com febre: ${febre}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:
// const numero1 = lerTeclado.questionInt(`Digite um numero:`)
// const numero2 = lerTeclado.questionInt(`Digite outro numero:`)
// const resultado1= numero1 > numero2
// const resultado2= numero1 < numero2
// const resultado3= numero1 === numero2
// const resultado4= numero1 >= numero2
// console.log(`====================
// RESULTADOS
// ====================
// Número 1 > Número 2 = ${resultado1}
// Número 1 < Número 2  = ${resultado2}
// Número 1 === Número 2  = ${resultado3}
// Número 1 >= Número 2  = ${resultado4}
// `)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:
// const preco = lerTeclado.questionFloat(`Preco do produto:`)
// const precoMaximo = 100
// const estaDentroDoOrcamento = preco <= precoMaximo
// esteItemEhCaro = estaDentroDoOrcamento
// console.log(`Preço informado: R$ ${preco}
// //    Dentro do orçamento (≤ R$ ${precoMaximo}>)? : ${estaDentroDoOrcamento ? "Sim" : "Não"}
// //    Item caro (> R$ ${precoMaximo})? : ${esteItemEhCaro ? "Sim" : "Não"}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:
// const cadastro = [
//   pessoa1 = {
//     nome: lerTeclado.question(`Nome da pessoa 1:`),
//     idade: lerTeclado.questionInt(`Idade da pessoa 1:`)
//   },
//   pessoa2 = {
//     nome: lerTeclado.question(`Nome da pessoa 2:`),
//     idade: lerTeclado.questionInt(`Idade da pessoa 2:`)
//   },
// ];
// const comparacao1 = cadastro[0].idade > cadastro[1].idade
// const comparacao2 = cadastro[0].idade === cadastro[1].idade
// const comparacao3 = cadastro[0].idade >= 18
// const comparacao4 = cadastro[1].idade >= 18
// console.log(`Idade de ${cadastro[0].nome} é ${cadastro[0].idade} e ele é ${cadastro[0].idade >= 18 ? "maior de idade" : "menor de idade"}`)
// console.log(`Idade de ${cadastro[1].nome} é ${cadastro[1].idade} e ele é ${cadastro[1].idade >= 18 ? "maior de idade" : "menor de idade"}`)
// console.log(`Idade de ${cadastro[0].nome} é ${cadastro[0].idade}; Idade de ${cadastro[1].nome} é ${cadastro[1].idade}. Por tanto :
// ${cadastro[0].nome} ${cadastro[0].idade > cadastro[1].idade ? "é o mais velho" : "é o mais novo"} e ${cadastro[1].nome} ${cadastro[1].idade > cadastro[0].idade ? "é o mais velho" : "é o mais novo"}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:
// const alunos = [
//     {nome: lerTeclado.question(`Nome do aluno 1:`),
//         notas: [
//             lerTeclado.questionFloat(`Nota 1, Aluno 1:`),
//             lerTeclado.questionFloat(`Nota 2, Aluno 1:`),
//             lerTeclado.questionFloat(`Nota 3, Aluno 1:`)
//         ]

//     },
//     {nome: lerTeclado.question(`Nome do aluno 2:`),
//         notas: [
//             lerTeclado.questionFloat(`Nota 1, Aluno 2:`),
//             lerTeclado.questionFloat(`Nota 2, Aluno 2:`),
//             lerTeclado.questionFloat(`Nota 3, Aluno 2:`)
//         ]

//     }
// ]
// const mediaAluno1 = (alunos[0].notas[0] + alunos[0].notas[1] + alunos[0].notas[2]) / alunos[0].notas.length
// const mediaAluno2 = (alunos[1].notas[0] + alunos[1].notas[1] + alunos[1].notas[2]) / alunos[1].notas.length
// console.log(`A média de ${alunos[0].nome} foi de ${mediaAluno1}; A média de ${alunos[1].nome} foi de ${mediaAluno2}.
// Portanto o aluno com a maior média é ${mediaAluno1 > mediaAluno2 ? alunos[0].nome : alunos[1].nome}`)
console.log("_______________________________");