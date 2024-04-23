class Produto {
    constructor(nome, codigo,preco, quantidade) {
        this.nome = nome;
        this.codigo = codigo;
        this.preco = preco;
        this.quantidade = quantidade;
        this.proximoProduto = null;
        this.produtoAnterior = null;
    }
  }
  
  class ListaDeProdutos {
    constructor() {
      this.head = null;
      this.tail = null;
    }

    adicionarProduto(nome, codigo, preco,quantidade){
        let novoProduto = new Produto(nome,codigo,preco,quantidade);
        if(this.head ===null){
            this.head = novoProduto;
            this.tail = novoProduto;
        }else {
            this.tail.proximoProduto = novoProduto;
            novoProduto.produtoAnterior = this.tail;
            this.tail = novoProduto;
        }
    }

    listarProdutos(){
        let produto = this.head;
        if(produto === null){
            console.log("Não há produtos cadastros")
        }else {
            while(produto !== null){
                console.log(`Produto: ${produto.nome}, Código : ${produto.codigo}, Preço: ${produto.preco}, Quantidade em estoque: ${produto.quantidade}`)
                produto = produto.proximoProduto;
            }
        }
    }

    removerProduto(codigo){
        let produto = this.head;
        while(produto !== null){
            if (produto.codigo === codigo){
                if (produto === this.head && produto === this.tail){
                    this.head = null;
                    this.tail = null;
                }
                else if(produto ===this.head){
                    this.head = this.head.proximoProduto;
                    this.head.produtoAnterior = null;
                }
                else if( produto === this.tail){
                    this.tail = this.tail.produtoAnterior;
                    this.tail.proximoProduto =null;
                }
                else {
                    produto.produtoAnterior.proximoProduto = produto.proximoProduto;
                    produto.proximoProduto.produtoAnterior = produto.produtoAnterior
                }
                return;
            }
            produto=produto.proximoProduto;
        }
    }

    getProducts(codigo){
        if (this.head ===null){
            console.log("Não há produtos cadastrados !")
        }else {
            let produto = this.head;
            while(produto !== null && produto.proximoProduto !== null){
                if(produto.codigo === codigo){
                    console.log(`Produto: ${produto.nome}, Código : ${produto.codigo}, Preço: ${produto.preco}, Quantidade em estoque: ${produto.quantidade}`)
                }
                produto=produto.proximoProduto
            }

        }
    }
}

let listaProdutos = new ListaDeProdutos();



