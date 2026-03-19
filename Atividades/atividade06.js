// ============================================================
//   ATIVIDADE 06 – Operadores Lógicos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-06.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================
let lerTeclado = require("readline-sync");

// ------------------------------------------------------------
// EXERCÍCIO 1 – Tabela verdade do &&
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true && true → <resultado>"
//
// Combinações:
//   a) true && true
//   b) true && false
//   c) false && true
//   d) false && false

// → Seu código aqui:

// const result1 = true && true 
// const result2 = true && false 
// const result3 = false && true 
// const result4 = false && false
// console.log(`true && true = ${result1}
// true && false = ${result2}
// false && true = ${result3}
// false && false = ${result4}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Tabela verdade do ||
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true || false → <resultado>"
//
// Combinações:
//   a) true || true
//   b) true || false
//   c) false || true
//   d) false || false

// → Seu código aqui:
// const result1 = true || true 
// const result2 = true || false 
// const result3 = false || true 
// const result4 = false || false
// console.log(`true || true = ${result1}
// true || false = ${result2}
// false || true = ${result3}
// false || false = ${result4}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
// b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
// c) Declare "lugarVago" com valor false.
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.

// → Seu código aqui:
// let sistemaAtivo = true
// let modoManutencao = !sistemaAtivo
// let lugarVago = false
// let lugarOcupado = !lugarVago
// console.log(`O sistema ${sistemaAtivo ? "está" : "não está"} ativo, por isso ele ${modoManutencao ? "está" : "não está"} em manutencao`)
// console.log(`O estacionamento ${lugarVago ? "tem" : "não tem"} um lugar vago, por isso o lugar ${lugarOcupado ? "está" : "não está"} ocupado`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Combinando && com operadores relacionais
// ------------------------------------------------------------
// a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
// b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
// c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
// c) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
// d) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
// e) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.

// → Seu código aqui:
// let peso = lerTeclado.questionFloat(`Qual o seu peso(quilogramas)?`)
// let altura = lerTeclado.questionFloat(`Qual a sua altura(metros)?`)
// let usuario = {
//     peso,
//     altura}
// let imc = Number((peso / (altura ** 2)).toFixed(2))
// usuario = {
//     peso,
//     altura,
//     imc
// }

// const imcAbaixoDoPeso = imc < 18.5
// const imcNormal = imc >=18.5 && imc <= 24.9
// const imcAcimaDoPeso = imc >= 25  && imc <= 29.9
// console.log(`Seu peso é de ${peso}kg, e sua altura é ${altura}m.
//     Seu IMC é de ${imc}, isso significa que seu IMC ${imcAbaixoDoPeso ? "está" : "não está"} abaixo do peso`)
// console.log(`Seu peso é de ${peso}kg, e sua altura é ${altura}m.
//     Seu IMC é de ${imc}, isso significa que seu IMC ${imcNormal ? "está" : "não está"} normal`)
// console.log(`Seu peso é de ${peso}kg, e sua altura é ${altura}m.
//     Seu IMC é de ${imc}, isso significa que seu IMC ${imcAcimaDoPeso ? "está" : "não está"} acima do peso`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Combinando || com operadores relacionais
// ------------------------------------------------------------
// a) Declare "notaFinal" com valor 4.8.
// b) Armazene em "precisaRecuperacao" o resultado de:
//    notaFinal >= 4 && notaFinal < 6
// c) Armazene em "reprovado" o resultado de:
//    notaFinal < 4
// d) Armazene em "precisaDeAjuda" o resultado de:
//    precisaRecuperacao || reprovado
// e) Exiba todos os resultados com template literal.

// → Seu código aqui:
// let notaFinal = 4.8
// let precisaRecuperacao = notaFinal >= 4 && notaFinal <6
// let reprovado = notaFinal < 4
// let precisaDeAjuda = precisaRecuperacao || reprovado
// console.log(`A sua nota final é ${notaFinal}, isso significa que voce ${precisaRecuperacao ? "precisa" : "não precisa"} de recuperação`)
// console.log(`A sua nota final é ${notaFinal}, isso significa que voce ${reprovado ? "está" : "não está"} reprovado`)
// console.log(`A sua nota final é ${notaFinal}, isso significa que voce ${precisaDeAjuda ? "precisa" : "não precisa"} de ajuda`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.

// → Seu código aqui:
// let temperatura = 38.2
// let diagnostico = temperatura >= 37.6 ? "Febre detectada" : "Temperatura normal"
// console.log(`A sua temperatura é de ${temperatura} C°. Diagnóstico: ${diagnostico}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário                    → "Velocidade regular"
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.

// → Seu código aqui:
// let velocidade = 110
// let limiteVelocidade = 100
// let statusMulta = velocidade > limiteVelocidade ? "Multa aplicada" : "Velocidade regular"
// console.log(`A velocidade do seu automóvel era de ${velocidade}km/h, e o limite de velocidade é ${limiteVelocidade}km/h.
// Status: ${statusMulta}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Operador ternário e questionamento
// ------------------------------------------------------------
// a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
// b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
// b) Usando o operadores ternários, armazene em "mensagem":
//    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
//    Caso contrário → "Desconto não aplicado."
// c) Exiba a variável "mensagem" com template literal.

