import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps'
import { loginPage } from '../../fixtures/pageObjects/LoginPage';
import { plotListTab } from '../../fixtures/pageObjects/PlotListTab';

Given("I navigate to {string}", (url) => {
  cy.visit(url);
});

When("I enter username as {string} and password as {string}", (username, password) => {
  loginPage.enterUsernameAndPassword(username, password);
});

Then("the Dashboard should be displayed", () => {
  loginPage.verifyDashboard();
});

Then("I click on the Plot list tab", () => {
  plotListTab.clickOnPlotListTab();
});

Then("I click on the Add plot button", () => {
  plotListTab.clickOnPlotListTab();
});

Then("I enter Plot Name as {string}", () => {
  plotListTab.enterPlotName();
});

Then("I enter Size as {string}", () => {
  plotListTab.enterPlotSize();
});

Then("I select Type as {string}", () => {
  plotListTab.enterPlotType();
});

Then("I enter Data as {string}", () => {
  plotListTab.enterData();
});

Then("I click on the Save button", () => {
  plotListTab.clickOnSaveButton();
});

Then("new record created should be added under My Plots", () => {
  plotListTab.validateNewPlotAdded();
});
