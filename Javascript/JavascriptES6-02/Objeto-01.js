//exemplo de um objeto: 
let objetoPessoa = {
    nome: 'suzana',
    idade: 20,
    formada: false,
}

//objetos podem ter funções, métodos etc
let quadrado = {
    lados: 4,
    areaQuadrado : function(lado){
        return lado * lado
    },
    perimetroQuadrado : function(lado){
        return this.lados * lado    //usando this. para pegar o
                                    //elemento do objt
    },
}

console.log(`numero de lados: ${quadrado.lados}`)
console.log(`área do quadrado: ${quadrado.areaQuadrado(8)}`)
console.log(`perimetro do quadrado: ${quadrado.perimetroQuadrado(8)}`)

// O objeto serve para organizar o código em pequenas 
// partes reutilizáveis. 


