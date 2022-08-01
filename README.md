# Keeggo_Avaliacao



## Sobre
Projeto criado para dar continuidade a um processo seletivo.
O desafio é criar alguns cenarios para a pagina http://automationpractice.com/index.php.

Usando o IDE Visual Studio Code, foi instalado o cypress versão 8.1 e para atender a construção dos cenarios na metodologia BDD, foi instalado o Cucumber.
Como padrão para a execução dos cenarios do cypress, a inteligencia executa os arquivos ".js" localizados no diretorio integration, entretanto, após a instalação do cucumber, é necessario adicionar as linhas no cypress.json

...

    "ignoreTestFiles": "*.js",
    
    "testFiles": "**/*.{feature,features}"
    
...

Desta forma os arquivos ".feature" criados com os cenarios, são encontrados e executados acionando os arquivos ".js"




## Tecnologias utilizadas
- Cypress
- Cucumber

## Instalações
npm init --yes

npm install -D cypress@8.1

npm instal -D cypress-cucumber-preprocessor

## Estrutura dos diretorios

/cypress/integration/*.feature => Corresponde aos cenarios de testes

/cypress/itegration/Api_Get/Trello_Api.spec.js corresponde ao cenario Api_Get.feature
/cypress/itegration/Busca_Produto/Busca_Por_Produto.spec.js corresponde ao cenario Busca_Produto.feature
/cypress/itegration/Cenarios_Login/Login.spec.js corresponde ao cenario Cenarios_Login.feature


