/// <reference types="cypress" />

it('google test', function() {
  cy.visit('http://localhost:8000');
  cy.get('#inputText').type('First Tab');
  cy.get('.btn').click();
});