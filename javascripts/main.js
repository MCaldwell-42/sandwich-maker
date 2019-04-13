import store from './components/store.js'

const addEventListener = () => {
    document.getElementById('orderBtn').addEventListener('click', store.makeSammie);
};
const init = () => {
    addEventListener();
    // store.makeSammie();
};

init();