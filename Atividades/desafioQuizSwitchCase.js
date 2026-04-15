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
let pontos5 =
  "Perfeito! Você é um expert! Você recebeu 5 pontos pela sua resposta";
let pontos3 =
  "Bom trabalho, mas pode melhorar. Você recebeu 3 pontos pela sua resposta";
let pontos2 = "Nheee! Você recebeu 2 pontos pela sua resposta";
let pontos1 = "VIX, tente novamente! Você recebeu 1 pontos pela sua resposta";
let nome = lerTeclado.question(`Para comecar precisamos saber qual o seu nome(ou apelido)?
Digite sua resposta:`);
if (nome === "") {
  console.log(
    "O espaço para nome está vazio. Por favor coloque carácteres válidos e tente novamente"
  );
  process.exit();
}
if (/\d/.test(nome)) {
  console.log(
    "O espaço para nome está preenchido com caracteres inválidos. Por favor coloque carácteres válidos e tente novamente"
  );
  process.exit();
}
let jogador = {
  nome
};
jogador.pontos = 0;
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
`);
console.log(
  `Agora que voce ja conheco o jogo e as suas regras ja podemos comecar.`
);

const start = lerTeclado.questionInt(`Podemos iniciar o quiz?
========================================
1 - Sim! | 2 - Nao, deixa pra outra hora.
========================================
Deseja iniciar o quiz?
Digite sua resposta:`);
switch (start) {
  case 1:
    console.log(`Tudo bem, vamos começar o nosso quiz.`);
    break;
  case 2:
    console.log(`Okay, deixa pra outra hora então.`);
    process.exit();
    break;
  default:
    console.log(`O número que você digitou não é uma opção válida.`);
    process.exit();
}
console.log(`============================================================================
Perfeito! Aqui vai a primeira pergunta do quiz:
============================================================================
Pergunta 1.(FILMES E SERIES)
============================================================================
Qual é o diretor do filme Titanic(1997)?

1) Steven Spielberg
2) James Cameron
3) Ridley Scott
4) Peter Jackson
============================================================================
`);
let resp1 = lerTeclado.questionInt(`Qual das alternativas acima é a correta?
Digite sua resposta:`);
switch (resp1) {
  case 1:
    console.log(`${pontos3}`);
    jogador.pontos += 3;
    break;
  case 2:
    console.log(`${pontos5}`);
    jogador.pontos += 5;
    break;
  case 3:
    console.log(`${pontos1}`);
    jogador.pontos += 1;
    break;
  case 4:
    console.log(`${pontos2}`);
    jogador.pontos += 2;
    break;
  default:
    console.log(
      `Número inválido pois não é uma opção válida. Tente novamente.`
    );
    process.exit();
}
console.log(`O total de pontos que você tem acumulado é: ${jogador.pontos}
============================================================================`);
console.log(`Pronto para a próxima pergunta?
==============================================================================================
1 - Sim! | Qualquer outro dígito - Não, quero encerrar o quiz por aqui.
`);
let startperg2 = lerTeclado.questionInt(`Digite sua resposta aqui:`);
switch (startperg2) {
  case 1:
    console.log(`================================
        Aqui vai a segunda pergunta do quiz:`);
    break;
  default:
    console.log(`Okay, deixa pra outra hora então.`);
    process.exit();
}
console.log(`==============================================================================================
Pergunta 2.(JOGOS ELETRÔNICOS)
============================================================================
Qual jogo é conhecido por ter personagens chamados “Champions” e partidas em equipe de 5 contra 5?

