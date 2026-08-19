class FormsPage {
    get formsTab() { return $('~Forms'); }
    get switchElement() { return $('~switch'); }
    get dropdown() { return $('~Dropdown'); }

    dropdownOption(text) {
        return $(`android=new UiSelector().text("${text}")`);
    }

    async open() {
        await this.formsTab.waitForDisplayed({ timeout: 10000 });
        await this.formsTab.click();
    }

    async toggleSwitch() {
        await this.switchElement.waitForDisplayed({ timeout: 5000 });
        await this.switchElement.click();
    }

    async getSwitchState() {
        await this.switchElement.waitForDisplayed({ timeout: 5000 });
        return this.switchElement.getAttribute('checked');
    }

    async selectDropdownOption(text) {
        await this.dropdown.waitForDisplayed({ timeout: 5000 });
        await this.dropdown.click();

        const option = this.dropdownOption(text);
        await option.waitForDisplayed({ timeout: 5000 });
        await option.click();
    }
}

module.exports = new FormsPage();