//Função callback é executada para cada item da array e possui 3 parametros:
//ForEach [].forEach(callback(itemAtual, index, array))

const carros = ['fiat','unoi','spin']

carros.forEach((item, indice, arr)=>{
    console.log(item.toLocaleUpperCase(), indice, arr)
})


