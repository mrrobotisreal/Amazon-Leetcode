/// <reference types="cypress" />

it('google test', function() {
  cy.visit('http://localhost:8000');
  cy.get('#inputText').type('First Tab');
  cy.get('.btn').click();
  cy.get('#inputText').type('Second Tab');
  cy.get('.btn').click();
  cy.get('#inputText').type('Third Tab');
  cy.get('.btn').click();
  cy.get('#inputText').type('Fourth Tab');
  cy.get('.btn').click();
  cy.get('#inputText').type('Fifth Tab');
  cy.get('.btn').click();
});