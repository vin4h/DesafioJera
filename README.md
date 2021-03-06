<h1>Desafio Jera</h1>

<h2>Api utilizando NodeJS</h2>

---
## Informações adicionais
### <p style="color:red">Lembrando que para utilizar o projeto deve ter o Mysql, NodeJS e Yarn na sua máquina</p>

#### Após clone do projeto
#### digite no terminal o seguinte comando
#### irá baixar todas as dependencias do projeto.
    yarn

### Mysql
#### Banco de dados relacional podendo ser usado a partir da versão 5.7 pois existe um campo JSON e somente a partir desta versão foi aceita.
#### Criar uma database com nome <b>desafiojera</b>
#### mais informações  arquivo ormconfig.json tem as config da base de dados.

---

### Para rodar as migrations (tabelas do banco)
    typeorm migration:run

### Para rodar o servidor
    dev:server

---

## Tecnologias Utilizadas

    Yarn 📋
    Gerenciado de dependencias
---
    Express 📋
    Gerenciador de Rotas
---
    Cors 📋
    Responsável por habilitar as requisições
--- 
    Uuid 📋
    Responsável por gerar um identificador único ou pseudo-único
---
    Mysql 📋
    SGBD para armazenamento de dados (Relacional)
---
    Typeorm 📋
    Responsável por fazer conexão com o banco de dados, gerar migrations, models e criação de repositorios
---
    Typescript 📋
    Responsável por fazer tipagem de dados e váriaveis do JavaScript
---
    bcryptjs 📋
    Responsável por criptografar as senhas usando alfanumerico + caracteres especiais
---
    JWT 📋
    Json Web Token utilizado para ser o token de autenticação das rotas após o inicio da sessão
---

    Babel 📋
    Utilizado para transpilar o código TypeScript para JavaScript  
---