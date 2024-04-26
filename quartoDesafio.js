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
        this.filaPedidos = [];
    }

    adicionarPedido(numPedido, nomeCliente, itensPedido, valorTotal) {
        let pedidoNovo = new Pedido(numPedido, nomeCliente, itensPedido, valorTotal);
        this.filaPedidos.push(pedidoNovo)
    }

    mostrarPedidos() {
        if (this.filaPedidos.length < 1 ) {
            console.log('Ainda não temos pedidos !')
        } else {
            for (let pedido of this.filaPedidos) {
                console.log("------------------------------------------------------------")
                console.log(`Número do pedido: ${pedido.numPedido} --- Nome do cliente: ${pedido.nomeCliente} --- Itens do Pedido: ${pedido.itensPedido} --- Valor total do pedido: R$ ${pedido.valorTotal}`)
            }
            

        }
    }

    removerPedidoEntregue() {
        if(this.filaPedidos.length<1){
            console.log("Não tem pedidos para remover ! ")
        }
        else{
            return this.filaPedidos.shift()
        }
    }
}



let pedidos = new FiladePedidos()
//pedidos.adicionarPedido(1, "davi", "azeite e batata", 30)
//pedidos.adicionarPedido(2, "heloisa", "cachorro quente", 45)
//pedidos.adicionarPedido(3, "joao", "batata frita", 90)
//pedidos.adicionarPedido(4, "pamela", "azeitona", 100)
//pedidos.adicionarPedido(5, "ana", "lasanha", 60)
//pedidos.adicionarPedido(6, "Vivi", "café", 80)
//pedidos.mostrarPedidos()
//pedidos.removerPedidoEntregue()
//pedidos.adicionarPedido(7, "karen", "açucar", 3)
//pedidos.mostrarPedidos()
//pedidos.removerPedidoEntregue()
//pedidos.mostrarPedidos()

