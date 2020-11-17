const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const exp = require('../../data/expected.json');

describe('Checking the age field', function () {
    describe('Verify the proper functioning of the age input field', function () {
        it('TC-098 Label for age is  3. How old is your hero?', function () {
            browser.url('');
            const text = $$(sel.label)[2].getAttribute('title');
            expect(text).toEqual(exp.labelAge);
        });
        it('TC-099 Verify the Age placeholder name is displayed', function () {
            browser.url('');
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });
    });
    describe('AGE POSITIVE', () => {
        it('Checks that the age becomes 1 after clicking spinner up once', function () {
            browser.url('');
            $(sel.spinnerAgeUp).click();
            expect($(sel.age).getValue()).toEqual("1");
        });
        it('Checks that the age becomes 2 after clicking spinner up twice', function () {
            browser.url('');
            $(sel.spinnerAgeUp).click();
            $(sel.spinnerAgeUp).click();
            expect($(sel.age).getValue()).toEqual("2");
        });

        it('Check that we able to change the value -1 by clicking spinner down', function () {
            browser.url('');
            $(sel.spinnerAgeDown).click();
            expect($(sel.age).getValue()).toEqual("-1");
        });

        it('Verify that the age becomes 1 by clicking spinner up', function () {
            browser.url('');
            $(sel.spinnerAgeUp).click();
            expect($(sel.age).getValue()).toEqual("1");
        });

        it('Verify that the age field accepts 12 symbols', function () {
            browser.url('');
            $(sel.age).setValue("123456789101");
            expect($(sel.errorMessage).isDisplayed()).toEqual(false);
        });

        it('Verify that the age field accepts 1 digit', function () {
            browser.url('');
            $(sel.age).setValue("4");
            expect($(sel.errorMessage).isDisplayed()).toEqual(false);
        });

        it('Verify that if the input value is longer than a 12 digits an error message will appear', function () {
            $(sel.age).setValue(123456789101112);
            $(sel.errorMessage).waitForDisplayed();
            expect($(sel.errorMessage).isDisplayed()).toEqual(true);
        });

    });

   describe('TC-0990 Verify the proper functioning of the age input field', () => {
        it('MLH-1 Checks that the ERROR MESSAGE is displayed after clicking age spinner down', function () {
            browser.url('');
            $(sel.spinnerAgeDown).click();
            $(sel.errorMessage).waitForDisplayed();
            expect($(sel.errorMessage).isDisplayed()).toEqual(true);
        });

        it('MLH-2 Checks that the ERROR MESSAGE = "looks like unreal age" after clicking age spinner down', function () {
            browser.url('');
            $(sel.spinnerAgeDown).click();
            $(sel.errorMessage).waitForDisplayed();
            expect($(sel.errorMessage).getText()).toEqual("looks like unreal age");
        });

        it('MLH-3 Checks that the ERROR MESSAGE displayed when we input -10 in the age field', function () {
            browser.url('');
            $(sel.age).setValue(-10);
            $(sel.errorMessage).waitForDisplayed();
            expect($(sel.errorMessage).isDisplayed()).toEqual(true);
        });

        it('MLH-4 Checks that the ERROR MESSAGE = "looks like unreal age" is displayed when we input -20 in age field', function () {
            browser.url('');
            $(sel.age).setValue(-20);
            $(sel.errorMessage).waitForDisplayed();
            expect($(sel.errorMessage).getText()).toEqual("looks like unreal age");
        });

        it('MLH-5 Checks that the ERROR MESSAGE displayed after clicking age spinner down and clear input', function () {
            browser.url('');
            $(sel.spinnerAgeDown).click();
            $(sel.age).doubleClick();
            browser.keys('Delete');

            $(sel.errorMessage).waitForDisplayed();
            expect($(sel.errorMessage).isDisplayed()).toEqual(true);
        });

        it('MLH-6 Checks that the ERROR MESSAGE = "Required" shows up when clicking age spinner down and clear input', function () {
            browser.url('');
            $(sel.spinnerAgeDown).click();
            $(sel.age).doubleClick();
            browser.keys('Delete');
            browser.keys('Backspace');
            $(sel.errorMessage).waitForDisplayed();
            expect($(sel.errorMessage).getText()).toEqual('Required');
        });

        it('MLH-7 should check that ERROR MESSAGE displayed when input -10 in age field and clear input', function () {
            browser.url('');
            $(sel.age).setValue(-10);
            browser.keys('Backspace');
            $(sel.errorMessage).waitForDisplayed();
            expect($(sel.errorMessage).isDisplayed()).toEqual(true);
        });

        it('MLH-8 should check that ERROR MESSAGE = "Required" when input 10 in age field and clear input', function () {
            browser.url('');
            $(sel.age).setValue(10);
            $(sel.age).doubleClick();
            browser.keys('Delete');
            //clearInputBox(sel.age);
            browser.keys('Backspace');
            $(sel.errorMessage).waitForDisplayed();
            expect($(sel.errorMessage).getText()).toEqual("Required");
        });
   });

});


