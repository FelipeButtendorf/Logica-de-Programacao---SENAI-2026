// let conta = {
//     limites: {
//         saque: null,
//         deposito: null
//     },
//     tipo: {
//         credito: null,
//         debito: null
//     },
//     infoPessoais: {
//         nome: null,
//         idade: null,
//         email: null,
//         telefone: null,
//         cep: {
//             pais: null,
//             estado: null,
//             cidade: null
//         },
//         cpf: null
//     },
//     saldo: null,
//     bonus: {},
//     logado: null,
//     senha: null,
//     investimentos: {
//         rendaFixa: null,
//         rendaVariavel: null
//     },
//     histórico: {},
//     bloqueada: null
// }

let rs = require("readline-sync");
let contas = []

function criarUsuarioBase() {
    contas.push(
        {
            conta: "24135454364",
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
                dataDeNascimento: {
                    dia: "22",
                    mes: "02",
                    ano: "2026"
                },
                email: "felipecodebreaker@email.com",
                telefone: "(47) 91234-5678",
                enderecoCompleto: {
                    cep: "89.266-342",
                    pais: "Brasil",
                    estado: "Santa Catarina",
                    cidade: "Jaraguá do Sul",
                    bairro: "Três Rios do Norte",
                    rua: "Adelino da Silva",
                    casa: "31"

                },
                cpf: "11101001101"
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


const taxas = {}

function logarConta() {
    let contaEncontrada = false
    let contaUsuario = null
    do{
        let pedirConta = rs.question(`Qual o número da sua conta? : `)
        for(let i = 0; i < contas.length; i++) {
            if(contas[i].conta === pedirConta) {
                contaEncontrada = true
                contaUsuario = contas[i]
                break
            }
        }
        if(contaEncontrada === false) {
            console.log(`Conta ainda não registrada.`)
        }
    }while(contaEncontrada === false)
    let tentativasDeSenha = 3
    let senhaValida = false
    do{
        let pedirSenha = rs.question(`Qual a senha da sua conta? : `) 
        if(contaUsuario.senha === pedirSenha) {
            senhaValida = true
            console.log(`Logando...`)
        }else{
            tentativasDeSenha --
            console.log(`Senha incorreta por favor, tente novamente. Tentativas restantes: ${tentativasDeSenha}`)
        }
    }while(senhaValida === false)
}

console.log("=====================================")
console.log("          BANCO DO BOSTIL")
console.log("=====================================")
console.log("Conta:")
console.log("Senha:")
console.log("=====================================")

criarUsuarioBase()
logarConta()
