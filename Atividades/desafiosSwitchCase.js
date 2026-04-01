// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================
let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------
// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00
//
// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00
//
// a) Pergunte ao usuário:
//    - Nome pessoal.
//    - Número do prato desejado.
//    - Número da bebida desejada.
// b) Com switch/case, determine o prato e o preço do prato,
//    e outro switch para a bebida e seu preço.
//    Para opções inválidas, exiba "Item inválido." e use preço 0.
// c) Armazene os dados em um objeto "pedido":
//    nomeCliente, nomePrato, precoPrato, nomeBebida, precoBebida, total.
// d) Pergunte se vai pagar no pix (keyInYN()).
//    Se sim, aplique 10% de desconto no total.
//    Atualize o total no objeto.
// e) Exiba o objeto com console.table().
// f) Exiba o recibo final com template literal.

// → Seu código aqui:

// const cardapio = {
//     FrangoGrelhado: 32.00,
//     FileAoMolho: 45.00,
//     MassaItaliana: 28.00,
//     SaladaCaesar: 22.00,
//     SopaDoDia: 18.00
// }
// const bebidas = {
//     SucoNatural: 9.00,
//     Refrigerante: 7.00,
//     Agua: 4.0,
//     SemBebida: 0.00
// }
// const nomeCliente = lerTeclado.question(`Qual o seu nome?`)
// console.log(`================== CARDAPIO ==================
// 1 – Frango Grelhado  R$ 32,00
// 2 – Filé ao Molho    R$ 45,00
// 3 – Massa Italiana   R$ 28,00
// 4 – Salada Caesar    R$ 22,00
// 5 – Sopa do Dia      R$ 18,00
// `)
// const prato = lerTeclado.questionInt(`Qual o prato que voce deseja?`)
// console.log(`
// ================== BEBIDAS ==================
// 1 – Suco Natural     R$ 9,00
// 2 – Refrigerante     R$ 7,00
// 3 – Água             R$ 4,00
// 4 – Sem bebida       R$ 0,00
// =============================================
// `)
// const bebida = lerTeclado.questionInt(`Qual a bebida que voce deseja?`)

