const cadastroUsuario = {
    nome: "Juninho Junior",

    idade: 32,

    email: "juninhojunior717@email.com"
}
cadastroUsuario.nome = "FranciscoFrancis"
console.log(cadastroUsuario)
console.log(`Idade do Usuário: ${cadastroUsuario.idade}`)

const senhas = {
    senha1: 23452,
    senha2: 53451,
    senha3: 01212
}
const infos = [cadastroUsuario, senhas]
console.log(infos)
console.log("========================================================")
infos.pop()
console.log(infos)
console.log("========================================================")
infos.push(cadastroUsuario)
console.log(infos)