// → Seu código aqui:
// const ehEstudante = lerTeclado.keyInYN(`Voce é bolsista?`)
// const custo = lerTeclado.keyInYN(`Voce paga mais de R$1000,00 pelo curso?`)
// const mensagem = `${ehEstudante ? "É bolsista" : "Não é bolsista"} e ${custo ? "paga" : "não paga"} mais que R$ 1000,00 mensais pelo curso: ${ehEstudante && custo ? "Desconto aplicado!" : "Desconto não aplicado"}` 
// console.log(mensagem)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Verificação de acesso com input
// ------------------------------------------------------------
// a) Peça ao usuário e armazene os dados em um objeto:
//    - Sua idade (questionInt()).
//    - Se possui ingresso (keyInYN()).
//    - Se é associado ao clube (keyInYN()).
// b) Armazene e exiba os resultados das seguintes verificações em outro objeto:
//    - "podeEntrarNormal": (idade maior ou igual a 18 e possuiIngresso) ou ehAssociado
//    - "podeEntrarSocio": possuiIngresso e ehAssociado
//    - "precisaAcompanhante": idade menor que 18
//    - "naoPodeEntrar": não possuiIngresso e não ehAssociado
// c) Exiba a mensagem final usando ternário:
//    Se podeEntrarNormal ou podeEntrarSocio → "Entrada liberada!"
//    Caso contrário → "Entrada negada."

// → Seu código aqui:
// const usuario = {
//     idade: lerTeclado.questionInt(`Qual a sua idade?`),
//     ingresso: lerTeclado.keyInYN(`Possui ingresso?`),
//     associado: lerTeclado.keyInYN(`É associado ao clube?`)
// }
// const podeEntrarNormal = usuario.idade >= 18 && usuario.ingresso || usuario.associado
// const podeEntrarSocio = usuario.ingresso && usuario.associado
// const precisaAcompanhante = usuario.idade < 18
// const naoPodeEntrar = !(usuario.ingresso && usuario.associado)
// console.log(`${podeEntrarNormal || podeEntrarSocio ? "Entrada liberada!" : "Entrega negada"}`)




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Verificação de estoque com objeto
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do produto.
//    - Quantidade em estoque.
//    - Se o produto está ativo no sistema (keyInYN()).
// b) Armazene os dados em um objeto chamado "produto".
// c) Crie as seguintes verificações booleanas:
//    - "temEstoque": quantidade maior que 0
//    - "produtoDisponivel": temEstoque e está ativo
//    - "produtoIndisponivel": não temEstoque || não está ativo
// d) Exiba os resultados com template literal.

// → Seu código aqui:
// const nome = lerTeclado.question(`Nome do produto:`)
// const quantidade = lerTeclado.questionInt(`Quantidade em estoque:`)
// const ativo = lerTeclado.keyInYN(`Ativo no Sistema?`) 
// const produto = {
//     nome,
//     quantidade,
//     ativo
// }
// const temEstoque = quantidade > 0
// const produtoDisponivel = temEstoque && ativo 
// const produtoIndisponivel = !(temEstoque && ativo) 
// console.log(`O produto ${produto.nome} está com uma quantidade de ${produto.quantidade} no estoque, e ${produto.ativo ? "está" : "não está"} atualmente ativo no sistema.
//     Produto disponivel: ${produtoDisponivel}
//     Produto Indisponivel: ${produtoIndisponivel}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Verificação de permissões
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se ele é administrador (keyInYN())
//    - Se ele está logado (keyInYN())
//    - Se a conta está ativa (keyInYN())
// b) Armazene as respostas em um objeto chamado "usuario".
// c) Crie as seguintes verificações:
//    - "acessoSistema": logado e contaAtiva
//    - "acessoAdmin": acessoSistema e ehAdmin
//    - "acessoNegado": não logado ou não contaAtiva
// d) Exiba todos os resultados.

// → Seu código aqui:
const admin = lerTeclado.keyInYN(`Voce é administrador?`)
const logado = lerTeclado.keyInYN(`Voce está logado?`)
const contaAtiva = lerTeclado.keyInYN(`A sua conta está ativa?`)
const usuario = {
    admin,
    logado,
    contaAtiva
}
const acessoSistema = usuario.logado && usuario.contaAtiva
const acessoAdmin = acessoSistema && usuario.admin
const acessoNegado = !(usuario.logado && usuario.contaAtiva)
console.log(`admin: ${usuario.admin}
    logado: ${usuario.logado}
    Conta ativa: ${usuario.contaAtiva}
    Acesso ao Sistema: ${acessoSistema}
    Acesso Admin: ${acessoAdmin}
    Acesso Negado: ${acessoNegado}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Sistema simples de login
// ------------------------------------------------------------
// a) Crie um objeto "credenciaisSistema" contendo:
//    usuario: "admin"
//    senha: "1234"
// b) Pergunte ao usuário:
//    - usuário
//    - senha
// c) Crie as verificações:
//    - "usuarioCorreto": usuarioDigitado estritamente igual a usuario
//    - "senhaCorreta": senhaDigitada estritamente igual a senha
//    - "loginValido": usuarioCorreto e senhaCorreta
// d) Usando ternário, exiba:
//    Se loginValido → "Login realizado com sucesso!"
//    Caso contrário → "Usuário ou senha incorretos."

// → Seu código aqui:


console.log("_______________________________");