function somar(num1, num2){
    return num1 +num2
}

function multiplicar(num1, num2){
    return num1 * num2
}

function subtrair(num1, num2){
    return num1 - num2
}

console.log(subtrair(multiplicar(2,4),somar(9,4)))
console.log(subtrair(multiplicar(8,4),somar(-2,-4)))
console.log(subtrair(multiplicar(-3,9),somar(6,6)))