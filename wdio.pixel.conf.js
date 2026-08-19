const { config: sharedConfig } = require('./wdio.shared.conf.js');

exports.config = {
    ...sharedConfig,

    capabilities: [{
        platformName: 'Android',

        'appium:deviceName': 'Google Pixel 7',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': process.env.BROWSERSTACK_APP_ID,

        'bstack:options': {
            ...sharedConfig.commonCapabilities['bstack:options'],
            buildName: 'Pixel 7 - Android 13',
            sessionName: 'Pixel 7 Android Test'
        }
    }]
};