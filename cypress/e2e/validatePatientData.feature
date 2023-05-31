Feature: Validate GET API Response
  Hit the GET Api and validate the response

  Scenario: Validate the response criteria
    Given API URL is "http://hapi.fhir.org/"
    When a GET request is sent to the API
    Then the response is sorted with patient id 
    #Ids in the Response is not sorted
    And Address in the response has a non-null Postal code with only numeric data
    And gender value in the response is either male or female