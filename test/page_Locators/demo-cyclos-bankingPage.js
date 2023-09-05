var bankingScreen = {


    TO_USER_FIELD: "xpath=//input[@placeholder='Type to search']",
    AMOUNT_FIELD: "xpath=//div[@class='input-group']//input[1]",
    DESC_FIELD: "xpath=//span[text()='Description']/following::textarea",
    NEXT_BUTTON: "xpath=//action-button[@class='d-inline-block button']//button[1]",
    CONFIRM_BUTTON: "xpath=(//button[@type='button'])[2]",
    REMOVE_PRODUCT_BUTTON: 'css=remove-sauce-labs-bike-light',
    NOTIFICATION_MSG: "xpath=//div[text()='The payment was successfully processed']",
    PAYMENT_CONFIRM_TITLE: "xpath=//div[text()=' Payment confirmation ']",
    TOTAL_AMOUNT: "xpath=//span[text()='Total amount']",
    CONTACT_LIST_BUTTON : "//button[contains(@class,'btn btn-icon')]",
    CONTACT_LIST : "//div[@class='modal-content']//div/a",
    CONTACT_ITEM: "//div[@class='modal-content']//div[%d]/a",

    SCHEDULING_DROPDOWN_BUTTON: "//button[contains(@class,'form-control text-left')]",
    SCHEDULING_DROPDOWN_LIST: "//div[@class='dropdown-menu show']/a",
    SCHEDULING_DROPDOWN_ITEM: "//div[@class='dropdown-menu show']/a[%d]",

    PAYMENT_TO_SYSTEM_OPTION: "xpath=(//a[@class='nav-item']/following-sibling::a)[1]",
    RECEIVE_QR_CODE_OPTION: "xpath=(//a[@class='nav-item']/following-sibling::a)[2]",

}

module.exports = {
    'banking': bankingScreen
};