

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
    
    

    }


let listaCompras = new ListaCompra();
listaCompras.mostrarItens()

