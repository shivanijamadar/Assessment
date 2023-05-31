import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps'
import { patientData } from '../../fixtures/pageObjects/patientData';

Given("API URL is {string}", (url) => {
  cy.visit(url);
});

When("a GET request is sent to the API", () => {
  patientData.sendGetRequest();
});

Then("the response is sorted with patient id", () => {
  patientData.checkResponseIsSortedById();
});

Then("Address in the response has a non-null Postal code with only numeric data", () => {
  patientData.checkAddressInTheResponse();
});

Then("gender value in the response is either male or female", () => {
  patientData.checkGenderInTheResponse();
});