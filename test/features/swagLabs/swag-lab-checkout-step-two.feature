
Feature: Swag Labs Checkout Step Two Functionality

    @TC005
    Scenario Outline: Verify checkout Step One
        Given user launch the swag labs application
        When login as "VALID_UNAME" and "VALID_PWD"
        Then verify user is on product page
        Then user selects the product "<product>" on the inventory page
        When User clicks the Add to Cart button on the inventory item page
        Then verify the added product in the cart page
        When User clicks the cart icon on the inventory page
        Then User will be redirected to the cart page
        # And verify the details of the added product as product name, product description and product price
        When User clicks on the checkout button
        Then verify redirected to the checkout page
        And User enters the first name "<fname>" in the form
        And User enters the last name "<lname>" in the form
        And User enters the postal code "<zip>" in the form
        And User clicks continue button
        Then verify redirected to the checkout overview page
        And User click on finish button
        Then verify redirected to the checkout complete page
        Then verify message "<expectedMessage>"
        And User click back to home button
        When user logs out of the application
        Then verify logout is successful

        Examples:
            | fname | lname   | zip     | product                 | expectedMessage           |
            | Mark  | Anthony | 4001007 | Sauce Labs Bolt T-Shirt | Thank you for your order! |



