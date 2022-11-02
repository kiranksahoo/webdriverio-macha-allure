const utilities= require("./test/utils/Utilities");
const chai = require('chai');
const allure = require('@wdio/allure-reporter').default;
exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    services: ['intercept'],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--disable-infobars', '--window-size=1920,1440'],
        },
        acceptInsecureCerts: true
        
    }],
   
    logLevel: 'info',
   
    bail: 0,
  
    baseUrl: 'https://www.sbs.com.au',
   
    waitforTimeout: 60000,
    waitforInterval: 3000,
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
          outputDir: 'report/allure-results',
          disableWebdriverStepsReporting: false,
          disableWebdriverScreenshotsReporting: false,
          addConsoleLogs : true
        }]
      ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 1000000
    },
    before: function (capabilities, specs) {
        global.allure = allure;
        global.chai = chai;
        global.utilities = utilities;
    },
    beforeSuite: function (suite) {
        allure.addFeature(suite.name);
    },
    beforeTest: function (test, context) {
        allure.addEnvironment("BROWSER", browser.capabilities.browserName);
        allure.addEnvironment("BROWSER_VERSION", browser.capabilities.version);
        allure.addEnvironment("PLATFORM", browser.capabilities.platform);

    },
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (error !== undefined) {
            try {
                //TODO: Fix allure reporting on failure
                utilities.takeScreenshot(test.title, true)
            } catch {
                console.log('>> Capture Screenshot Failed!');
            }
        }
    }
    // onComplete: function(exitCode, config, capabilities, results) {
    //     const mergeResults = require('wdio-json-reporter/mergeResults');
    //     mergeResults('report/allure-results', '', 'testResults.json')
    // },
   
}
