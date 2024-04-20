

class ListaCompra{
    constructor(){
        this.itens=[],
        this.quantidades=[]
    }

    adicionarItem(nome, quantidade) {
        this.itens.push(nome);
        this.quantidades.push(quantidade);
    }

    mostrarItens(){
        for (let i =0; i< this.itens.length;i++){
            console.log(`Item: ${this.itens[i]}, Quantidade: ${this.quantidades[i]}`)
        }
    }

    removerItem(nome) {
        const index = this.itens.indexOf(nome);
        if (index > -1) {
            this.itens.splice(index, 1);
            this.quantidades.splice(index, 1);
        }
    }
    }    

    


let listaCompras = new ListaCompra();
listaCompras.adicionarItem("maça", 50);
listaCompras.adicionarItem("banana", 10);
listaCompras.mostrarItens();
listaCompras.removerItem("banana");
listaCompras.mostrarItens();

