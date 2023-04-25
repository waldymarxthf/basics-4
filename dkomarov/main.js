const inputValueHigh = document.querySelector('.inputHigh');
const addTaskButtonHigh = document.querySelector('.button_addHigh');
const parentHigh = document.querySelector('.high_priority');

const inputValueLow = document.querySelector('.inputLow');
const addTaskButtonLow = document.querySelector('.button_addLow');
const parentLow = document.querySelector('.low_priority');




function clearInput() {
    if (inputValueHigh.value != '') {
        return inputValueHigh.value = '';
    };

    if (inputValueLow.value != '') {
        return inputValueLow.value = '';
    };
    
};



function addTaskHigh(event) {
    event.preventDefault()
    console.log(inputValueHigh.value);
    const newElement = document.createElement('form');
    parentHigh.appendChild(newElement);
    newElement.classList.add('form'); 
    newElement.insertAdjacentHTML('afterbegin', `<p>${inputValueHigh.value}</p>`)
    newElement.insertAdjacentHTML('afterbegin', '<input class="radio" type="radio">');
    newElement.insertAdjacentHTML('beforeend', '<button id="del" type="submit" class="button_del"><img src="./image/free-icon-close-151882-444.svg" alt=""></button>');
    clearInput();
}; 


function addTaskLow(event) {
    event.preventDefault()
    console.log(inputValueLow.value);
    const newElement = document.createElement('form');
    parentLow.appendChild(newElement);
    newElement.classList.add('form'); 
    newElement.insertAdjacentHTML('afterbegin', `<p>${inputValueLow.value}</p>`)
    newElement.insertAdjacentHTML('afterbegin', '<input class="radio" type="radio">');
    newElement.insertAdjacentHTML('beforeend', '<button id="del" type="submit" class="button_del"><img src="./image/free-icon-close-151882-444.svg" alt=""></button>');
    clearInput();
};





addTaskButtonHigh.addEventListener('click', addTaskHigh)
addTaskButtonLow.addEventListener('click', addTaskLow)