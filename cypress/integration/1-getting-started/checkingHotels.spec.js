/// <reference types="cypress" />
import { mainPage } from "../../pages/MainPage";
import { resultsPage } from "../../pages/SearchResultsPage";
describe("example to-do app", () => {
  before(() => {
    mainPage.goTo();
  });
  it("Book a hotel room", () => {
    mainPage.searchName();
    mainPage.selectStartDate();
    mainPage.selectEndDate();
    mainPage.increaseGuestCount();
    mainPage.getGuestCount();
    mainPage.search();
    resultsPage.verifyGuestCount();
    resultsPage.verifySearchResult();
    resultsPage.verifyRaitingStars();
  });
});
