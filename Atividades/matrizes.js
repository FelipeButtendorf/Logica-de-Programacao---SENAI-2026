const num1 = 121
const num2 = 123
const num3 = 11211
// let temp = null
// let temp2 = null
// let num1Matriz = []
// if(num1 > 100) {
//     temp = num1 / 100
//     Math.floor(temp)
//     num1Matriz.push(temp)
//     temp2 = temp
//     temp = num1
//     temp -= temp2 * 100
// }
// if(temp > 10) {
//     temp2 = temp / 10
//     Math.floor(temp2)
//     num1Matriz.push(temp2)
//     temp -= temp2 * 10
// }
// if(temp < 10) {
//     num1Matriz.push(temp)
// }
// console.log(num1Matriz)

let y = [];
for(let i = 0; i < 3; i++) y.push((num1.toString()[i]));
if(num1.toString() == y.toString()) console.log("true");
else console.log("false");