// let pedido = {
//     nomeCliente: nomeCliente,
//     nomePrato: "",
//     precoPrato: 0,
//     nomeBebida: "",
//     precoBebida: 0,
//     total: 0
// }
// switch(prato) {
//     case 1:
//         pedido.nomePrato = "Frango Grelhado"
//         pedido.precoPrato += cardapio.FrangoGrelhado
//         break
//     case 2:
//         pedido.nomePrato = "File ao Molho"
//         pedido.precoPrato += cardapio.FileAoMolho
//         break
//     case 3:
//         pedido.nomePrato = "Massa Italiana"
//         pedido.precoPrato += cardapio.MassaItaliana
//         break
//     case 4:
//         pedido.nomePrato = "Salada Caesar"
//         pedido.precoPrato += cardapio.SaladaCaesar
//         break
//     case 5:
//         pedido.nomePrato = "Sopa do Dia"
//         pedido.precoPrato += cardapio.SopaDoDia
//         break
//     default:
//         console.log(`Item invalido`)
// }
// switch(bebida) {
//     case 1:
//     pedido.nomeBebida = "Suco Natural"
//     pedido.precoBebida += bebidas.SucoNatural
//     break
// case 2:
//     pedido.nomeBebida = "Refrigerante"
//     pedido.precoBebida += bebidas.Refrigerante
//     break
// case 3:
//     pedido.nomeBebida = "Agua"
//     pedido.precoBebida += bebidas.Agua
//     break
// case 4:
//     pedido.nomeBebida = "Sem bebida"
//     pedido.precoBebida += bebidas.SemBebida
//     break
// default:
//     console.log(`Item invalido`)
// }
// pedido.total = Number((pedido.precoPrato + pedido.precoBebida).toFixed(2))
// const pix = lerTeclado.keyInYN(`Voce vai pagar no PIX????`)
// if(pix) {
//     pedido.total -= pedido.total * 0.9
// }
// console.table(pedido)
// console.log(`================= RECIBO ==================
// ${pedido.nomePrato} - R$ ${pedido.precoPrato}
// ${pedido.nomeBebida} - R$ ${pedido.precoBebida}
// Total = R$ ${Number((pedido.total).toFixed(2))}
// ============================================`)

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - O valor a converter (questionFloat()).
//    - O tipo de conversão (questionInt()):
//      1 – Km para Milhas
//      2 – Milhas para Km
//      3 – Celsius para Fahrenheit
//      4 – Fahrenheit para Celsius
//      5 – Kg para Libras
//      6 – Libras para Kg
// b) Com switch/case, aplique a fórmula correta:
//    - Km → Milhas:         valor * 0.621371
//    - Milhas → Km:         valor * 1.60934
//    - Celsius → Fahrenheit: (valor * 9/5) + 32
//    - Fahrenheit → Celsius: (valor - 32) * 5/9
//    - Kg → Libras:         valor * 2.20462
//    - Libras → Kg:         valor / 2.20462
//    - default: "Tipo de conversão inválido."
// c) Armazene a conversão em um objeto:
//    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// d) Exiba o objeto com console.table().
// e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// → Seu código aqui:
// let valor = lerTeclado.questionFloat(`Qual o valor que voce quer converter?`)
// console.log(`
// 1 – Km para Milhas
// 2 – Milhas para Km
// 3 – Celsius para Fahrenheit
// 4 – Fahrenheit para Celsius
// 5 – Kg para Libras
// 6 – Libras para Kg`)
// let conversao = lerTeclado.questionInt(`Qual o tipo de conversao?`)
// let conversaoObj = {
//     tipo: "",
//     valorOriginal: valor,
//     unidadeOriginal: "",
//     resultado: undefined,
//     unidadeResultado: ""
// } 
// switch(conversao) {
//     case 1:
//         conversaoObj.tipo ="Km → Milhas"
//         conversaoObj.unidadeOriginal = "Km"
//         conversaoObj.resultado = valor * 0.621371
//         conversaoObj.unidadeResultado = "Milhas" 
//         break
//     case 2:
//         conversaoObj.tipo ="Milhas → Km"
//         conversaoObj.unidadeOriginal = "Milhas"
//         conversaoObj.resultado = valor * 1.60934
//         conversaoObj.unidadeResultado = "Km" 
//         break
//     case 3:
//         conversaoObj.tipo ="Celsius → Fahrenheit"
//         conversaoObj.unidadeOriginal = "Celsius"
//         conversaoObj.resultado = (valor * 9/5) + 32
//         conversaoObj.unidadeResultado = "Fahrenheit" 
//         break
//     case 4:
//         conversaoObj.tipo ="Fahrenheit → Celsius"
//         conversaoObj.unidadeOriginal = "Fahrenheit"
//         conversaoObj.resultado = (valor - 32) * 5/9
//         conversaoObj.unidadeResultado = "Celsius" 
//         break
//     case 5:
//         conversaoObj.tipo ="Kg → Libras"
//         conversaoObj.unidadeOriginal = "Kg"
//         conversaoObj.resultado = valor * 2.20462
//         conversaoObj.unidadeResultado = "Libras" 
//         break
//     case 6:
//         conversaoObj.tipo ="Libras → Kg"
//         conversaoObj.unidadeOriginal = "Libras"
//         conversaoObj.resultado = valor / 2.20462
//         conversaoObj.unidadeResultado = "Kg" 
//         break
//     default:
//         console.log(`Tipo de conversao invalida.`)
// }

// console.table(conversaoObj)
// console.log(`${conversaoObj.valorOriginal} ${conversaoObj.unidadeOriginal} = ${Number((conversaoObj.resultado).toFixed(2))} ${conversaoObj.unidadeResultado}`)


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de pedra, papel e tesoura
// ------------------------------------------------------------
// a) Gere a jogada do computador aleatoriamente:
//    const jogada = ["pedra", "papel", "tesoura"];
//    const computador = jogada[Math.floor(Math.random() * 3)];
// b) Pergunte ao usuário sua jogada - questionInt():
//    1 – Pedra | 2 – Papel | 3 – Tesoura
//    Para opções inválidas, exiba "Jogada inválida." e encerre.
// c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// d) Determine o vencedor ou empate com switch/case aninhado ou combinando
//    switch com if/else
// e) Exiba o resultado final.

