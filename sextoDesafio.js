class Jogo{
    constructor(){
        this.jogos = [];
    }

    adicionar(key,value){
        this.jogos[key]=value;
    }

    get(key){
        return `Pontuação de ${this.jogos[key]}`
    }

    getAll(){
        let result = []
        for(let i in this.jogos){
            result.push( `Chave: ${i}, Valor: ${this.jogos[i]}`)
        }
        return result
    }

    remove(key){
        delete this.jogos[key]
    }

    
}

let jogo = new Jogo()
jogo.adicionar("Vivian", 20);
jogo.adicionar("Jose", 59);
jogo.adicionar("Maria", 30);
jogo.adicionar("Jack", 15);
jogo.adicionar("Pamela", 26);
console.log(jogo.get("Jack"))
console.log(jogo.getAll())
jogo.remove("Pamela")
console.log(jogo.getAll())

