const inputValueHigh = document.querySelector('.inputHigh');
const addTaskButton = document.querySelector('.button_addHigh');
const parentHigh = document.querySelector('.high_priority')
function clearInput() {
    inputValueHigh.value = '';
}


function addTask() {
    console.log(inputValueHigh.value);
    const newElement = document.createElement('form');
    // newElement.textContent = inputValueHigh.value;
    parentHigh.appendChild(newElement);
    newElement.classList.add('form'); 
    newElement.insertAdjacentHTML('afterbegin', `<p>${inputValueHigh.value}</p>`)
    newElement.insertAdjacentHTML('afterbegin', '<input class="radio" type="radio">');
    newElement.insertAdjacentHTML('beforeend', '<button id="del" type="submit" class="button_del"><img src="./image/free-icon-close-151882-444.svg" alt=""></button>');
    clearInput();
}

addTaskButton.addEventListener('click', addTask)
