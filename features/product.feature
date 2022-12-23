@product
Feature: feature product

    @add_product_cart
    Scenario Outline: add product to cart
        Given user in the login page
        When user fill '<email>' and '<password>'
        When user click button login
        Then user in product list
        When user wait product load
        When user click button add product to cart
        Then product increment to cart

        Examples:
            | email         | password |
            | test@test.com | 12345678 |