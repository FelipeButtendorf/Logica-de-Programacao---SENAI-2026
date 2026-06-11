const palavrasForca = [
    "abacaxi",
    "janela",
    "computador",
    "montanha",
    "elefante",
    "biblioteca",
    "girassol",
    "cachorro",
    "helicoptero",
    "aventura",
    "chocolate",
    "dinossauro",
    "escola",
    "foguete",
    "camiseta",
    "relampago",
    "oceano",
    "paralelepipedo",
    "violino",
    "tempestade",
    "xadrez",
    "astronauta",
    "carrossel",
    "diamante",
    "floresta",
    "geladeira",
    "horizonte",
    "internet",
    "jardineiro",
    "labirinto",
    "mariposa",
    "navio",
    "orquestra",
    "piramide",
    "quimica",
    "radiador",
    "sanfona",
    "teatro",
    "universo",
    "vampiro",
    "whisky",
    "xerife",
    "iogurte",
    "zoologico",
    "borboleta",
    "catedral",
    "engrenagem",
    "fotografia",
    "misterio",
    "planeta"
  ];

let rs = require ('readline-sync')
let palavra = null
let forca = []
let letra = null
let palavraChute = null
let venceu = false
let resultado = null
let tentativas = 6
let letrasChutadas = []
let chutarPalavra = false
let numeros = ["2","3","4","5","6","7","8","9","0"]

function palavraAleatoria() {
    const aleatorio = Math.floor(Math.random() * ((palavrasForca.length - 1) + 1))
    palavra = palavrasForca[aleatorio]
}

function criarForca() {
    for(let i = 0; i < palavra.length ; i++) {
        forca.push("_")
    }
}

function exibirForca() {
    console.log(forca.join(" "))
}

function pedirLetra() {
    exibirForca()
    do {
    letra = rs.question(`\nChute uma letra que voce acha que contem na palavra(Digite 1 para chutar uma palavra) : \n`)
    } while(letrasChutadas.includes(letra) || letra.length > 1 || letra === "" || numeros.includes(letra))
    if(letra === "1") {
        return chutarPalavra = true    
    }
    letrasChutadas.push(letra)
}

function verificarLetra() {
    if(palavra.includes(letra)) {
        for(let i = 0; i < palavra.length; i++) {
            if(palavra[i] === letra) {
                forca[i] = letra
            }
        }
        console.log(`\nTentativas restantes: ${tentativas}`)
    }else{
        console.log(`\n${letra} não está incluido nesta palavra.`)
        tentativas --
        console.log(`\nTentativas restantes: ${tentativas}\n`)
    }
}

function pedirPalavra() {
    exibirForca()
    palavraChute = rs.question(`\nChute a palavra que voce acha ser a correta :\n`)
}

function verificarPalavra() {
    if(palavra === palavraChute) {
        venceu = true
    } else {
        console.log("Putz, não foi dessa vez.")
        tentativas --
    }
}

function verificarForca() {
    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === forca[i]) {
            venceu = true
        }else{
            venceu = false
            break
        }
    }
}

function exibirResultado() {
    if(venceu) {
        resultado = `\nParabéns, voce acertou a palavra!\nPalavra: ${palavra}\nTentativas restantes: ${tentativas}`
    }else{
        resultado = `Game over, mais sorte da proxima vez\n A palavra era ${palavra}`
    }
    console.log(resultado)
}

function iniciarJogo() {
    palavraAleatoria()
    criarForca()
    do{
        pedirLetra()
        if(chutarPalavra) {
            pedirPalavra()
            verificarPalavra()
        }else{
        verificarLetra()
        verificarForca()
        }
    }while(venceu !== true && tentativas > 0)
    exibirResultado()
}

iniciarJogo()

