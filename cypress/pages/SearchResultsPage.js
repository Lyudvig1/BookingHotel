/// <reference types="cypress" />
import { BasePage } from "./BasePage";
export class ResultsPage extends BasePage {
  constructor() {
    super();
    this.guestCount = '[data-testid="occupancy-config"]';
    this.searchResult = '[data-testid="property-card"]';
    this.filterRaiting =
      '.f7d4209a37 > [data-filters-group="class"] > [data-filters-item="class:class=4"] > .efeda70352 > .bbdb949247';
    this.raitingStars = '[class="b6dc9a9e69 adc357e4f1 fe621d6382"]';
  }
  verifyGuestCount() {
    cy.get(this.guestCount).then((el) => {
      let text = el.text();
      let firstChar = text.substring(0, 1);
      cy.get("@countOfGuest").should("equal", firstChar);
    });
  }

  verifySearchResult() {
    cy.get(this.searchResult)
      .should("contain.text", "Dilijan")
      .each(($el, index, list) => {
        $el.text();
      });
  }

  verifyRaitingStars() {
    cy.get(this.filterRaiting).click();
    cy.wait(2000);
    cy.get(this.raitingStars).each(($el, index, list) => {
      let number = list.length;
      expect(number).to.equal(4);
    });
  }
  verifyTitle() {
    cy.fixture("example").then((el) => {
      cy.title().should('contain.text',el.title);
    });
  }
}
export const resultsPage = new ResultsPage();
