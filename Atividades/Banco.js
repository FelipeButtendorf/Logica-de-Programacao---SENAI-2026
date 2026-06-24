let rs = require("readline-sync");
let usuarios = []
let opcao = null
const taxas = {}
let contaUsuario = null
let tentativasDeSenha = 3
let acessoConcedido = false
let dataHoraBrasil = null
let numeros = ["1","2","3","4","5","6","7","8","9","0"]

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

function coletarDataHoraAtual() {
    dataHoraBrasil = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        dateStyle: 'full',
        timeStyle: 'medium'
    }).format(new Date());
    return dataHoraBrasil
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
    console.log(`Usuario ${usuarios[usuarios.length-1].infoPessoais.nomeCompleto} Cadastrado!\n`)
}

function acessarOpcaoInicial(escolha) { // ACESSA A OPCAO DO NENU INICAL O USUARIO ESCOLHEU
    switch(escolha) {
        case 1:
            acessarConta()
            break
        case 2:
            cadastrarConta()
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

function validacaoCPF(cpf) {
    for(let i = 0; i < cpf.length; i++) {
        if(!(numeros.includes(cpf[i]))) {
            return false
        }
    }
    return true
}

function cadastrarConta() {
    let idadeUsuario = rs.questionInt(`Digite sua idade : `)
    while(idadeUsuario < 18) {
        console.log(`Menor de idade detectado, a SWAT sera enviada para o seu endereço atual, ou se prefrir, digite um valor maior ou igual a 18.`)
        idadeUsuario = rs.questionInt(`Digite sua idade : `)
    }
    let nomeUsuario = rs.question(`Nome do usuario : `)
    let sobrenomeUsuario = rs.question(`Sobrenome do usuario : `)
    let contaAleatoria = Math.floor(Math.random() * (1000 + 1))
    let cpf = rs.question(`Digite seu CPF : `)
    while(cpf.length !== 11) {
        console.log(`CPF invalido, tente outro.`)
        cpf = rs.question(`Digite seu CPF : `)
    }
    let senhaUsuario = rs.question(`Crie uma senha de 4 digitos: `)
    while(senhaUsuario.length !== 4) {
        console.log(`Senha inválida, tente criar outra.`)
        senhaUsuario = rs.question(`Crie uma senha de 4 digitos: `)
    }

    usuarios.push(
        {
            conta: contaAleatoria.toString(),
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
                nome: nomeUsuario,
                sobrenome: sobrenomeUsuario,
                nomeCompleto: null,
                idade: idadeUsuario,
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
                email: null,
                telefone: null,
                enderecoCompleto: {
                    cep: null,
                    pais: null,
                    estado: null,
                    cidade: null,
                    bairro: null,
                    rua: null,
                    numero: null,
                    complemento: null
                },
                cpf: cpf,
                cnpj: null
            },
            saldo: 0,
            bonus: {},
            logado: false,
            senha: senhaUsuario,
            investimentos: {
                rendaFixa: null,
                rendaVariavel: null
            },
            historico: [],
            bloqueada: false
        }
    )
    console.log(`O numero da sua conta é ${contaAleatoria}`)
    console.log(`Conta Cadastrada!`)

}

function verificarConta(numeroConta) { // VERIFICA SE EXISTE UMA CONTA COM O NUMERO DIGITADO PELO USUARIO
    contaUsuario = null
    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].conta === numeroConta) {
            contaUsuario = usuarios[i]
            console.log(`Conta encontrada!`)
            return true

        }
    }
    console.log(`Conta inválida! Verifique se os digitos estão corretos e tente novamente.`)
    return false
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
        console.log(`O valor do saque solicitado excede o saldo atual da sua conta, por favor tente sacar um valor mais baixo`)
    }else if(valorSaque > contaUsuario.limites.saque) {
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
        let pedirSenha = rs.question(`Digite a sua senha para concluir a transacao : `)
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

function registrarNoHistorico(conta,tipo,valor) { // REGISTRA UMA TRANSACAO NO HISTORICO DO USUARIO
    conta.historico.push(`${tipo} realizado no valor de R$ ${valor}; Data: ${coletarDataHoraAtual()}`)
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
            registrarNoHistorico(contaUsuario,"Deposito", valorDeposito)
            contaUsuario.limites.deposito -= valorDeposito
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
            break
        case 5:
            exibirConversaComSuporte()
            break
        case 0:
            contaUsuario.logado = false
            contaUsuario = null
            opcao = null
            console.log(`Saindo da conta...`)
            break
    }
}

function sairDetalhesConta() { // SAIR DOS DETALHES DA CONTA E VOLTAR AO MENU PRINCIPAL
    let sair = rs.questionInt(`\nDigite "0" para voltar ao menu inical`)
    while(sair !== 0) {
        console.clear()
        console.log(`Digito inválido. Tente um valor válido`)
        exibirDetalhesConta()
        sair = rs.question(`\nDigite "0" para voltar ao menu inical`)
    }
}

function exibirConversaComSuporte() { // NÃO FINALIZADO
    console.log("==========================")
    console.log("1. Desejo aumentar o limite do meu saque")
    console.log("2. Desejo aumentar o limite do meu depósito")
    console.log("3. Desejo cancelar a minha conta")
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