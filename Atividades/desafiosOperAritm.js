// ============================================================
//   DESAFIOS (para quem já terminou a atividade 04) – Operadores Aritméticos
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Carrinho de compras
// ------------------------------------------------------------
// a) Peça ao usuário o nome e preço de 3 produtos.
// b) Crie um objeto "carrinho" contendo:
//    - produtos (array com os 3 produtos)
// c) Cada produto deve ser um objeto com:
//    nome
//    preco
//
// d) Calcule:
//    - valorTotal
//    - valorMedio dos produtos
//
// e) Exiba o carrinho com console.table().
// f) Exiba também:
//
// "O carrinho possui < X > produtos.
// Valor total: X
// Valor médio dos produtos: X"
let lerTeclado = require('readline-sync');
// → Seu código aqui:
// const produto1 = {
//     nome: lerTeclado.question(`Nome do produto 1:`),
//     preco: lerTeclado.questionFloat(`Preco do produto 1:`)
// }
// const produto2 = {
//     nome: lerTeclado.question(`Nome do produto 2:`),
//     preco: lerTeclado.questionFloat(`Preco do produto 2:`)
// }
// const produto3 = {
//     nome: lerTeclado.question(`Nome do produto 3:`),
//     preco: lerTeclado.questionFloat(`Preco do produto 3:`)
// }
// const carrinho = [produto1, produto2, produto3]
// let valorTotal = carrinho[0].preco + carrinho[1].preco + carrinho[2].preco
// let valorMedio = carrinho[0].preco + carrinho[1].preco + carrinho[2].preco / carrinho.length
// console.table(carrinho)
// console.log(`====================
// CARRINHO
// ====================
// O carrinho possuiu ${carrinho.length} produtos.
// Valor total: R$ ${Number(valorTotal.toFixed(2))}
// Valor médio dos produtos: R$ ${Number(valorMedio.toFixed(2))}
// ====================`)
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Controle de despesas
// ------------------------------------------------------------
// a) Peça ao usuário os valores de 4 despesas:
//    aluguel
//    internet
//    energia
//    alimentação
//
// b) Crie um objeto "despesas" com essas propriedades.
//
// c) Crie um array chamado "listaDespesas" contendo
//    todos os valores.
//
// d) Calcule:
//    - total de despesas
//    - média das despesas
//    - quanto sobra se o salário for 5000.
//
// e) Exiba:
//
// "Total de despesas: X"
// "Média de despesas: X"
// "Dinheiro restante: X"

// → Seu código aqui:

// const aluguel = lerTeclado.questionFloat(`Despesa do aluguel:`)
// const internet = lerTeclado.questionFloat(`Despesa da internet:`)
// const energia = lerTeclado.questionFloat(`Despesa da energia:`)
// const alimentacao = lerTeclado.questionFloat(`Despesa da alimentação:`)
// const despesas = {
//     aluguel,
//     internet,
//     energia,
//     alimentacao
// }
// const totalDespesas = despesas.aluguel + despesas.internet + despesas.energia + despesas.alimentacao
// const numeroDeDespesas = Object.keys(despesas).length
// const mediaDespesas = totalDespesas / numeroDeDespesas
// const quantoSobra = 5000 - totalDespesas
// console.log(`Total de despesas: ${totalDespesas}
// Média de despesas: ${mediaDespesas}
// Dinheiro restante: ${quantoSobra}`)



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Estatísticas de jogador
// ------------------------------------------------------------
// a) Peça ao usuário:
//    nome do jogador
//    partidas jogadas
//    gols
//    assistências
//
// b) Crie um objeto "jogador".
//
// c) Crie um array "estatisticas" contendo:
//    [gols, assistencias]
//
// d) Calcule:
//    - participacoesEmGol = gols + assistencias
//    - mediaPorPartida = participacoesEmGol / partidas
//
// e) Exiba:
//
// "Jogador: X"
// "Participações em gol: X"
// "Média por partida: X"

