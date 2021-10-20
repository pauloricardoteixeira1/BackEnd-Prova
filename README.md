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


        