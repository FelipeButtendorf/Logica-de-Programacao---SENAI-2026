// ============================================================
//   ATIVIDADE 04 – Operadores Aritméticos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-04.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Operações básicas
// ------------------------------------------------------------
// Declare duas variáveis: "num1" com valor 18 e "num2" com valor 5.
// Calcule e exiba no console, usando template literal, o cálculo e o resultado:
//    Exemplo: console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);
// a) A soma dos dois números.
// b) A subtração (num1 - num2).
// c) A multiplicação.
// d) A divisão (use toFixed() para limitar o resultado a 2 casas decimais).
// e) O resto da divisão (módulo %).
// f) num1 elevado a num2 (potência).

// → Seu código aqui:
// let num1 = 18
// let num2 = 5
// console.log(`Calculo: ${num1} + ${num2} = ${num1 + num2}`)
// console.log(`Calculo: ${num1} - ${num2} = ${num1 - num2}`)
// console.log(`Calculo: ${num1} * ${num2} = ${num1 * num2}`)
// console.log(`Calculo: ${num1} / ${num2} = ${num1 / num2.toFixed(2)}`)
// console.log(`Calculo: ${num1} % ${num2} = ${num1 % num2}`)
// console.log(`Calculo: ${num1} elevado à ${num2} = ${num1 ** num2}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Área e perímetro
// ------------------------------------------------------------
// a) Declare as variáveis "largura" (valor 8) e "altura" (valor 5).
// b) Calcule a área do retângulo (largura * altura) e armazene em "area".
// c) Calcule o perímetro (2 * largura + 2 * altura) e armazene em "perimetro".
// d) Exiba no console usando template literal:
//    "Retângulo | Largura: <largura> | Altura: <altura> | Área: <area> | Perímetro: <perimetro>"

// → Seu código aqui:
// let largura = 8
// let altura = 5
// console.log(`Perimetro = 2 x largura(8) + 2 x altura(5) = ${2*altura*2*largura}`)
// console.log(`Retângulo | Largura: ${largura} | Altura: ${altura} |
//  Área: ${largura*altura} | Perímetro: ${2*altura*2*largura}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculando desconto
// ------------------------------------------------------------
// a) Declare a variável "precoOriginal" com o valor 250.
// b) Declare a variável "percentualDesconto" com o valor 15 (representa 15%).
// c) Calcule o valor do desconto e armazene em "valorDesconto".
//    Dica: valorDesconto = precoOriginal * (percentualDesconto / 100)
// d) Calcule o preço final (precoOriginal - valorDesconto) e armazene em "precoFinal".
// e) Exiba no console usando template literal:
//    "Preço original: R$ <precoOriginal> | Desconto: R$ <valorDesconto> | Preço final: R$ <precoFinal>"
//    Use toFixed(2) nos valores em reais.

// → Seu código aqui:
// const precoOriginal = 250
// percentualDesconto = 15
// let valorDesconto = precoOriginal * (percentualDesconto/100)
// let precoFinal = precoOriginal - valorDesconto
// console.log(`Preço original: R$ ${precoOriginal.toFixed(2)} | Desconto: R$ ${valorDesconto.toFixed(2)} | Preço final: R$ ${precoFinal.toFixed(2)}`)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Operadores de atribuição composta
// ------------------------------------------------------------
// a) Declare uma variável "pontos" com o valor 100.
// b) Some 50 pontos usando +=. Exiba o resultado.
// c) Subtraia 30 pontos usando -=. Exiba o resultado.
// d) Multiplique por 2 usando *=. Exiba o resultado.
// e) Divida por 4 usando /=. Exiba o resultado.
// f) Para cada operação, use template literal:
//    "Pontos após <tipo da operação>: <valor>"

// → Seu código aqui:
// let pontos = 100
// console.log( `Pontos: ${pontos}`)
// pontos += 50
// console.log( `Pontos após soma: ${pontos}`)
// pontos -= 30
// console.log( `Pontos após subtração: ${pontos}`)
// pontos *= 2
// console.log( `Pontos após multiplicação: ${pontos}`)
// pontos /= 4
// console.log( `Pontos após divisão: ${pontos}`)




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Incremento e decremento
// ------------------------------------------------------------
// a) Declare uma variável "vidas" com valor 3.
// b) Exiba o valor atual com console.log().
// c) Use ++ para incrementar "vidas" duas vezes, exibindo após cada incremento.
// d) Use -- para decrementar "vidas" uma vez, exibindo o resultado.
// e) Declare uma variável "nivel" com valor 1.
// f) Incremente "nivel" três vezes usando ++nivel (prefixo) e exiba cada resultado.

