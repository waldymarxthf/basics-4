const inputValueHigh = document.querySelector('.inputHigh');
const addTaskButtonHigh = document.querySelector('.button_addHigh');
const parentHigh = document.querySelector('.high_priority');
const delButton = document.querySelector('.button_del');

const inputValueLow = document.querySelector('.inputLow');
const addTaskButtonLow = document.querySelector('.button_addLow');
const parentLow = document.querySelector('.low_priority');

const STATUS = {
    TODO: "To Do",
    DONE: "Done"
};

const PRIORITY = {
    LOW: "Low",
    HIGH: "High"
};

const toDoList = [];




//добавление задачи в массив
function addTask() {
    let taskNameHigh = inputValueHigh.value;
    if (taskNameHigh !== '') {
        toDoList.push({
            task: taskNameHigh,
            status: STATUS.TODO,
            priority: PRIORITY.HIGH
        });
    };

    let taskNameLow = inputValueLow.value;
    if (taskNameLow !== '') {
        toDoList.push({
            task: taskNameLow,
            status: STATUS.TODO,
            priority: PRIORITY.LOW
        });
    };

    console.log(toDoList);
};

//чистка импута после добавления
function clearInput() {
    if (inputValueHigh.value != '') {
        return inputValueHigh.value = '';
    };

    if (inputValueLow.value != '') {
        return inputValueLow.value = '';
    };

};

//добавление задачи с высоким приоритетом
function addTaskHigh(event) {
    event.preventDefault();
    const newElement = document.createElement('form');
    parentHigh.appendChild(newElement);
    newElement.classList.add('form');
    newElement.insertAdjacentHTML('afterbegin', `<p>${inputValueHigh.value}</p>`)
    newElement.insertAdjacentHTML('afterbegin', '<input class="radio" type="checkbox">');
    newElement.insertAdjacentHTML('beforeend', '<button id="del" type="submit" class="button_del"><img src="./image/free-icon-close-151882-444.svg" alt=""></button>');
    addTask();
    clearInput();

    //удаление задачи из дом и массива
    const delButton = newElement.querySelector('.button_del');
    delButton.addEventListener('click', function deleteTask(event) {
        event.preventDefault();
        taskName = toDoList.findIndex(tasks => tasks.task === inputValueHigh.value);
        toDoList.splice(taskName, 1);
        newElement.remove();

        console.log(toDoList);
    });

    //изменение статуса задачи в массиве
    const checkBox = newElement.querySelector('.radio');
    checkBox.addEventListener('change', () => {
        console.log('done')
    })


};

// добавление задачи с низким приоритетом
function addTaskLow(event) {
    event.preventDefault();
    const newElement = document.createElement('form');
    parentLow.appendChild(newElement);
    newElement.classList.add('form');
    newElement.insertAdjacentHTML('afterbegin', `<p>${inputValueLow.value}</p>`)
    newElement.insertAdjacentHTML('afterbegin', '<input class="radio" type="checkbox">');
    newElement.insertAdjacentHTML('beforeend', '<button id="del" type="submit" class="button_del"><img src="./image/free-icon-close-151882-444.svg" alt=""></button>');
    addTask();
    clearInput();


    //удаление задачи из дом и массива
    const delButton = newElement.querySelector('.button_del');
    delButton.addEventListener('click', function deleteTask(event) {
        event.preventDefault();
        taskName = toDoList.findIndex(tasks => tasks.task === inputValueLow.value);
        toDoList.splice(taskName, 1);
        newElement.remove();

        console.log(toDoList);
    });


    //изменение статуса задачи в массиве
    const checkBox = newElement.querySelector('.radio');
    checkBox.addEventListener('change', () => {
        console.log('done')
    })
};



addTaskButtonHigh.addEventListener('click', addTaskHigh);
addTaskButtonLow.addEventListener('click', addTaskLow);
