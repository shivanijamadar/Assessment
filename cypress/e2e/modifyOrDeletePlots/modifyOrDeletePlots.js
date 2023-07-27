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

Then("I click on three dot button besides a plot", () => {
  plotListTab.clickOnPlotListTab();
});

Then("Edit plot button should be visible", () => {
  plotListTab.verifyEditButtonIsVisible();
});

Then("I click on the Edit plot button", () => {
  plotListTab.clickOnEditButton();
});

Then("plot name, size, type, data fields should be visible and enabled", () => {
  plotListTab.enterPlotName()
  plotListTab.enterPlotType();
  plotListTab.enterPlotSize();
  plotListTab.enterData();
});

Then("I edit the plot name as {string}", () => {
  plotListTab.enterPlotName();
});

Then("I click on the Save button", () => {
  plotListTab.clickOnSaveButton();
});

Then("changes made should be visible in the Plot list under My Plots", () => {
  plotListTab.validateNewPlotAdded();
});

Then("Delete plot button should be visible", () => {
    plotListTab.verifyDeleteButtonIsVisible();
});

Then("I click on the Delete plot button", () => {
    plotListTab.clickOnDeleteButton();
});

Then("pop-up stating {string} should be visible", () => {
    plotListTab.validateNewPlotAdded();
});

Then("Cancel and Confirm button should be visible and enabled", () => {
    plotListTab.verifyCancelConfirmButton();
});

Then("I click on Confirm button", () => {
    plotListTab.clickOnConfirmButton();
});

Then("Plot should not be visible in the Plot list under My Plots", () => {
    plotListTab.validateNewPlotAdded();
});

Then("Changes made should be visible in the Plot list under My Plots", () => {
    plotListTab.validateNewPlotAdded();
});
