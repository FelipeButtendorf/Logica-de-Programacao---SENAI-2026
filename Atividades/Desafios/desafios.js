// ============================================================
//   DESAFIOS (para quem já terminou as atividades 02 e 02-2) – Arrays e Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Acessar e alterar elementos de array
// ------------------------------------------------------------
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
// a) Acesse o primeiro e o terceiro elemento e exiba com console.log().
// b) Substitua o segundo elemento por 'abacaxi' usando atribuição direta.
console.log("========= EXERCÍCIO 1 =========")
// → Seu código aqui:
console.log(frutas[0])
console.log(frutas[2])
frutas[1] = "abacaxi"
console.log(frutas)


// ------------------------------------------------------------
// EXERCÍCIO 2 – Criar novos arrays por seleção
// ------------------------------------------------------------
const letras1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// a) Crie um novo array contendo apenas o primeiro, o terceiro e o sexto elementos.
// b) Crie outro array que contenha os dois últimos elementos.
// Observação: Utilize o valor de um array dentro de outro, exemplo: array2[array1[3], array[5]]

// → Seu código aqui:
console.log("========= EXERCÍCIO 2 =========")
const array2 = [letras1[0],letras1[2],letras1[5]]

console.log(array2);


// ------------------------------------------------------------
// EXERCÍCIO 3 – Batata?
// ------------------------------------------------------------
const letras2 = ['a', 'b', 'c', 'd', 'e', 't'];
// a) Crie um novo array que retorne a palavra "batata" ao ser exibido no console.
const batata = [letras2[1], letras2[0], letras2[5], letras2[0], letras2[5], letras2[0]]
console.log("========= EXERCÍCIO 3 =========")
console.log(batata);


// ------------------------------------------------------------
// EXERCÍCIO 4 – Objetos: acessar e adicionar propriedades
// ------------------------------------------------------------
console.log("========= EXERCÍCIO 4 =========")
const pessoa = { nome: 'Junin', idade: 22, cidade: 'Porto Alegre' };
// a) Acesse e exiba a propriedade 'nome' e 'cidade'.
// b) Adicione uma nova propriedade 'curso' com valor 'Programação' por atribuição direta.

// → Seu código aqui:


console.log(pessoa.nome, pessoa.cidade);
pessoa.curso = "Programação"
console.log(pessoa)


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e arrays dentro de objetos
// ------------------------------------------------------------
console.log("========= EXERCÍCIO 5 =========")
const perfil = {
  usuario: 'ana123',
  dados: { nome: 'Ana', idade: 19 },
  interesses: ['música', 'fotografia', 'viagens']
};
// a) Acesse o nome dentro de 'dados' e o segundo interesse.
// b) Altere o primeiro interesse para 'arte' por atribuição direta.

// → Seu código aqui:


console.log(perfil.dados.nome, perfil.interesses[1] );
perfil.interesses[0] = "arte"
console.log(perfil.interesses)


// ------------------------------------------------------------
// EXERCÍCIO 6 – Criar um catálogo (array de objetos e objeto indexado)
// ------------------------------------------------------------
// Crie um array 'produtos' contendo 3 produtos, onde cada produto é um objeto contendo id, nome e preço.
// Crie um objeto 'catalogo' onde as chaves são os ids dos produtos e os valores são o nome
// e os valores são os objetos de produto correspondentes (sem usar loops ou funções).
console.log("========= EXERCÍCIO 6 =========")
// → Seu código aqui:
const produtos = [
    {id: 0, nome: "bebida", preço: 5
},
    {id: 1, nome: "comida", preço: 8
},
    {id: 2, nome: "roupa", preço: 40
}
]
console.log(produtos)
const catalogo = {
    id : produtos[0].id , produto: produtos[0].nome 
}
console.log(catalogo)

// ------------------------------------------------------------
// EXERCÍCIO 7 – Estrutura composta: tarefas simples
// ------------------------------------------------------------
// Defina um array de tarefas com 3 objetos: { id, titulo, concluida(boolean) }.
// a) Marque a tarefa de id 2 como concluída por atribuição direta.
// b) Crie um novo array contendo apenas as tarefas que não estão concluídas

// → Seu código aqui:
console.log("========= EXERCÍCIO 7 =========")
const tarefas = [
    {id: 0, titulo: "Varrer casa", concluida: false},
    {id: 1, titulo: "Limpar banheiro", concluida: false},
    {id: 2, titulo: "Passar pano na casa", concluida: false}
]
console.log(tarefas)
tarefas[2].concluida = true
console.log(tarefas)
const tarefasConcluidas = [tarefas[0], tarefas[1]]
console.log(tarefasConcluidas)

