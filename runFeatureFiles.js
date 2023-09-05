// runFeatureFiles.js
const { exec } = require('child_process');
const fs = require('fs');

const tag = process.argv[2]; // Get tag from command line argument
const files = fs.readdirSync('test/features');
const featureFiles = files.filter(file => file.endsWith('.feature'));

featureFiles.forEach(file => {
    exec(`./node_modules/.bin/cucumber-js test/features/${file} --tags "${tag}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running ${file}: ${error.message}`);
            return;
        }
        console.log(stdout);
    });
});