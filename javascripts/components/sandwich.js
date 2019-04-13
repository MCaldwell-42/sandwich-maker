import util from '../helpers/util.js';
import store from './store.js'

const sumSammie = (e) => {
    e.preventDefault();
    const allInfo = store.getAll();
    const mySammie = store.makeSammie();
    const total = 0;
    //Foreeeeeach
    for(i=0; i<mySammie.length; i++){
    
    total += allInfo.reduce((a, b) => {return a + b.mySammie[i]}, 0);
    };
    console.log(total);
    window.alert(`You owe ${total.toFixed(2)}`);
};

// const SammieToDom = () => {
//     const mySammie = getSammie();
//     let domString = '<div class="row">';
//     domString += '<h2>Sammie:</h2>';
//     domString += '<button id="purchase-btn" class="btn btn-secondary">Purchase</button>'
//     domString += '</div><div class="row d-flex flex-wrap">';
//     myCart.forEach((book) => {
//       domString += `<div class="card col-2">`;
//       domString += `  <img src=${book.image} class="card-img-top" alt="...">`;
//       domString += `  <div class="card-body">`;
//       domString += `    <h5 class="card-title">${book.title}</h5>`;
//       domString += `    <p class="card-text">${book.price}</p>`;
//       domString += `  </div>`;
//       domString += `</div>`;
//     });
//     domString += `</div>`;
//     util.printToDom('cart-container', domString);
//     document.getElementById('purchase-btn').addEventListener('click', buyEvent);
// };

export default { sumSammie };

// , sammieToDom 