// → Seu código aqui:
// let vidas = 3
// console.log(vidas)
// console.log(++vidas)
// console.log(++vidas)
// console.log(--vidas)
// let nivel = 1
// console.log(++nivel)
// console.log(++nivel)
// console.log(++nivel)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções matemáticas (Math)
// ------------------------------------------------------------
// a) Declare "nota" com o valor 7.3.
// b) Exiba o resultado de Math.round(nota), Math.floor(nota) e Math.ceil(nota).
//    Use template literal para identificar cada um.
// c) Declare "temperatura" com o valor -12.5.
// d) Exiba o valor absoluto usando Math.abs(temperatura).
// e) Use Math.max() para encontrar o maior entre: 42, 17, 89, 5, 63. Exiba o resultado.
// f) Use Math.min() para encontrar o menor entre 42, 17, 89, 5, 63. Exiba o resultado.

// → Seu código aqui:
// nota = 7.3
// console.log(`Arredondamento para o inteiro mais próximo: ${Math.round(nota)}`)
// console.log(`Arredondamento para o menor inteiro: ${Math.floor(nota)}`)
// console.log(`Arredondamento para o maior inteiro: ${Math.ceil(nota)}`)
// let temperatura = -12.5
// console.log(Math.abs(temperatura))
// console.log(Math.max(42, 17, 89, 5, 63))
// console.log(Math.min(42, 17, 89, 5, 63))

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Média de notas
// ------------------------------------------------------------
// a) Peça ao usuário 3 notas (use questionFloat()).
// b) Calcule a média aritmética das 3 notas.
// c) Exiba no console:
//    "Nota 1: <n1> | Nota 2: <n2> | Nota 3: <n3>"
//    "Média: <media>" (com 2 casas decimais usando toFixed(2))

// → Seu código aqui:
let lerTeclado = require('readline-sync')
// const n1 = lerTeclado.questionInt(`Nota 1:`)
// const n2 = lerTeclado.questionInt(`Nota 2:`)
// const n3 = lerTeclado.questionInt(`Nota 3:`)
// const notas = [n1, n2, n3]
// const media = n1 + n2 + n3 / notas.length 
// console.log(`Nota 1: ${n1}| Nota 2: ${n2} | Nota 3: ${n3} Média: ${media.toFixed(2)}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Calculadora de troco
// ------------------------------------------------------------
// a) Peça ao usuário o valor total da compra (questionFloat()).
// b) Peça ao usuário o valor entregue pelo cliente (informando que deve ser maior que o valor da compra) (questionFloat()).
// c) Calcule o troco (valorEntregue - totalCompra).
// d) Exiba no console:
//    "Total da compra:  R$ <total>"
//    "Valor entregue:   R$ <entregue>"
//    "Troco:            R$ <troco>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:
// const total = lerTeclado.questionFloat(`Qual o valor total da compra?`)
// const entregue = lerTeclado.questionFloat(`Qual o valor entregue pelo cliente (o valor deve ser maior que o da compra)?`)
// const troco = entregue - total
// console.log(`Total da compra:  R$ ${total}
// Valor entregue:   R$ ${entregue}
// Troco:            R$ ${troco}`)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Valor total de listas
// ------------------------------------------------------------
// a) Dada uma lista de preços, calcule e exiba o total.
let precos = [29.90, 49.99, 15.75, 99.90];
// b) Dada uma lista de notas, calcule e exiba a média.
let notas = [7.5, 8.2, 6.5, 9.0];
// c) Dada uma lista de idades, exiba a maior e a menor idade utilizando das funções Math().
let idades = [15, 22, 30, 18, 25];

// → Seu código aqui:
// const total = (precos[0] + precos[1] + precos[2] + precos[3]).toFixed(2)
// console.log(total)
// const media = (notas[0] + notas[1] + notas[2] + notas[3] / notas.length).toFixed(2)
// console.log(media)
// console.log(Math.max(...idades))
// console.log(Math.min(...idades))



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Trabalhando com objetos
// ------------------------------------------------------------
// Dado o objeto turma:

// a) Sem alterar o objeto (utilize somente push), peça para o usuário 3 notas para cada aluno, indicando a quem pertencerá cada nota
// b) Calcule a média de notas de cada aluno e exiba no console, indicando a quem pertence cada média
// c) Exiba a média geral da turma
// d) Exiba a nota mais alta e a mais baixa de cada aluno
// e) Exiba a nota mais alta e a mais baixa da turma

// → Seu código aqui:
let turma = {
  aluno1: {
    nome: "João",
    notas: []
  },
  aluno2: {
    nome: "Maria",
    notas: []
  },
  aluno3: {
    nome: "Pedro",
    notas: []
  }
}

