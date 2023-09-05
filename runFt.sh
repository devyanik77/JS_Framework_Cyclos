#!/bin/bash

ADD_MULTIPLE_PRODUCT="test/features/Swag-lab-add-multiple-products.feature"
ADD_ONE_PRODUCT="test/features/swag-lab-add-one-product.feature"   
CHECKOUT_STEP_ONE="test/features/swag-lab-checkout-step-one.feature"   
CHECKOUT_STEP_TWO="test/features/swag-lab-checkout-step-two.feature"   
LOG_IN="test/features/swag-lab-login.feature"   

echo "Running script..."
# SELENIUM_BROWSER=chrome ./node_modules/.bin/cucumber-js $LOG_IN --format json:reports/cucumber/cucumber-report.json --world-parameters '{"browser": "chrome"}'
SELENIUM_BROWSER=chrome ./node_modules/.bin/cucumber-js test/features/swag-lab-checkout-step-one --tags "@TC004" --format json:reports/cucumber/cucumber-report.json --world-parameters '{"browser": "chrome"}'
echo "Script completed."
node report.js