/// <reference types="cypress" />
import { Utils } from "../utils/util";
import { BasePage } from "./BasePage";
const utils = new Utils();
export class MainPage extends BasePage {
  constructor() {
    super();
    this.searchInput = 'input[id ="ss"]';
    this.calendar = '[class="xp__dates-inner"]';
    this.getDateNow = (date) => {
      return cy.get(`[data-date="${date}"]`);
    };
    this.guestCount = '[class="xp__guests__count"]';
    this.increaseCount = '[aria-label="Increase number of Adults"]';
    this.addedGuestCount =
      ".sb-group__field-adults > .bui-stepper > .bui-stepper__wrapper > .bui-stepper__display";
    this.searchButton = '[class="sb-searchbox__button "]';
  }

  searchName() {
    cy.get(this.searchInput).click().type("Dilijan");
  }
  selectStartDate() {
    cy.get(this.calendar).click();
    this.getDateNow(utils.dateNow()).click();
  }
  selectEndDate() {
    this.getDateNow(utils.dateRangeSeven()).click();
  }
  increaseGuestCount() {
    cy.get(this.guestCount).click();
    cy.get(this.increaseCount).click();
  }
  getGuestCount() {
    cy.get(this.addedGuestCount).then((el) => {
      let txt = el.text();
      cy.wrap(txt).as("countOfGuest");
      console.log(txt);
    });
  }
  search() {
    cy.get(this.searchButton).click();
  }
}

export const mainPage = new MainPage();
