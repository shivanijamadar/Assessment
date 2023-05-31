Feature: Product Search and Validation
  As a user I visit the page, search for a product and validate results

  Scenario: Searching for a product and validating the results
    Given I am on the Amazon.in home page
    When I enter 'Mobile' in the search box and click on search
    And I filter the results by selecting the price range between '₹10,000 - ₹20,000'
    Then validate all the products displayed on the page are should be in the price range selected 