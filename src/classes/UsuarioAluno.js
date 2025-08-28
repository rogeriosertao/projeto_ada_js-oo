import { Usuario } from "./Usuario.js";

export class UsuarioAluno extends Usuario {
  tipoUsuario() {
    return "Aluno";
  }

  gerarMatricula(){
    this.matricula = 'a' + Usuario.contador++;
  }

}