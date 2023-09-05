var loginScreen = {

    UNAME_FIELD: "css=input[placeholder='User']",
    PWD_FIELD: "css=input[type='password']",
    SUBMIT_BUTTON: "xpath=//button[@type='button']//span[1]",
    ERROR_MSG: 'xpath=//h3[text()="Epic sadface: Sorry, this user has been locked out."]',
    NOTIFICATION_MSG_ALERT: "css=div.notification-message",
}

module.exports = {
    'login': loginScreen
};