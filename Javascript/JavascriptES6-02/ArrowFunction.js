//Nova sintaxe do ES6 para encurtar funções. Basta remover a palavra 
//funciton e add a fat arrow => após os parametros

function soma(a,b){
    return a + b
}

console.log(soma(4,7))

const soma2 = (a,b) => a + b
console.log(soma2(5,5))

function IMCfake(altura, peso){
    return (altura/peso).toFixed(2)
}
console.log(IMCfake(6,7))
//encurtando: 
const IMCfake2 = (altura, peso) => (altura/peso).toFixed(2)
console.log(IMCfake2(4,8))

