# Primeiros passo Adonis 4.X

Este projeto foi criado com base na video aula:

[Iniciando com AdonisJS, um framework completo para NodeJS | Diego Fernandes
](https://www.youtube.com/watch?v=aysgHRmzG3w)

## Criação do Projeto
  ```Bash
    $ adonis new [NOME_PROJETO] --api-only
  ```

  OBS: ```--api-only``` remove os  view files
## Dependências Extras
- PostegreSQL
  ```Bash
    $ npm i pg
  ```

## Banco de Dados
- Criar um banco de dados antes de rodar o projeto
- Criar arquivo ```.env``` com base em ```.env.example```
```bash
  DB_CONNECTION=pg # PostgreSQL
  DB_HOST=127.0.0.1 #localhost (rodar localemente)
  DB_PORT=5432 #porta padrão do PG 
  DB_USER= #[USUARIO]
  DB_PASSWORD= #[PASSWORD]
  DB_DATABASE= #[NOME_BANCO]
```
#Rodar Servidor local
```Bash
  $ adonis serve --dev
  
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

## Rotas
- GET

  - Rota que necessita Berarer Token
  
    ```/app```

- POST

  - Registrar novo usuário  
    ```/register```
    
    username, email, password


  - Relizar login  
    ```/authenticate```

      email, password


# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds




