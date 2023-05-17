//usando while
let i=0
let consoles = ['playstation','xbox','nintendo','atari','fliperama','mega drive']
while(i<consoles.length){
    console.log(consoles[i])
        if(consoles[i] == 'nintendo'){
            break;
        }
    i++
}

//usando forEach
consoles.forEach(function (chave){  //este parametro pega o valor do indice do array
    console.log(chave)
})

//for loop
let qtd = 0
let tamanho = 10
for(;qtd<tamanho;){  //loop comente com a condição, o incremento fica depois dos comandos
    console.log(qtd)
    qtd++
}


