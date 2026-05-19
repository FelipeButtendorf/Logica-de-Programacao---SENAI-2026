// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
// ============================================================

let readlineSync = require("readline-sync");
// ------------------------------------------------------------
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:

// const cadastro = {
//     nome: readlineSync.question(`Qual o seu nome?`),
//     idade: readlineSync.questionInt(`Qual a sua idade?`),
//     profissao: readlineSync.question(`Qual a sua profissao?`),
//     cidade: readlineSync.question(`Em qual cidade voce mora?`),
//     javascript : readlineSync.keyInYN(`Voce gosta de JavaScript?`),
//     comidasfavoritas: [
//         comidaFavorita1 = readlineSync.question(`Cite uma de suas comidas favoritas.`),
//         comidaFavorita2 = readlineSync.question(`Cite outra de suas comidas favoritas.`),
//         comidaFavorita3 = readlineSync.question(`Cite mais uma comida favorita.`),
//     ],
//     pessoasResidencia: [
//         pessoa1 = {
//             nome: readlineSync.question(`Cite uma pessoa que mora com voce.`),
//             idade: readlineSync.questionInt(`Qual a idade dessa pessoa?`),
//         },
//         pessoa2 = {
//             nome: readlineSync.question(`Cite outra pessoa que mora com voce.`),
//             idade: readlineSync.questionInt(`Qual a idade dessa pessoa?`),
//         }
//     ]}
// console.table(cadastro)

// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e enderecoCompleto de cada uma).
//    enderecoCompleto deve ser um objeto contendo rua, cidade e estado
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 2º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
// 'const pessoa1 = {
//   nome: readlineSync.question(`Qual o seu nome?`),
//   idade: readlineSync.questionInt(`Qual a sua idade?`),
//   endereco:{
//     cidade: readlineSync.question(`Em que cidade voce mora?`),
//     rua: readlineSync.question(`Qual o nome da sua rua?`),
//     casa: readlineSync.questionInt(`Qual o numero da sua casa?`)
//   }
// };
// const pessoa2 = {
//   nome: readlineSync.question(`Qual o seu nome?`),
//   idade: readlineSync.questionInt(`Qual a sua idade?`),
//   endereco: {
//     cidade: readlineSync.question(`Em que cidade voce mora?`),
//     rua: readlineSync.question(`Qual o nome da sua rua?`),
//     casa: readlineSync.questionInt(`Qual o numero da sua casa?`)
//   }
// };
// const amigos = [pessoa1, pessoa2];
// // console.table(amigos)
// console.table([amigos[1].endereco]);
// // Criamos um array [] contendo um objeto {} com apenas o que queremos
// console.table([{
//     nome: amigos[0].nome,
//     rua: amigos[0].endereco.rua
//   }]);'

// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:
// console.info(
//   `A seguir voce recebera um cardapio, no qual voce se baseara para fazer seu pedido.`
// );
// const pedido = {
//   entrada: "salada",
//   pratoPrincipal: "lasanha",
//   sobremesa: "pudim",
//   bebidas: {
//     bebida1: "água",
//     bebida2: "vinho"
//   }
// };
// console.table(pedido);

// console.log(`Seu pedido: Entrada: ${pedido.entrada}, Prato Principal: ${pedido.pratoPrincipal},\n
//  Sobremesa: ${pedido.sobremesa}, Bebida 1: ${pedido.bebidas.bebida1}, Bebida 2: ${pedido.bebidas.bebida2}. Bom apetite!`);

// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:
// const apelido = readlineSync.question(`Qual seu apelido?`)
// const jogoFavorito = readlineSync.question(`Qual seu jogo favorito/`)
// const horasJogadas = readlineSync.questionInt(`Quantas horas jogadas voce tem no total(aproximadamente)?`)
// const jogaEmTime = readlineSync.keyInYN(`Voce joga em time?`)
// const perfil = {
//     apelido: apelido,
//     jogoFavorito: jogoFavorito,
//     horasJogadas: horasJogadas,
//     jogaEmTime: jogaEmTime
// }
// console.table(perfil);
// console.warn("Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade.")

// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:
// const pessoa1 = {
//     nome: readlineSync.question(`Qual o seu nome?`),
//     cidadeFavorita: readlineSync.question(`Qual sua cidade favorita?`),
// }
// const pessoa2 = {
//     nome: readlineSync.question(`Qual o seu nome?`),
//     cidadeFavorita: readlineSync.question(`Qual sua cidade favorita?`),
// }
// const pessoa3 = {
//     nome: readlineSync.question(`Qual o seu nome?`),
//     cidadeFavorita: readlineSync.question(`Qual sua cidade favorita?`),
// }
// console.table(pessoa3);
// const viajantes = [pessoa1, pessoa2, pessoa3]
// console.info(viajantes.length)
// console.log(viajantes[1].cidadeFavorita)
// console.log(viajantes[0].nome)
