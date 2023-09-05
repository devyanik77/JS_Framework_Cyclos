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
const { cart } = require("../page_Locators/swag-lab-cartPage");
const { checkoutstepone } = require("../page_Locators/swag-lab-checkout-step-onePage");
const { checkoutsteptwo } = require("../page_Locators/swag-lab-checkout-step-twoPage");
const { inventoryitem } = require("../page_Locators/swag-lab-inventory-itemPage");



When('User clicks the Add to Cart button {string} on the inventory page', async function (selectProduct) {
    await commonFunctions.checkVisible(inventory.ADD_TO_CART_BUTTON);
    await commonFunctions.clickElement(inventory.ADD_TO_CART_BUTTON)
        .then(async function () {
            await driver.sleep(2000);
        });
});

Then('verify the added product in the cart page', async function () {
    await commonFunctions.checkVisible(inventory.GET_CART_COUNT);
    await commonFunctions.getElementText(inventory.GET_CART_COUNT).then(function (value) {
        assert.equal(value, "1", "Cart count is not matched");
    });
});

When('User clicks the cart icon on the inventory page', async function () {
    await commonFunctions.checkVisible(inventory.SHOPPING_CART_ICON);
    await commonFunctions.clickElement(inventory.SHOPPING_CART_ICON);
});

Then('User will be redirected to the cart page', async function () {
    await driver.sleep(1000);
    await commonFunctions.getElementText(cart.CART_WINDOW_TITLE).then(function (value) {
        assert.equal(value, "Your Cart", "Cart screen has not been launched properly");
    });
});

Then('verify the details of the added product as product name, product description and product price', async function () {

    await commonFunctions.getElementText(cart.PRODUCT_NAME).then(function (value) {
        assert.equal(value, "Your Cart", "Product not added properly");
    });
});

When('User clicks on the checkout button', async function () {
    await commonFunctions.checkVisible(cart.CHECKOUT_BUTTON);
    await commonFunctions.clickElement(cart.CHECKOUT_BUTTON);
});

Then('verify redirected to the checkout page', async function () {
    await driver.sleep(1000);
    await commonFunctions.getElementText(checkoutstepone.CHECKOUT_STEP_ONE_WINDOW_TITLE).then(function (value) {
        assert.equal(value, "Checkout: Your Information", "Checkout step one screen has not been launched properly");
    });
});

Then('User enters the first name {string} in the form', async function (fname) {
    await commonFunctions.sendValue(checkoutstepone.FNAME_FIELD, fname);
});

Then('User enters the last name {string} in the form', async function (lname) {
    await commonFunctions.sendValue(checkoutstepone.LNAME_FIELD, lname);
});

Then('User enters the postal code {string} in the form', async function (zip) {
    await commonFunctions.sendValue(checkoutstepone.ZIP_FIELD, zip);
});

Then('User clicks continue button', async function () {
    await commonFunctions.checkVisible(checkoutstepone.CONTINUE_BUTTON);
    await commonFunctions.clickElement(checkoutstepone.CONTINUE_BUTTON);
});

Then('verify redirected to the checkout overview page', async function () {
    await driver.sleep(1000);
    await commonFunctions.getElementText(checkoutsteptwo.CHECKOUT_STEP_TWO_WINDOW_TITLE).then(function (value) {
        assert.equal(value, "Checkout: Overview", "Checkout step two screen has not been launched properly");
    });
});



Then('user selects the product {string} on the inventory page', async function (productName) {
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

    for (i = 1; i < inventoryListArray.length; i++) {
        if (productName == inventoryListArray[i]) {
            console.log('Actual productName matches with sinventoryListArray')
            await commonFunctions.clickElement(inventory.PRODUCT_LIST_NAME.replace(/%d/g, i));
            break;
        }
    }
});


When('User clicks the Add to Cart button on the inventory item page', async function () {
    await commonFunctions.checkVisible(inventoryitem.ADD_TO_CART_BUTTON);
    await commonFunctions.clickElement(inventoryitem.ADD_TO_CART_BUTTON);
});



When('user clicks on back to products', async function () {
    await commonFunctions.checkVisible(inventoryitem.BACK_TO_PRODUCTS_BUTTON);
    await commonFunctions.clickElement(inventoryitem.BACK_TO_PRODUCTS_BUTTON);
});