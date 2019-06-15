import meats from '../helpers/meats.js';
import cheeses from '../helpers/cheeses.js';
import breads from '../helpers/breads.js';
import condiments from '../helpers/condiments.js';
import util from '../helpers/util.js';

const meatsInfo = meats.getMeat();
const cheesesInfo = cheeses.getCheese();
const breadsInfo = breads.getBread();
const condimentsInfo = condiments.getCondiments();
const all = Object.assign(meatsInfo, cheesesInfo, breadsInfo, condimentsInfo); 


const getAll = () => {
    const meatsInfo = meats.getMeat();
const cheesesInfo = cheeses.getCheese();
const breadsInfo = breads.getBread();
const condimentsInfo = condiments.getCondiments();
const all = Object.assign(meatsInfo, cheesesInfo, breadsInfo, condimentsInfo);   
console.log(all);
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
    sumSammie(sandwich);
};
let total = 0;
const sumSammie = (sandwich) => {
    
    sandwich.forEach((thing) => {
        total += all[thing];
    });
    
    console.log(total);
    window.alert(`You owe ${total.toFixed(2)}`);
};

export default { makeSammie, getAll };
//    sandwich.Foreach((thing)=)