export class Livro {
  #disponivel = true;
  #emprestadoPara = null;
  totalEmprestimos = 0;

  constructor(titulo, autor, ano, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.genero = genero;
  }

  get disponibilidade() {
    return this.#disponivel;
  }

  set disponibilidade(status) {
    this.#disponivel = status;
  }

  registrarEmprestimo() {
    this.totalEmprestimos += 1;
  }

}