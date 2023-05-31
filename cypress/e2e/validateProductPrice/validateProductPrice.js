import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps'
import { homePage } from '../../fixtures/pageObjects/HomePage';
import { searchResultsPage } from '../../fixtures/pageObjects/SearchResultsPage';

Given("I am on the Amazon.in home page", () => {
  cy.visit("https://www.amazon.in/");
});

When("I enter {string} in the search box and click on search", (product) => {
  homePage.enterSearchString(product);
  homePage.clickSearchButton();
});

When("I filter the results by selecting the price range between {string}", (priceRange) => {
  homePage.setPriceRange(priceRange);
});

Then("validate all the products displayed on the page are should be in the price range selected", () => {
  searchResultsPage.validateProductPrices();
});