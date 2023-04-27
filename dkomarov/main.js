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
function addTask(event) {
    event.preventDefault()
    let taskNameHigh = inputValueHigh.value;
    // let taskNameLow = inputValueLow.value;
    if (!(taskNameHigh == '')) {
        toDoList.push({
            task: taskNameHigh,
            status: STATUS.TODO,
            priority: PRIORITY.HIGH
        });
        renderHigh();
    };
    // } else if (!(taskNameLow == '')){
    //     toDoList.push({
    //         task: taskNameLow,
    //         status: STATUS.TODO,
    //         priority: PRIORITY.LOW
    //     });
    //     renderLow();
    // };

    console.log(toDoList);
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
function renderHigh() {
    for (obj of toDoList) {
        taskNameHigh = obj.task;
    };
    const newElement = document.createElement('form');
    parentHigh.appendChild(newElement);
    newElement.classList.add('form');
    newElement.insertAdjacentHTML('afterbegin', `<p>${taskNameHigh}</p>`)
    newElement.insertAdjacentHTML('afterbegin', '<input class="radio" type="checkbox">');
    newElement.insertAdjacentHTML('beforeend', '<button id="del" type="submit" class="button_del"><img src="./image/free-icon-close-151882-444.svg" alt=""></button>');
    clearInput();

    // //удаление задачи из дом и массива
    // const delButton = newElement.querySelector('.button_del');
    // delButton.addEventListener('click', (event) => {
    //     event.preventDefault()
    //     newElement.remove();
       
        
    //     console.log(toDoList);
    // }); 
        
    // //изменение статуса задачи в массиве
    // const checkBox = newElement.querySelector('.radio');
    // checkBox.addEventListener('change', () => {
    //     console.log('done')

    // });
};






// добавление задачи с низким приоритетом
// function renderLow() {
//     for (obj of toDoList) {
//         taskNameLow = obj.task;
//     }
//     const newElement = document.createElement('form');
//     parentLow.appendChild(newElement);
//     newElement.classList.add('form');
//     newElement.insertAdjacentHTML('afterbegin', `<p>${taskNameLow}</p>`)
//     newElement.insertAdjacentHTML('afterbegin', '<input class="radio" type="checkbox">');
//     newElement.insertAdjacentHTML('beforeend', '<button id="del" type="submit" class="button_del"><img src="./image/free-icon-close-151882-444.svg" alt=""></button>');
//     clearInput();


//     //удаление задачи из дом и массива
//     const delButton = newElement.querySelector('.button_del');
//     delButton.addEventListener('click', function deleteTask(event) {
//         event.preventDefault();
//         taskName = toDoList.indexOf(elem => elem.task == taskNameLow);
//         toDoList.splice(taskName, 1);
//         newElement.remove();

//         console.log(toDoList);
//     });


//     //изменение статуса задачи в массиве
//     const checkBox = newElement.querySelector('.radio');
//     checkBox.addEventListener('change', () => {
//         console.log('done')
//     });
// };



addTaskButtonHigh.addEventListener('click', addTask);
// addTaskButtonLow.addEventListener('click', addTask);
