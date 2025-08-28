import { Usuario } from './Usuario.js';

export class Biblioteca {
  constructor() {
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
    this.usuarios = usuariosSalvos.map(u => {
      const usuario = new Usuario(u.nome);
      usuario.matricula = u.matricula;
      u.historico?.forEach(livro => usuario.adicionarEmprestimo(livro));
      return usuario;
    });

    this.livros = JSON.parse(localStorage.getItem("livros")) || [];
    this.autores = JSON.parse(localStorage.getItem("autores")) || [];
  }

  salvarDados() {
  const usuariosSerializados = this.usuarios.map(usuario => ({
    nome: usuario.nome,
    matricula: usuario.matricula,
    historico: usuario.historico 
  }));

  localStorage.setItem("usuarios", JSON.stringify(usuariosSerializados));
  localStorage.setItem("livros", JSON.stringify(this.livros));
  localStorage.setItem("autores", JSON.stringify(this.autores));
}

  cadastrarLivro(livro) {
    this.livros.push(livro);
    this.salvarDados();
  }

  cadastrarUsuario(usuario) {
    this.usuarios.push(usuario);
    this.salvarDados();
  }

  cadastrarAutor(autor) {
    this.autores.push(autor);
    this.salvarDados();
  }

  emprestarLivro(titulo, matricula) {
    const livro = this.livros.find(l => l.titulo === titulo);
    const usuario = this.usuarios.find(u => u.matricula === matricula);

    if (!livro.disponibilidade) {
      alert("Empréstimo não permitido, Livro já emprestado!");
      return;
    }else if(!usuario ){
      alert("Usuário inexistente!");
    }
    else{
      livro.disponibilidade = false;
      usuario.adicionarEmprestimo(livro);
      livro.emprestadoPara = usuario.nome;
      livro.registrarEmprestimo;
      this.salvarDados();
      alert("Empréstimo confirmado!");
    }

  }

  devolverLivro(titulo) {
    const livro = this.livros.find(l => l.titulo === titulo);
    if (livro) {
      livro.disponibilidade = true;
      this.salvarDados();
    }
  }
}