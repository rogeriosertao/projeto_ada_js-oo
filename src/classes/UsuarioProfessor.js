import { Usuario } from "./Usuario.js";

export class UsuarioProfessor extends Usuario {
  tipoUsuario() {
    return "Professor";
  }

  gerarMatricula(){
    this.matricula = 'p' + Usuario.contador++;
  }
}