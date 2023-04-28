
const hagh = document.querySelector('.high');
const low = document.querySelector('.low');
const formHigh = document.querySelector('.form-high');
const formLow = document.querySelector('.form-low');
const listItem = document.querySelector('.todo');

let data = [
    {prioritу: 'HIGH', status: 'unchecked', task: 'This is super interesting theme. You know you fils whith code become big, you want takeout some things somewere from main program.'},
    {prioritу: 'HIGH', status: 'checked', task: 'Make this TODO list'},
    {prioritу: 'HIGH', status: 'unchecked', task: 'Start to do task'},
    {prioritу: 'LOW', status: 'unchecked', task: 'Watch YouTube'},
];

function showElements(data){
    data.forEach(item => {
        showElement(item.prioritу, item.status, item.task)
    });
}

function showElement(prioritу, status, task){
    if(prioritу === 'HIGH'){
        hagh.insertAdjacentHTML('beforeEnd',`<div class="list-item">
            <div class="item-checkbox ${status}"></div>
            <div class="item-text">${task}</div>
            <div class="item-btn"></div>
        </div>`)
    }
    if(prioritу === 'LOW'){
        low.insertAdjacentHTML('beforeEnd',`<div class="list-item">
            <div class="item-checkbox ${status}"></div>
            <div class="item-text">${task}</div>
            <div class="item-btn"></div>
        </div>`)
    }
}

showElements(data)


function addTask(event){
    event.preventDefault();
    try{
        const formData = new FormData(event.target)
        const task = formData.get('task');
        if(task === ''){
            throw new Error('You must add task into area!')
            // alert('You must add task into area!')
            // return;
        } 
        newData = data.filter((item) => {
            if(item.task === task){
                return true;
            }
        })
        if(newData.length !== 0){
            throw new Error('There is the task!')
            // alert('There is the task!')
            // return;
        }
        if(event.target.className === 'form-high'){
            data.push({prioritу: 'HIGH', status: 'unchecked', task: task})
            render()
            event.target.reset()
        }
        if(event.target.className === 'form-low'){
            data.push({prioritу: 'LOW', status: 'unchecked', task: task})
            render()
            event.target.reset()
        }
    } catch(err){
        alert(err)
    }
    
}

function deleteElemntsUi(){
    const listItems = document.querySelectorAll('.list-item');
    for(const item of listItems){
        item.remove()
    }
}

function changeData(event){
    if(event.target.className === 'item-btn'){
        const taskText = event.target.previousElementSibling.textContent;
        data = data.filter((item) => {
            return item.task !== taskText;
        })
        render()
    }
    if(event.target.className === 'item-checkbox unchecked'){
        const taskText = event.target.nextElementSibling.textContent;
        data = data.map((item) => {
                if(item.task === taskText){
                    item.status = 'checked';
                    return item;
                } else {
                    return item;
                }
            })
        render()
    }
    if(event.target.className === 'item-checkbox checked'){
        const taskText = event.target.nextElementSibling.textContent;
        data = data.map((item) => {
            if(item.task === taskText){
                item.status = 'unchecked';
                return item;
            } else {
                return item;
            }
        })
        render()
    }
}

function render(){
    deleteElemntsUi()
    showElements(data)
}

formHigh.addEventListener('submit', addTask)
formLow.addEventListener('submit', addTask)
listItem.addEventListener('click',changeData)


