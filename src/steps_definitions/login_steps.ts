import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { config } from "../../config";
import { LoginPage } from "../pages/login.page";
import { OurWorld } from "../setup/types";



// Using a cucumber expression
Given("user in the login page", async function (this: OurWorld)  {
  // Use the page instance from the World instance to navigate
    const loginpage = new LoginPage(this.page);
    await loginpage.openPage()
});

When(/^user fill '([^']*)' and '([^']*)'$/, async function(this: OurWorld, email: string, password: string){
  const loginpage = new LoginPage(this.page);
  await loginpage.setEmail(email)
  await loginpage.setPassword(password)
})

When('user click button login', async function(this: OurWorld){
  const loginpage = new LoginPage(this.page);
  await loginpage.handleLogin()
})

Then('user in product list', async function (this: OurWorld) {
  await expect(this.page).toHaveURL(config.baseUrl + '/en/home')
})