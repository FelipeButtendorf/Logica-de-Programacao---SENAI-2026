let rs = require("readline-sync");
let usuarios = []
let opcao = null
const taxas = {}
let contaUsuario = null
let tentativasDeSenha = 3
let acessoConcedido = false

function criarUsuarioBase() { // USUARIO PADRAO; CONTA: 123, SENHA: 0352
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
                idade: 18,
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
            logado: false,
            senha: "0352",
            investimentos: {
                rendaFixa: null,
                rendaVariavel: null
            },
            historico: [],
            bloqueada: false
        }
    )
}

function exibirMenuInicial() { // MENU DE LOGAR E CRIAR UMA CONTA
    console.log("=====================================")
    console.log("    BEM-VINDO AO BANCO DO BOSTIL")
    console.log("=====================================")
    console.log("1 - Acessar Conta")
    console.log("2 - Criar Conta")
    console.log("0 - Sair")
    console.log("=====================================")
}

function validarEscolha(numMin, numMax, valorEscolhido){ // VALIDAR DIGITOS DO USUARIO
    if(valorEscolhido < numMin || valorEscolhido > numMax) return true
    return false
}

function escolhaDeValor(numMin, numMax){// PEDIR OPCAO DESEJADA
    opcao = rs.questionInt(`\nDigite a opcao desejada : `)
    while(validarEscolha(numMin, numMax, opcao)){
        console.log("\nValor invalido, tente novamente");
        opcao = rs.questionInt(`\nDigite a opcao desejada : `)
    }
    return opcao
}

function criarConta() { // ADICIONA USUARIO BASE AOS USUARIOS
    criarUsuarioBase()
    console.clear()
    console.log(`
    Usuario ${usuarios[usuarios.length-1].infoPessoais.nomeCompleto} Cadastrado!\n`)
}

function acessarOpcaoInicial(escolha) { // ACESSA A OPCAO DO NENU INICAL O USUARIO ESCOLHEU
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

function pedirConta() { // PEDIR NUMERO DA CONTA
    let pedirConta = rs.question(`Digite o numero da sua conta : `)
    return pedirConta
}

function cadastrarConta() { // NÃO FINALIZADO
    let nomeUsuario = rs.question(``)
    let sobrenomeUsuario = rs.question(``)
    let idadeUsuario = rs.questionInt(``)
    usuarios.push(
        {
            conta: Math.floor(Math.random() * (1000 + 1)),
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
                nome: rs.question(`Digite seu nome : `),
                sobrenome: rs.question(`Digite seu sobrenome : `),
                nomeCompleto: null,
                idade: null,
                dataNascimento: null,
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
            logado: false,
            senha: "0352",
            investimentos: {
                rendaFixa: null,
                rendaVariavel: null
            },
            historico: [],
            bloqueada: false
        }
    )
}
function verificarConta(numeroConta) { // VERIFICA SE EXISTE UMA CONTA COM O NUMERO DIGITADO PELO USUARIO
    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].conta === numeroConta) {
            contaUsuario = usuarios[i]
            return console.log(`Conta encontrada!`)
        }
    }
    return console.log(`Conta inválida! Verifique se os digitos estão corretos e tente novamente.`)
}

function contaBloqueada(usuario) { // VERIFICA SE A CONTA QUE O USUARIO TENTANDO ACESSAR ESTA BLOQUEADA
    if(usuario.bloqueada) {
        console.log(`Esta conta está bloqueada no momento, tente novamente mais tarde ou fale com o nosso suporte para tirar qualquer duvida.`)
        return true
    }
    return false
}

function pedirSenha() { // PEDE A SENHA DA CONTA QUE O USUARIO ESTA QUERENDO ACESSAR
    let pedirSenha = rs.question(`Digite a senha da sua conta : `)
    return pedirSenha
}

function sacar() { // FAZ SAQUES NA CONTA LOGADA
    let valorSaque= rs.questionFloat("Qual o valor do saque: ")
    while (valorSaque <= 0) {
        console.log("Falha no saque. Valor invalido.")
        valorSaque = rs.questionFloat("Qual o valor do saque: ")
    }
    if(valorSaque > contaUsuario.saldo) {
        console.logo(`O valor do saque solicitado excede o saldo atual da sua conta, por favor tente sacar um valor mais baixo`)
    }
    if(valorSaque > contaUsuario.limites.saque) {
        console.log(`Desculpe, esse saque atinge o limite máximo da sua conta.\nSaque um valor mais baixo ou converse com o nosso suporte para aumentar\no limite de depósito da sua conta.`)
    }else{
        if(pedirSenhaTransacoes()){
            console.clear()
            registrarNoHistorico(contaUsuario,"Saque", valorSaque)
            contaUsuario.limites.saque -= valorSaque
            contaUsuario.saldo -= valorSaque
            console.log(`Saque  de R$ ${valorSaque.toFixed(2)} realizado com sucesso.`)
        }
    }
}

function verificarSenha(senha) { // VERIFICA SE A SENHA DIGITADA COINCIDE COM A SENHA DA CONTA QUE O USUARIO ESTA QUERENDO ACESSAR
    if(contaUsuario.senha === senha) {
        contaUsuario.logado = true
        tentativasDeSenha = 3
        return console.log(`Olá ${contaUsuario.infoPessoais.nomeCompleto}. Acessando conta...`)
    }
    tentativasDeSenha --
    return console.log(`Senha incorreta!${tentativasDeSenha} tentativas restantes.`)
}   

