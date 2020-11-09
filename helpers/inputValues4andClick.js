const sel = require ('../data/selectors.json');

function inputValues4andClick (name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();
    $(sel.createBtn).click();

}
module.exports = inputValues4andClick;

