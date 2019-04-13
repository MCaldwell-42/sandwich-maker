import util from '../helpers/util.js';

const sandwich = [];

const getSammie = () => {
    return sandwich;
};

const setSammie = (ingredient) => {
    sandwich.push(ingredient);
};

// const sumSammie = (e) => {
//     e.preventDefault();
//     const mySammie = getSammie();
//     const total = 0;
//     //Foreeeeeach
//     for(i=0; i<sandwich.length; i++){
    
//     total += mySammie.reduce((a, b) => {return a + b.sandwich[i]}, 0);
//     };

//     window.alert(`You owe ${total.toFixed(2)}`);
// };

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

export default { setSammie, sammieToDom };