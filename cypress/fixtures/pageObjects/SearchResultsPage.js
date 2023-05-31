export class SearchResultsPage {
    validateProductPrices() {
      cy.get('@priceRange').then((priceRange) => {
        
        var rangeStart = parseInt(priceRange.split('-')[0].replace(',','').replace('₹', '').trim());
        var rangeEnd = parseInt(priceRange.split('-')[1].replace(',','').replace('₹', '').trim());

        cy.xpath('//div[contains(@data-cel-widget,"RESULTS")]//*[@class="a-price-whole"]').each((value) => {
            var price = value.text().replace(',', '')
            if(price > rangeStart && price < rangeEnd){
                expect(parseInt(price)).is.greaterThan(rangeStart).and.lessThan(rangeEnd);
            }
            else{
              throw new Error('Products are not in the given price range');
            }
          });
      });
    }
}
export const searchResultsPage = new SearchResultsPage();