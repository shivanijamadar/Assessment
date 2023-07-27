import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps'
import { loginPage } from '../../fixtures/pageObjects/LoginPage';
import { plotListTab } from '../../fixtures/pageObjects/PlotListTab';

Given("I navigate to {string}", (url) => {
  cy.visit(url);
});

When("I enter username as {string} and password as {string}", (username, password) => {
  loginPage.enterUsernameAndPassword();
});

Then("the Dashboard should be displayed", () => {
  loginPage.verifyDashboard();
});

Then("I click on the Plot list tab", () => {
  plotListTab.clickOnPlotListTab();
});

Then("Send to Sponsor button should be visible and enabled", () => {
  plotListTab.verifySendToSponsorButton();
});

Then("Edit Project dropdown should be visible and enabled", () => {
  plotListTab.verifyEditProjectDropdown();
});

Then("Add plot button should be visible and enabled", () => {
  plotListTab.verifyAddPlotButton();
});
