class Pedido {
    constructor(numPedido, nomeCliente, itensPedido, valorTotal) {
        this.numPedido = numPedido;
        this.nomeCliente = nomeCliente;
        this.itensPedido = itensPedido;
        this.valorTotal = valorTotal;
    }
}

class FiladePedidos {
    constructor() {
        this.numPedido = []
        this.nomeCliente = []
        this.itensPedido = []
        this.valorTotal = []
    }

    adicionarPedido(numPedido, nomeCliente, itensPedido, valorTotal) {
        this.numPedido.push(numPedido)
        this.nomeCliente.push(nomeCliente)
        this.itensPedido.push(itensPedido)
        this.valorTotal.push(valorTotal);
    }

    mostrarPedidos() {
        if (this.numPedido.length == 0) {
            console.log('Ainda não temos pedidos !')
        } else {
            for (let i = 0; i < this.numPedido.length; i++) {
                console.log("------------------------------------------------------------")
                console.log(`Número do pedido: ${this.numPedido[i]} --- Nome do cliente: ${this.nomeCliente[i]} --- Itens do Pedido: ${this.itensPedido[i]} --- Valor total do pedido: R$ ${this.valorTotal[i]}`)
            }
            console.log("............................................................")
            console.log(`o pedido de número: ${this.numPedido[0]} está sendo preparado.`)
            console.log("------------------------------------------------------------")

        }
    }

    removerPedidoEntregue() {
        this.numPedido.shift();
        this.nomeCliente.shift();
        this.itensPedido.shift()
        this.valorTotal.shift()
    }

    cancelarPedido(numPedido){
        const index = this.numPedido.indexOf(numPedido)
        if (index > -1) {
            this.numPedido.splice(index, 1);
            this.nomeCliente.splice(index, 1);
            this.itensPedido.splice(index, 1)
            this.valorTotal.splice(index,1)
        }
        else{
            console.log("Pedido não foi encontrado. Confira se inseriu o número do pedido corretamente ! ")
        }
    }

}



let pedido = new FiladePedidos
//pedido.adicionarPedido(1, "davi", "azeite e batata", 30)
//pedido.adicionarPedido(2, "heloisa", "cachorro quente", 45)
//pedido.adicionarPedido(3, "joao", "batata frita", 90)
//pedido.adicionarPedido(4, "pamela", "azeitona", 100)
//pedido.adicionarPedido(5, "ana", "lasanha", 60)
//pedido.adicionarPedido(6, "Vivi", "café", 80)
//pedido.mostrarPedidos()
//pedido.removerPedidoEntregue()
//pedido.adicionarPedido(7, "karen", "açucar", 3)
//pedido.mostrarPedidos()
//pedido.removerPedidoEntregue()
//pedido.mostrarPedidos()
//pedido.cancelarPedido(6)
//pedido.mostrarPedidos()