function acessarConta() { // UTILIZA AS FUNCOES DE VERIFICACAO DE ACESSO PARA QUE O USAURIO ENTRE NA CONTA 
    do{
        do{
            verificarConta(pedirConta())
        }while(contaUsuario === null )
    }while(contaBloqueada(contaUsuario))
    do{
        verificarSenha(pedirSenha())
    }while(contaUsuario.logado === false && tentativasDeSenha > 0)
    if(tentativasDeSenha === 0) {
        console.log(`Voce atingiu o limite máximo de tentativas de senha. A sua conta está periódicamente bloqueada.\nAcesse o suporte para mais informações`)
        contaUsuario.bloqueada = true
    }
}

function pedirSenhaTransacoes() { // PEDE A SENHA PARA QUE O USUARIO EFETUE UMA TRANSAÇÃO
    do{
        let pedirSenha = rs.question(`Digite a sua senha para concluir a transação : `)
        if(contaUsuario.senha === pedirSenha) {
            return true
        }
        tentativasDeSenha --
        console.log(`Senha incorreta. Tentativas restantes ${tentativasDeSenha}`)
    }while(tentativasDeSenha > 0)
    console.log(`Voce atingiu o limite máximo de tentativas de senha. A sua conta está periódicamente bloqueada.\nAcesse o suporte para mais informações`)
    contaUsuario.bloqueada = true
    return false
}

function registrarNoHistorico(conta,tipo,valor,) { // REGISTRA UMA TRANSACAO NO HISTORICO DO USUARIO
    conta.historico.push(`${tipo} realizado no valor de R$ ${valor}`)
}

function depositar() { // DEPOSITA UM VALOR NA CONTA LOGADA
    let valorDeposito= rs.questionFloat("Qual o valor do deposito: ")
    while (valorDeposito <= 0) {
        console.log("Falha no deposito. Valor invalido.")
        valorDeposito= rs.questionFloat("Qual o valor do deposito: ")
    }
    if(valorDeposito > contaUsuario.limites.deposito) {
        console.log(`Desculpe, esse depósito atinge o limite máximo da sua conta.\nDeposite um valor mais baixo ou converse com o nosso suporte para aumentar\no limite de depósito da sua conta.`)
    }else{
        if(pedirSenhaTransacoes()){
            console.clear()
            registrarNoHistorico(contaUsuario,"Depositar", valorDeposito)
            contaUsuario.limites.debito -= valorDeposito
            contaUsuario.saldo += valorDeposito
            console.log(`Deposito  de R$ ${valorDeposito.toFixed(2)} realizado com sucesso.`)
        }
    }
}

function verExtratos(usuario) { // EXIBE OS ESTRATOS DA CONTA LOGADA
    if(usuario.historico.length === 0) {
        return console.log(`\nNao a extratos recentes na sua conta bancaria.`)
    }
    console.table(usuario.historico)
}

function acessarOpcaoPrincipal(escolha) { // VERIFICA A OPCAO DIGITA PELO USUARIO NO MENU PRINCIPAL
    switch(escolha) {
        case 1:
            sacar()
            break
        case 2:
            depositar()
            break
        case 3:
            verExtratos(contaUsuario)
            break
        case 4:
            exibirDetalhesConta()
            sairDetalhesConta()
        case 0:
            contaUsuario.logado = false
            contaUsuario = null
            opcao = null
            console.log(`Saindo da conta...`)
            break
    }
}

function sairDetalhesConta() { // SAIR DOS DETALHES DA CONTA E VOLTAR AO MENU PRINCIPAL
    let sair = rs.question(`\nDigite "0" para voltar ao menu inical`)
    while(sair !== 0) {
        console.clear()
        console.log(`Digito inválido. Tente um valor válido`)
        exibirDetalheasConta()
        sair = rs.question(`\nDigite "0" para voltar ao menu inical`)
    }
}

function exibirDetalhesConta() { // EXIBI DETALHES DA CONTA COMO NOME COMPLETO, LIMITES DA CONTA E SALDO ATUAL
    console.log(`=============================`)
    console.log(`      DETALHES DA CONTA`)
    console.log(`=============================`)
    console.log(`Nome do Titular: ${contaUsuario.infoPessoais.nomeCompleto}`)
    console.log(`Numero da conta: ${contaUsuario.conta}`)
    console.log(`Saldo atual: R$ ${(contaUsuario.saldo).toFixed(2)}`)
    console.log(`Limite de Saque: R$ ${(contaUsuario.limites.saque).toFixed(2)}`)
    console.log(`Limite de Deposito: R$ ${(contaUsuario.limites.deposito).toFixed(2)}`)
    console.log(`Limite de Pix: R$ ${(contaUsuario.limites.pix).toFixed(2)}`)
}

function exibirMenuPrincipal() { // EXIBI O MENU PRINCIPAL
    console.log("=====================================")
    console.log("    BEM-VINDO AO BANCO DO BOSTIL")
    console.log("=====================================")
    console.log(`Olá ${contaUsuario.infoPessoais.nome}!`)
    console.log(`Saldo disponível: R$ ${(contaUsuario.saldo).toFixed(2)}`)
    console.log("1 - Sacar")
    console.log("2 - Depositar")
    console.log("3 - Ver Extratos")
    console.log("4 - Ver Detalhes da Conta")
    console.log("0 - Sair da Conta")
    console.log("=====================================")
}

function iniciar() { // INICIA O CODIGO E SEQUENCIA LOGICA DO BANCO
    do{
        exibirMenuInicial()
        acessarOpcaoInicial(escolhaDeValor(0,2))
        while(contaUsuario && contaUsuario.logado && contaUsuario.bloqueada === false) {
            exibirMenuPrincipal()
            acessarOpcaoPrincipal(escolhaDeValor(0,4))
        }
    }while(opcao !== 0)
}

iniciar()