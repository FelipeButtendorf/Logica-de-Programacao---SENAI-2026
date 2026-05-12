let lerTeclado = require("readline-sync");

// VERSÃO 1

// let resultado = null

// let numero = lerTeclado.questionFloat(`Escolha um número.
// Digite aqui: `)

// console.log(`1 - Adição || 2 - Subtração || 3 - Divisão || 4 - Multiplicação `)

// let operação = lerTeclado.questionInt(`Escolha a operação.
// Digite aqui: `)

// let numero2 = lerTeclado.questionInt(`Escolha outro número.
// Digite aqui: `)

// 

//VERSÃO 2
let sair = null
do {
    let resultado = null;
    let operacao = null;
    let conta = ""

    while (operacao !== '=') {
        while(typeof numero !== Number)
        numero = lerTeclado.questionFloat(`Escolha um numero: `);
        conta += ` ${numero} `
        console.log("╔═══════════════════ ");
        console.log(`║  ${conta}`);
        console.log("║~~~~~~~~~~~~~~~~~~~")
        console.log("║ + |  7   8   9 ")
        console.log("║ - |  4   5   6 ")
        console.log("║ x |  3   2   1 ")
        console.log("║ / |  0 ")
        console.log("╚═══════════════════");

        if (resultado === null) {
            resultado = numero;
        } else {
            switch (operacao) {
                case '+': 
                    resultado += numero; 
                    break;
                case '-': 
                    resultado -= numero; 
                    break;
                case '/': 
                    resultado /= numero; 
                    break;
                case '*': 
                    resultado *= numero; 
                    break;
                default: console.log("Operação inválida.");
            }
        }
        operacao = lerTeclado.question(`Escolha a operacao (+, -, /, * ou =): `);
        conta += `${operacao}`
        if(operacao !== `=`) {
        console.log("╔═══════════════════ ");
        console.log(`║  ${conta}`);
        console.log("║~~~~~~~~~~~~~~~~~~~")
        console.log("║ + |  7   8   9 ")
        console.log("║ - |  4   5   6 ")
        console.log("║ x |  3   2   1 ")
        console.log("║ / |  0 ")
        console.log("╚═══════════════════");
        }
    }

    console.log("╔═══════════════════ ");
    console.log(`║  ${conta} ${resultado}  `);
    console.log("║~~~~~~~~~~~~~~~~~~~")
    console.log("║ + |  7   8   9 ")
    console.log("║ - |  4   5   6 ")
    console.log("║ x |  3   2   1 ")
    console.log("║ / |  0 ")
    console.log("╚═══════════════════");
    sair = lerTeclado.keyInYN(`Deseja sair da calculadora? :`)
} while (sair == false)



