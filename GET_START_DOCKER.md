# Executando com o docker.

Se você possui em sua máquina o docker instalado, a execução desta aplicação se fará muito simples, Senão vejamos:

- Entre na pasta backend.
- Faça uma cópia do arquivo ".env.example" e renomeie para ".env".
- Popule o arquivo .env com os dados que faltam.
- Entre na pasta frontend, abra um terminal nela e digite o seguinte comando:

```shell
npm i
```

> Toda  aaplicação foi feita usando o npm como gerenciador de pacotes então é imperativo que você use o npm para não haver erros.

- Abra o arquivo docker-compose.yml e edite o health check do serviço database para o usuário e o database que você configurou no arquivo .env

- Por último basta abrir um terminal na raiz do projeto e digitar:

```shell
docker compose up
```

> Se a sua versão do compose for a antiga, não esqueça o hífen (docker-compose up)

<br>
<br>

O build tende a ser um pouco demorado a depender da máquina.

Viu como é fácil? Bom, agora só experimentar a aplicação funcionando e me dar um feedback se gostou e no que pode melhorar.