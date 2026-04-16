
let lerTeclado = require("readline-sync");
for(let repetir = true; repetir ; repetir ) {
    repetir = lerTeclado.keyInYN(`Gostaria de repetir o código?`)
}