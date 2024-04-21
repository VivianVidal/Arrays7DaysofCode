class Paciente {
    constructor(id, nome, estadoSaude) {
      this.id = id;
      this.nome = nome;
      this.estadoSaude = estadoSaude;
      this.proximoPaciente = null;
    }
  }
  
  class ListaDePacientes {
    constructor() {
      this.head = null;
    }
  
    adicionar_paciente(id, nome, estadoSaude) {
      let novoPaciente = new Paciente(id, nome, estadoSaude);
      if (this.head === null) {
        this.head = novoPaciente;
      } else {
        let pacienteAtual = this.head;
        while (pacienteAtual.proximoPaciente !== null) {
          pacienteAtual = pacienteAtual.proximoPaciente;
        }
        pacienteAtual.proximoPaciente = novoPaciente;
      }
    }
  
    remover_paciente(id) {
      if (this.head === null) {
        return;
      } else if (this.head.id === id) {
        this.head = this.head.proximoPaciente;
        return;
      } else {
        let pacienteAtual = this.head;
        while (pacienteAtual.proximoPaciente !== null) {
          if (pacienteAtual.proximoPaciente.id === id) {
            pacienteAtual.proximoPaciente = pacienteAtual.proximoPaciente.proximoPaciente;
            return;
          }
          pacienteAtual = pacienteAtual.proximoPaciente;
        }
      }
    }
  
    listar_pacientes() {
      if (this.head === null) {
        console.log("Não há pacientes nesta lista.");
      } else {
        let pacienteAtual = this.head;
        while (pacienteAtual !== null) {
          console.log(`Nome: ${pacienteAtual.nome}, ID: ${pacienteAtual.id}, Estado de saúde: ${pacienteAtual.estadoSaude}`);
          pacienteAtual = pacienteAtual.proximoPaciente;
        }
      }
    }
  }
  
  let listaDePacientes = new ListaDePacientes();
  

  