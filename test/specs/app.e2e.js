const LoginPage = require('../pageobjects/login.page');
const SwipePage = require('../pageobjects/swipe.page');
const FormsPage = require('../pageobjects/form.page');

describe('WebdriverIO Native Demo App', () => {
    it('should open the Forms screen and interact with a switch', async () => {
        await FormsPage.open();
        const initialState = await FormsPage.getSwitchState();
        await FormsPage.toggleSwitch();
        const newState = await FormsPage.getSwitchState();
        await expect(newState).not.toBe(initialState);
    });

    it('should select a different option from the dropdown', async () => {
        await FormsPage.open();
        await FormsPage.selectDropdownOption('Appium is awesome');
        const selectedValue = FormsPage.dropdownOption('Appium is awesome');
        await selectedValue.waitForDisplayed({ timeout: 5000 });
        await expect(selectedValue).toBeDisplayed();
    });

    it('should swipe through cards and display different card content', async () => {
        await SwipePage.open();
        const firstCard = await SwipePage.waitForCard(0);
        await expect(firstCard).toBeDisplayed();
        await SwipePage.swipeCardLeft();
        await driver.pause(800);
        const secondCard = await SwipePage.waitForCard(1);
        await expect(secondCard).toBeDisplayed();
    });

    it('should swipe down and display the WebdriverIO logo', async () => {
        await SwipePage.open();
        expect(await SwipePage.webdriverioLogo.isDisplayed()).toBe(false);
        await SwipePage.swipeUp();
        await driver.pause(1000);
        await SwipePage.webdriverioLogo.waitForDisplayed({ timeout: 10000 });
        await expect(SwipePage.webdriverioLogo).toBeDisplayed();
    });

    it('should successfully log in with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('test@example.com', 'password123');
        const alertTitle = await LoginPage.getAlertTitle();
        await expect(alertTitle).toHaveText('Success');
        await LoginPage.dismissAlert();
    });
});