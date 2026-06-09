// ============================================================
// ATIVIDADE 15 – Funções com Parâmetros e Retornos
// ============================================================
//
// IMPORTANTE: a partir de agora, as funções devem RECEBER
// PARÂMETROS e RETORNAR valores sempre que fizer sentido.
// Evite ficar misturando console.log() dentro de funções.
//
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Função com 1 parâmetro
// ------------------------------------------------------------
// a) Crie a função 'quadrado(n)' que retorna n elevado ao quadrado.
// b) Teste com 3, 7 e 10. Exiba cada resultado.

// → Seu código aqui:
// function quadrado(n) {return n * n}
// console.log(`Quadrado de 3: ${quadrado(3)}`)
// console.log(`Quadrado de 7: ${quadrado(7)}`)
// console.log(`Quadrado de 10: ${quadrado(10)}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função com 2 parâmetros
// ------------------------------------------------------------
// a) Crie a função 'somar(a, b)' que retorna a soma de 2 numeros quaisquer (numeros passados ao chamar a função).
// b) Crie 'subtrair(a, b)', 'multiplicar(a, b)' e 'dividir(a, b)'.
//    Em dividir, retorne a string "Erro: divisão por zero" se b === 0.
// c) Teste cada uma com diversos valores e exiba os resultados.

// → Seu código aqui:
// function somar(a,b) {return a + b}
// function subtrair(a,b) {return a - b}
// function multiplicar(a,b) {return a * b}
// function dividir(a,b) {
//     if(b === 0) {
//         console.log(`Impossível dividir por zero.`)
//     }else{
//     return a / b
//     }
// }
// console.log(somar(1,2))
// console.log(subtrair(3,3))
// console.log(multiplicar(9,2))
// console.log(dividir(49,7))
// console.log(dividir(9,0))

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Funções booleanas
// ------------------------------------------------------------
// a) Crie 'ehPar(n)' que retorna true se n for par, senão false.
// b) Crie 'ehMaiorDeIdade(idade)' que retorna true se idade >= 18.
// c) Crie 'ehVogal(letra)' que retorna true se letra for vogal
//    (considere maiúsculas e minúsculas).
// d) Teste cada função e exiba os resultados.

// → Seu código aqui:
// let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
// function ehPar(n) {
//     if(n % 2 === 0) {
//         return true
//     }else{return false}
// }
// function ehMaiorDeIdade(idade) {
//     if(idade >= 18) {
//         return true
//     }else{return false}
// }
// function ehVogal(letra) {
//     if(vogais.includes(letra)) {
//         return true
//     }else{return false}
// }
// console.log(ehPar(3))
// console.log(ehPar(8))
// console.log(ehMaiorDeIdade(14))
// console.log(ehMaiorDeIdade(31))
// console.log(ehVogal("r"))
// console.log(ehVogal("I"))

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Múltiplos returns (early return)
// ------------------------------------------------------------
// a) Crie a função 'classificarIMC(imc)' que retorna:
//    - "Abaixo do peso"   se imc < 18.5
//    - "Peso normal"      se imc < 25
//    - "Sobrepeso"        se imc < 30
//    - "Obesidade"        caso contrário
// b) Crie 'calcularIMC(peso, altura)' que retorna peso / (altura * altura).
// c) Pergunte peso e altura ao usuário.
// d) Combine as duas funções e exiba:
//    "IMC: <valor> – <classificação>"

// → Seu código aqui:
// let rs = require("readline-sync"); 

// function classificarIMC(imc) {
//     if(imc < 18.5) {return "Abaixo do peso"}
//     if(imc < 25) {return "Peso normal"}
//     if(imc < 30) {return "Sobrepeso"}
//     return "Obesidade"
// }

// function calcularIMC(peso,altura) {
//     return (peso / (altura*altura)).toFixed(2)
// }

// let peso = rs.questionInt(`Qual o seu peso(Kg)? : `)
// let altura = rs.questionFloat(`Qual a sua altura(metros)? : `)
// const imc = calcularIMC(peso,altura)

// console.log(`IMC ${imc} - ${classificarIMC(imc)}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Parâmetros padrão (default)
// ------------------------------------------------------------
// a) Crie a função 'precoComDesconto(valor, desconto = 10)' que retorna
//    o valor após aplicar o desconto em PORCENTAGEM.
// b) Teste:
//    - precoComDesconto(100)     → retorno esperado: 90
//    - precoComDesconto(100, 25  → retorno esperado: 75
//    - precoComDesconto(250, 5)  → retorno esperado: 237.5
// c) Exiba cada resultado formatado com toFixed(2).

