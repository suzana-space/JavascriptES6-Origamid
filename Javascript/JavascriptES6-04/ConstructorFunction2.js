function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.andar = function(){
        return `${this.nome} andou`
    }
}
const pessoa = new Pessoa

//Objetos nativos do Javascript. .. 
Number 
String
Boolean
Function
Error
TypeError
Date
Array
//Objetos do Browser: 
NodeList 
HTMLCollection
Element
Window
Document

