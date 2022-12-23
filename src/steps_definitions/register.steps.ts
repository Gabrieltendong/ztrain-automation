import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import assert from "assert";
import { config } from "../../config";
import { RegisterPage } from "../pages/register.page";
import { OurWorld } from "../setup/types";



// Using a cucumber expression
Given("user in the register page", async function (this: OurWorld)  {
  // Use the page instance from the World instance to navigate
    const registerPage = new RegisterPage(this.page);
    await registerPage.openPage()
});

When(/^user fill '([^']*)' form '([^']*)' and '([^']*)'$/, async function(this: OurWorld, email: string, password: string, confirme_password: string){
  const registerPage = new RegisterPage(this.page);
  await registerPage.setEmail(email)
  await registerPage.setPassword(password)
  await registerPage.setConfirmePassword(confirme_password)
})

When('user click button register', async function(this: OurWorld){
  const registerPage = new RegisterPage(this.page);
  await registerPage.handleRegister()
})

Then('user in home page', async function (this: OurWorld) {
  await expect(this.page).toHaveURL(config.baseUrl + '/en/home')
})