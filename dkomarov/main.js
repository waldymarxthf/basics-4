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
function addTask(task) {
    toDoList.push({
        task: task,
        status: STATUS.TODO,
        priority: PRIORITY.HIGH
    });

    console.log(toDoList);
};


function removeTask(task) {
    const taskName = toDoList.forEach(tasks => tasks.task === task);
    toDoList.splice(taskName, 1);
    console.log(toDoList)

};



//чистка импута после добавления
function clearInput() {
    if (!(inputValueHigh.value == '')) {
        return inputValueHigh.value = '';
    };

    if (!(inputValueLow.value == '')) {
        return inputValueLow.value = '';
    };

};



//добавление задачи с высоким приоритетом
function render() {
    const newElement = document.createElement('form');
    for (obj of toDoList) {
        taskName = obj.task;
        if (inputValueHigh.value) {
            parentHigh.appendChild(newElement);
        } else if (inputValueLow.value) {
            parentLow.appendChild(newElement);
        }
    };
    
    newElement.classList.add('form');
    newElement.insertAdjacentHTML('afterbegin', `<p>${taskName}</p>`)
    newElement.insertAdjacentHTML('afterbegin', '<input class="radio" type="checkbox">');
    newElement.insertAdjacentHTML('beforeend', '<button id="del" type="submit" class="button_del"><img src="./image/free-icon-close-151882-444.svg" alt=""></button>');    
    clearInput();

    //изменение статуса задачи в массиве
    const checkBox = newElement.querySelector('.radio');
    checkBox.addEventListener('change', () => {
        obj.status = STATUS.DONE
        console.log(toDoList)
    });


    const delButton = newElement.querySelector('.button_del');
    delButton.addEventListener('click', (event) => {
        event.preventDefault();
        const task = taskName;
        removeTask(task); 
        newElement.remove();
       
    })
};






addTaskButtonHigh.addEventListener('click', (event) => {
    event.preventDefault();
    const text = inputValueHigh.value
    addTask(text);
    render();
});

addTaskButtonLow.addEventListener('click', (event) => {
    event.preventDefault();
    const text = inputValueLow.value
    addTask(text);
    render();
})