1) League of Legends
2) Valorant
3) Overwatch
4) Free Fire
============================================================================`);
let resp2 = lerTeclado.questionInt(`Qual das alternativas acima é a correta?
Digite sua resposta:`);
switch (resp2) {
  case 1:
    console.log(`${pontos5}`);
    jogador.pontos += 5;
    break;
  case 2:
    console.log(`${pontos3}`);
    jogador.pontos += 3;
    break;
  case 3:
    console.log(`${pontos2}`);
    jogador.pontos += 2;
    break;
  case 4:
    console.log(`${pontos1}`);
    jogador.pontos += 1;
    break;
  default:
    console.log(
      `Número inválido pois não é uma opção válida. Tente novamente.`
    );
    process.exit();
}
console.log(`O total de pontos que você tem acumulado é: ${jogador.pontos}
============================================================================`);
console.log(`Pronto para a próxima pergunta?
==============================================================================================
1 - Sim! | Qualquer outro dígito - Não, quero encerrar o quiz por aqui.
`);
let startperg3 = lerTeclado.questionInt(`Digite sua resposta aqui:`);
switch (startperg3) {
  case 1:
    console.log(`================================
        Aqui vai a terceira pergunta do quiz:`);
    break;
  default:
    console.log(`Okay, deixa pra outra hora então.`);
    process.exit();
}
console.log(`==============================================================================================
Pergunta 3.(GEOGRAFIA)
============================================================================
Qual é o maior país do mundo em extensão territorial?

1) Canadá
2) China
3) Rússia
4) Estados Unidos
============================================================================`);
let resp3 = lerTeclado.questionInt(`Qual das alternativas acima é a correta?
Digite sua resposta:`);
switch (resp3) {
  case 1:
    console.log(`${pontos3}`);
    jogador.pontos += 3;
    break;
  case 2:
    console.log(`${pontos2}`);
    jogador.pontos += 2;
    break;
  case 3:
    console.log(`${pontos5}`);
    jogador.pontos += 5;
    break;
  case 4:
    console.log(`${pontos1}`);
    jogador.pontos += 1;
    break;
  default:
    console.log(
      `Número inválido pois não é uma opção válida. Tente novamente.`
    );
    process.exit();
}
console.log(`O total de pontos que você tem acumulado é: ${jogador.pontos}
============================================================================`);
console.log(`Pronto para a próxima pergunta?
==============================================================================================
1 - Sim! | Qualquer outro dígito - Não, quero encerrar o quiz por aqui.
`);
let startperg4 = lerTeclado.questionInt(`Digite sua resposta aqui:`);
switch (startperg4) {
  case 1:
    console.log(`================================
        Aqui vai a quarta pergunta do quiz:`);
    break;
  default:
    console.log(`Okay, deixa pra outra hora então.`);
    process.exit();
}
console.log(`==============================================================================================
Pergunta 4.(MATEMÁTICA)
============================================================================
Qual das equações representa a fórmula de Bhaskara para resolver equações do 2º grau?

1) x = -b ± √(b² - 4ac) / 2a
2) x = b² - 4ac / 2a
3) x = -b² ± √(4ac) / 2a
4) x = (b ± √(b² + 4ac)) / 2a
============================================================================`);
let resp4 = lerTeclado.questionInt(`Qual das alternativas acima é a correta?
Digite sua resposta:`);
switch (resp4) {
  case 1:
    console.log(`${pontos5}`);
    jogador.pontos += 5;
    break;
  case 2:
    console.log(`${pontos2}`);
    jogador.pontos += 2;
    break;
  case 3:
    console.log(`${pontos1}`);
    jogador.pontos += 1;
    break;
  case 4:
    console.log(`${pontos3}`);
    jogador.pontos += 3;
    break;
  default:
    console.log(
      `Número inválido pois não é uma opção válida. Tente novamente.`
    );
    process.exit();
}
console.log(`O total de pontos que você tem acumulado é: ${jogador.pontos}
============================================================================`);
console.log(`Pronto para a próxima pergunta?
==============================================================================================
1 - Sim! | Qualquer outro dígito - Não, quero encerrar o quiz por aqui.
`);
let startperg5 = lerTeclado.questionInt(`Digite sua resposta aqui:`);
switch (startperg5) {
  case 1:
    console.log(`================================
        Aqui vai a quinta pergunta do quiz:`);
    break;
  default:
    console.log(`Okay, deixa pra outra hora então.`);
    process.exit();
}
console.log(`==============================================================================================
Pergunta 5.(BIOLOGIA)
============================================================================
Qual é a principal função da clorofila nas plantas?

