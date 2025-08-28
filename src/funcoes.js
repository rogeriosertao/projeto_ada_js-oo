/* Fuções Diversas */


//## Funções do Usuário
function abrirModalEditar(index) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios[index];

  document.getElementById('indexUsuario').value = index;
  document.getElementById('matriculaUsuarioModal').value = usuario.matricula;
  document.getElementById('nomeUsuarioModal').value = usuario.nome;

  const modal = new bootstrap.Modal(document.getElementById('modalEditarUsuario'));
  modal.show();
}

function excluirUsuario(index) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios.splice(index, 1);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

}


function exibirHistoricoEmprestimo(index) {
const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];
const usuario = usuariosSalvos[index];

const modal = new bootstrap.Modal(document.getElementById("modalHistoricoEmprestimo"));
const modalTitulo = document.getElementById("modalHistoricoTitulo");
const modalTexto = document.getElementById("modalHistoricoTexto");

if (!usuario || !usuario.historico || usuario.historico.length === 0) {
  modalTitulo.innerHTML = "Sem empréstimos";
  modalTexto.innerHTML = "Este usuário não possui empréstimos registrados.";
} else {
  const historicoFormatado = usuario.historico
    .map((livro, i) => `${i + 1}. ${livro}`)
    .join("\n");

  modalTitulo.innerHTML = `Histórico de ${usuario.nome}`;
  modalTexto.innerHTML = historicoFormatado;
}

modal.show();
}






//## Funçoes do Autor
function abrirModalEditarAutor(index) {
  const autores = JSON.parse(localStorage.getItem('autores')) || [];
  const autor = autores[index];

  document.getElementById('indexAutor').value = index;
  document.getElementById('nomeAutorModal').value = autor.nome;
  document.getElementById('nacionalidadeAutorModal').value = autor.nacionalidade;
  document.getElementById('anoNascimentoAutorModal').value = autor.anoNascimento;

  const modal = new bootstrap.Modal(document.getElementById('modalEditarAutor'));
  modal.show();
}

function excluirAutor(index) {
  const autores = JSON.parse(localStorage.getItem('autores')) || [];
  autores.splice(index, 1);
  localStorage.setItem('autores', JSON.stringify(autores));

}




//## Funçoes dos Livros
function abrirModalEditarLivro(index) {
  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  const livro = livros[index];

  document.getElementById('indexLivro').value = index;
  document.getElementById('tituloLivroModal').value = livro.titulo;
  document.getElementById('autorLivroModal').value = livro.autor;
  document.getElementById('anoLivroModal').value = livro.ano;
  document.getElementById('generoLivroModal').value = livro.genero;

  const modal = new bootstrap.Modal(document.getElementById('modalEditarLivro'));
  modal.show();
}

function excluirLivro(index) {
  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  livros.splice(index, 1);
  localStorage.setItem('livros', JSON.stringify(livros));

}


function devolverLivro(index) {
  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  livros[index].disponibilidade = true;
  localStorage.setItem('livros', JSON.stringify(livros));
  location.reload()
}


function abrirModalEmprestimo(index) {
  document.getElementById("indexLivroEmprestimo").value = index;
  const modal = new bootstrap.Modal(document.getElementById("modalEmprestimo"));
  modal.show();
}

function listarMaisEmprestados() {
    const livros = JSON.parse(localStorage.getItem("livros")) || [];

    const ordenados = [...livros].sort((a, b) => b.totalEmprestimos - a.totalEmprestimos);

    ordenados.forEach((livro, index) => {
      alert(`${index + 1}. ${livro.titulo} — ${livro.totalEmprestimos} empréstimos`);
    });
}








//Altera a seção
function mostrarSecao(idSecao) {
    document.querySelectorAll('.secao-conteudo').forEach(secao => {
        secao.classList.remove('ativa');
    });

    document.getElementById(idSecao).classList.add('ativa');
}