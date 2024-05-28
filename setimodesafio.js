class Produto {
    constructor(id, nome, quantidade) {
        this.id = id
        this.nome = nome
        this.quantidade = quantidade
    }
}

class Node {
    constructor(produto) {
        this.esquerda = null
        this.direita = null
        this.produto = produto
    }
}

class ArvoreProduto {
    constructor() {
        this.raiz = null
    }

    inserir(id, quantidade, nome) {
        let produto = new Produto(id, nome, quantidade)
        if (this.raiz === null) {
            this.raiz = new Node(produto)
        }
        this._insere(this.raiz, produto)

    }

    _insere(node, produto) {
        if (node === null) {
            return new Node(produto)
        }
        if (produto.id === node.produto.id) {
            node.produto.nome = produto.nome
            node.produto.quantidade = produto.quantidade
        }
        if (produto.id < node.produto.id) {
            node.esquerda = this._insere(node.esquerda, produto)
        } else {
            node.direita = this._insere(node.direita, produto)
        }
        return node
    }

    buscar(id) {
        return this._busca(this.raiz, id)
    }

    _busca(node, id) {
        if (node === null) {
            return `Produto com ID ${id} não encontrado\n`
        }
        if (node.produto.id === id) {
            return `Nome: ${node.produto.nome}\nId: ${node.produto.id}\nQuantidade: ${node.produto.quantidade}\n`
        }
        if (id < node.produto.id) {
            return this._busca(node.esquerda, id)
        }
        return this._busca(node.direita, id)

    }
}

const arvore = new ArvoreProduto()
arvore.inserir(2, 20, "Gás")
arvore.inserir(1, 50, "Casaco")
arvore.inserir(1, 10, "Casca")
arvore.inserir(7, 50, "Cão")
arvore.inserir(15, 50, "Casa")
arvore.inserir(5, 30, "Feijao")
arvore.inserir(8, 90, "Calça")
console.log(arvore.buscar(5))
console.log(arvore.buscar(13))
console.log(arvore.buscar(15))
console.log(arvore.buscar(1))
console.log(arvore.buscar(8))
console.log(arvore.buscar(2))

