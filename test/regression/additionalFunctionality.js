const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const exp = require('../../data/expected.json');
const inputValues4andClick = require('../../helpers/inputValues4andClick');
const findTextAge = require('../../helpers/findTextAge');

describe('Checking the additional functionality', function () {
    describe('Check age', function () {
        it('TC-0220 Text is correct for age in the text', function () {
            browser.url('');
            for(let i = 0; i < data.checkAge.length; i++) {
                inputValues4andClick(data.name, data.gender.she, data.checkAge[i], data.storyType.Comedy);
                let textAge = findTextAge();
                console.log(textAge);
                $(sel.tryAgain).click();
                expect(textAge).toEqual(exp.checkAge[i]);

            }

        });
    });
});