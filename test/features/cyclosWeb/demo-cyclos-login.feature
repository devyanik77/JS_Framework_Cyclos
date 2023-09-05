Feature: Cyclose demo Login Functionality

        @CYCLOS_TC001 @common
        Scenario: Verify valid cyclose login
                Given user launch the application
                When login as "VALID_UNAME" and "VALID_PWD"
                Then verify user is on dashboard page
                When user logs out of the application
                Then verify logout is successful

        @CYCLOS_TC002 @common1
        Scenario Outline: Verify invalid cyclose login
                Given user launch the application
                When login as "INVALID_UNAME" and "VALID_PWD"
                Then verify the notification message "<errorMsg>" appeared
                Examples:
                        | errorMsg                                                    |
                        | The given name / password are incorrect. Please, try again. |

        @CYCLOS_TC003 @common1
        Scenario: Test Logout function of cyclose application
                Given user launch the application
                When login as "VALID_UNAME" and "VALID_PWD"
                Then verify user is on dashboard page
                When user logs out of the application
                Then verify logout is successful
