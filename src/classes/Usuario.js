export class Usuario {
  static contador = 1;
  #historico = [];

  constructor(nome) {
    this.nome = nome;
    this.matricula = null;
  }

  gerarMatricula(){
    this.matricula = Usuario.contador++;
  }

  get historico() {
    return this.#historico;
  }

  adicionarEmprestimo(livro) {
    this.#historico.push(livro?.titulo);
  }

  tipoUsuario() {
    return "Comum";
  }

}