// → Seu código aqui:
// function precoComDesconto(valor, desconto = 10) {
//     return valor -= (valor / 100) * desconto
// }

// console.log(precoComDesconto(100))
// console.log(precoComDesconto(100, 25))
// console.log(precoComDesconto(250, 5))




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções que recebem vetores
// ------------------------------------------------------------
// a) Crie a função 'somarVetor(vet)' que retorna a soma dos elementos de um vetor.
// b) Crie 'mediaVetor(vet)' que retorna a média (REAPROVEITE somarVetor).
// c) Crie 'maiorDoVetor(vet)' que retorna o maior valor de um vetor.
// d) Crie 'menorDoVetor(vet)' que retorna o menor valor de um vetor.
// e) Teste com:
      numeros = [12, 7, 25, 3, 18, 9, 31, 14];

// → Seu código aqui:

// function somarVetor(vet) {
//     let somaVet = null
//     for(let i = 0;i < vet.length;i++) {
//         somaVet += vet[i]
//     }
//     return somaVet
// }
// console.log(`Soma do vetor : ${somarVetor(numeros)}`)

// function mediaVetor(vet) {return somarVetor(numeros) / vet.length}
// console.log(`Média do vetor : ${(mediaVetor(numeros)).toFixed(2)}`)

// function maiorDoVetor(vet) {
//     let maiorVet = vet[0]
//     for(let i = 1;i < vet.length;i++) {
//         if(maiorVet < vet[i]) {
//             maiorVet = vet[i]
//         }
//     }
//     return maiorVet
// }

// console.log(`Maior do vetor : ${maiorDoVetor(numeros)}`)

// function menorDoVetor(vet) {
//     let menorVet = vet[0]
//     for(let i = 1;i < vet.length;i++) {
//         if(menorVet > vet[i]) {
//             menorVet = vet[i]
//         }
//     }
//     return menorVet
// }
// console.log(`Menor do vetor : ${menorDoVetor(numeros)}`)





console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Função que retorna objeto
// ------------------------------------------------------------
// a) Crie a função 'criarAluno(nome, idade, nota)' que retorna um objeto:
//    { nome, idade, nota, situacao }
//    onde 'situacao' é "Aprovado" se nota >= 7, senão "Reprovado".
// b) A verificação de aprovação deve ser feita por uma função específica para isso.
// c) Crie 3 alunos chamando a função e exiba-os com console.table([a1, a2, a3]).

// → Seu código aqui:
// let aluno = {}
// let nome = null
// let idade = null
// let nota = null
// let situacao = null

// function aprovacao(nota) {
//     if(nota < 7) {
//         return "Reprovado"
//     }
//     return "Aprovado"
// }

// function criarAluno(nome,idade,nota) {
//     aluno = {
//         nome,
//         idade,
//         nota,
//         situacao: aprovacao(nota)
//     }
// }

// function exibirAluno() {
//     console.log(aluno)
// }

// criarAluno("Felipe",18,10)
// exibirAluno()
// criarAluno("Kuan",18,3)
// exibirAluno()
// criarAluno("Felipe Jorge",16,9.99)
// exibirAluno()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Função que retorna vetor
// ------------------------------------------------------------
// a) Crie a função 'gerarPares(inicio, fim)' que retorna um vetor
//    com todos os números PARES entre 'inicio' e 'fim' (inclusive).
// b) Teste com gerarPares(1, 20) e exiba o vetor.
// c) Crie 'filtrarMaioresQue(vet, limite)' que retorna um novo vetor
//    apenas com os elementos maiores que 'limite'.
// d) Combine: gere pares de 1 a 50 e filtre os maiores que 30.

// → Seu código aqui:
function exibirVetor(vet) {
    console.log(vet)
}
let vetor = []
let novoVetor = []
function gerarPares(inicio,fim) {
    vetor = []
    for(let i = inicio; i < (fim + 1); i++) {
        if(i % 2 === 0) {
            vetor.push(i)
        }
    }
}

function filtrarMaioresQue(vet,limite) {
    for(let i = 0;i < vet.length; i++) {
        if(vet[i] > limite) {
            novoVetor.push(vet[i])
        }
    }
}

gerarPares(1,20)
exibirVetor(vetor)
gerarPares(1,50)
exibirVetor(vetor)
filtrarMaioresQue(vetor, 30)
exibirVetor(novoVetor)


console.log("_______________________________");