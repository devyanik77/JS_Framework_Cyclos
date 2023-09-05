const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, Options, Capabilities, until, } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");
// const webdriver = require("selenium-webdriver");
const { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(300 * 1000);
const { implicitWait } = require("../supports/utils/wait");
const { ONE_SECOND, TWO_SECOND, ONE_MIN, THIRTY, TEN, } = require("../supports/utils/timeunit");
const driver = require('../supports/driver').getDriver();
// let driver;
var options;
let nextPort; //for example
const commonFunctions = require('../supports/utils/commonFunctions');
const properties = require('../supports/properties');
const application = properties.applicationBasicData;
const assert = require('assert');

const { login } = require('../page_locators/demo-cyclos-loginPage');
const { home } = require("../page_locators/demo-cyclos-homePage");
const { dashboard } = require('../page_Locators/demo-cyclos-dashboard');
const { banking } = require('../page_Locators/demo-cyclos-bankingPage');


let UNAME
let PASSWORD

Given('user launch the application', async function () {
    await driver.sleep(1000);
    return driver.get(application.URL)
});

When('login as {string} and {string}', async function (uname, pwd) {
    if (uname == 'VALID_UNAME') {
        UNAME = application.VALID_UNAME
        PASSWORD = application.VALID_PWD
    }
    else if (uname == 'INVALID_UNAME') {
        UNAME = application.INVALID_UNAME
        PASSWORD = application.INVALID_PWD
    }
    else if (uname == 'LOCKED_OUT_UNAME') {
        UNAME = application.LOCKED_OUT_UNAME
        PASSWORD = application.VALID_PWD
    }
    await commonFunctions.sendValue(login.UNAME_FIELD, UNAME)
    await commonFunctions.sendValue(login.PWD_FIELD, PASSWORD);
    await commonFunctions.clickElement(login.SUBMIT_BUTTON)
        .then(async function () {
            await driver.sleep(10000);
        });

});



When('user logs out of the application', async function () {
    await driver.sleep(1000);
    await commonFunctions.checkVisible(dashboard.LOGOUT_OPTION);
    await commonFunctions.clickElement(dashboard.LOGOUT_OPTION);
});

Then('verify logout is successful', async function () {
    return commonFunctions.checkVisible(home.HOME_MENU);
});


Then('verify the {string}', async function (expectedMessage) {
    var error = await commonFunctions.getElementText(login.ERROR_MSG);
    assert.equal(error, expectedMessage, "Message does not match");
});

Then('verify the notification message {string} appeared', async function (expectedMessage) {
    await commonFunctions.checkVisible(login.NOTIFICATION_MSG_ALERT);
    var error = await commonFunctions.getElementText(login.NOTIFICATION_MSG_ALERT);
    assert.equal(error, expectedMessage, "Message does not match");
});