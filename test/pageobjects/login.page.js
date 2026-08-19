class LoginPage {
    get loginTab() { return $('~Login'); }
    get emailInput() { return $('~input-email'); }
    get passwordInput() { return $('~input-password'); }
    get loginButton() { return $('android=new UiSelector().className("android.view.ViewGroup").instance(15)'); }
    get alertTitle() { return $('id:android:id/alertTitle'); }
    get alertOkButton() { return $('android=new UiSelector().resourceId("android:id/button1")'); }

    async open() {
        await this.loginTab.waitForDisplayed({ timeout: 10000 });
        await this.loginTab.click();
    }

    async login(email, password) {
        await this.emailInput.waitForDisplayed({ timeout: 10000 });
        await this.emailInput.setValue(email);
        await this.passwordInput.waitForDisplayed({ timeout: 10000 });
        await this.passwordInput.setValue(password);
        try {
            await driver.hideKeyboard();
        } catch (_) {}
        await this.loginButton.waitForDisplayed({ timeout: 5000 });
        await this.loginButton.click();
    }

    async getAlertTitle() {
        await this.alertTitle.waitForExist({ timeout: 8000 });
        return this.alertTitle;
    }

    async dismissAlert() {
        await this.alertOkButton.click();
    }
}

module.exports = new LoginPage();