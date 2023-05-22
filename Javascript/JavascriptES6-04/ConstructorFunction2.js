function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.andar = function(){
        return `${this.nome} andou`
    }
}
const pessoa = new Pessoa