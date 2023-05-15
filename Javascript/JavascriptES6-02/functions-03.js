//function que retorno o perimetro de um quadrado: 

function perimetroQuadrado(lados){
    return lados * 4
}
console.log(`perimetro igual a ${perimetroQuadrado(6)}`)

//function que retorne nome completo 

function nomeCompleto(nome, sobrenome){
    return nome + " " + sobrenome
}

console.log(nomeCompleto("suzana", "souza araujo"))

//function que retorna do tipo de dado

function TipoDeDado(dado){
    return console.log(typeof(dado))
}
TipoDeDado(parseInt("345"))
TipoDeDado("345")
TipoDeDado(345)
TipoDeDado(['suzana', 'souza', 'araujo'])
