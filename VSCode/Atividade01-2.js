
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.
console.log("=====EXERCÍCIO 1=====")
let idade = 18  
let nome = "Felipe"
let hobbyFavorito = "jogar"
console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e eu gosto de ${hobbyFavorito}.`)


// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."
console.log("=====EXERCÍCIO 2=====")
let cidade = "Jaraguá do Sul"
let temperatura = 29

console.log(`Hoje em ${cidade} está fazendo ${temperatura}°C, perfeito para ir a praia.
`);
// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.
let flexoes = 25
let lingua = "português"
let banhoSábado = true
let senha = null
let genero 
console.log("=====EXERCÍCIO 3=====")
console.log(`Hoje eu fiz ${flexoes} flexoes.\n ${typeof flexoes}
`)
console.log(`A minha língua originaria é o ${lingua}.\n  ${typeof lingua}
`)
console.log(`Nesse sábado eu tomei banho: ${banhoSábado}.\n ${typeof banhoSábado}
`)
console.log(`A minha senha é ${senha}.\n ${typeof senha}
`)
console.log(`Eu ainda estou descobrindo meu gênero.\n ${typeof genero}
`)

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
let personagem = "Cavaleiro Amaldiçoado"
idade = 127 // alterando o valor da variável idade 
cidade = "Salem" // alterando o valor da variável cidade
let missao = "encontrar uma cura de sua maldição"
console.log("=====EXERCÍCIO 4=====")
console.log(`Era um vez uma entidade chamada de ${personagem} que vivia em ${cidade},\n essa entidade possuia ${idade} anos pois era amaldiçoada com a imortalidade.
Sua missão era ${missao}, para assim finalmente descansar.`)

// ------------------------------------------------------------
// EXERCÍCIO 5 – Desafio: Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
nome // ja possui o valor desejado
let objetivoAno = "começar a fazer acadêmia"
console.log("=====EXERCÍCIO 5=====")
console.log(`Meu nome é ${nome} e pretendo ${objetivoAno} ainda esse ano.`);
// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:

console.log(`
====================================
        SISTEMA DO USUÁRIO
====================================
2 - Editar Perfil
3 - Configurações 
4 - Notificações
5 - Relatórios
6 - Ajuda
7 - Sobre o Sistema 
0 - Sair
====================================
Digite o número da opção desejada
`)