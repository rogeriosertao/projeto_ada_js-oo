import { Livro } from "./classes/Livro.js";
import { Autor } from "./classes/Autor.js";
import { UsuarioAluno } from "./classes/UsuarioAluno.js";
import { UsuarioProfessor } from "./classes/UsuarioProfessor.js";
import { Biblioteca } from "./classes/Biblioteca.js";

const biblioteca = new Biblioteca();




/* ####### Funcionalidades do usuário ##### */

document.getElementById("formLivro").addEventListener("submit", e => {
  e.preventDefault();
  const livro = new Livro(
    document.getElementById("titulo").value,
    document.getElementById("selectAutores").value,
    document.getElementById("ano").value,
    document.getElementById("genero").value
  );
  biblioteca.cadastrarLivro(livro);
  recuperaListagemLivros()
  e.target.reset();
});


// Recuperar os dados dos Livros
function recuperaListagemLivros() {
  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  const filtro = document.getElementById('filtroLivro').value.toLowerCase();
  const tbody = document.querySelector("#tabelaLivros tbody");
  tbody.innerHTML = '';

  livros.forEach((livro, index) => {
    const titulo = livro.titulo.toLowerCase();
    const autor = livro.autor.toLowerCase();
    const genero = livro.genero.toLowerCase();

    if (titulo.includes(filtro) || autor.includes(filtro) || genero.includes(filtro)) {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.ano}</td>
        <td>${livro.genero}</td>
        <td>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-sm btn-warning" onclick="abrirModalEditarLivro(${index})">Editar</button>
            <button type="button" class="btn btn-sm btn-danger"  onclick="excluirLivro(${index}); location.reload();">Excluir</button>
          </div>
        </td>
      `;
      tbody.appendChild(linha);
    }
  });
}

document.getElementById('filtroLivro').addEventListener('input', recuperaListagemLivros);

document.getElementById('formEditarLivro').addEventListener('submit', function(e) {
  e.preventDefault();

  const index = document.getElementById('indexLivro').value;
  const titulo = document.getElementById('tituloLivroModal').value;
  const autor = document.getElementById('autorLivroModal').value
  const ano = document.getElementById('anoLivroModal').value;
  const genero = document.getElementById('generoLivroModal').value;

  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  livros[index] = { titulo, autor, ano, genero };

  localStorage.setItem('livros', JSON.stringify(livros));
  recuperaListagemLivros();

  bootstrap.Modal.getInstance(document.getElementById('modalEditarLivro')).hide();
});






/* ####### Funcionalidades do usuário ##### */
//Recuperar os dados dos Autores
function recuperaListagemAutores() {
  const autores = JSON.parse(localStorage.getItem('autores')) || [];
  const filtro = document.getElementById('filtroAutor').value.toLowerCase();
  const tbody = document.querySelector("#tabelaAutores tbody");
  tbody.innerHTML = '';

  autores.forEach((autor, index) => {
    const nome = autor.nome.toLowerCase();
    const nacionalidade = autor.nacionalidade.toLowerCase();

    if (nome.includes(filtro) || nacionalidade.includes(filtro)) {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${autor.nome}</td>
        <td>${autor.nacionalidade}</td>
        <td>${autor.anoNascimento}</td>
        <td>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-sm btn-warning" onclick="abrirModalEditarAutor(${index})">Editar</button>
            <button type="button" class="btn btn-sm btn-danger"  onclick="excluirAutor(${index}); location.reload();">Excluir</button>
          </div>
        </td>
      `;
      tbody.appendChild(linha);
    }
  });
}

document.getElementById('filtroAutor').addEventListener('input', recuperaListagemAutores);

document.getElementById('formEditarAutor').addEventListener('submit', function(e) {
  e.preventDefault();

  const index = document.getElementById('indexAutor').value;
  const nacionalidade = document.getElementById('nacionalidadeAutorModal').value;
  const anoNascimento = document.getElementById('anoNascimentoAutorModal').value
  const nome = document.getElementById('nomeAutorModal').value;

  const autores = JSON.parse(localStorage.getItem('autores')) || [];
  autores[index] = { nome, nacionalidade, anoNascimento };

  localStorage.setItem('autores', JSON.stringify(autores));
  recuperaListagemAutores();

  bootstrap.Modal.getInstance(document.getElementById('modalEditarAutor')).hide();
});


function selecaoAutores(){
    const autores = JSON.parse(localStorage.getItem('autores')) || [];
    const select = document.getElementById("selectAutores");

    autores.forEach((autor) => {
      const option = document.createElement("option");
      option.value = autor.nome;
      option.textContent = autor.nome;
      select.appendChild(option);
    });
  };


 document.getElementById("formAutor").addEventListener("submit", e => {
  e.preventDefault();
  const autor = new Autor(
    document.getElementById("nomeAutor").value,
    document.getElementById("nacionalidade").value,
    document.getElementById("anoNascimento").value,
  );
  biblioteca.cadastrarAutor(autor);
  recuperaListagemAutores()
  e.target.reset();
});







