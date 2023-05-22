//This Keyword --> faz referencia ao proprio obj cosntruido 

function BonecoLOL(champion, ferramenta) { 
    const vidaChampion = 100
    const dano =  vidaChampion*3
    this.champion = champion
    this.ferramenta = ferramenta
    this.dano = dano
}

const atirador1 = new BonecoLOL('Jinx', 'Fishbones')
console.log(atirador1)
console.log(atirador1.dano)
