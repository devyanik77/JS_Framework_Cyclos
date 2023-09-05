Feature: Swag Labs Login Functionality

        @TC001
        Scenario: Verify valid Swag Labs login
                Given user launch the swag labs application
                When login as "VALID_UNAME" and "VALID_PWD"
                Then verify user is on product page
                When user logs out of the application
                Then verify logout is successful

        @TC002
        Scenario Outline: Verify invalid Swag Labs login
                Given user launch the swag labs application
                When login as "LOCKED_OUT_UNAME" and "VALID_PWD"
                Then verify the "<errorMsg>"

                Examples:
                        | errorMsg                                            |
                        | Epic sadface: Sorry, this user has been locked out. |

        # @TC003
        # Scenario Outline: Verify invalid Swag Labs login
        #         Given user launch the swag labs application
        #         When login as "PROBLEM_UNAME" and "VALID_PWD"
        #         Then verify the "<errorMsg>"

        #         Examples:
        #                 | errorMsg |
        #                 |          |