// → Seu código aqui:
// const nomeJogador = lerTeclado.question(`Nome do jogador:`)
// const partidas = lerTeclado.questionInt(`Partidas jogadas::`)
// const gols = lerTeclado.questionInt(`Gols marcados:`)
// const assistencias = lerTeclado.questionInt(`Assistencias feitas:`)
// const jogador = {}
// const estatisticas = [
//     gols,
//     assistencias
// ]
// const participacoesEmGol = gols + assistencias
// const mediaPorPartida = participacoesEmGol / partidas
// console.log(`Jogador: ${nomeJogador}
// Participações em gol: ${participacoesEmGol} 
// Média por partida: ${Number(mediaPorPartida.toFixed())}`)

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Pedido de mercado
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 4 produtos:
//    nome e preço.
//
// b) Crie um objeto "mercado" contendo:
//    - produtos (array)
//
// c) Calcule:
//    - valor total da compra
//    - valor com desconto de 10%
//
// Fórmula:
// desconto = total * 0.10
// valorFinal = total - desconto
//
// d) Exiba:
//
// "Total da compra: X"
// "Desconto: X"
// "Valor final: X"

// → Seu código aqui:
// const produtos = [
//     produto1 = {
//         nome: lerTeclado.question(`Produto 1:`),
//         preco: lerTeclado.questionFloat(`Preço do produto 1:`)
//     },
//     produto2 = {
//         nome: lerTeclado.question(`Produto 2:`),
//         preco: lerTeclado.questionFloat(`Preço do produto 2:`)
//     },
//     produto3 = {
//         nome: lerTeclado.question(`Produto 3:`),
//         preco: lerTeclado.questionFloat(`Preço do produto 3:`)
//     },
//     produt4 = {
//         nome: lerTeclado.question(`Produto 4:`),
//         preco: lerTeclado.questionFloat(`Preço do produto 4:`)
//     }
// ]
// const mercado = {produtos}
// const valorTotal = mercado.produtos[0].preco + mercado.produtos[1].preco + mercado.produtos[2].preco + mercado.produtos[3].preco
// const desconto = valorTotal * 0.1
// const valorFinal = valorTotal - desconto
// console.log(` Total da compra: ${valorTotal}
// Desconto: ${desconto}%
// Valor final: ${valorFinal}
// `) 


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Boletim escolar
// ------------------------------------------------------------
// a) Peça ao usuário 4 notas.
//
// b) Crie um objeto "boletim" contendo:
//    notas (array com as 4 notas)
//
// c) Calcule:
//    média das notas
//
// d) Calcule também:
//    pontosFaltantesPara10
//
// Fórmula:
// pontosFaltantes = 10 - media
//
// e) Exiba:
//
// "Notas: X"
// "Média: X"
// "Faltam X pontos para média 10."

// → Seu código aqui:
// const notas = [
//     nota1 = lerTeclado.questionFloat(`Nota 1:`),
//     nota2 = lerTeclado.questionFloat(`Nota 2:`),
//     nota3 = lerTeclado.questionFloat(`Nota 3:`),
//     nota4 = lerTeclado.questionFloat(`Nota 4:`)
// ]
// const boletim = {notas}
// const media = (boletim.notas[0] + boletim.notas[1] + boletim.notas[2] + boletim.notas[3]) / boletim.notas.length
// const pontosFaltantes = 10 - media 
// console.log(`Notas: ${boletim.notas}
// Média: ${media}
// Faltam ${pontosFaltantes} pontos para média 10.`)


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 6 – Restaurante (cálculo de conta)
// ------------------------------------------------------------
// a) Peça ao usuário o preço de:
//    entrada
//    prato principal
//    sobremesa
//    bebida
//
// b) Crie um objeto "pedido".
//
// c) Crie um array "itens".
//
// d) Calcule:
//    subtotal
//
// e) Calcule taxa de serviço de 10%
//
// f) Calcule valor total.
//
// g) Exiba:
//
// "Subtotal: X"
// "Taxa de serviço: X"
// "Total a pagar: X"

// → Seu código aqui:
// const entrada = lerTeclado.questionFloat(`Preço da entrada:`)
// const pratoPrincipal = lerTeclado.questionFloat(`Preço da prato principal:`)
// const sobremesa = lerTeclado.questionFloat(`Preço da sobremesa:`)
// const bebida = lerTeclado.questionFloat(`Preço da bebida:`)
// const pedido = {}
// const itens = []
// const subtotal = entrada + pratoPrincipal + sobremesa + bebida
// const taxaDeServico = subtotal * 0.1
// const valorTotal = subtotal + taxaDeServico
// console.log(`Subtotal: ${subtotal}
// Taxa de serviço: ${taxaDeServico}
// Total a pagar: ${valorTotal}`)



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 7 – Análise de números
// ------------------------------------------------------------
// a) Peça 5 números ao usuário.
//
// b) Crie um objeto "analise".
//
// c) Crie um array "numeros".
//
// d) Calcule:
//    soma de todos
//    média
//    produto (multiplicação de todos)
//
// e) Exiba:
//
// "Soma: X"
// "Média: X"
// "Produto: X"

