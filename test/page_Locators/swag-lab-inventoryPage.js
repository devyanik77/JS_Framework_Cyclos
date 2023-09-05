var inventoryScreen = {

    INVENTORY_WINDOW_TITLE: 'css=span.title',
    PWD_FIELD: 'id=password',
    LOG_IN_BUTTON: 'id=login-button',

    MENU_BUTTON: 'id=react-burger-menu-btn',

    FILTER: 'xpath=//select[@class="product_sort_container"]',
    ADD_TO_CART_BUTTON: 'xpath=//button[@class="btn btn_primary btn_small btn_inventory"]',
    SHOPPING_CART_ICON: "xpath=//div[@class='shopping_cart_container']//a[1]",
    GET_CART_COUNT: "xpath=//div[@class='shopping_cart_container']//a[1]",

    INVENTORY_LIST: "xpath=//div[@class='inventory_list']/div",
    PRODUCT_LIST_NAME: "xpath=//div[@class='inventory_list']/div[%d]/div[2]/div[1]/a/div",

    SORT_SELECT_ELE: "css=select.product_sort_container",

    SELECT_DROPDOWN_ELE: 'css=select.product_sort_container',

}

module.exports = {
    'inventory': inventoryScreen
};