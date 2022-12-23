import { Locator, Page } from 'playwright';
import { config } from '../../config';

export class LoginPage{

    readonly page:Page;
    readonly email_input: Locator;
    readonly password_input: Locator;
    readonly btn_login: Locator;
    readonly title_page: Locator;
    readonly url = `${config.baseUrl}/en/auth/login`;

    constructor(page: Page){
        this.page=page
        this.email_input=page.locator('#email_login')
        this.password_input=page.locator('#password_login')
        this.btn_login=page.locator('#btn_login')
        this.title_page=page.getByText("Login")
    }

    async openPage(){
        await this.page.goto(this.url, {waitUntil: 'load'})
    }

    async setEmail(email: string){
       await this.email_input.fill(email)
    }

    async setPassword(password: string){
       await this.password_input.fill(password)
    }

    async handleLogin(){
        await this.btn_login.click()
        await this.page.waitForNavigation()
    }

    async screenShot(){
       await this.page.screenshot({fullPage: true})
    }
}