turma.aluno1.notas.push(lerTeclado.questionInt(`Nome do ${turma.aluno1.nome}, Nota 1;`))
turma.aluno1.notas.push(lerTeclado.questionInt(`Nome do ${turma.aluno1.nome}, Nota 2;`))
turma.aluno1.notas.push(lerTeclado.questionInt(`Nome do ${turma.aluno1.nome}, Nota 3;`))
turma.aluno2.notas.push(lerTeclado.questionInt(`Nome do ${turma.aluno2.nome}, Nota 1;`))
turma.aluno2.notas.push(lerTeclado.questionInt(`Nome do ${turma.aluno2.nome}, Nota 2;`))
turma.aluno2.notas.push(lerTeclado.questionInt(`Nome do ${turma.aluno2.nome}, Nota 3;`))
turma.aluno3.notas.push(lerTeclado.questionInt(`Nome do ${turma.aluno3.nome}, Nota 1;`))
turma.aluno3.notas.push(lerTeclado.questionInt(`Nome do ${turma.aluno3.nome}, Nota 2;`))
turma.aluno3.notas.push(lerTeclado.questionInt(`Nome do ${turma.aluno3.nome}, Nota 3;`))
const mediaJoao = ((turma.aluno1.notas[0] + turma.aluno1.notas[1] + turma.aluno1.notas[2])/turma.aluno1.notas.length).toFixed(2)
const mediaMaria = ((turma.aluno2.notas[0] + turma.aluno2.notas[1] + turma.aluno2.notas[2])/turma.aluno2.notas.length).toFixed(2)
const mediaPedro = ((turma.aluno3.notas[0] + turma.aluno3.notas[1] + turma.aluno3.notas[2])/turma.aluno3.notas.length).toFixed(2)
console.log(`===============
Media da Turma |
===============
João : ${mediaJoao} |
Maria: ${mediaMaria} |
Pedro : ${mediaPedro}`)
console.log(`===============
Notas |
===============
João - Mais Baixa: ${Math.min(...turma.aluno1.notas)}, Mais alta: ${Math.max(...turma.aluno1.notas)}
Maria - Mais Baixa: ${Math.min(...turma.aluno2.notas)}, Mais alta: ${Math.max(...turma.aluno2.notas)}
Pedro - Mais Baixa: ${Math.min(...turma.aluno3.notas)}, Mais alta: ${Math.max(...turma.aluno3.notas)}`)

//======== SEM UTILIZAR PUSH =========
// let turma = {
//   aluno1: {
//     nome: "João",
//     notas: [
//         nota1 = lerTeclado.questionInt(`João, Nota 1;`),
//         nota2 = lerTeclado.questionInt(`João, Nota 2;`),
//         nota3 = lerTeclado.questionInt(`João, Nota 3;`)
//     ]
//   },
//   aluno2: {
//     nome: "Maria",
//     notas: [
//         nota1 = lerTeclado.questionFloat(`Maria, Nota 1;`),
//         nota2 = lerTeclado.questionFloat(`Maria, Nota 2;`),
//         nota3 = lerTeclado.questionFloat(`Maria, Nota 3;`)
//     ]
//   },
//   aluno3: {
//     nome: "Pedro",
//     notas: [
//         nota1 = lerTeclado.questionFloat(`Pedro, Nota 1;`),
//         nota2 = lerTeclado.questionFloat(`Pedro, Nota 2;`),
//         nota3 = lerTeclado.questionFloat(`Pedro, Nota 3;`)
//     ]
//   }
// }
// const mediaJoao = ((turma.aluno1.notas[0] + turma.aluno1.notas[1] + turma.aluno1.notas[2])/turma.aluno1.notas.length).toFixed(2)
// const mediaMaria = ((turma.aluno2.notas[0] + turma.aluno2.notas[1] + turma.aluno2.notas[2])/turma.aluno2.notas.length).toFixed(2)
// const mediaPedro = ((turma.aluno3.notas[0] + turma.aluno3.notas[1] + turma.aluno3.notas[2])/turma.aluno3.notas.length).toFixed(2)
// console.log(`===============
// Media da Turma |
// ===============
// João : ${mediaJoao} |
// Maria: ${mediaMaria} |
// Pedro : ${mediaPedro}`)
// console.log(`===============
// Notas |
// ===============
// João - Mais Baixa: ${Math.min(...turma.aluno1.notas)}, Mais alta: ${Math.max(...turma.aluno1.notas)}
// Maria - Mais Baixa: ${Math.min(...turma.aluno2.notas)}, Mais alta: ${Math.max(...turma.aluno2.notas)}
// Pedro - Mais Baixa: ${Math.min(...turma.aluno3.notas)}, Mais alta: ${Math.max(...turma.aluno3.notas)}`)


console.log("_______________________________");