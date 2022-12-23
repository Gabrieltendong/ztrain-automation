import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import assert from "assert";
import { HomePage } from "../pages/home.page";
import { OurWorld } from "../setup/types";



// Using a cucumber expression
When("user wait product load", async function (this: OurWorld)  {
  // Use the page instance from the World instance to navigate
    const homePage = new HomePage(this.page);
    await homePage.loadPage()
});

When('user click button add product to cart', async function(this: OurWorld){
  const homePage = new HomePage(this.page);
  this.parameters.cart_items = await homePage.getNumberItemsCart()
  await homePage.addProductCart()
})

Then('product increment to cart', async function(this: OurWorld){
    const homePage = new HomePage(this.page);
    const new_cart_items:any = await homePage.getNumberItemsCart()
    assert.notEqual(parseInt(this.parameters.cart_items) , parseInt(new_cart_items))
})