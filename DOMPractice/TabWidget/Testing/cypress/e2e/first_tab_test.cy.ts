/// <reference types="cypress" />

it('google test', function() {
  cy.visit('http://localhost:8000');
  cy.get('#inputText').type('FirstTab');
  cy.get('.inputForm > .btn').click();
  cy.wait(500);
  cy.get('#inputText').type('SecondTab');
  cy.get('.inputForm > .btn').click();
  cy.wait(500);
  cy.get('#inputText').type('ThirdTab');
  cy.get('.inputForm > .btn').click();
  cy.wait(500);
  cy.get('#inputText').type('FourthTab');
  cy.get('.inputForm > .btn').click();
  cy.wait(500);
  cy.get('#inputText').type('FifthTab');
  cy.get('.inputForm > .btn').click();
  cy.wait(500);
  cy.get('#FirstTab').click();
  cy.wait(500);
  cy.get('#SecondTab').click();
  cy.wait(500);
  cy.get('#ThirdTab').click();
  cy.wait(500);
  cy.get('#FourthTab').click();
  cy.wait(500);
  cy.get('#FifthTab').click();
  cy.wait(500);
});