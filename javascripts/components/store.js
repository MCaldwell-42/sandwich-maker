import meats from '../helpers/meats.js';
import cheeses from '../helpers/cheeses.js';
import breads from '../helpers/breads.js';
import condiments from '../helpers/condiments.js';
import util from '../helpers/util.js';

//do they not work if put out here? test
const meatsInfo = meats.getMeat();
const cheesesInfo = cheeses.getCheese();
const breadsInfo = breads.getBread();
const condimentsInfo = condiments.getCondiments();
const all = [meatsInfo, cheesesInfo, breadsInfo, condimentsInfo];

const getAll = () => {
    const meatsInfo = meats.getMeat();
const cheesesInfo = cheeses.getCheese();
const breadsInfo = breads.getBread();
const condimentsInfo = condiments.getCondiments();
const all = [meatsInfo, cheesesInfo, breadsInfo, condimentsInfo];
    return all;
};

const makeSammie = () => {
    let boxes = Array.from(document.getElementsByClassName('form-check-input'));
    let sandwich = [];
    boxes.forEach((box) => {
        if (box.checked) {
            sandwich.push(box.id);
        }
    });
    console.log(sandwich);
    return sandwich;
};

export default { makeSammie, getAll };