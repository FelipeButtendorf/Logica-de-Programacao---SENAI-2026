// ============================================================
//   DESAFIOS (para quem já terminou a atividade 07) – If / Else
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================
let lerTeclado = require("readline-sync");

// ------------------------------------------------------------
// DESAFIO 1 – Classificador de IMC
// ------------------------------------------------------------
// Já realizamos um exercício similar, mas agora vamos aprimorar e exibir somente o resultado final.
// a) Pergunte ao usuário seu nome, peso (kg) e altura (m).
// b) Armazene os dados em um objeto "pessoa".
// c) Calcule o IMC: peso / (altura ** 2). Adicione ao objeto.
// d) Classifique o IMC usando if/else if/else e adicione a classificação ao objeto:
//    - IMC < 18.5          → "Abaixo do peso"
//    - IMC >= 18.5 e < 25  → "Peso normal"
//    - IMC >= 25 e < 30    → "Sobrepeso"
//    - IMC >= 30 e < 35    → "Obesidade grau I"
//    - IMC >= 35 e < 40    → "Obesidade grau II"
//    - IMC >= 40           → "Obesidade grau III"
// e) Exiba o objeto com console.table().
// f) Exiba uma mensagem final:
//    "<nome>, seu IMC é <imc> – <classificação>."

// → Seu código aqui:
// const nome = lerTeclado.question(`Qual o seu nome?`)
// const peso = lerTeclado.questionFloat(`Qual o seu peso(kg)?`)
// const altura = lerTeclado.questionFloat(`Qual a sua altura(m)?`)
// let pessoa = {
//     nome,
//     peso,
//     altura
// }
// let imc = peso / (altura ** 2)
// imc = Number(imc.toFixed(2))
// pessoa = {
//     nome,
//     peso,
//     altura,
//     imc
// }
// let classificacao
// if(imc < 18.5) {
//     classificacao = "Abaixo do peso"
// }else if(imc >= 18.5 && imc < 25) {
//     classificacao = "Peso normal"
// }else if(imc >= 25 && imc < 30) {
//     classificacao = "Sobrepeso"
// }else if(imc >= 30 && imc < 35) {
//     classificacao = "Obesidade grau I"
// }else if(imc >= 35 && imc < 40) {
//     classificacao = "Obesidade grau II"
// }else if(imc >= 40) {
//     classificacao = "Obesidade grau III"
// }
// pessoa = {
//     nome,
//     peso,
//     altura,
//     imc,
//     classificacao
// }
// console.table(pessoa)
// console.log(`${pessoa.nome} seu IMC é ${pessoa.imc} - ${classificacao} `)

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 2 – Caixa eletrônico
// ------------------------------------------------------------
// a) Defina um objeto "conta" com:
//    - titular: "Maria"
//    - saldo: 1500
//    - bloqueada: false
//    - senha: 1234
// b) Peça ao usuário:
//    - Senha de 4 dígitos.
// c) Verifique se a senha está correta.
//    - Se estiver incorreta → "Senha incorreta. Operação cancelada."
//    - Se estive correta, pergunte ao usuário se deseja sacar ou depositar um valor
// d) Se ele escolher sacar, pergunte qual valor que deseja sacar.
//    Se ele escolher depositar, pergunte qual valor que deseja depositar.
// e) Se for saque, usando if/else if/else (aninhado se necessário), verifique:
//    1. Se a conta está bloqueada → "Conta bloqueada. Procure uma agência."
//    2. Se o valor do saque for menor ou igual a 0 → "Valor inválido."
//    3. Se o saldo for insuficiente → "Saldo insuficiente. Saldo atual: R$ <saldo>"
//    4. Caso contrário → realize o saque, atualize o saldo e exiba:
//       "Saque de R$ <valor> realizado. Novo saldo: R$ <saldo>"
// f) Se for depósito, usando if/else if/else (aninhado se necessário), verifique:
//    1. Se a conta está bloqueada → "Conta bloqueada. Procure uma agência."
//    2. Se o valor do depósito for menor ou igual a 0 → "Valor inválido."
//    3. Caso contrário → realize o depósito, atualize o saldo e exiba:
//       "Depósito de R$ <valor> realizado. Novo saldo: R$ <saldo>"
// Evite repetir linhas de código.
// Verifique se é possível fazer verificações uma única vez, alterando a lógica ao invés de duplicar código.

