
Feature: pay user Functionality

        @CYCLOS_TC004 @common
        Scenario Outline: check the pay user functionality
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
                        | ToUser   | amount | Scheduling | description   | notification-message                    |
                        | Demo one | 10     | Pay now    | credit amount | The payment was successfully processed! |

