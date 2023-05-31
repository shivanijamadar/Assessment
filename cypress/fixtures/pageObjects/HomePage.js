export class HomePage {
    enterSearchString(product) {
        cy.get('#twotabsearchtextbox').type(product);
    }

    clickSearchButton() {
        cy.get('#nav-search-submit-button').click();
    }

    setPriceRange(priceRange) {
        cy.xpath('//span[text()="'+priceRange+'"]').click();
        cy.wrap(priceRange).as('priceRange');
    }
}
export const homePage = new HomePage();