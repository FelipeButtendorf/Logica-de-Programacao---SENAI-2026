
// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:
//console.log("============ EXERCICIO 1 ============")
let readlineSync = require('readline-sync');
//console.log("Iniciando o programa...")
//console.info("Fazendo a instalação dos recursos necessários...")
//console.warn("Dica: Lembre-se de sempre incicar o programa com o comando node e o nome do arquivo ")
//console.error("Não foi possível carregar os pacotes necessários pois algum(uns) dos arquivos está corrompido.\n Por favor, tente novamente após verificar a integridade dos arquivos")


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:
//console.log("============ EXERCICIO 2 ============")
//const nomeUsuario = readlineSync.question('Digite seu nome: ');
//const idadeUsuario = readlineSync.questionInt(`Digite sua idade:`)
//console.log(`Ola, ${nomeUsuario}! Você tem ${idadeUsuario} anos.`)





// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:

//console.log("============ EXERCICIO 3 ============");
//const cidadeUsuario = readlineSync.question(`Qual a cidade em que está morando atualmente?`)
//const ficha = {
//    nome : nomeUsuario,
//   idade: idadeUsuario,
//    cidade: cidadeUsuario
//}
//console.table(ficha)


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:
//console.log("============ EXERCICIO 4 ============");
//const question1 = readlineSync.keyInYN(`Você costuma práticar algum exercíio físico durante a semana?`)
//const question2 = readlineSync.keyInYN(`Está satisfeito com a sua situação atual?`)

//console.log(`Você ${question1 ? 'costuma' : 'não costuma'} práticar exercícios durante essa semana.\n Você ${question2 ? 'está' : 'não está'} satisfeito com a situação atual.`)


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:
//console.log("============ EXERCICIO 5 ============");
//const comida1 = readlineSync.question(`Me diga uma comida favorita sua :`)
//const comida2 = readlineSync.question(`Me diga outra comida favorita sua :`)
//const comida3 = readlineSync.question(`Me diga mais uma comida favorita sua :`)
//const comidasFavoritas = [ 
//    comida1 ,
//    comida2,
//   comida3
//]
//console.table(comidasFavoritas)

// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:
//console.log("============ EXERCICIO 6 ============");
//const profissaoUsuario = readlineSync.question(`Qual a sua profissão?`)
//const cadastroPessoal = {nomeUsuario, profissaoUsuario, cidadeUsuario
//}
//console.log(`Me chamo ${nomeUsuario}. Profissão: ${profissaoUsuario} e moro na cidade de: ${cidadeUsuario}.`)
//console.table(cadastroPessoal)




// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

// console.log("============ EXERCICIO 7 ============");
// const nomeUsuario1 = readlineSync.question(`Usuário 1 : Qual o seu nome?`)
// const idadeUsuario1 = readlineSync.questionInt(`Usuário 1 : Qual a sua idade?`)
// const cidade1 = readlineSync.question(`Usuário 1 : Qual a sua cidade?`)
// const rua1 = readlineSync.question(`Usuário 1 : Qual o nome da rua onde você mora?`)
// const numero1 = readlineSync.questionInt(`Usuário 1 : Qual o número da sua casa?`)

// const usuario1 = {
//     nome : nomeUsuario1,
//     idade : idadeUsuario1,
//     endereco : {
//         cidade: cidade1,
//         rua: rua1,
//         numero: numero1
//     }
// }
// const nomeUsuario2 = readlineSync.question(`Usuário 2 : Qual o seu nome?`)
// const idadeUsuario2 = readlineSync.questionInt(`Usuário 2 : Qual a sua idade?`)
// const cidade2 = readlineSync.question(`Usuário 2 : Qual a sua cidade?`)
// const rua2 = readlineSync.question(`Usuário 2 : Qual o nome da rua onde você mora?`)
// const numero2 = readlineSync.questionInt(`Usuário 2 : Qual o número da sua casa?`)

// const usuario2 = {
//     nome : nomeUsuario2,
//     idade : idadeUsuario2,
//     endereco : {
//         cidade: cidade2,
//         rua: rua2,
//         numero: numero2
//     }
// }
// const nomeUsuario3 = readlineSync.question(`Usuário 3 : Qual o seu nome?`)
// const idadeUsuario3 = readlineSync.questionInt(`Usuário 3 : Qual a sua idade?`)
// const cidade3 = readlineSync.question(`Usuário 3 : Qual a sua cidade?`)
// const rua3 = readlineSync.question(`Usuário 3 : Qual o nome da rua onde você mora?`)
// const numero3 = readlineSync.questionInt(`Usuário 3 : Qual o número da sua casa?`)

// const usuario3 = {
//     nome : nomeUsuario3,
//     idade : idadeUsuario3,
//     endereco : {
//         cidade: cidade3,
//         rua: rua3,
//         numero: numero3
//     }
// }
//const listaDeUsuarios = [usuario2]
//console.table(listaDeUsuarios)
//console.table([
//    {nome: usuario2.nome , idade: usuario2.idadeUsuario2},
//])
// console.table([
//     {endereco: usuario3.endereco}
// ])
// console.table([
//     {nome: usuario1.nome , rua: usuario1.rua}
// ])



// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:
//======= Aluno 1 ==========
const nomeAluno1 = readlineSync.question(`Nome do aluno 1:`)
const nota1Aluno1 = readlineSync.questionInt(`Nota 1 do aluno:`)
const nota2Aluno1 = readlineSync.questionInt(`Nota 2 do aluno:`)
const nota3Aluno1 = readlineSync.questionInt(`Nota 3 do aluno:`)

//============================
//======= Aluno 2 ==========
const nomeAluno2 = readlineSync.question(`Nome do aluno 2:`)
const nota1Aluno2 = readlineSync.questionInt(`Nota 1 do aluno:`)
const nota2Aluno2 = readlineSync.questionInt(`Nota 2 do aluno:`)
const nota3Aluno2 = readlineSync.questionInt(`Nota 3 do aluno:`)

//============================
//======= Aluno 3 ==========
const nomeAluno3 = readlineSync.question(`Nome do aluno 3:`)
const nota1Aluno3 = readlineSync.questionInt(`Nota 1 do aluno:`)
const nota2Aluno3 = readlineSync.questionInt(`Nota 2 do aluno:`)
const nota3Aluno3 = readlineSync.questionInt(`Nota 3 do aluno:`)

//============================

const aluno1 = {
    nome: nomeAluno1,
    notas: {
        nota1: nota1Aluno1,
        nota2: nota2Aluno1,
        nota3: nota3Aluno1
    }
}
const aluno2 = {
    nome: nomeAluno2,
    notas: {
        nota1: nota1Aluno2,
        nota2: nota2Aluno2,
        nota3: nota3Aluno2
    }
}
const aluno3 = {
    nome: nomeAluno3,
    notas: {
        nota1: nota1Aluno3,
        nota2: nota2Aluno3,
        nota3: nota3Aluno3
    }
}
const turma = [aluno1, aluno2, aluno3]
console.table(turma)
//console.table({
//   nome: aluno2.nome , nota: aluno2.notas.nota1 
//})
//console.table({
//     nome: aluno3.nome , nota: aluno3.notas.nota2
// })
// console.table({
//     nome: aluno1.nome , nota: aluno1.notas.nota3
// })
//=====


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:
const nomeP1 = readlineSync.question(`Nome do produto:`)
const categoriaP1 = readlineSync.
const infoProduto1 = {
    nome: ,
    categoria: ,
    preco: ,
    quantidade em estoque:
    
}


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.
