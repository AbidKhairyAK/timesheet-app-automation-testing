import Page from './page.js'

class LoginPage extends Page {

    // Class Getter Selectors
    get $username() {
        return $('[name="username"]')
    }

    get $password() {
        return $('[name="password"]')
    }

    get $btnLogin() {
        return $('button[type="submit"]')
    }

    // Class Functions
    async open() {
        await super.open('user/login')
    }

    async waitLoginPage() {
        await this.$username.waitForDisplayed()
        await this.$password.waitForDisplayed()
        await this.$btnLogin.waitForDisplayed()
    }

    async userLogin(email, password){
        await this.waitLoginPage()

        await this.$username.setValue(process.env.EMAIL)
        await this.$password.setValue(process.env.PASSWORD)
        await this.$btnLogin.click()
    }

}

export default new LoginPage()

        

        