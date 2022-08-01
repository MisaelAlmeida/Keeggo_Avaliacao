/// <reference types="cypress" />

Given(/^que o usuário possa acessar a tela de login do site$/, () => {
	cy.visit(Cypress.env('url'))
    cy.get('.login').click();
    cy.wait(3000);
});

When(/^preencho a caixa de texto do email$/, () => {
	cy.get('[id="email"]').type(Cypress.env('usuario'));
    //cy.get('#email').type(Cypress.env('usuario'));
});

When(/^preencho a caixa de texto da senha$/, () => {
	cy.get('[id="passwd"]').type(Cypress.env('password'));
});

When(/^Clico no botão Sign In$/, () => {
	cy.get('[id="SubmitLogin"]').click();
	cy.wait(3000);
});

Then(/^Devo ser direcionado para a pagina com informações sebre minha conta$/, () => {
	cy.url().should('be.equal', 'http://automationpractice.com/index.php?controller=my-account')
});