// → Seu código aqui:
// const numero1 = lerTeclado.questionInt(`Digite um número:`)
// const numero2 = lerTeclado.questionInt(`Digite um número:`)
// const numero3 = lerTeclado.questionInt(`Digite um número:`)
// const numero4 = lerTeclado.questionInt(`Digite um número:`)
// const numero5 = lerTeclado.questionInt(`Digite um número:`)
// const analise = {}
// const numeros = []
// const soma = numero1 + numero2 + numero3 + numero4 + numero5
// const media = soma / 5
// const produto = numero1 * numero2 * numero3 * numero4 * numero5
// console.log(`Soma: ${soma}
// Média: ${media} 
// Produto: ${produto}`)
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 8 – Perfil financeiro
// ------------------------------------------------------------
// a) Peça ao usuário:
//    salário
//    renda extra
//    gastos fixos
//    gastos variáveis
//
// b) Crie um objeto "financeiro".
//
// c) Crie arrays:
//    receitas
//    despesas
//
// d) Calcule:
//    rendaTotal
//    gastoTotal
//    saldoFinal
//
// Fórmulas:
// rendaTotal = salario + rendaExtra
// gastoTotal = gastosFixos + gastosVariaveis
// saldoFinal = rendaTotal - gastoTotal
//
// e) Exiba:
//
// "Renda total: X"
// "Gastos totais: X"
// "Saldo final: X"

// → Seu código aqui:
// const salario = lerTeclado.questionFloat(`Qual o seu salário?`)
// const rendaExtra = lerTeclado.questionFloat(`Qual a sua renda extra?`)
// const gastosFixos = lerTeclado.questionFloat(`Qual o valor dos seus gastos fixos?`)
// const gastosVariaveis = lerTeclado.questionFloat(`Qual o valor dos seus gastos variaveis ?`)
// const financeiro = {}
// const receitas = []
// const despesas = []
// const rendaTotal = salario + rendaExtra
// const gastoTotal = gastosFixos + gastosVariaveis
// const saldoFinal = rendaTotal - gastoTotal
// console.log(`Renda total : ${rendaTotal}
// Gasto total: ${gastoTotal}
// Saldo final: ${saldoFinal}`)


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 9 – Compra no mercado
// ------------------------------------------------------------
// a) Peça ao usuário o nome, preço e quantidade de 3 produtos, armazenando-os em três objetos (cada produto um objeto).
//    Use question() para o nome, questionInt() para a quantidade e questionFloat() para o preço.
// b) Crie um array "carrinho" com os 3 objetos.
// c) Calcule o total da compra.
// d) Peça ao usuário o percentual de desconto.
// e) Calcule o valor do desconto e o total com desconto.
// f) Exiba o carrinho com console.table().
// g) Exiba no console:
//    "Total sem desconto: R$ <total>"
//    "Desconto:  R$ <desconto>"
//    "Total com desconto: R$ <totalComDesconto>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:

// const produto1 = {
//     nome: lerTeclado.question(`Nome do produto 1:`),
//     preco: lerTeclado.questionFloat(`Preço do produto 1:`),
//     quantidade: lerTeclado.questionInt(`Quantidade do produto 1:`)
// }
// const produto2 = {
//     nome: lerTeclado.question(`Nome do produto 2:`),
//     preco: lerTeclado.questionFloat(`Preço do produto 2:`),
//     quantidade: lerTeclado.questionInt(`Quantidade do produto 2:`)
// }
// const produto3 = {
//     nome: lerTeclado.question(`Nome do produto 3:`),
//     preco: lerTeclado.questionFloat(`Preço do produto 3:`),
//     quantidade: lerTeclado.questionInt(`Quantidade do produto 3:`)
// }
// const carrinho = [produto1, produto2, produto3]
// const total = carrinho[0].preco + carrinho[1].preco + carrinho[2].preco
// const desconto = lerTeclado.questionInt(`Percentual de desconto:`)
// const valorDesconto = total * (desconto/100)
// const valorFinal = total - desconto
// console.table(carrinho)
// console.log(`Total sem desconto: R$ ${Number(total.toFixed(2))}
// Desconto:  R$ ${Number(valorDesconto.toFixed(2))}
// Total com desconto: R$ ${Number(valorFinal.toFixed(2))}`)


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 10 – Calculadora de IMC
// ------------------------------------------------------------
// IMC = peso (kg) / (altura (m) ** 2)
// a) Peça ao usuário seu nome, peso em kg e altura em metros.
// b) Calcule o IMC usando a fórmula acima.
// c) Crie um objeto "resultado" com as propriedades:
//    nome, peso, altura e imc (use toFixed(2) no imc).
// d) Exiba o objeto com console.table().
// e) Exiba no console:
//    "Olá, <nome>! Seu IMC é: <imc>"

