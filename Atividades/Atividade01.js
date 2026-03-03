// ============================================================
//   ATIVIDADE 01 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Declaração de variáveis
// ------------------------------------------------------------
// a) Declare uma variável com "var" chamada "meuNome" e atribua o seu nome.
// b) Declare uma variável com "var" chamada "naoUsarVar" e no valor, atribua a explicação de porque não é recomendado utilizar 'var'.
// c) Declare uma variável com "let" chamada "minhaIdade" e atribua a sua idade.
// d) Declare uma variável com "const" chamada "ANO_NASCIMENTO" e atribua o ano em que você nasceu.
// e) Exiba as quatro variáveis no console.

// → Seu código aqui:
var meuNome = "Felipe";
var naoUsarVar = "Var é uma forma antiga, por isso não é utilizada";
let minhaIdade = "18";
const ANO_NASCIMENTO = 2008;
console.log("----- Exercicio 1 ---------------")
console.log(`Meu nome é ${meuNome}\n ${naoUsarVar}
Minha idade é ${minhaIdade}\n Eu nasci em ${ANO_NASCIMENTO}`);

// ------------------------------------------------------------
// EXERCÍCIO 2 – Strings e template literals
// ------------------------------------------------------------
// a) Declare uma variável "cidade" com o nome da cidade onde você mora.
// b) Declare uma variável "pais" com o nome do seu país.
// c) Usando um template literal, crie a frase:
//    "Eu moro em <cidade>, no <pais>." e armazene em "fraseMoradia".
// d) Exiba "fraseMoradia" e seu tipo (typeof) no console.

// → Seu código aqui:
let cidade = "Jaraguá do Sul"
let pais = "Brasil"
let fraseMoradia = `Eu moro em ${cidade}, no ${pais}.`

console.log("----- Exercicio 2 ---------------")
console.log(fraseMoradia);

// ------------------------------------------------------------
// EXERCÍCIO 3 – Boolean
// ------------------------------------------------------------
// a) Declare "maiorDeIdade" como true se você tem 18 anos ou mais, false caso contrário.
// b) Declare "temCNH" com um valor booleano que represente se você tem carteira de motorista.
// c) Exiba as duas variáveis e seus tipos (typeof).

// → Seu código aqui:

let maiorDeIdade = true
let temCNH = false

console.log("----- Exercicio 3 ---------------")
console.log(maiorDeIdade,typeof maiorDeIdade, temCNH, typeof temCNH)

// ------------------------------------------------------------
// EXERCÍCIO 4 – Undefined e Null
// ------------------------------------------------------------
// a) Declare uma variável "apelido" sem atribuir nenhum valor.
// b) Declare uma variável "enderecoAtual" e atribua null intencionalmente.
// c) Exiba as duas variáveis e seus respectivos tipos (typeof).
// d) Explique (em um comentário) por que typeof null retorna "object".

// → Seu código aqui:
let apelido 
let enderecoAtual = null

console.log("----- Exercicio 4 ---------------")
console.log(apelido, typeof apelido, enderecoAtual, typeof enderecoAtual); // object é um regra
// da linguagem JavaScript

// ------------------------------------------------------------
// EXERCÍCIO 5 – Identificando tipos (typeof)
// ------------------------------------------------------------
// Para cada valor abaixo, use typeof e exiba o resultado no console.
// Tente adivinhar o resultado ANTES de executar!

// 42 = number
// "texto" = string
// true = boolean
// undefined = undefined
// null = object
// 3.14 = number

let variavelUm = 42
let variavelDois = "texto"
let variavelTres = true
let variavelQuatro  
let variavelCinco = null
let variavelSeis = 3.14

console.log("----- Exercicio 5 ---------------")
console.log(typeof variavelUm, typeof variavelDois, typeof variavelTres, typeof variavelQuatro, typeof variavelCinco, typeof variavelSeis)
    

// ------------------------------------------------------------
// EXERCÍCIO 6 – DESAFIO: Mini perfil
// ------------------------------------------------------------
// Usando tudo que aprendeu, crie variáveis para armazenar:
//   • nome, idade, altura (número decimal), cidade, estudandoJS (boolean)
// Em seguida, exiba no console uma mensagem completa usando template literal:
//   "Olá! Meu nome é <nome>, tenho <idade> anos, moro em <cidade>,
//    meço <altura>m e estou estudando JavaScript: <estudandoJS>."

// → Seu código aqui:

const nome = "Felipe"
let idade = 18
let altura = 1.60
let xcidade = "Jaraguá dos Sul"
let estudandoJS = true

console.log("----- Exercicio 6 ---------------")
console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos,\n moro em ${xcidade}, meço ${altura}m\n e estou estudando JavaScript: ${estudandoJS}.`)
