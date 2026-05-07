// ============================================================
//   JOGO: Batalha por Turnos
// ============================================================
//
// Um herói enfrenta uma sequência de 3 inimigos em batalhas por turnos.
// A cada turno, herói e inimigo atacam um ao outro simultaneamente.
// O combate continua até que um dos dois chegue a 0 ou menos de HP (pontos de vida).
//
// REGRAS:
//   - O herói começa com 100 HP.
//   - Cada inimigo é um objeto com HP, dano mínimo e dano máximo definidos em um array de inimigos.
//   - A cada turno, o herói escolhe uma ação:
//       1 – Atacar → causa dano aleatório entre seu dano mínimo e máximo
//       2 – Defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//       3 – Curar → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo deve ter por turno:
//     70% de chance de atacar → causa dano aleatório entre seu dano mínimo e máximo
//     20% de chance de defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//     10% de chance de curar  → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo ataca sempre com dano aleatório entre seu dano mínimo e dano máximo.
//   - O ataque tanto do jogador quando do inimigo devem ser realizados simultaneamente.
//   - Há uma chance de 5% do ataque (de ambos) ser um golpe crítico, causando o dobro de dano.
//     Caso isso corra, exiba que foi um dado crítico.
//   - Se o herói vencer, recupera 25 HP (sem ultrapassar 100).
//   - Se o herói perder, o jogo termina.
//
// AO FINAL DE CADA BATALHA:
//   - Exiba o resultado e a vida atual do herói.
//   - Se o herói vencer as 3 batalhas, exiba o resultado final.
//
// Após o desenvolvimento das regras base acima descritas, 
//   sinta-se livre para implementar melhorias e adicionar novos recursos.
//   - Exemplos de mecânicas adicionais:
//      - 2 tipos de armas para o herói, uma possuindo maior dano, mas possui menor precisão e a outra o inverso.
//      - Inimigos gerados aleatoriamente com atributos variados, aumentando exponencialmente a dificuldade.
//      - Sistema de níveis para o herói, permitindo que ele ganhe experiência e aumente suas habilidades.
//      - Itens e equipamentos que podem ser encontrados ou comprados (derrotar inimigos concede ouro), oferecendo bônus e habilidades especiais.
//      - Eventos aleatórios que podem ocorrer durante as batalhas, como a intervenção de aliados ou armadilhas no campo de batalha.
//
// ============================================================
let lerTeclado = require("readline-sync");
// ============================================================
// HERÓI (não altere a estrutura — altere os valores se quiser)
// ============================================================

const heroi = {
  nome: "", // Deve ser preenchido pelo jogador
  hpAtual: 100,
  hpMax: 100,
  danoMin: 15,
  danoMax: 25
};

// ============================================================
// INIMIGOS (não altere a estrutura — altere os valores se quiser)
// Remova o inimigo da lista se ele for derrotado
// ============================================================

const inimigos = [
  { 
    nome: "Goblin",
    hpTotal: 30 ,
    hp: 30,
    danoMin: 6,
    danoMax: 12
  },
  { 
    nome: "Orc Guerreiro",
    hpTotal: 50 ,
    hp: 50,
    danoMin: 10,
    danoMax: 18
  },
  { 
    nome: "Dragão Negro",
    hpTotal: 80 ,
    hp: 80,
    danoMin: 15,
    danoMax: 25
  }
];


// ============================================================
// INÍCIO DO JOGO
// ============================================================

console.log("╔══════════════════════════╗");
console.log("║   BEM VINDO(A) AO ....   ║");
console.log("╚══════════════════════════╝");

// Peça o nome do herói e exiba as regras do jogo resumidamente.
// → Seu código aqui:

do { // nome do herói
  heroi.nome = lerTeclado.question(`Como voce deseja ser chamado?
  Digite aqui: `)
}while( heroi.nome === "" )

console.log("╔════════════╗");
console.log("║   REGRAS   ║");
console.log("╚════════════╝");
console.log(" O seu heroi possuiu o objetivo de derrotar todos os 3 inimigos, sendo eles : Goblin, Orc Negro e Dragão Negro.\nA cada rodada voce e se inimigo tomam uma ação ao mesmo tempo, podendo atacar, defender e curar(uma vez por batalha).")

console.log("_______________________________");

// ============================================================
// LOOP DE BATALHAS
// ============================================================

console.log("╔════════════════════════════╗");
console.log("║    VAMOS AS BATATALHAS!    ║");
console.log("╚════════════════════════════╝");

