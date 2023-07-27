export class PlotListTab {
    clickOnPlotListTab() {
        cy.log('click on the Plot list tab');          
    }

    verifySendToSponsorButton(){
        cy.log('Send to Sponsor button is visible and enabled');
    }

    verifyEditProjectDropdown() {
        cy.log('Edit Project dropdown is visible and enabled');
    }

    verifyAddPlotButton() {
        cy.log('Add plot button is visible and enabled');
    }

    enterPlotName(){
        cy.log('Enter Plot Name');
    }
    
    enterPlotSize(){
        cy.log('Enter Plot Size');
    }

    enterPlotType(){
        cy.log('Enter Plot Size');
    }

    enterData(){
        cy.log('Enter Plot Data');
    }

    clickOnSaveButton(){
        cy.log('Click on Save button');
    }

    validateNewPlotAdded(){
        cy.log('New plot successfully added');
    }

    clickOn3DotButton(){
        cy.log('I click on 3 dots button');
    }

    verifyEditButtonIsVisible(){
        cy.log('Edit button is visible');
    }

    clickOnEditButton(){
        cy.log('Click on Edit button');
    }

    verifyDeleteButtonIsVisible(){
        cy.log('Delete button is visible');
    }

    clickOnDeleteButton(){
        cy.log('Click on Delete button');  
    }

    verifyDeletePopUp() {
        cy.log('Are you sure you want to Delete?');
    }

    verifyCancelConfirmButton() {
        cy.log('Cancel and Confirm button are visible');
    }

    clickOnConfirmButton(){
        cy.log('click on Confirm button');
    }

}
export const plotListTab = new PlotListTab();
