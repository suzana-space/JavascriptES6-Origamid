//Abreviação da condicional if e else:

const idade = 60
const idoso = (idade>=60) ? 'aposentado' : 'não aposentado'
console.log(idoso)

//Utilizado quando precisa atribuir um valor para uma variável,
//dependendo de uma condição

//por padrão default, o op ternario retorna true e false
console.log("posso comprar um carro com o dinheiro que tenho na conta?")
const dinheiroDaConta = 300
const verificaConta = (!dinheiroDaConta<25000)
console.log(verificaConta)
