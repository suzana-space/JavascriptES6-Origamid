//Math é um propriedade nativa do JS, para ver todos os
//tipos de math, console -> escreva("Math") -> enter -> 
//objetct "Math"

let usandoMath = {
    pi: Math.PI,
    nRandomico: Math.random(),
    logDe10: Math.log10(5),
    mostraPI: function(){
        return `numero pi: ${this.pi}`
    },
    numeroRandomico: function(){
        return `numero randomico: ${this.nRandomico}`
    },
    logaritmoDe10: function(){  
        return `logarito de 10: ${this.logDe10}`
    }
}

console.log(usandoMath.mostraPI())
console.log(usandoMath.numeroRandomico())
console.log(usandoMath.logaritmoDe10())

console.log(Math.random())
console.log(Math.log10(5))
