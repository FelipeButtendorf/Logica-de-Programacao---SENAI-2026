const axios = require(`axios`)
const rs = require('readline-sync')
let jogadores = [] // ARRAY DE JOGADORES
let baralhoID = null
let cartasCompradas = []

function exibirTodasAsMaos() {
    for(let i = 0; i < jogadores.length; i++) {
        console.log(`Mao de ${jogadores[i].nome} : ${jogadores[i].mao}`)
    }
} 

function exibirMao(indiceJogador) {
    console.log(`Mao de ${jogadores[indiceJogador].nome} : ${jogadores[indiceJogador].mao}`)
} 

function exibirJogadores() {
    for(let i = 0; i < jogadores.length; i++) {
        console.log(jogadores[i].nome)
    }
}

function exibirJogador(indiceJogador) {
        console.log(jogadores[indiceJogador].nome)
}

async function criarBaralho() { // PEGA O ID DE UM BARALHO EMBARALHADO USANDO API E COLOCA NA VÁRIVEL "BaralhoID"
    try {
        const resposta = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        baralhoID = resposta.data.deck_id
    }   
    catch(error) {
        console.log(error)
    }
}

async function pegarCarta(deckID, quantidade) { // PEGA UMA CARTA DO BARALHO
    try {
        const resposta = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${quantidade}`)
        const cartasID = resposta.data.cards
        for(let i = 0; i < cartasID.length; i++) {
            cartasCompradas.push(cartasID[i].code)
        }
    }
    catch(error) {
        console.log(error)
    }
}

function adicionarMao(cartas, mao) { // ADICIONA A(S) CARTA(S) RETIRADAS DO BARALHO A MAO DE ALGUM JOGADOR
    for(let i = 0; i < cartas.length; i++) {
        mao.push(cartas[i])
    }
    cartasCompradas = []
}

function registrarJogadores() {
    let adicionar = false
    do {
        jogadores.push(
            jogador = {
                nome: rs.question(`Qual o seu nome? : `),
                mao: [],
                pontos: null
            }
        )
        if(jogadores.length === 4) {
            console.log(`Limite máximo de jogadores atingido!`)
            adicionar = false
        } else {
        adicionar = rs.keyInYN(`Gostaria de adicionar mais jogadores(Y/N)? : `)
        }
    } while (adicionar)
}

async function distribuirCartas() {
    for(let i = 0; i < jogadores.length; i++) {
        await pegarCarta(baralhoID, 2)
        adicionarMao(cartasCompradas, jogadores[i].mao)
    }  
}

async function iniciarJogo() {
    registrarJogadores()
    exibirJogadores()
    await criarBaralho()
    distribuirCartas()
    exibirTodasAsMaos()
}

iniciarJogo()