1) Absorver água do solo.
2) Proteger contra pragas
3) Transportar seiva
4)Produzir alimento por fotossíntese
============================================================================`);
let resp5 = lerTeclado.questionInt(`Qual das alternativas acima é a correta?
Digite sua resposta:`);
switch (resp5) {
  case 1:
    console.log(`${pontos2}`);
    jogador.pontos += 2;
    break;
  case 2:
    console.log(`${pontos1}`);
    jogador.pontos += 1;
    break;
  case 3:
    console.log(`${pontos3}`);
    jogador.pontos += 3;
    break;
  case 4:
    console.log(`${pontos5}`);
    jogador.pontos += 5;
    break;
  default:
    console.log(
      `Número inválido pois não é uma opção válida. Tente novamente.`
    );
    process.exit();
}
let corr1 = null;
let corr2 = null;
let corr3 = null;
let corr4 = null;
let corr5 = null;
if (resp1 === 2) {
  corr1 = "Acertou!";
} else {
  corr1 = "Errou";
}
if (resp2 === 1) {
  corr2 = "Acertou!";
} else {
  corr2 = "Errou";
}
if (resp3 === 3) {
  corr3 = "Acertou!";
} else {
  corr3 = "Errou";
}
if (resp4 === 1) {
  corr4 = "Acertou!";
} else {
  corr4 = "Errou";
}
if (resp5 === 4) {
  corr5 = "Acertou";
} else {
  corr5 = "Errou";
}
console.log(`Parabéns, você acabou de responder a última pergunta do quiz.
Aqui estão os resultados da sua jogada:
=====================================================
Jogador: ${jogador.nome}
Respostas: { Pergunta 1: ${corr1}
             Pergunta 2: ${corr2}
             Pergunta 3: ${corr3}
             Pergunta 4: ${corr4}
             Pergunta 5: ${corr5}}
