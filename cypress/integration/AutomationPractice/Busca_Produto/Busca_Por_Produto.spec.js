/// <reference types="cypress" />

Given(/^que o usuario está logado$/, () => {
	cy.visit(Cypress.env('url'))
    cy.get('.login').click();
    //cy.wait(3000);
	cy.get('[id="email"]').type(Cypress.env('usuario'));
	cy.get('[id="passwd"]').type(Cypress.env('password'));
	cy.get('[id="SubmitLogin"]').click();
	cy.wait(3000);
});

When(/^preencher o campo de pesquisa produto$/, () => {
	//cy.get('[id="search_query_top"]').type('Faded Short Sleeve T-shirts');
    cy.get('form#searchbox').within(($form) => {
        cy.get('input[name=search_query]').type("Printed")
        cy.root().submit()
    })    
});

When(/^clica no botão pesquisar$/, () => {
	//cy.get('[name="submit_search"]').click();
    cy.get('form#productsSortForm').within(($form) => {
        cy.get('select').select('price:desc')
    })    
});

When(/^seleciona um produto$/, () => {
	//cy.get('ul.product_list').children().should('have.length', 5)
    cy.get('ul.product_list > li').within((el) => {
        cy.get('a.product-name').contains("Printed Chiffon Dress").click()
      })   
});

When(/^clica em adicionar ao carrinho$/, () => {
    cy.get('#add_to_cart').click() 
    cy.get('h2').should('contain.text', 'Product successfully added to your shopping cart').get('a[title="Proceed to checkout"]').click()
});

Then(/^Validar se produto está no carrinho$/, () => {
    cy.get('#cart_summary> tbody > tr > td:nth-child(2)').each(($elm, index, $list)=> {
        const t = $elm.text();
        expect(t).to.contains('Printed Chiffon Dress');
     })
});