// → Seu código aqui:
let decisaoHeroi = null
let decisaoInimigo = null
let curaInimigo = null
let curaHeroi = null
let danoHeroi = null
let danoInimigo = null
let qntCuraInimigo = 1
let qntCuraHeroi = 1

while (inimigos.length !== 0) {
  console.log(`Inimigo Atual: ${inimigos[0].nome}
    Vida Total: ${inimigos[0].hpTotal}`)
  while(inimigos[0].hp >= 0 || heroi.hpAtual >= 0) {
    danoHeroi = Math.floor(Math.random() * (heroi.danoMax + heroi.danoMin));
    danoInimigo = Math.floor(Math.random() * (inimigos[0].danoMax + inimigos[0].danoMin));
    curaInimigo = Math.floor(Math.random() * (20 + 10));
    curaHeroi = Math.floor(Math.random() * (20 + 10));
    decisaoInimigo =  Math.floor(Math.random() * (10 + 1));
    decisaoHeroi = lerTeclado.questionInt(`Qual acao voce toma?
    1 - Atacar | 2 - Defender | 3 - Curar `)

    if (decisaoInimigo <= 1) { // CURA DO INIMIGO
      if (qntCuraInimigo !== 0){
        if(decisaoHeroi === 3) { 
          inimigos[0].hp += curaInimigo
          qntCuraInimigo --
          inimigos[0].hp -= danoInimigo
          console.log(`O inimigo se curou enquanto voce atacava.`)
        }
        if (inimigos[0].hp >= 100) {
          inimigos[0].hp = 100  
          console.log(`O inimigo curou ${curaInimigo} de vida.`)
        }
      }
    }else if (decisaoInimigo <= 3) { // DEFESA DO INIMIGO
      if(decisaoHeroi === 1) {
        inimigos[0].hp -= Math.floor(danoHeroi / 4)
        console.log(`O inimigo defendeu seu ataque recebendo ${ Math.floor(danoHeroi / 4)} de dano.`)
        continue
      }else if (decisaoHeroi === 2) {
        console.log(`Voces se encaram esperando o movimento um do outro.`)
        continue
      }else {
        console.log(`O inimigo escolheu se defender.`)
      }
    }else { // ATAQUE DO INIMIGO
      if (decisaoHeroi === 2) {
        heroi.hpAtual -= Math.floor(danoInimigo / 4)
        console.log(`O inimigo te atacou enquanto voce se defendia, voce recebeu ${Math.floor(danoInimigo / 4)}`)
        continue
      }else {
        heroi.hpAtual -= danoInimigo
        console.log(`O inimigo te atacou causando ${danoInimigo} de dano.`)
      }
    }

    switch(decisaoHeroi) {
      case 1: 
        inimigos[0].hp -= danoHeroi
        console.log(`Voce atacou o inimigo causando ${danoHeroi} de dano.`)
        break
      case 3: 
        if (qntCuraHeroi !== 0){ 
        heroi.hpAtual += curaHeroi
        qntCuraHeroi --

        if (heroi.hpAtual >= 100) {
          heroi.hpAtual = 100  
          console.log(`Voce curou ${curaHeroi} de vida.`)
        }
        break        
      }
      default:
        console.log(`Erro nos cálculos de batalha`)
    }
    console.log(`Vida do Heroi: ${heroi.hpAtual}
    Vida do Inimigo: ${inimigos[0].hp}`)
  }
  if(inimigos[0].hp <= 0 && heroi.hpAtual <= 0) {
    console.log(`Voce morreu junto ao ${inimigos[0].nome}. Sua jornada acaba aqui.`)
  }else if(inimigos[0].hp <= 0) {
    console.log(`Voce derrotou o ${inimigos[0].nome}.`)
    inimigos.shift()
  }else if(heroi.hp <= 0) {
    console.log(`Voce foi derrotado por ${inimigos[0].nome}`)
  }
}

    
  
  



console.log("_______________________________");

// ============================================================
// RESULTADO FINAL
// ============================================================
//
// PASSO 5 – Após o for de batalhas:
//
//   a) Se heroi.hp > 0 (venceu todas as batalhas):
//        Exiba:
//        "══════════════════════════════"
//        "VOCÊ VENCEU O JOGO!"
//        "<heroi.nome> sobreviveu a todas as batalhas!"
//        "HP final: <heroi.hp>/<heroi.hpMax>"
//        "══════════════════════════════"
//
//   b) Se heroi.hp <= 0 (foi derrotado):
//        Exiba:
//        "══════════════════════════════"
//        "GAME OVER"
//        "<heroi.nome> caiu em batalha contra o <nome do inimigo>"
//        "══════════════════════════════"

// → Seu código aqui: