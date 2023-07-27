Feature: Verify adding a new plot to list
  As a user I visit landler.io and add a new plot

  Scenario: Adding a new plot
    Given I navigate to "https://demoqa.com/"
    When I enter username as "Hofgut Neuhausen" and password as "Neuhausen@12"
    Then the Dashboard should be displayed 
    And I click on the Plot list tab
    And I click on the Add plot button
    And I enter Plot Name as "Auerland"
    And I enter Size as "12220.4 ha"
    And I select Type as "Grassland"
    And I enter Data as "climate information"
    And I click on the Save button
    And new record created should be added under My Plots
    
