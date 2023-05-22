//OBJETOS PROTÓTIPOS RESUMO
//a propriedade prototype é um onj adicionado a uma função quando a mesma é criada

function Funcionario(nome, cpf, idade){
    this.nome = nome
    this.cpf = cpf
    this.idade = idade
}

const Pessoa = new Funcionario('Suzana', 0764274, 19)

console.log(Pessoa)
console.log(Pessoa.nome)
console.log(Pessoa.cpf)
console.log(Pessoa.idade)