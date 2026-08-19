require('dotenv').config();

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    hostname: 'hub-cloud.browserstack.com',

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [
        ['browserstack', {
            app: process.env.BROWSERSTACK_APP_ID,
            browserstackLocal: false
        }]
    ],

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    commonCapabilities: {
        'bstack:options': {
            projectName: 'WebdriverIO Native Demo App',
            debug: true,
            networkLogs: true
        }
    }
};