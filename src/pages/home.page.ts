import { Locator, Page } from "playwright";
import { config } from "../../config";

export class HomePage{

    readonly page: Page;
    readonly first_product: Locator;
    readonly btn_cart: Locator;
    readonly cart: Locator;

    constructor(page: Page){
        this.page=page
        this.first_product=page.locator('#style_popular_product_wrapper__z6J0h .style_card__gNEqX:nth-child(1)')
        this.btn_cart = page.locator('#style_popular_product_wrapper__z6J0h .style_card__gNEqX:nth-child(1) .style_btn_add_cart__WFoN1')
        this.cart = page.locator('div#style_content_cart_wrapper__mqNbf span')
    }

    async loadPage(){
        await this.page.waitForNavigation()
    }

    // function add product to cart
    async addProductCart() {
        await this.first_product.hover()
        await this.btn_cart.click()
    }

    // function get number items of cart
    async getNumberItemsCart(){
       return  await this.cart.textContent()
    }

}