/* ####### Funcionalidades do usuário ##### */
function criarUsuarioAluno(nome) {
  const usuario = new UsuarioAluno(nome);
  usuario.gerarMatricula();
  biblioteca.cadastrarUsuario(usuario);
}

function criarUsuarioProfessor(nome) {
  const usuario = new UsuarioProfessor(nome);
  usuario.gerarMatricula();
  biblioteca.cadastrarUsuario(usuario);
}

document.getElementById("formUsuario").addEventListener("submit", e => {
  e.preventDefault();

  const nome = document.getElementById("nomeUsuario").value;
  const selecaoUsr = document.querySelector('input[name="radioUsuario"]:checked')?.value;


  if(selecaoUsr == 'aluno'){
    criarUsuarioAluno(nome);
  } else{
    criarUsuarioProfessor(nome);
  }
  
  recuperaListagemUsuarios()
  e.target.reset();
});


// Recuperar os dados dos usuários
function recuperaListagemUsuarios() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const filtro = document.getElementById('filtroUsuario').value.toLowerCase();
  const tbody = document.querySelector("#tabelaUsuario tbody");
  tbody.innerHTML = '';

  usuarios.forEach((usuario, index) => {
    const nome = usuario.nome.toLowerCase();
    const matricula = usuario.matricula.toLowerCase();

    if (nome.includes(filtro) || matricula.includes(filtro)) {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${usuario.matricula}</td>
        <td>${usuario.nome}</td>
        <td>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-sm btn-warning m-1" onclick="abrirModalEditar(${index})">Editar</button>
            <button type="button" class="btn btn-sm btn-danger m-1"  onclick="excluirUsuario(${index}); location.reload();">Excluir</button>
            <button type="button" class="btn btn-sm btn-info m-1"  onclick="exibirHistoricoEmprestimo(${index})">Histórico</button>
          </div>
        </td>
      `;
      tbody.appendChild(linha);
    }
  });
}

document.getElementById('filtroUsuario').addEventListener('input', recuperaListagemUsuarios);

document.getElementById('formEditarUsuario').addEventListener('submit', function(e) {
  e.preventDefault();

  const index = document.getElementById('indexUsuario').value;
  const matricula = document.getElementById('matriculaUsuarioModal').value;
  const nome = document.getElementById('nomeUsuarioModal').value;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios[index] = { matricula, nome };

  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  recuperaListagemUsuarios();

  bootstrap.Modal.getInstance(document.getElementById('modalEditarUsuario')).hide();
});






/* #### Funções de Emprestimo e devolução dos livros ##### */
function recuperaListagemLivrosBiblioteca() {
  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  const filtro = document.getElementById('filtroLivro_biblio').value.toLowerCase();
  const tbody = document.querySelector("#tabelaLivros_biblio tbody");
  tbody.innerHTML = '';

  livros.forEach((livro, index) => {
    const titulo = livro.titulo.toLowerCase();
    const autor = livro.autor.toLowerCase();
    const genero = livro.genero.toLowerCase();

    if (titulo.includes(filtro) || autor.includes(filtro) || genero.includes(filtro)) {
      const status = livro.disponibilidade ? "Disponível" : `Emprestado para: ${livro.emprestadoPara}`;
      const acaoBotao = !livro.disponibilidade
        ? `<button class="btn btn-sm btn-warning" onclick="devolverLivro(${index})">Devolver</button>`
        : `<button class="btn btn-sm btn-success" onclick="abrirModalEmprestimo(${index})">Emprestar</button>`;

      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.ano}</td>
        <td>${livro.genero}</td>
        <td>${status}</td>
        <td>
          <div class="btn-group" role="group">
            ${acaoBotao}
          </div>
        </td>
      `;
      tbody.appendChild(linha);
    }
  });
}

document.getElementById('filtroLivro_biblio').addEventListener('input', recuperaListagemLivrosBiblioteca);


document.getElementById("formEmprestimo").addEventListener("submit", function (e) {
  e.preventDefault();
  const index = document.getElementById("indexLivroEmprestimo").value;
  const matricula = document.getElementById("matriculaUsuario").value.trim();

  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  localStorage.setItem('livros', JSON.stringify(livros));
  biblioteca.emprestarLivro(livros[index].titulo, matricula)

  const modal = bootstrap.Modal.getInstance(document.getElementById("modalEmprestimo"));
  modal.hide();
  recuperaListagemLivrosBiblioteca();
});







/* #### Funções Diversas ##### */
window.onload = function () {
    recuperaListagemLivrosBiblioteca()
    recuperaListagemLivros();
    recuperaListagemAutores();
    recuperaListagemUsuarios();
    selecaoAutores();
  };


document.getElementById("limparDadosLivros").addEventListener("click", e => {
  e.preventDefault();
  localStorage.removeItem("livros");
  recuperaListagemLivros();
});

document.getElementById("limparTudo").addEventListener("click", e => {
  e.preventDefault();
  localStorage.clear()
});