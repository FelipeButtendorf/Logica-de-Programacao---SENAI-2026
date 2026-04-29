// ============================================================
//   JOGO: Adivinhe o Número
// ============================================================
//
// O jogo tem DOIS modos, ambos devem ser implementados:
//
//   MODO 1 – Computador pensa, você adivinha
//     O computador sorteia um número de 1 a 100.
//     O jogador tem até 7 tentativas para descobrir qual é.
//     A cada erro, o programa diz se o palpite foi alto ou baixo.
//
//   MODO 2 – Você pensa, computador adivinha
//     O jogador pensa em um número de 1 a 100 (não digita).
//     O computador tenta adivinhar usando busca binária:
//        sempre chuta o meio do intervalo restante.
//     O jogador responde: 1 = correto | 2 = muito alto | 3 = muito baixo
//     O computador deve acertar em no máximo 7 tentativas.
//
// Para números aleatórios, utilize a função Math.random() do Javascript
// ============================================================

let lerTeclado = require("readline-sync");

// ============================================================
// CONFIGURAÇÕES DO JOGO (não altere)
// ============================================================


// ============================================================
// MENU PRINCIPAL
// ============================================================

console.log("_______________________________");

// ============================================================
// MODO 1 – Computador pensa, jogador adivinha
// ============================================================
//
// Instruções para implementação do Modo 1:
//
// PASSO 1 – Gere o número secreto do computador Math.random();
// PASSO 2 – Passe as instruções do jogo.
// PASSO 3 – Use um for para as tentativas.
//  - Se acertou, exiba: "Parabéns! Você acertou em <i> tentativa(s)!", e encerre o jogo.
//  - Se o palpite for maior que o secreto, exiba: "Muito alto! Tente um número menor."
//  - Se o palpite for menor que o secreto, exiba: "Muito baixo! Tente um número maior."
//  - Ao final de cada tentativa errada, exiba quantas tentativas restam.
//  - Se o jogador NÃO acertou, exiba: "Fim de jogo! O número era <secreto>."
// PASSO 4 – Exiba um resumo:
//           "Número secreto: <secreto>"
//           "Tentativas usadas: <i>"
//           "Resultado: Vitória" ou "Resultado: Derrota"

// → Seu código do MODO 1 aqui:

// ============================================================
// MODO 2 – Jogador pensa, computador adivinha
// ============================================================
//
// Instruções para implementação do Modo 2:
//
// PASSO 1 – Instrua o jogador a digitar um número inteiro entre 1 e 100;
// PASSO 2 – Inicialize o intervalo de busca:
//           let min = NUM_MIN;
//           let max = NUM_MAX;
// PASSO 3 – Use um for para as tentativas.
//   a) Calcule o palpite do computador: meio do intervalo
//   b) Exiba: "Tentativa <i>: Meu palpite é <palpite>!"
//   c) Pergunte ao jogador o resultado com questionInt():
//        "1 – Acertei | 2 – Muito alto | 3 – Muito baixo"
//   d) De acordo com a resposta, busque pelo meio do novo intervalo.
// PASSO 4 – Se o computador acertar, exiba uma mensagem de vitória, exiba quantas tentativas o computador usou e finalize o jogo.
// PASSO 5 – Se o computador não acertar, exiba uma mensagem de derrota e o número que o jogador estava pensando.

// Implemente seu código abaixo:

let NUM_MIN = 1;
let NUM_MAX = 100;


console.log("|==============================|");
console.log("|     ADIVINHE O NÚMERO        |");
console.log("|==============================|");
console.log("|  1 – Eu adivinho o número    |");
console.log("|  2 – Computador adivinha     |");
console.log("|  3 – Sair                    |");
console.log("|==============================|");

const modo = lerTeclado.questionInt("\nEscolha o modo: ");

let tentativas = 1;

switch (modo) {
  case 1:
    const secreto = Math.floor(Math.random() * (100 + 1));
    for (let i = 0; i <= 6; i++) {
      let chute = lerTeclado.questionInt(`Chute um número:`);
      if (chute === secreto && i === 0) {
        console.log(`Parabéns! Você acertou em 1 tentativa!
            Número secreto:${secreto}, Tentativas usadas: ${tentativas}, Resultado: Vitória`);
        process.exit();
      } else if (chute === secreto) {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!
            Número secreto:${secreto}, Tentativas usadas: ${tentativas}, Resultado: Vitória`);
        process.exit();
      } else if (chute > secreto) {
        console.log(`Muito alto! Tente um número menor.`);
      } else if (chute < secreto) {
        console.log(`Muito baixo! Tente um número maior.`);
      }
      console.log(`Restam ${7 - tentativas} tentativas.`);
      tentativas++;
    }
    console.log(`Fim de jogo! O número era ${secreto}.
    Número secreto:${secreto}, Tentativas usadas: ${tentativas}, Resultado: Derrota`);
    break;
  case 2:
    let tentativasPC = 1;
    let palpite = Math.floor(Math.random() * (100 + 1));
    let N = lerTeclado.questionInt(`Digite um número entre 1 e 100.
Digite sua resposta:`);
    let min = NUM_MIN;
    let max = NUM_MAX;
    let novoPalpite = 0;
    for (let i = 0; i <= 6; i++) {
      console.log(`Tentativa ${tentativasPC}, Meu palpite é ${palpite}`);
      let verificacao = lerTeclado.questionInt(`1 – Acertei | 2 – Muito alto | 3 – Muito baixo |
  Digite sua resposta:`);
      switch (verificacao) {
        case 1:
          console.log(
            `Parabéns! O computador acertou o número que você escolheu em ${tentativasPC} tentativas`
          );
          process.exit();
          break;
        case 2:
          NUM_MAX = palpite
          palpite = Number(((palpite + NUM_MIN) / 2).toFixed());
          break;
        case 3:
          NUM_MIN = palpite
          palpite = Number(((palpite + NUM_MAX) / 2).toFixed());
          break;
        default:
          console.log("Número inválido. Saindo... ");
      }
      tentativasPC++;
    }
    console.log(`Derrota :( O computador não conseguiu acertar o seu número.)`)
    process.exit
    break;
  case 3:
    console.log("Até outra hora. Saindo... ");
    break;
  default:
    console.log("Número inválido. Saindo... ");
}