// → Seu código aqui:
// let conta = {
//   titular: "Maria",
//   saldo: 1500,
//   bloqueado: false,
//   senha: 1234
// };
// let sacarOuDep;
// const senhaUsuario = lerTeclado.questionInt(`Digite uma senha de 4 digitos:`);
// if (senhaUsuario !== conta.senha) {
//   console.log("INFO: Senha incorreta. Operação cancelada.");
//   process.exit();
// } else if (senhaUsuario === conta.senha) {
//   sacarOuDep = lerTeclado.questionInt(`Voce deseja sacar ou depositar(digite o número correspondente)?
//     Saque - 1 | Deposito - 2
//     `);
// }
// if (sacarOuDep !== 1 && sacarOuDep !== 2) {
//   console.log(
//     "ERRO: O número digitado nao corresponde a nenhuma operacao. Coloque a sua senha e tente novamente"
//   );
//   process.exit();
// }
// const contaBloqueada = "Conta bloqueada. Procure uma agência.";
// const valorInvalido = "Valor invalido";
// let valorSaque;
// if (sacarOuDep === 1) {
//   valorSaque = lerTeclado.questionFloat(`Qual valor voce gostaria de sacar?`);
//   if (conta.bloqueada) {
//     console.log(contaBloqueada);
//   } else if (valorSaque <= 0) {
//     console.log(valorInvalido);
//   } else if (conta.saldo < valorSaque) {
//     console.log(`Saldo insuficiente. Saldo atual: R$ ${conta.saldo}`);
//   } else {
//     conta.saldo -= valorSaque;
//     console.log(
//       `Saque de R$ ${valorSaque} realizado. Novo saldo: R$ ${conta.saldo}`
//     );
//   }
// }
// let valorDep;
// if (sacarOuDep === 2) {
//   valorDep = lerTeclado.questionFloat(`Qual valor voce gostaria de depositar?`);
//   if (conta.bloqueada) {
//   console.log(contaBloqueada);
// } else if (valorDep <= 0) {
//   console.log(valorInvalido);
// } else {
//   conta.saldo += valorDep;
//   console.log(
//     `Depósito de R$ ${valorDep} realizado. Novo saldo: R$ ${conta.saldo}`
//   );
// }
// }

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 3 – Classificação de filmes por faixa etária
// ------------------------------------------------------------
// Classificação indicativa:
//   - Livre          → todas as idades
//   - 10 anos        → 10 anos ou mais
//   - 12 anos        → 12 anos ou mais
//   - 14 anos        → 14 anos ou mais
//   - 16 anos        → 16 anos ou mais
//   - 18 anos        → 18 anos ou mais
//
// a) Pergunte ao usuário:
//    - Nome do espectador.
//    - Idade do espectador.
//    - Classificação do filme escolhido:
//      0 – Livre | 10 – 10 anos | 12 – 12 anos |
//      14 – 14 anos | 16 – 16 anos | 18 – 18 anos
// b) Armazene os dados em um objeto "cinema".
// c) Usando if/else if/else, verifique se o espectador pode assistir ao filme:
//    - Se a classificação for 0 (Livre) → sempre pode.
//    - Nos demais casos, compare a idade com a classificação.
// d) Exiba o resultado:
//    - Pode assistir → "<nome> pode assistir. Boa sessão!"
//    - Não pode → "<nome> não pode assistir. Classificação: <classificação> anos."

// → Seu código aqui:
// const nome = lerTeclado.question(`Nome do espectador:`)
// const idade = lerTeclado.questionInt(`Idade do espectador:`)
// const classificacao = lerTeclado.questionInt(`   - Classificacao do filme escolhido:
// 0 - Livre | 10 - 10 anos | 12 - 12 anos |
// 14 - 14 anos | 16 - 16 anos | 18 - 18 anos`)

// const cinema = {
//     nome,
//     idade,
//     classificacao
// }
// const liberado =  `${cinema.nome}, pode assistir. Boa sessão!`
// const negado = `${cinema.nome} não pode assistir. Classificação: ${classificacao} anos.`
// if(classificacao !== 0 && classificacao !== 10 && classificacao !== 12 && classificacao !== 14 && classificacao !== 16 && classificacao !== 18) {
//     console.log("Número inválido. Por favor, recadastre suas informaçoes e tente novamente.")
//     process.exit()
// }else if(classificacao === 0) {
//     console.log(liberado)
// }else if(classificacao === 10) {
//     if(cinema.idade >= classificacao) {
//         console.log(liberado)
//     }else {
//         console.log(negado)
//     }   
// }else if(classificacao === 12) {
//     if(cinema.idade >= classificacao) {
//         console.log(liberado)
//     }else {
//         console.log(negado)
//     } 
// }else if(classificacao === 14) {
//     if(cinema.idade >= classificacao) {
//         console.log(liberado)
//     }else {
//         console.log(negado)
//     } 
// }else if(classificacao === 16) {
//     if(cinema.idade >= classificacao) {
//         console.log(liberado)
//     }else {
//         console.log(negado)
//     } 
// }else if(classificacao === 18) {
//     if(cinema.idade >= classificacao) {
//         console.log(liberado)
//     }else {
//         console.log(negado)
//     } 
// }

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 4 – Simulador de pedido de lanche
// ------------------------------------------------------------
// Cardápio:
//   1 – X-Burguer R$ 22,00
//   2 – X-Frango  R$ 20,00
//   3 – X-Veggie  R$ 18,00
//   4 – Combo (lanche + batata + refri)  R$ 35,00
//
// Adicionais (só para os itens 1, 2 e 3):
//   - Batata frita: + R$ 8,00
//   - Refrigerante: + R$ 5,00

