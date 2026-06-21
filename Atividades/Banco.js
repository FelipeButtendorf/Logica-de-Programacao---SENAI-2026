let rs = require("readline-sync");
let usuarios = []
let opcao = null
const taxas = {}
let contaUsuario = null
let tentativasDeSenha = 3
let acessoConcedido = false

function criarUsuarioBase() {
    usuarios.push(
        {
            conta: "123",
            limites: {
                saque: 10000,
                deposito: 10000,
                pix: 3000
            },
            tipo: {
                credito: true,
                debito: true
            },
            infoPessoais: {
                nome: "Felipe",
                sobrenome: "Buttendorf Dama",
                nomeCompleto: "Felipe Buttendorf Dama",
                dataNascimento: new Date('2008-02-22'),
                dadosResponsavel: {
                nomeCompleto: null,
                telefone: null,
                enderecoCompleto: {
                    cep: null,
                    estado: null,
                    cidade: null,
                    bairro: null,
                    rua: null,
                    numero: null,
                    complemento: null,
                },
                parentalidade: null
                },
                dependentes: null,
                email: "felipecodebreaker@email.com",
                telefone: "(47) 91234-5678",
                enderecoCompleto: {
                    cep: "89.266-342",
                    pais: "Brasil",
                    estado: "Santa Catarina",
                    cidade: "Jaraguá do Sul",
                    bairro: "Três Rios do Norte",
                    rua: "Adelino da Silva",
                    numero: "31",
                    complemento: null
                },
                cpf: "11101001101",
                cnpj: null
            },
            saldo: 2000,
            bonus: {},
            logado: true,
            senha: "0352",
            investimentos: {
                rendaFixa: false,
                rendaVariavel: false
            },
            histórico: {},
            bloqueada: false
        }
    )
}

function exibirMenuInicial() {
    console.clear
    console.log("=====================================")
    console.log("    BEM-VINDO AO BANCO DO BOSTIL")
    console.log("=====================================")
    console.log("1 - Acessar Conta")
    console.log("2 - Criar Conta")
    console.log("0 - Sair")
    console.log("=====================================")
}

function validarEscolha(numMin, numMax, valorEscolhido){
    if(valorEscolhido < numMin || valorEscolhido > numMax) return true
    return false
}

function escolhaDeValor(numMin, numMax){
    opcao = rs.questionInt(`
    Digite a opcao desejada : `)
    while(validarEscolha(numMin, numMax, opcao)){
        console.log("\nValor invalido, tente novamente");
        opcao = rs.questionInt("Opcao: ")
    }
    return opcao
}

function criarConta() {
    criarUsuarioBase()
    console.clear()
    console.log(`
    Usuario ${usuarios[usuarios.length-1].infoPessoais.nomeCompleto} Cadastrado!\n`)
}

function acessarOpcaoInicial(escolha) {
    switch(escolha) {
        case 1:
            acessarConta()
            break
        case 2:
            criarConta()
            break
        case 0:
            console.log(`Saindo...`)
            break
    }
}

function pedirConta() {
    console.clear()
    let pedirConta = rs.question(`Digite o numero da sua conta : `)
    return pedirConta
}

function verificarConta(numeroConta) {
    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].conta === numeroConta) {
            contaUsuario = usuarios[i]
            return console.log(`Conta encontrada!`)
        }
    }
    return console.log(`Conta inválida! Verifique se os digitos estão corretos e tente novamente.`)
}

function contaBloqueada(usuario) { 
    if(contaUsuario.bloqueada) {
        console.log(`Esta conta está bloqueada no momento, tente novamente.`)
        return true
    }
    return false
}

function pedirSenha() {
    let pedirSenha = rs.question(`Digite a senha da sua conta : `)
    return pedirSenha
}

function verificarSenha(senha) {
    if(contaUsuario.senha === senha) {
        acessoConcedido = true
        return console.log(`Olá ${contaUsuario.infoPessoais.nomeCompleto}. Acessando conta...`)
    }
    tentativasDeSenha --
    return console.log(`Senha incorreta!${tentativasDeSenha} tentativas restantes.`)
}   
function acessarConta() {
    do{
        do{
            verificarConta(pedirConta())
        }while(contaUsuario === null)
    }while(contaBloqueada(contaUsuario))
    do{
        verificarSenha(pedirSenha())
    }while(!acessoConcedido && tentativasDeSenha > 0)
}

function acessarOpcaoPrincipal(escolha) {
    switch(escolha) {
        case 1:
            sacar()
            break
        case 2:
            depositar()
            break
        case 0:
            console.log(`Saindo...`)
            break
    }
}

function exibirMenuPrincipal() {
    console.log("=====================================")
    console.log("    BEM-VINDO AO BANCO DO BOSTIL")
    console.log("=====================================")
    console.log(`Olá ${contaUsuario.infoPessoais.nome}`)
    console.log(`Saldo disponível: R$ ${(contaUsuario.saldo).toFixed(2)}`)
    console.log("1 - Sacar")
    console.log("2 - Depositar")
    console.log("0 - Sair da Conta")
    console.log("=====================================")
}

function iniciar() {
    do{
        let opcao = null
        exibirMenuInicial()
        acessarOpcaoInicial(escolhaDeValor(0,2))
        if(acessoConcedido) {
            exibirMenuPrincipal()
            acessarOpcaoPrincipal(escolhaDeValor(0,2))
        } 
    }while(opcao !== 0)
}

iniciar()