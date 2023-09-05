var loginScreen = {

    UNAME_FIELD: 'id=user-name',
    PWD_FIELD: 'id=password',
    LOG_IN_BUTTON: 'id=login-button',
    ERROR_MSG: 'xpath=//h3[text()="Epic sadface: Sorry, this user has been locked out."]',
}

module.exports = {
    'login': loginScreen
};