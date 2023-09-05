Feature: Verify the get posts in the api

@TC_API_001
    Scenario Outline: Verify GET Request
        Given the API endpoint <url>
        When I send a GET request
        Then verify the respose code as "<statusCode>"
        And the response body contains "<>"

        Examples:
            | url     | statusCode |
            | Value 1 | 200        |