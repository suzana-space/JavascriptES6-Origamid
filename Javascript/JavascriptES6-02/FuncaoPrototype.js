//Object.prototype

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.Reflexao = function(){
        return 'penso, logo existo'
    }
}
const suzana = new Pessoa('suzana', 19)
console.log(suzana.Reflexao())

Pessoa.prototype.andar = function(){
    return 'andando'
}









