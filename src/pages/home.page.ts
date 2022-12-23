import { Locator, Page } from "playwright";
import { config } from "../../config";

export class HomePage{

    readonly page: Page;
    readonly first_product: Locator;
    readonly btn_cart: Locator

    constructor(page: Page){
        this.page=page
        this.first_product=page.locator('#style_popular_product_wrapper__z6J0h .style_card__gNEqX:nth-child(1)')
        this.btn_cart = page.locator('.style_btn_add_cart__WFoN1')
    }

    async getOpenPage(){
        await this.page.goto(config.baseUrl + '/')
    }

    async addProductCart() {
        await this.first_product.hover()
        await this.btn_cart.click()
    }

}