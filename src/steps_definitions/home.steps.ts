import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { OurWorld } from "../setup/types";



// Using a cucumber expression
Given("user in the home page", async function (this: OurWorld)  {
  // Use the page instance from the World instance to navigate
    const homePage = new HomePage(this.page);
    await homePage.getOpenPage()
});

When('user click button add product to cart', async function(this: OurWorld){
  const homePage = new HomePage(this.page);
  await homePage.addProductCart()
})

When('product increment to cart', async function(this: OurWorld){
})