// a) Pergunte ao usuário:
//    - Nome.
//    - Número do lanche desejado.
//    - Se o lanche não for o Combo:
//        - Quer batata frita?
//        - Quer refrigerante?
// b) Armazene todos os dados e o total calculado em um objeto "pedido".
// c) Calcule o total com base nas escolhas.
// d) Exiba o objeto "pedido" com console.table().
// e) Exiba o resumo final com template literal:
//    "Pedido de <nome>: <lanche> + adicionais = R$ <total>"

// → Seu código aqui:
console.log(`Cardápio:
1 – X-Burguer R$ 22,00
2 – X-Frango  R$ 20,00
3 – X-Veggie  R$ 18,00
4 – Combo (lanche + batata + refri)  R$ 35,00

Adicionais (só para os itens 1, 2 e 3):
  - Batata frita: + R$ 8,00
  - Refrigerante: + R$ 5,00
`)
// let precoTotal = 0
// const pedido1 = 22
// const pedido2 = 20
// const pedido3 = 18
// const pedido4 = 35
// let adicional1  
// let adicional2
// let precoAd1 = 8
// let precoAd2 = 5
// const nome = lerTeclado.question(`Qual o seu nome?`)
// const numeroPedido = lerTeclado.questionInt(`Qual o numero do lanche desejado?`)
// if(numeroPedido !== 1 && numeroPedido !== 2 && numeroPedido !== 3 && numeroPedido !== 4) {
//     console.log(`Número do pedido invalido.Por favor, verifique novamento se o numero que voce digitou está relacionado com um lache existente`)
//     process.exit()
// }else if(numeroPedido !== 4) {
//     adicional1 = lerTeclado.keyInYN(`Quer batata frita?`) 
//     adicional2 = lerTeclado.keyInYN(`Quer refrigerante?`)
// }
// let pedido = {
//     nome,
//     numeroPedido,
//     adicional1,
//     adicional2
// }
// if(pedido.numeroPedido === 1) {
//     precoTotal += pedido1
// }else if(pedido.numeroPedido === 2) {
//     precoTotal += pedido2
// }else if(pedido.numeroPedido === 3) {
//     precoTotal += pedido3
// }
// if(pedido.adicional1) {
//     precoTotal += precoAd1
// }
// if(pedido.adicional2) {
//     precoTotal += precoAd2
// }
// if(pedido.numeroPedido === 4) {
//     precoTotal += pedido4
// }
// let lanche
// if(numeroPedido === 1) {
//     lanche = "X-Burguer"
// }else if(numeroPedido === 2) {
//     lanche = "X-Frango"
// }else if(numeroPedido === 3) {
//     lanche = "X-Veggie"
// }else if(numeroPedido === 4) {
//     lanche = "Combo"
// }    
// console.table(pedido)
// console.log(`Pedido de ${pedido.nome}: ${lanche} + adicionais = R$ ${precoTotal}`)

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 5 – Simulador de semáforo inteligente
// ------------------------------------------------------------
// Um semáforo funciona assim:
//   - Verde  → siga (velocidade permitida: até 60 km/h)
//   - Amarelo → atenção (reduza a velocidade)
//   - Vermelho → pare
//
// a) Pergunte ao usuário - simulando os dados captados pelo radar:
//    - Cor atual do semáforo: "verde", "amarelo" ou "vermelho".
//    - Velocidade atual do veículo em km/h.
// b) Usando if/else if/else, avalie a situação:
//    - "verde" e velocidade menor ou igual que 60 → "Tudo certo. Pode seguir."
//    - "verde" e velocidade maior que 60 → "Atenção: acima do limite no sinal verde."
//    - "amarelo" → "Reduza a velocidade e prepare-se para parar."
//    - "vermelho" e velocidade maior que 0 → "PARE! Você avançou o sinal vermelho."
//    - "vermelho" e velocidade igual a 0 → "Correto. Aguarde o sinal abrir."
//    - qualquer outra cor → "Cor de semáforo inválida."
// c) Exiba o resultado com template literal.

// → Seu código aqui:

let cor = lerTeclado.questionInt(`Qual a cor atual do semaforo?
1 - Verde | 2 - Amarelo | 3 - Vermelho`)
let cor = lerTeclado.questionInt(`Qual a velocidade atual do veículo(km/h)?`)



// b) Usando if/else if/else, avalie a situação:
//    - "verde" e velocidade menor ou igual que 60 → "Tudo certo. Pode seguir."
//    - "verde" e velocidade maior que 60 → "Atenção: acima do limite no sinal verde."
//    - "amarelo" → "Reduza a velocidade e prepare-se para parar."
//    - "vermelho" e velocidade maior que 0 → "PARE! Você avançou o sinal vermelho."
//    - "vermelho" e velocidade igual a 0 → "Correto. Aguarde o sinal abrir."
//    - qualquer outra cor → "Cor de semáforo inválida."
console.log("_______________________________");
