/// <reference types="cypress" />
let nome = ""
let statusCode = 0
let retorno = ""
Given(/^o get foi enviado$/, () => {

    cy.request({
        method: 'GET',
        url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
    }).then((resp) => {
        retorno = resp
        nome = resp.body.data.list.name
        statusCode = resp.status
    });

});
When(/^Validar dados$/, () => {
    expect(retorno.body.data).to.not.equal(null)
})
When(/^Validar status$/, () => {
    expect(statusCode).to.eq(200)
});

Then(/^Exibir conteudo do campo name$/, () => {
    cy.log("name: " + nome)
});
