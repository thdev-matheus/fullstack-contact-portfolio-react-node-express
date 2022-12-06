# Executando Sem o Docker

Se você não possui o docker instalado em sua máquina, não desanime pois ainda é totalmente possível executar a aplicação inteira. Para isso você DEVE ter instalado o PostgreSQL em sua máquina local e criar um database para ser usado por esta aplicação. Satisfeita esta condição, seguimos o passo-a-passo. Vejamos:

<br>
<br>

## Configurando e Executando o Back End
---

- Entre na pasta backend.
- Faça uma cópia do arquivo ".env.example" e renomeie para ".env".
- Popule o arquivo .env com os dados que faltam da seguinte maneira:

```.env
POSTGRES_HOST=localhost
POSTGRES_USER=usuárioDoPostgres
POSTGRES_PASSWORD=senhaDoDatabase
POSTGRES_DB=nomeDoDatabase
POSTGRES_PORT=portaDoPostgresLocal(geralmente 5432)
SERVER_PORT=portaDaApi

SECRET_KEY=stringDoSeuDesejo
```

- Abra um terminal na pasta backend e digite:

```shell
npm run typeorm migration:run -- -d ./src/data-source.ts
```

- Ainda no terminal da pasta backend digite o comando para executar a api

```shell
npm run start
```

Se tudo der certo no console aparecerá que a porta do banco de dados e a porta da api configurada no arquivo .env

<br>
<br>

## Configurando e Executando o Front End
---

- Entre na pasta frontend, abra um terminal nela (sem parar a execução do terminal da API) e digite o seguinte comando:

```shell
npm i
```

- Depois que finalizar a instalação dos pacotes, no mesmo terminal digite para executar o front end:

```shell
npm start
```

Prontinho, se a aplicação não abrir automaticamente, basta no navegador acessar "localhost:3000" e a aplicação irá aparecer no browser.

<br>
<br>

Legal, né?

Depois me dá um feedback pra que eu melhore ainda mais o meu código.