import { Locator, Page } from 'playwright';
import { config } from '../../config';

export class RegisterPage{

    readonly page:Page;
    readonly email_input: Locator;
    readonly password_input: Locator;
    readonly confirm_password_register: Locator;
    readonly btn_register: Locator;
    readonly url = `${config.baseUrl}/en/auth/register`;

    constructor(page: Page){
        this.page=page
        this.email_input=page.locator('#email_register')
        this.password_input=page.locator('#password_register')
        this.confirm_password_register=page.locator('#confirm_password_register')
        this.btn_register=page.locator('#btn_register')
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

    async setConfirmePassword(confirme_password: string){
        await this.confirm_password_register.fill(confirme_password)
    }

    async handleRegister(){
        await this.btn_register.click()
        await this.page.waitForNavigation()
    }

}

