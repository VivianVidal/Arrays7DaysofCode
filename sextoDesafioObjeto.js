class Jogos {
    constructor() {
        this.dados = {}
    }

    add(nome, pontos) {
        this.dados[nome] = pontos
    }

    updatePonto(nome, ponto) {
        if (this.dados.hasOwnProperty(nome)) {
            this.dados[nome] = ponto
        }
        return
    }

    remove(nome) {
        if (this.dados.hasOwnProperty(nome)) {
            delete this.dados[nome]
        }
        return
    }

    listar() {
        const dadosArray = Object.entries(this.dados)
        dadosArray.map(([nome, ponto]) => {
            console.log(`Nome: ${nome}\n Ponto: ${ponto}`)
        })
    }

    listarUm(nome){
        if (this.dados.hasOwnProperty(nome)) {
            return `Pontos: ${this.dados[nome]}`
        }
        return
    }

}

const jogo = new Jogos()
jogo.add("Hudson", 30)
jogo.add("Lorem", 10)
jogo.add("Ipsun", 20)
jogo.updatePonto("Lorem", 50)
jogo.listar()
console.log(jogo.listarUm("Lorem"))
// jogo.updatePonto()

