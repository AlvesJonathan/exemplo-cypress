/// <reference types="cypress" />

it('Acessando URL', () => {
    cy.visit('?id_category=3&controller=category')
        .visit('?id_category=5&controller=category')
          .visit('?id_category=8&controller=category')
});

/* it('Visit FRIBOI', () => {
  cy.visit('https://portal.friboi.com.br/')
  cy.get('#username').type('admin')
  cy.get('#password').type('admin123')

}); */

