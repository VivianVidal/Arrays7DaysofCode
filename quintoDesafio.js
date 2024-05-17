class Livro{
    constructor(titulo, numeroPaginas){
        this.nome = titulo;
        this.numeroPaginas = numeroPaginas;
    }   
}

class PilhaDeLivros {
    constructor(){
        this.pilhaLivros = [];
    }

    adicionarLivro(livro){
        this.pilhaLivros.push(livro);
    }

    removerLivro(){
        if(this.pilhaLivros.length>0){
            this.pilhaLivros.pop();
            return "Item removido"
        }
        return "Pilha vazia"       
    }

    exibirTopo(){
        const topo =this.pilhaLivros[this.pilhaLivros.length-1] 
        return `Título do livro: ${topo.nome} | Número de páginas: ${topo.numeroPaginas}`
    }
}

const livros = new PilhaDeLivros()
const livro = new Livro("Logística empresarial", 200)
const livro1 = new Livro("Harry Potter", 2000)
const livro2 = new Livro("Estudando Algoritmos", 250)
const livro3 = new Livro("Código Limpo", 290)
const livro4 = new Livro("Python e Django", 300)
livros.adicionarLivro(livro)
console.log(livros.exibirTopo())
livros.adicionarLivro(livro1)
console.log(livros.exibirTopo())
livros.adicionarLivro(livro2)
console.log(livros.exibirTopo())
livros.adicionarLivro(livro3)
console.log(livros.exibirTopo())
livros.adicionarLivro(livro4)
console.log(livros.exibirTopo())
livros.removerLivro()
console.log(livros.exibirTopo())
livros.removerLivro()
console.log(livros.exibirTopo())