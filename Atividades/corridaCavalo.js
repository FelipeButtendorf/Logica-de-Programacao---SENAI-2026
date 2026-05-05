// ============================================================
// JOGO: Corrida de Cavalos
// ============================================================
//
// Quatro cavalos correm em uma pista de 30 posições.
// A cada rodada, cada cavalo avança um número aleatório de posições (1 a 4). 
// O jogo continua com while até que algum cavalo cruze a linha de chegada (posição >= 30).
// O jogador aposta em um cavalo antes da corrida começar.
// Ao final, descobre se ganhou ou perdeu.
// Se mais de um chegar ao mesmo tempo, ambos são vencedores.
// ============================================================

let lerTeclado = require('readline-sync');

// ============================================================
// CAVALOS e PISTA (não altere)
// ============================================================

const cavalos = [
  { numero: 1, nome: "Trovão",    posicao: 0 },
  { numero: 2, nome: "Relâmpago", posicao: 0 },
  { numero: 3, nome: "Furacão",   posicao: 0 },
  { numero: 4, nome: "Meteoro",   posicao: 0 }
];

const TAMANHO_PISTA = 30;

// ============================================================
// INÍCIO DO JOGO
// ============================================================

console.log("╔══════════════════════════╗");
console.log("║    CORRIDA DE CAVALOS    ║");
console.log("╚══════════════════════════╝");

// PASSO 1 – Apresente os cavalos com console.table(cavalos).
//           Peça em qual cavalo o usuário deseja apostar.
//           Exiba: "Apostou no cavalo <numero> – <nomeCavalo>!"

// → Seu código aqui:
console.table(cavalos)
let escolha = null
do {
escolha = lerTeclado.questionInt(`Em qual cavalo voce quer apostar?
Digite aqui:`)
if(escolha !== 1 && escolha !== 2 && escolha !== 3 && escolha !== 4) {
    console.log(`Número do cavalo inválido. Por favor, tente novamente.`)
}
}while(escolha !== 1 && escolha !== 2 && escolha !== 3 && escolha !== 4)
console.log(`Apostou no cavalo ${escolha} – ${cavalos[escolha - 1].nome}!`)

console.log("_______________________________");


// ============================================================
// CORRIDA (while)
// ============================================================
//
// PASSO 2 – Use while para rodar a corrida e, a cada rodada:
//
//   a) Exiba: "════ Rodada n. <rodada> ════"
//
//   b) Realize um sorteio de 1 a 4 para cada cavalo e atribua a nova posição.
//
//   c) Verifique se algum cavalo passou da linha de chegada e se sim, indique o ou os vencedores.
//
//   d) Se não houve vendedor(es), exiba uma lista com a nova posição de cada cavalo.
//
//   e) Após cada rodada, solicite uma confirmação do jogador para continuar (keyInYN()).
//
//   Extra opcional: Ao invés de exibir uma lista com a posição do cavalo (letra d)
//      Exiba a pista em forma de barra de progresso para cada cavalo.
//   Exemplo de saída:
//
//      [1] Trovão     ████░░░░░░░░░░░░░░░░░░░░░░░░░░ 4/30
//      [2] Relâmpago  ███░░░░░░░░░░░░░░░░░░░░░░░░░░ 3/30
//
//   Dica: use "█".repeat(posicao) e "░".repeat(TAMANHO_PISTA - posicao)
//   para montar a barra, e template strings para formatar a linha.
//

// → Seu código aqui:
let ganhador = []
let posicao1 = null
let posicao2 = null
let posicao3 = null
let posicao4 = null
let rodada = 1
while(ganhador.length < 0) {
console.log( `════ Rodada ${rodada} ════`)

posicao1 = Math.floor(Math.random() * (4 + 1));// CAVALO 1
posicao1 += cavalos[0].posicao
if(posicao1 > TAMANHO_PISTA){
    posicao1 = 30
}

posicao2 = Math.floor(Math.random() * (4 + 1));// CAVALO 2
posicao2 += cavalos[1].posicao
if(posicao2 > TAMANHO_PISTA){
    posicao1 = 30
}

posicao3 = Math.floor(Math.random() * (4 + 1));// CAVALO 3
posicao3 += cavalos[2].posicao
if(posicao3 > TAMANHO_PISTA){
    posicao1 = 30
}

posicao4 = Math.floor(Math.random() * (4 + 1));// CAVALO 4
posicao4 += cavalos[3].posicao
if(posicao4 > TAMANHO_PISTA){
    posicao1 = 30
}

console.log(`[${cavalos[0].numero}] ${cavalos[0].nome}     ${"█".repeat(posicao)}${"░".repeat(TAMANHO_PISTA - posicao)} ${posicao1}/30`)
console.log(`[${cavalos[1].numero}] ${cavalos[1].nome}     ${"█".repeat(posicao)}${"░".repeat(TAMANHO_PISTA - posicao)} ${posicao2}/30`)
console.log(`[${cavalos[2].numero}] ${cavalos[2].nome}     ${"█".repeat(posicao)}${"░".repeat(TAMANHO_PISTA - posicao)} ${posicao3}/30`)
console.log(`[${cavalos[3].numero}] ${cavalos[3].nome}     ${"█".repeat(posicao)}${"░".repeat(TAMANHO_PISTA - posicao)} ${posicao4}/30`)

if(posicao1 >= TAMANHO_PISTA){// VERIFICANDO POSSIVEL GANHADOR ( CAVALO 1)
    ganhador.push(cavalos[0].nome)
}
if(posicao2 >= TAMANHO_PISTA){// VERIFICANDO POSSIVEL GANHADOR ( CAVALO 2)
    ganhador.push(cavalos[1].nome)
}
if(posicao3 >= TAMANHO_PISTA){// VERIFICANDO POSSIVEL GANHADOR ( CAVALO 3)
    ganhador.push(cavalos[2].nome)
}
if(posicao4 >= TAMANHO_PISTA){// VERIFICANDO POSSIVEL GANHADOR ( CAVALO 4)
    ganhador.push(cavalos[3].nome)
}
rodada ++
}

if(ganhador.length === 1) {// VERIFICAR SE HÁ APENAS UM GANHADOR
    console.log(`O cavalao ganhador é o ${ganhador}!`)
}else{// QUANDO HÁ MAIS DE UM GANHADOR
    console.log(`Os cavalos ganhadores são: ${ganhador}.`)
}
if(ganhador.includes(`${cavalos[escolha - 1].nome}`)) {
    console.log(`Parabéns! O cavalo que voce escolheu ganhou!`)
}else {
    console.log(`Mais sorte da próxima vez. O cavalo que voce escolheu perdeu.`)   
}//VERIFICAR SE O CAVALO QUE O USUÁRIO ESCOLHEU GANHOU

