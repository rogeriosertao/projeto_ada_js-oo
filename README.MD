# 📚 Sistema de Biblioteca Digital

## 🎯 Objetivo
Simular o funcionamento de uma biblioteca digital, permitindo o cadastro de livros, autores e usuários, além da realização de empréstimos e devoluções com persistência local via `localStorage`.

## 🚀 Como Rodar
1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Use os formulários para cadastrar autores, livros e usuários.
4. Realize empréstimos e devoluções diretamente pela interface preenchendo os formulários.

## 🧠 Estrutura das Classes

- **Autor**: representa um autor com nome, nacionalidade e ano de nascimento.
- **Livro**: contém título, autor, ano, gênero, disponibilidade e histórico de empréstimos.
- **Usuario**: classe base com nome, matrícula e histórico.
- **UsuarioAluno / UsuarioProfessor**: herdam de `Usuario`, com matrícula personalizada e tipo específico.
- **Biblioteca**: gerencia os dados e operações de cadastro, empréstimo e devolução.

## 🖼️ Diagrama UML
Veja o arquivo `UML_simplificada.txt` para visualizar a estrutura das classes e suas relações.