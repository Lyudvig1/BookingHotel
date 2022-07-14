/// <reference types="cypress" />

export class BasePage {
  goTo(url = "/") {
    cy.visit(url);
  }
}
