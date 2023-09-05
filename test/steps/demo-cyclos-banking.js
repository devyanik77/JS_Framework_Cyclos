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

Then('user enters the user {string} to pay', async function (ToUser) {
  await driver.sleep(1000);
  await commonFunctions.checkVisible(banking.TO_USER_FIELD);
  // await commonFunctions.clickElement(banking.CONTACT_LIST_BUTTON);
  // await commonFunctions.sendValue(banking.TO_USER_FIELD, ToUser);
  await commonFunctions.setDropDownCyclos(driver, banking.CONTACT_LIST_BUTTON, ToUser, banking.CONTACT_ITEM, banking.CONTACT_LIST)
  await driver.sleep(1000);
});

Then('user enters the amount {string} to pay', async function (amount) {
  await driver.sleep(1000);
  return await commonFunctions.sendValue(banking.AMOUNT_FIELD, amount);
});

Then('user selects the scheduling {string}', async function (scheduling) {
  await driver.sleep(2000);
  await commonFunctions.setDropDownCyclos(driver, banking.SCHEDULING_DROPDOWN_BUTTON, scheduling, banking.SCHEDULING_DROPDOWN_ITEM, banking.SCHEDULING_DROPDOWN_LIST)
  await driver.sleep(1000);
});

Then('user enters the description {string}', async function (description) {
  await commonFunctions.sendValue(banking.DESC_FIELD, description);
});

When('user clicks on next', async function () {
  await commonFunctions.checkVisible(banking.NEXT_BUTTON);
  await commonFunctions.clickElement(banking.NEXT_BUTTON);
});

Then('User will be redirected to the Payment confirmation page', async function () {
  await driver.sleep(1000);
  await commonFunctions.getElementText(banking.PAYMENT_CONFIRM_TITLE).then(function (value) {
    assert.equal(value, "Payment confirmation", "Payment confirmation  screen has not been launched properly");
  });
});

Then('user verify the Payment confirmation details', async function () {
  await commonFunctions.checkVisible(banking.TOTAL_AMOUNT);
})

When('user clicks on confirm', async function () {
  await commonFunctions.checkVisible(banking.CONFIRM_BUTTON);
  await commonFunctions.clickElement(banking.CONFIRM_BUTTON);
});

Then('verify payment successful message {string}', async function (expectedMessage) {
  var error = await commonFunctions.getElementText(banking.NOTIFICATION_MSG);
  assert.equal(error, expectedMessage, "Message does not match");
});

Then('user clicks to the payment to system option',async function () {
  return commonFunctions.clickElement(banking.PAYMENT_TO_SYSTEM_OPTION).then(async function () {
    await driver.sleep(1000);
    })
});

Then('user verify available balance', function () {
  
});