class Paciente{
    constructor(nome, id, estadoSaude, proximo = null){
        this.nome = nome;
        this.id = id;
        this.estadoSaude = estadoSaude;
        this.proximo = proximo;
    }
}

class ListaPacientes{
    constructor(){
        this.listaPacientes = []
    }

    adicionarPacientePrimeiroNo(nome, id ,estadoSaude){
        let novoPaciente = new Paciente(nome, id, estadoSaude)
        this.listaPacientes.unshift(novoPaciente);
    }

    adicionarPaciente(nome, id,estadoSaude){
        let novoPaciente = new Paciente(nome, id, estadoSaude)
        this.listaPacientes.push(novoPaciente);
        console.log("*" * 20)
    }

    mostrarPacientes(){
        for(let i =0; i< this.listaPacientes.length;i++){
            console.log(`Nome: ${this.listaPacientes[i].nome} Identificação: ${this.listaPacientes[i].id} Estado de saúde: ${this.listaPacientes[i].estadoSaude}`)
        }
        console.log("*" * 20)
    }

    removerPacientePrimeiroNo(){
        this.listaPacientes.shift();
    }

    removerPaciente(id){
        const index = this.listaPacientes.findIndex(Paciente => Paciente.id === id);
        if(index> -1){
            this.listaPacientes.splice(index, 1);
        }
        else{
            console.log("Paciente não encontrado!")
        }
    }
}

let pacientes = new ListaPacientes();
pacientes.adicionarPaciente("jack", 123456, "Estável");
pacientes.adicionarPaciente("hoje", 158456, "Normal");
pacientes.mostrarPacientes();
pacientes.adicionarPacientePrimeiroNo("amamha", 987654, "Grave")
pacientes.mostrarPacientes()
pacientes.removerPaciente(12356);
pacientes.mostrarPacientes()