<h1 align="center" style="text-align: center;">
  Server Graphql Api
</h1>

> Projeto desenvolvido com Graphql.

<p align="center">
  <a href="#project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Utilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<h2 id="project">📁 Projeto</h2>

Esse projeto e uma api em graphql para listagem e criação de posts.

<h2 id="technologies">💻 Tecnologias</h2>

Este projeto foi desenvolvido utilizando tecnologias como:

- Node.js
- TypeScript
- Apollo Server
- Prisma
- Graphql
- Type Graphql
- Zod
- Vitest

<h2 id="usage">💡 Utilização</h2>

Para executar a aplicação em sua máquina localmente, certifique-se de ter o `Node.js` e o `npm` instalados antes de prosseguir com as etapas abaixo:

1. Clone o projeto:

```
$ git clone https://github.com/melquisedeque-magalhaes/server-graphql-api
```

2. Acesse a pasta do projeto:

```
$ cd server-graphql-live
```

3. Instale as dependências:

```
$ npm install
```
ou
```
$ yarn
```
4. Suba o banco, através do docker

   crie seu arquivo de variaveis ambientes, copiando o arquivo .env.example

4. Suba o banco, atravez do docker

```
$ docker compose up -d
```  

5. Execute as migrações:

```
$ npx prisma migrate dev
```

6. Inicie o servidor:

```
$ yarn dev
```

⚠️ **Importante**: Crie um arquivo .env de acordo com o arquivo .env.example. No campo DATABASE_URL, especifique a URL do banco de dados que deseja utilizar.

<h2 id="license">📝 Licença</h2>

Este projeto está sob a licença MIT.

---

Feito com 💜 Melqui Sodré.

<div style="display: flex;">
  <a href="https://www.linkedin.com/in/melqui-sodre/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
</div>