Pontuação total: ${jogador.pontos}
=====================================================`)
let shrek = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣄⠀⠀⠀⡠⠂⠉⠉⠉⠐⢄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⠯⣢⣀⣞⠷⢶⣄⠀⠀⠀⠀⢡⠀⠀⢀⣤⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡟⠾⣽⣿⢿⡷⠤⣴⣾⡟⠣⡰⠿⠟⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣘⢠⣄⣀⣩⣹⡀⠀⠈⢛⠚⠐⠄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢷⢻⣿⢥⣉⠙⠛⠶⠒⠊⠳⣄⠰⠀⠀⠀⠀
⠀⠀⠀⠀⢀⠄⠂⠙⢿⣿⣿⣞⣀⣟⠓⣕⡫⠁⠒⡒⠒⠈⠁⣸⣦⣀⣀⡀
⠀⠀⠀⡰⠙⠀⠀⠀⠀⢻⣿⣿⣷⡏⠀⠸⠴⠖⠊⠁⢄⠀⣠⣿⣿⠟⠉⠉
⠀⠀⢠⠁⠀⠀⠀⠀⠀⢸⣿⣿⡯⠀⠀⠀⠀⠀⠀⠈⠁⢾⣿⣿⡏⠀⠀⠀
⠀⠀⣘⠀⠀⠀⠀⠀⣠⣾⠿⠛⡗⠀⠀⠀⠀⠀⠀⠀⠐⣿⣿⣿⡡⠀⠀⠀
⠀⢀⠃⠀⠀⠀⠀⠀⠀⠁⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣯⠅⠀⠀
⢀⠜⠀⠀⠀⠀⠀⠀⠀⠀⢀⡄⢣⠀⠀⠀⠀⢀⣀⣠⡤⠿⠟⠿⠟⠒⠂⠄`
let escopeta = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠚⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⡈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠋⣠⠾⡍⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣞⠙⢦⡈⠑⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⢁⡤⠚⢁⠴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢄⡉⠳⣄⠙⠦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠊⣁⡴⠋⣠⠜⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠢⡈⠑⢤⡈⠳⣄⠀⠀⠀⠀⠀⣀⠴⠋⣠⠞⢁⡤⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠲⢄⠙⢦⣈⠙⢦⣀⣠⠞⢁⡤⠚⣁⠔⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢦⡈⢳⡴⠋⣁⡴⠋⡠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠟⠉⣠⠞⢁⡴⠻⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠞⢁⡴⠊⣡⠾⢏⡙⢦⣀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⡿⢳⡴⢋⡠⠚⠁⠀⠀⠙⢦⡈⠳⣄⠈⣳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣞⡭⢊⡽⠀⣹⠏⠀⠀⠀⠀⠀⠀⠀⠈⠲⣬⡿⢙⡿⡓⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⡴⠛⠁⠻⠗⢋⡤⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠦⣈⠳⢌⣲⡝⠦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⢙⢟⣧⡀⢀⣠⣾⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⢄⡉⠁⠀⠈⢳⣦⣤⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣾⠃⣽⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣦⣤⡴⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⡠⢽⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠟⢧⠘⠛⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⡴⢫⣿⠟⣿⣸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⣶⣷⣤⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⢞⠔⡱⠁⢻⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣧⣽⢿⢮⠳⡄⠀⠀⠀⠀
⠀⠀⠀⡴⢣⠎⢠⠁⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡇⠈⢇⠱⡝⣆⠀⠀⠀
⠀⢀⠞⣥⠏⠀⡄⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡀⠸⡀⠘⡌⢣⡀⠀
⣠⠋⡜⢠⡰⢰⠁⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⠀⢣⠀⢰⠣⡙⣄
⠙⢦⣙⠈⢡⠃⢰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠈⢆⠼⢀⡇⢈
⠀⠀⠈⠙⠒⠤⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣆⠈⣀⡬⠖⠉
`
let goku = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢶⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⡀⠀⠀⠀⢸⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠺⣿⣿⣿⣿⣿⣿⣿⣷⣦⣀⠈⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣤⣤⣤⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢶⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣿⣿⣿⣿⡿⠋⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⡟⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣟⡀⠀⣿⣿⣿⢫⣿⣿⡿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣥⣤⣶⣶⡶⠆
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⢤⣤⣤⣿⣿⣿⣿⣟⢻⡄⣿⣿⠁⣼⡿⠋⠀⣼⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣿⣿⢹⠀⠁⢱⠘⠇⢀⣋⣤⣤⡄⠉⢠⣿⣿⣿⣿⣿⣿⣿⠿⠛⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⠤⠤⠒⠒⠒⠚⠻⢿⡜⠀⠇⠀⠀⢀⠁⠈⢡⠀⠀⠀⠛⠉⠈⣿⣿⣿⣿⠷⠒⠀⠀⠀⠀⠀⠀⠀
⠀⡤⠴⠒⠒⠒⠒⢻⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⡇⠁⠀⣘⠀⠀⠈⠀⠠⢈⠀⠀⠀⠀⢀⡼⠿⡏⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢰⡆⠀⡀⡀⠀⠀⣸⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⢠⠁⠘⢄⠱⢶⠶⠒⠒⡒⠃⣀⣠⠔⠊⠀⢠⢃⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠻⢇⣀⣧⠃⢀⡰⠿⠿⠿⠿⠤⠤⠤⠤⠤⢤⡤⠃⠀⠀⠈⣏⠳⢶⣒⣒⡪⠝⠋⠁⠀⠀⣴⡕⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠙⠒⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢼⣤⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⣸⣻⣭⡉⡇⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠂⠀⣻⠗⠊⠉⠉⠉⠉⠒⢦⣤⣤⣤⣶⣶⡶⠿⣷⠲⢆⠇⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠀⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⢳⣀⡀⠀⠀⠀⠀⠀⠈⢯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣶⣆⠀⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⡿⡄⣀⣀⣤⣦⠄⠀⠀⠀⠀⠀⠀⡇⠈⠙⢿⡿⠋⠁⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⡿⢁⡿⡼⠀⠀⠉⠙⠒⠀⠀⠀⠀⠀⠀⣼⣄⡀⠀⠈⠁⠀⠀⠀⢀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⡿⠀⣾⣇⠙⢄⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⡁⠀⠛⠷⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⡇⠀⣿⣿⣷⣾⡷⠒⠲⠤⠴⢶⣾⣿⣤⡽⠛⠢⠤⠤⠤⠤⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠙⠻⠛⠉⠀⠀⠀⠀⠀⠘⠿⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣷⣦⣤⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠻⠿⠟⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`
let pistola = `
⠀⣤⣄⣴⣶⣿⣿⣶⣶⣦⣤⣤⣤⣶⣶⣶⣶⣶⣶⣶⣶⣾⣿⣿⣶⣀⣶⣆⣶⣦
⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
⢀⣀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⠈⠛⠛⢿⣿⣿⣿⣿⣿⠛⡟⠛⢿⡿⠛⠛⠛⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣿⣿⣿⣿⣿⣧⣀⣀⣀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣼⣿⣿⣿⣿⣿⠋⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢰⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣼⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠉⠙⠛⠿⠿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`
let emoji = `
░░░░░░░░░░▄▄█▀▀▀▀▀▀▀▀█▄▄░░░░░░░░
░░░░░░░▄▄▀▀░░░░░░░░░░░░▀▀▄▄░░░░░
░░░░░▄█▀░░░░▄▀░░░░▄░░░░░░░▀█░░░░
░░░░██▄▄████░░░░░░▀▄░░░░░░░░█▄░░
░░▄████▀███▄▀▄░░░░░░███▄▄▄▄░░█░░
░▄█████▄████░██░░░▄███▄▄░▀█▀░░█░
▄███████▀▀░█░▄█░▄███▀█████░█░░▀▄
█░█▀██▄▄▄▄█▀░█▀█▀██████▀░██▀█░░█
█░█░▀▀▀▀▀░░░█▀░█░███▀▀░░▄█▀░█░░█
█░░█▄░░░░▄▄▀░░░█░▀██▄▄▄██▀░░█▄░█
█░░░░▀█▀▀▀░░░░░░█░░▀▀▀▀░░░░▄█░░█
█░░░░░░░░░░░░░░░░▀▄░░░░░░▄█▀░░░█
░█░░░░░░░░░░░░░░░░▀▀▀▀▀▀▀▄░░░░█░
░░█░░░░░░▄▄▄▄▄▄▄░░░░░░░░░░░░░▄▀░
░░░▀▄░░░░░▀█▄░░░▀▀██▄░░░░░░░▄▀░░
░░░░░▀▄▄░░░░░▀▀▀▀▀░░░░░░░░▄▀░░░░
░░░░░░░░▀▀▄▄▄░░░░░░░░▄▄▄▀▀█░░░░░
░░░░░░░░░░▄▀▀█████▀▀▀▀░░░░██░░░░
░░░░░░░░░█░░░██░░░█▀▀▀▀▀▀▀▀█░░░░`
console.log(`Agora que você já tem pontos acumulados é hora de gastá-los
Aqui estão os itens que você pode comprar e o valor de cada um:
=====================================================
         LOJA         
==========================================
1 - Shrek = 15 pontos
2 - Goku Kid = 10 pontos
3 - Dose de cano duplo dupla = 10 pontos
4 - Pistola = 7 pontos
5 - Emoji Sad = 5 pontos
==========================================
Saldo Atual: ${jogador.pontos}
==========================================
`)
let valor1 = 15
let valor2 = 10
let valor3 = 10
let valor4 = 7
let valor5 = 5
let compra1 = lerTeclado.questionInt(`O que você gostaria de comprar(um item por vez)?
Digite sua resposta:`)
switch(compra1) {
    case 1:
        if(jogador.pontos < valor1) {
            console.log(`Saldo insuficientes.`)
            process.exit
        } else {
        jogador.pontos -= valor1
        console.log(shrek)
        }
        break
    case 2:
        if(jogador.pontos < valor2) {
            console.log(`Saldo insuficientes.`)
            process.exit
        }else {
        jogador.pontos -= valor2
        console.log(goku)
        }
        break
    case 3:
        if(jogador.pontos < valor3) {
            console.log(`Saldo insuficientes.`)
            process.exit
        }else {
        jogador.pontos -= valor3
        console.log(escopeta)
        }
        break
    case 4:
        if(jogador.pontos < valor4) {
            console.log(`Saldo insuficientes.`)
            process.exit
        }else {
        jogador.pontos -= valor4
        console.log(pistola)
        }
        break
    case 5:
        if(jogador.pontos < valor5) {
            console.log(`Saldo insuficientes.`)
            process.exit
        }else {
        jogador.pontos -= valor5
        console.log(emoji)
        }
        break
    default:
        console.log(`Digito inválido. Tente novamente`)
    process.exit  
}
