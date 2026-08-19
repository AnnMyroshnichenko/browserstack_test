const { config: sharedConfig } = require('./wdio.shared.conf.js');

exports.config = {
    ...sharedConfig,

    capabilities: [{
        platformName: 'Android',

        'appium:deviceName': 'OnePlus 11R',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': process.env.BROWSERSTACK_APP_ID,

        'bstack:options': {
            ...sharedConfig.commonCapabilities['bstack:options'],
            buildName: 'OnePlus 11R - Android 13',
            sessionName: 'OnePlus 11R Test'
        }
    }]
};