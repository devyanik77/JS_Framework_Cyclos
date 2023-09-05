var homeScreen = {

    WELCOME_MESSAGE: 'css=div.guest-title.needed',
    PER_LOAN_CAL_OPTION: 'xpath=//div[text()="Personal Loan EMI Calculator"]',

    // PRODUCT_TYPE_DROPDOWN: "xpath=(//div[@class='drp1'])[1]",
    // PRODUCT_TYPE_DROPDOWN_LIST: "xpath=(//a[contains(@class,'btn-primary dropdown-toggle')]/following-sibling::ul)[1]",
    // PRODUCT_TYPE_DROPDOWN_ITEM: "xpath=(//a[contains(@class,'btn-primary dropdown-toggle')]/following-sibling::ul)[1]/li[%d]",

    PRODUCT_TYPE_DROPDOWN: "css=div.drp1",
    PRODUCT_TYPE_DROPDOWN_ITEM: "xpath=(//a[contains(@class,'btn-primary dropdown-toggle')]/following-sibling::ul)[1]/li[%d]",
    PRODUCT_TYPE_DROPDOWN_LIST: "css=ul.dropdown1.dropdown-menu",

    PRODUCT_DROPDOWN: "xpath=//div[contains(@class,'drp2')]",
    PRODUCT_DROPDOWN_ITEM: "xpath=//ul[@class='dropdown2 dropdown-menu']//li[%d]",
    PRODUCT_DROPDOWN_LIST: "xpath=(//ul[@class='dropdown2 dropdown-menu']//li",
  

    CHECKOFFER_BUTTON: 'xpath=(//a[contains(@class,"btn btn-primary")])[3]',

}

module.exports = {
    'home': homeScreen
};