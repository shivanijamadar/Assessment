export class LoginPage {
    enterUsernameAndPassword(username, password) {
        cy.log(username);
        cy.log(password);
    }

    verifyDashboard() {
        cy.log('Dashboard is displayed');
    }
}
export const loginPage = new LoginPage();