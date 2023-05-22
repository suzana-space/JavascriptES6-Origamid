//forEach sempre retorna undefined, pq seu obj é percorrer o array apenas 
//Map sempre retorna uma nova array 

const nomes =['suzana', 'joao', 'paulo']

const novaArray = nomes.map((item, index, arr)=>{
    return item.toLocaleUpperCase
})
console.log(nomes)

//Map retornou uma nova array com numeros multiplicados
const numeros = [2,5,7,8,43]
const MultiplicaPorDois = numeros.map(itens => itens * 2)
console.log(MultiplicaPorDois)

//Criando uma nov array apartir de um array de objetos: 

const Alura = [
    {curso: 'HTML', duracao: 50},
    {curso: 'CSS',  duracao:  40},
    {curso: 'Java', duracao: 150},
    {curso: 'PHP',  duracao:  23}
]
const cursosAluraDuracao = Alura.map(cursos => cursos.duracao)
const nomesCursosAlura = Alura.map(cursos => cursos.curso)
console.log(nomesCursosAlura)
console.log(cursosAluraDuracao)






