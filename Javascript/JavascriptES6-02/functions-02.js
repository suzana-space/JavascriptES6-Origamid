//calculando imc 

function calculaIMC(peso, altura){
    return peso/altura**2
}

console.log(parseInt(calculaIMC(50, 1.54)))

function terceiraIdade(idade){
            if(idade>=60){
                return "voce é velho"
            }
            else{
                return "voce é novo"
            }
}

console.log(terceiraIdade(45894))