Feature: Compra de produtos
    Como usuario:
    - quero entrar na minha conta
    - quero selecionar o produto
    - quero adicionar ao carrinho
    - quero verificar carrinho

    Scenario: Usuario logado busca por produto e adiciona no carrinho
        Given que o usuario está logado
        When preencher o campo de pesquisa produto
        And clica no botão pesquisar
        And seleciona um produto
        And clica em adicionar ao carrinho
        Then Validar se produto está no carrinho

