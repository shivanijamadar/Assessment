Feature: Verify navigation to Plot list tab
  Login to landler.io and open the Plot list

  Scenario: Verify buttons on the Plot list tab
    Given I navigate to "https://demoqa.com/"
    When I enter username as "Hofgut Neuhausen" and password as "Neuhausen@12"
    Then the Dashboard should be displayed 
    And I click on the Plot list tab
    And Send to Sponsor button should be visible and enabled
    And Edit Project dropdown should be visible and enabled
    And Add plot button should be visible and enabled
