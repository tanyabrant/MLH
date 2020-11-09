const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');
const path = require('path');

describe('Checking the main functionality', function () {
    describe('Happy path', function () {
        it('TC-021.1 Should be able to upload a file', function () {

            // '../../data/picture.jpg'
            browser.url('https://qa-apps.netlify.app/app_my_hero#');
            $(sel.name).setValue('Heart');
            $$(sel.gender)[2].click();
            $(sel.age).setValue(22);
            $(sel.storyClick).click();
            $$(sel.storyType)[data.storyType.Comedy].click();
            browser.pause(3000);
            const inputDiv = $('.ant-upload input');
            const createBtn = $(sel.createBtn);
            const filePath = path.join(__dirname, '../../data/picture.jpg');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputDiv.waitForDisplayed();
            browser.pause(5000);
            inputDiv.setValue(remoteFilePath);
            browser.pause(8000);
            createBtn.click();
            browser.pause(5000);

        });

    });

});
