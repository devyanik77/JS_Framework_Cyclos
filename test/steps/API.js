const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const {
  Builder,
  By,
  Key,
  Options,
  Capabilities,
  until,
} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const webdriver = require("selenium-webdriver");
// const { setDefaultTimeout } = require("@cucumber/cucumber");
// setDefaultTimeout(300 * 1000);
const { implicitWait } = require("../supports/utils/wait");
const axios = require('axios');
const chai = require('chai');
const fs = require('fs');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;


const {
  ONE_SECOND,
  TWO_SECOND,
  ONE_MIN,
  THIRTY,
  TEN,
} = require("../supports/utils/timeunit");

var driver;
var options;
const apiUrl = `https://graph.facebook.com/v13.0/oauth/access_token?client_id=1977875992568205&client_secret=a0b1a34c0065731c06bd7304c92456ce&grant_type=client_credentials`;

// Before(function () {
//   driver = new webdriver.Builder()
//     .withCapabilities(webdriver.Capabilities.chrome())
//     .setChromeOptions(options)
//     .build();
//   driver.manage().window().maximize();
//   driver.manage().setTimeouts({ implicit: 100000 });
// });

// After(async function () {
//   //await driver.quit();
//   await driver.close();
// });

//-------------------------API START---------------------------------
Given('user has a Facebook access token', function () {
  console.log("My Access token stored in json with GET method")
});

When('the user retrieves the profile information for {string}', async function (username) {
  axios.get(apiUrl).then(response => {
    console.log('Response Data got generated successfully:', response.data);
    console.log('Response Data access_token, bearer:', response.data);
  })

});

Then('verify the response status code should be 200', function () {
  axios.get(apiUrl).then(response => {
    console.log('Response status:', response.status);
    expect(response.status).to.equal(200);
     const responseData = {
      statusCode: response.status,
      data: response.data
    };
    fs.writeFileSync('api_accessToken.json', JSON.stringify(responseData, null, 2), 'utf-8');
    console.log('Response data written to api_accessToken.json');
  })
});

When('user makes a GET request to fetch user id and username using {string}', async function (userid_access_token) {
  const apiUrl = `https://graph.facebook.com/me?fields=id,name&access_token=${userid_access_token}`;
  console.log("My API url:", apiUrl)
  axios.get(apiUrl).then(response => {
    console.log('Stoaring User name and User id:', response.data);
    const responseData = {
      statusCode: response.status,
      data: response.data
    };
    fs.writeFileSync('api_userid.json', JSON.stringify(responseData, null, 2), 'utf-8');
    console.log('Response data written to api_userid.json');
  })
});

When('user makes a GET request to fetch all information using {string}', async function (allinfo_access_token) {
  const apiUrl = `https://graph.facebook.com/v17.0/me/accounts?access_token=${allinfo_access_token}`;
  console.log("GET all information:", apiUrl)
  axios.get(apiUrl).then(response => {
    console.log('Response Data:', response.data);
    const responseData = {
      statusCode: response.status,
      data: response.data
    };
    fs.writeFileSync('api_pageinfo.json', JSON.stringify(responseData, null, 2), 'utf-8');
    console.log('Response data written to api_pageinfo.json');
  })
});

When('user makes a POST request with message using {string} on their page', async function (Msg_Img_access_token) {
   postEndpoint = `https://graph.facebook.com/v17.0/me/feed?message=HELLO%20FACEBOOK%20USER&access_token=${Msg_Img_access_token}`;
  axios.post(postEndpoint).then(response => {
    console.log('Message posted successfully on facebook:', response.data);
  })
});

When('user makes a POST request with an image using {string} on their page', async function (Msg_Img_access_token) {
  //Change the access token before running
  postEndpoint = `https://graph.facebook.com/113553008510295/photos?url=https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png&access_token=${Msg_Img_access_token}`;
 axios.post(postEndpoint).then(response => {
   console.log('Image posted successfully:', response.data);
 })
});

//-------------------------API END---------------------------------





