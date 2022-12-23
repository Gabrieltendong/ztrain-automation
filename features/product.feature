Feature: feature product

    @add_product_cart
    Scenario: add product to cart
        Given user in the home page
        When user click button add product to cart
        Then product increment to cart