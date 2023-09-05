const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, Options, Capabilities, until, } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");
// const webdriver = require("selenium-webdriver");
const { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(300 * 1000);
const { implicitWait } = require("../supports/utils/wait");
// const { ONE_SECOND, TWO_SECOND, ONE_MIN, THIRTY, TEN, } = require("../supports/utils/timeunit");
const driver = require('../supports/driver').getDriver();
// let driver;
// var options;
// let nextPort; //for example
const commonFunctions = require('../supports/utils/commonFunctions');
const properties = require('../supports/properties');
const application = properties.applicationBasicData;
const assert = require('assert');


const { checkoutsteptwo } = require("../page_Locators/swag-lab-checkout-step-twoPage");
const { checkoutcomplete } = require("../page_Locators/swag-lab-checkout-completePage");

Then('User click on finish button', async function () {
    await commonFunctions.checkVisible(checkoutsteptwo.FINISH_BUTTON);
    await commonFunctions.clickElement(checkoutsteptwo.FINISH_BUTTON);
});

Then('verify redirected to the checkout complete page', async function () {
    await driver.sleep(1000);
    await commonFunctions.getElementText(checkoutcomplete.CHECKOUT_COMPLETE_WINDOW_TITLE).then(function (value) {
        assert.equal(value, "Checkout: Complete!", "Checkout: Complete! screen has not been launched properly");
    });
});

Then('verify message {string}', async function (expectedMessage) {
    var error = await commonFunctions.getElementText(checkoutcomplete.COMPLETE_HEADER_TEXT);
    assert.equal(error, expectedMessage, "Message does not match");
});

Then('User click back to home button', async function () {
    await commonFunctions.checkVisible(checkoutcomplete.BACK_HOME_BUTTON);
    await commonFunctions.clickElement(checkoutcomplete.BACK_HOME_BUTTON);
});