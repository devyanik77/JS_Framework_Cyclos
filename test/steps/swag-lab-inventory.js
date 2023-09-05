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

const { inventory } = require("../page_Locators/swag-lab-inventoryPage");

Then('user sort the products as {string}', async function (optionText) {
    await commonFunctions.selectDropdownByVisibleText(inventory.SELECT_DROPDOWN_ELE, optionText)
});

Then('user selects the first product on the inventory page', async function () {
    var inventoryListArray = [];
    const inventoryElements = await driver.findElements(By.xpath("//div[@class='inventory_list']/div"));
    console.log("inventoryElements.length: " + inventoryElements.length)
    for (let i = 1; i <= inventoryElements.length; i++) {
        const elementText = await commonFunctions.getElementText(inventory.PRODUCT_LIST_NAME.replace(/%d/g, i));
        inventoryListArray.push(elementText);
        console.log("Inventory Item " + i + ": " + elementText);
    }
    console.log("inventoryListArray: ", inventoryListArray);
    console.log("inventoryListArray.length: ", inventoryListArray.length);
    await commonFunctions.clickElement(inventory.PRODUCT_LIST_NAME.replace(/%d/g, 1));
});