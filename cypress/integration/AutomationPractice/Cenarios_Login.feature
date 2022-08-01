Feature: Login
    Como usuasrio, espero realizar login com sucesso
    ao inserir dados de um usuario já cadastrado

    Scenario: Logar com credenciais válidas
        Given que o usuário possa acessar a tela de login do site
            | email                  | password |
            | teste2021@teste.com.br | teste    |
        When preencho a caixa de texto do email
        And preencho a caixa de texto da senha
        And Clico no botão Sign In
        Then Devo ser direcionado para a pagina com informações sebre minha conta



