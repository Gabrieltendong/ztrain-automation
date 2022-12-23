@user
Feature: User feature

    @priority:2
    @login
    Scenario Outline: User login account
        Given user in the login page
        When user fill '<email>' and '<password>'
        When user click button login
        Then user in product list

        Examples:
            | email         | password |
            | test@test.com | 12345678 |


    @priority:1
    @register
    Scenario Outline: User register account
        Given user in the register page
        When user fill '<email>' form '<password>' and '<confirme_password>'
        When user click button register
        Then user in home page

        Examples:
            | email                 | password | confirme_password |
            | testssdddded@test.com | 12345678 | 12345678          |