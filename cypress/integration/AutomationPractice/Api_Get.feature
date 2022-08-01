Feature: Api 592f11060f95a3d3d46a987a
    - Enviar get
    - Exibir conteudo do campo nome
    - Validar status

    Scenario: Enviar get obter dados do nome e validar status
        Given o get foi enviado
        When Validar dados
        And Validar status
        Then Exibir conteudo do campo name