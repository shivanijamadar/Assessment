Feature: Verify adding a new plot to list
  As a user I visit landler.io and add a new plot

  Scenario: Editing an existing plot
    Given I navigate to "https://demoqa.com/"
    When I enter username as "Hofgut Neuhausen" and password as "Neuhausen@12"
    Then the Dashboard should be displayed 
    And I click on the Plot list tab
    And I click on three dot button besides a plot
    And Edit plot button should be visible
    And I click on the Edit plot button
    And plot name, size, type, data fields should be visible and enabled
    And I edit the plot name as "Waldeck ABC"
    And I click on the Save button
    And Changes made should be visible in the Plot list under My Plots

  Scenario: Deleting a plot
    Given I navigate to "https://demoqa.com/"
    When I enter username as "Hofgut Neuhausen" and password as "Neuhausen@12"
    Then the Dashboard should be displayed 
    And I click on the Plot list tab
    And I click on three dot button besides a plot
    And Delete plot button should be visible
    And I click on the Delete plot button
    And pop-up stating 'Are you sure you want to Delete?' should be visible
    And Cancel and Confirm button should be visible and enabled
    And I click on Confirm button
    And Plot should not be visible in the Plot list under My Plots
