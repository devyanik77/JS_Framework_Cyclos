
Feature: Marketplace and advertisement

    @CYCLOS_TC007 @common1
    Scenario Outline: search Community related Advertisements
        Given user launch the application
        When login as "VALID_UNAME" and "VALID_PWD"
        Then verify user is on dashboard page
        Then user clicks the marketplace menu in dashboard page
        And Click on the advertisements in the marketplace
        Then click on the community category
        Then verify community related advertisements will appear
        And User click to dashboard menu
        When user logs out of the application
        Then verify logout is successful

        Examples:
            | fname | lname   | zip     | product1                | product2              | expectedMessage           |
            | Mark  | Anthony | 4001007 | Sauce Labs Bolt T-Shirt | Sauce Labs Bike Light | Thank you for your order! |

    @CYCLOS_TC008 @common1
    Scenario Outline: search Advertisement
        Given user launch the application
        When login as "VALID_UNAME" and "VALID_PWD"
        Then verify user is on dashboard page
        Then user clicks the marketplace menu in dashboard page
        And Click on the advertisements in the marketplace
        # And Click on the " Activities"
        # Then Click on which activity you want
        And User click to dashboard menu
        When user logs out of the application
        Then verify logout is successful

        Examples:
            | fname | lname   | zip     | product1                | product2              | expectedMessage           |
            | Mark  | Anthony | 4001007 | Sauce Labs Bolt T-Shirt | Sauce Labs Bike Light | Thank you for your order! |


