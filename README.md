# Back End - Prova

Prova de BackEnd realizada para vaga de programador node.js .

## Executar o projeto 
```
npm start 
```
O projeto será executado na porta 3000.
O mesmo está presente na plataforma git.
- [repositório no github](https://github.com/pauloricardoteixeira1/BackEnd-Prova)

Ainda, um versão estável se encontra na hospedada plataforma Heroku.
- [plataforma heroku](https://backendprova.herokuapp.com/)


Para fins de organização, optou-se por seguir o modelo MVC para a estruturação das pastas e arquivos.


Foi disponibilizado um arquivo (Rotas) com o fim de facilitar os testes da api utilizando o aplicativo Insomnia. É necessario realizar a configuração do token como variável. O Login se encontra na rota de POST http://localhost:3000/login onde é necessário passar no corpo da requisição o nome e senha.  

## Rotas Disponíveis 
    Usuário
    (POST) Criação de cargos:          /cargoCreate 
    (POST) Criação de usuários:        /usuarioCreate
    (GET) Leitura de todos usuários:   /usuarioReadAll
    (PUT) Atualização de usuários:     /usuarioUpdate
    (DELETE) Deleção de usuário        /usuarioRemover/:id

    Empresa
    (POST) Criação de empresa:         /empresaCreate
    (GET) Leitura de todas empresas:   /empresaReadAll 
    (GET) Leitura única de empresas:   /empresaReadOne/:id 
    (GET) Leitura de produtos da empresa:   /empresaReadProducts/:id 
    (GET) Leitura de serviços da empresa:   /empresaReadServices/:id/:produtoId
    (PUT) Atualização de empresa:      /empresaUpdate
    (DELETE) Deleção de empresa:       /empresaRemover/:id

    Produto
    (POST) Criação de produto:         /produtosCreate
    (GET) Leitura de todos produtos:   /produtosReadAll
    (GET) Leitura de serviços da produtos:   /produtosReadServices/:id
    (PATCH) Atualização de produto:    /produtosUpdate
    (DELETE) Deleção de produto:       /produtosRemover/:id/:empresa

    Serviços
    (POST) Criação de serviço:         /servicosCreate
    (GET) Leitura de todos serviços:   /servicosReadAll
    (PATCH) Atualização de serviço:    /servicosUpdate
    (DELETE) Deleção de serviço:       /servicosRemover/:id/:produto


## Estudo-JS

Back-end (Node.js) O objetivo é construir uma aplicação que possua cadastro de usuários e autenticação, e estes usuários poderão realizar cadastro de empresas, produtos e serviços, assim como listar, editar e deletar.
As empresas podem conter um ou mais produtos, assim como cada produto pode conter um ou mais serviços.
O usuario deve ver somente suas empresas e produtos.

Empresas (GET/POST/UPDATE/DELETE): Deve conter nome da empresa (tamanho maximo 100 caracter), cnpj (tamanho maximo 14 caracter), array de protudos.
Produtos (GET/POST/UPDATE/DELETE): Deve conter nome do protudo (tamanho maximo 50 caracter), array de serviços.

É muito importante validar as informações recebidas antes de tomar qualquer ação. Deve-se utilizar o banco MongoDB.
Podendo este ser local, ou utilizar a versão gratúita do Atlas.
    
Extra: Autenticação com JWT. Dockerfile para rodar aplicação. Gestão das variáveis de ambiente. Delegar permissões para usuario, assim podendo ter usuario que possa ver somente seus registros (Empresas, Produtos e Serviços) ou um "administrador" que tenha acesso a todos os registros do banco.

Levaremos em consideração: Tempo, esforço e qualidade do código. Então, é muito importante manter o código limpo e organizado, para fácil entendimento. Qualquer extra não citado a cima também sera levado em consideração.


        