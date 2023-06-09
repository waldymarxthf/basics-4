const parentNode = document.querySelector('.date-area');
const inputNode = document.querySelector('.input');
const formNode = document.querySelector('.form');

function clearInput() {
    inputNode.value = '';
}

function createDateElement() {
    const test = inputNode.value;
    console.log(test);
    clearInput();
}

formNode.addEventListener('submit', (e) => {
    e.preventDefault();
    createDateElement();
})