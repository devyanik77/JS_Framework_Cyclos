Feature: check banking Functionaliy

    @CYCLOS_TC005 @common
    Scenario Outline: Verify payment to user
        Given user launch the application
        When login as "VALID_UNAME" and "VALID_PWD"
        Then verify user is on dashboard page
        Then user clicks the pay user in dashboard page
        Then user enters the user "<ToUser>" to pay
        Then user enters the amount "<amount>" to pay
        Then user selects the scheduling "<Scheduling>"
        Then user enters the description "<description>"
        When user clicks on next
        Then User will be redirected to the Payment confirmation page
        Then user verify the Payment confirmation details
        When user clicks on confirm
        Then verify payment successful message "<notification-message>"
        When user logs out of the application
        Then verify logout is successful

        Examples:
            | ToUser   | amount | Scheduling | description   | notification-message                   |
            | Demo one | 2      | Pay now    | credit amount | The payment was successfully processed |


    @CYCLOS_TC006 @common1
    Scenario Outline: Verify payment to system
        Given user launch the application
        When login as "VALID_UNAME" and "VALID_PWD"
        Then verify user is on dashboard page
        Then user clicks the banking menu in dashboard page
        Then user clicks to the payment to system option
        Then user verify available balance
        Then user enters the amount "<amount>" to pay
        Then user selects the scheduling "<Scheduling>"
        Then user enters the description "<description>"
        When user clicks on next
        Then User will be redirected to the Payment confirmation page
        Then user verify the Payment confirmation details
        When user clicks on confirm
        Then verify message "<notification-message>"
        When user logs out of the application
        Then verify logout is successful

        Examples:
            | ToUser   | amount | Scheduling | description   | notification-message                   |
            | Demo one | 20     | Pay now    | credit amount | The payment was successfully processed |
