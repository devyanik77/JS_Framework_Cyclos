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

Then('verify user is on dashboard page', async function () {
  await driver.sleep(1000);
  // await commonFunctions.getElementText(dashboard.QUICK_ACCESS_TITLE).then(function (value) {
  //     assert.equal(value, "Quick access", "Dashboard screen has not been launched properly");
  // });
});

Then('user clicks the pay user in dashboard page',async function () {
  await driver.sleep(1000);
    await commonFunctions.checkVisible(dashboard.PAY_USER_LINK);
    return commonFunctions.clickElement(dashboard.PAY_USER_LINK).then(async function () {
      await driver.sleep(2000);
      });
  });

  Then('user clicks the banking menu in dashboard page',async function () {
    await commonFunctions.checkVisible(dashboard.BANKING_MENU_OPTION);
    return commonFunctions.clickElement(dashboard.BANKING_MENU_OPTION).then(async function () {
      await driver.sleep(2000);
      });
  });

  Then('user clicks the marketplace menu in dashboard page', function () {
    
  });


  Then('User click to dashboard menu', function () {
    
  });