// → Seu código aqui:
// const jogada = ["pedra", "papel", "tesoura"];
// const computador = jogada[Math.floor(Math.random() * 3)];
// console.log(` 1 – Pedra | 2 – Papel | 3 – Tesoura`)
// const suaJogada = lerTeclado.questionInt(`Qual a sua jogada?`)
// let nomeJogada = ""
// switch(suaJogada) {
//     case 1:
//         nomeJogada = "pedra"
//         break
//     case 2:
//         nomeJogada = "papel"
//         break
//     case 3:
//         nomeJogada = "tesoura"
//         break
//     default:
//         console.log(`Jogada invalida`)
//         process.exit()
// }
// console.log(`Você: ${nomeJogada} | Computador: ${computador}`)
// switch(suaJogada) {
//     case 1:
//         if(computador === "papel") {
//             console.log(`Voce perdeu. Papel amassa a pedra.`)
//         }else if(computador === "tesoura") {
//             console.log(`Voce ganhou. Pedra quebra a tesoura.`)
//         }else {
//             console.log(`O jogo empatou. Pedra contra pedra.`)
//         }
//         break
//     case 2:
//         if(computador === "tesoura") {
//             console.log(`Voce perdeu. Tesoura corta o papel.`)
//         }else if(computador === "pedra") {
//             console.log(`Voce ganhou. Papel amassa a pedra.`)
//         }else {
//             console.log(`O jogo empatou. Papel contra papel.`)
//         }
//         break
//     case 3:
//         if(computador === "pedra") {
//             console.log(`Voce perdeu. Pedra quebra a tesoura.`)
//         }else if(computador === "papel") {
//             console.log(`Voce ganhou. Tesoura corta o papel.`)
//         }else {
//             console.log(`O jogo empatou. Tesoura contra Tesoura.`)
//         }
//         break
// }

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Sistema de suporte técnico
// ------------------------------------------------------------
// Um sistema de atendimento automatizado funciona por menus.
//
// Menu principal (questionInt()):
//   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
//
// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece
//
// Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
//   1 – Sem sinal
//   2 – Imagem ruim
//   3 – Canais sumidos
//
// Para cada sub-opção, exiba uma mensagem de orientação específica.
// Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// Para a opção 0, exiba "Atendimento encerrado."
// No default, exiba "Opção inválida."
//
// a) Implemente o fluxo acima usando switch/case no menu principal
//    e switch/case nos sub-menus, com if/else se necessário.
// b) Exiba todas as mensagens com template literal.

// → Seu código aqui:
console.log(`1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar`)
const menu = lerTeclado.questionInt(`O voce deseja fazer nesse atendimento?`)
let submenu1
let submenu2
switch(menu) {
    case 1:
        console.log(`
        1 – Sem conexão
        2 – Conexão lenta
        3 – Wi-Fi não aparece
        `)
        submenu1 = lerTeclado.questionInt(`Insira uma das operacoes acima que voce gostaria de fazer.`)
        break
    case 2:
        console.log(`
        1 – Sem sinal
        2 – Imagem ruim
        3 – Canais sumidos
        `)
        submenu2 = lerTeclado.questionInt(`Insira uma das operacoes acima que voce gostaria de fazer.`)
        break
    case 3:
    case 4:
        console.log(`Por favor, aguarde na linha.`)
        break
    case 0: 
        console.log(`Atendimento encerrado.`)
        break
    default:
        console.log(`Digito invalido.`)
}
switch(submenu1) {
    case 1:
        console.log(`Entendo. Vamos verificar por que você está offline. Por favor, certifique-se de que os cabos do seu modem estão bem conectados enquanto localizo seu sinal`)
        break
    case 2:
        console.log(`Sinto muito pela lentidão. Vou realizar um teste de estabilidade na sua linha para identificarmos o que está afetando a sua velocidade de navegação.`)
        break
    case 3:
        console.log(`Certo. Se a rede sumiu dos seus dispositivos, pode ser uma configuração do roteador. Vou reiniciar o sinal de transmissão daqui para tentarmos restabelecer a rede.`)
        break
    default:
        console.log(`Digito invalido.`)
}
switch(submenu2) {
    case 1:
        console.log(`Entendo. Isso geralmente indica um problema de recepção física. Por favor, verifique se o cabo da antena ou do receptor está firme enquanto eu verifico a transmissão na sua região.`)
        break
    case 2:
        console.log(`Lamento pela qualidade da imagem. Pode ser uma interferência no sinal ou ajuste de resolução. Vou enviar um comando de atualização para o seu receptor agora mesmo.`)
        break
    case 3:
        console.log(`Certo. Se alguns canais desapareceram, pode ser necessário atualizar sua grade de programação. Vou sincronizar seu pacote de canais novamente para que eles retornem à lista.`)
        break
    default:
        console.log(`Digito invalido.`)
}

// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece


console.log("_______________________________");