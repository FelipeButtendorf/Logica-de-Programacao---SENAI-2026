let readlineSync = require('readline-sync');
const usuario = readlineSync.question("Nome de usuário:")
const senha = readlineSync.questionInt("Senha:")
const verificacao = readlineSync.keyInYN("Quer acessar sua conta?")
console.log(`Usuário ${usuario} ${verificacao ? 'acessou' : 'não acessou'} a conta `)