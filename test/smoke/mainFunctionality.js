const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');

describe('Checking the main functionality', function () {
    describe('Happy path', function () {
        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            const inputName = $(sel.name).setValue(data.name);
            const inputGender = $$(sel.gender)[data.gender.she].click();
            const inputAge = $(sel.age).setValue(data.age);
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[data.storyType.Comedy].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);
        });

        it('TC-022 Create button is clickable after 1-4 are filled in with function', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);
        });
    });

    describe('Other paths', function () {

        it('TC-023 gender he is working', function () {
            browser.url('');
            inputValues4andClick(data.name, data.gender.he, data.age, data.storyType.Comedy);
            browser.pause(3000);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
    });
});
