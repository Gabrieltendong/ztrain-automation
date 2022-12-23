import { Page } from "playwright";


export class DefaultPage {
    readonly page:Page;
    readonly url ="https://www.browserstack.com/";

    constructor(page: Page){
        this.page=page
    }
}