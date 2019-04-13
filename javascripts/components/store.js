import meats from '../helpers/meats.js';
import cheeses from '../helpers/cheeses.js';
import breads from '../helpers/breads.js';
import condiments from '../helpers/condiments.js';
import sandwich from './sandwich.js';
import util from '../helpers/util.js';

//do they not work if put out here? test
const meatsInfo = meats.getMeats();
const cheesesInfo = cheeses.getCheeses();
const breadsInfo = breads.getBreads();
const condimentsInfo = condiments.getCondiments();

// const addToSammieEvent = (e) => {
//     e.preventDefault();

//     sandwich.setSammie(meatsInfo, cheesesInfo, breadsInfo, condimentsInfo);
//     // sandwich.sammieToDom();
// };

const makeStore = () => {
    const bookInfo = book.getBook();
    let domString = '<h2>Our Only Book:</h2>';
    domString += `<h3>${bookInfo.price}</h3>`;
    domString += `<img src=${bookInfo.image} alt="book cover">`;
    domString += `<button id="cart-button" class="btn btn-danger">Add to Cart</button>`;


    util.printToDom("store-container", domString);
    document.getElementById('cart-button').addEventListener('click', addToCartEvent);
};

// const addClickyBtns = () => {$('input[type="checkbox"]').on('change', function() {
//     $('input[name="' + this.name + '"]').not(this).prop('checked', false);
// });
// };

export default { makeStore };

// , addClickyBtns