// → Seu código aqui:
// const nome = lerTeclado.question(`Nome:`)
// const peso = lerTeclado.question(`Peso(kg):`)
// const altura = lerTeclado.question(`Altura(m):`)
// const imc = (Number(peso / altura ** 2).toFixed(2))
// const resultado = {
//     nome,
//     peso,
//     altura,
//     imc
// }
// console.table(resultado)
// console.log(`Ola, ${resultado.nome}! Seu IMC é: ${resultado.imc}`)


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 11 – Custo de viagem
// ------------------------------------------------------------
// a) Peça ao usuário:
//    - A distância total da viagem em km.
//    - O consumo médio do carro em km/litro.
//    - O preço do combustível por litro.
//    - Quantas pessoas vão dividir o custo.
// b) Calcule a quantidade de litros necessários:
//    litros = distancia / consumo
// c) Calcule o custo total: custoTotal = litros * precoCombustivel
// d) Calcule o custo por pessoa: custoPorPessoa = custoTotal / numPessoas
// e) Exiba no console:
//    "Distância:          <distancia> km"
//    "Litros necessários: <litros> L"
//    "Custo total:        R$ <custoTotal>"
//    "Custo por pessoa:   R$ <custoPorPessoa>"

// → Seu código aqui:
// const distTotal = lerTeclado.questionInt(`Distância total(km):`)
// const consMedio = lerTeclado.questionInt(`Consumo médio do carro(km/litro):`)
// const precoCombustivel = lerTeclado.questionInt(`Preço do Combustível:`)
// const dividir = lerTeclado.questionInt(`Quantas pessoas vão dividir a viagem?`)
// const litrosNecessarios = distTotal / consMedio
// const custoTotal = litrosNecessarios * precoCombustivel
// const custoPorPessoa = custoTotal / dividir
// console.log(`Distância: ${distTotal} km
// Litros necessários: ${litrosNecessarios} L
// Custo total: R$ ${custoTotal}
// Custo por pessoa: R$ ${custoPorPessoa}`)

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 12 – Contracheque
// ------------------------------------------------------------
// a) Peça ao usuário:
//    - O nome do funcionário.
//    - O salário bruto.
//    - O percentual de desconto do INSS.
//    - O percentual de desconto do IR.
// b) Calcule:
//    - Desconto do INSS: salarioBruto * (inss / 100)
//    - Desconto do IR:   salarioBruto * (ir / 100)
//    - Salário líquido:  salarioBruto - descontoINSS - descontoIR
// c) Crie um objeto "contracheque" com todas as informações.
// d) Exiba o objeto com console.table().
// e) Exiba no console uma mensagem com template literal resumindo o contracheque.

// → Seu código aqui:
// const nome = lerTeclado.question(`Nome do funcionário:`)
// const salarioBruto = lerTeclado.question(`Salário do funcionário:`)
// const inss = lerTeclado.question(`Desconto do INSS:`)
// const ir = lerTeclado.question(`Desconto do IR:`)
// const descontoINSS = Number(salarioBruto * (inss / 100).toFixed(2))
// const descontoIR = Number(salarioBruto * (ir / 100).toFixed(2))
// const salarioLiquido = salarioBruto - descontoINSS - descontoIR
// const contraCheque = {
//     nome,
//     salarioBruto,
//     inss,
//     ir,
//     descontoINSS,
//     descontoIR,
//     salarioLiquido
// }
// console.table(contraCheque)
// console.log(`
// Nome: ${nome},
// Salário Bruto: R$ ${salarioBruto},
// % INSS: ${inss}%,
// % IR: ${ir}%,
// Desconto INSS: R$ ${descontoINSS},
// Desconto IR: R$ ${descontoIR},
// Salário Líquido: R$ ${salarioLiquido}
// `)

console.log("_______________________________");