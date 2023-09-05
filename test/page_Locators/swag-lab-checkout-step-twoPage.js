var checkoutsteptwoScreen = {

    CHECKOUT_STEP_TWO_WINDOW_TITLE: 'css=span.title',
    ITEM_TOTAL:'css=div.summary_subtotal_label',
    TAX: 'css=div.summary_tax_label',
    TOTAL: "xpath=//div[@class='summary_tax_label']/following-sibling::div[1]",
    FINISH_BUTTON:'id=finish',
    CANCEL_BUTTON: 'id=cancel',

}

module.exports = {
    'checkoutsteptwo': checkoutsteptwoScreen
};