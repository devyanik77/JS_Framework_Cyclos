
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
const { marketplace } = require('../page_Locators/demo-cyclos-marketplacePage');

Then('Click on the advertisements in the marketplace', function () {
   
  });

  Then('click on the community category', function () {
  
  });

  Then('verify community related advertisements will appear', function () {

  });