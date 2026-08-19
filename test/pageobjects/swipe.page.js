class SwipePage {
    get swipeTab() { return $('~Swipe'); }
    get webdriverioLogo() { return $('~WebdriverIO logo'); }

    card(index) {
        return $(`android=new UiSelector().description("card").instance(${index})`);
    }

    async open() {
        await this.swipeTab.waitForDisplayed({ timeout: 10000 });
        await this.swipeTab.click();
    }
    
    async swipe(direction, percent = 1.0) {
        const { width, height } = await driver.getWindowSize();

        const gestures = {
            left: {
                left: Math.round(width * 0.1),
                top: Math.round(height * 0.4),
                width: Math.round(width * 0.8),
                height: Math.round(height * 0.2),
            },
            up: {
                left: Math.round(width * 0.2),
                top: Math.round(height * 0.2),
                width: Math.round(width * 0.6),
                height: Math.round(height * 0.6),
            },
        };

        await driver.execute('mobile: swipeGesture', {
            ...gestures[direction],
            direction,
            percent,
        });
    }

    async swipeCardLeft() {
        await this.swipe('left', 1.0);
    }

    async swipeUp() {
        await this.swipe('up', 0.8);
    }

    async waitForCard(index, timeout = 10000) {
        const card = this.card(index);
        await card.waitForDisplayed({ timeout });
        return card;
    }
}

module.exports = new SwipePage();