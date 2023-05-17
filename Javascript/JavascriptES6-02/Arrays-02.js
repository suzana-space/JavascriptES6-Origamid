//Interações com loops e arrays 
const CopasVencidasAno = [1980, 1973, 2020, 2983, 1229]
console.log(`Brasil ganhou a copa do mundo nos anos de: ${CopasVencidasAno}`)

CopasVencidasAno.forEach(function(anos){
    console.log(anos)
})

//Manipulando os dados de um array (trocando de posição)
const PodioDesordenado = ['terceiro','segundo','primeiro']
let auxiliar = PodioDesordenado[0]
    console.log(auxiliar)
PodioDesordenado[0] = PodioDesordenado[2]  
    console.log(PodioDesordenado[2])
PodioDesordenado[2] = auxiliar
console.log(PodioDesordenado)

//exercicio besta 
const frutas = ['banana','tomate','abacaxi']
frutaPreferida = frutas[0]
console.log(frutaPreferida)
console.log(frutas)
    








