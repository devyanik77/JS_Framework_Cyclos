const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');

let apiUrl;
let response;

Given('the API endpoint Value {int}', function (endpoint) {
    apiUrl = endpoint;
});

When('I send a GET request', async function () {
    response = await axios.get(apiUrl);
});

Then('verify the respose code as {string}', function (statusCode) {
    assert.strictEqual(response.status, statusCode);
});

Then('the response body contains {string}', function (expectedContent) {
    assert(response.data.includes(expectedContent));
});