// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
let lerTeclado = require("readline-sync");
// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:

let nome = lerTeclado.question(`Para comecar precisamos saber qual o seu nome(ou apelido)?`)
let jogador = {
    nome
}
console.log(`
============================================================================
             Olá ${jogador.nome}, seja bem vindo ao Show do Milhão!.
============================================================================
                      DESCRICAO DO JOGO:
 Esse é um  jogo no qual você receberá 5 perguntas de temas gerais,
cada pergunta contendo 4 alternativas. Seu objetivo é acertar o máximo de
perguntas possíveis para acumular pontos. Ao final do quiz você poderá comprar
alguns items com os pontos que voce acumulou na jogada.
============================================================================
                       REGRAS BÁSICAS:
1 - Cada pergunta tera um tema junto ao enunciado. Ex:
"Pergunta 1.(FILMES E SERIES)
 Qual é o ator principal..."
2 - Todas as perguntas terão 4 alternativas, sendo apenas 
uma delas a correta.
3 - Voce nao tera segundas chances de respostas na jogada,
ou seja, a alternativa que voce escolher sera definitiva,
e voce recebera pontos de acordo com nivel de precisao da
sua resposta.
============================================================================
                    BOA SORTE E BOM JOGO!
============================================================================
`)
jogador.pontos = 0
console.log(`Agora que voce ja conheco o jogo e as suas regras ja podemos comecar.)
========================================
1 - Sim | 2 - Nao, deixa pra outra hora.
========================================
`)
const start = lerTeclado.questionInt(`Podemos iniciar o quiz?`)
switch(start) {
    case 1:
    console.log(`Tudo bem, vamos começar o nosso quiz.
    Aqui vai a primeira pergunta.`)
    break
    case 2:
        console.log(`Okay, deixa pra outra hora então.`)
        process.exit()
        break
    default:
        console.log(`O número que você digitou não é uma opção válida.`)
}
console.log(`
============================================================================
Pergunta 1.(FILMES E SERIES)
============================================================================
`)











}
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."

