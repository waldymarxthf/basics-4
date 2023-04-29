
const UI_ELEMNTS = {
  FROM_HIGH: document.querySelector('.addHighForm'),
  INPUT_HIGH: document.querySelector('.addHighInput'),
  FORM_BTN: document.querySelector('.addHighButton'),
  LIST_TASKS_HIGH: document.querySelector('.list-taskHigh'),

  FROM_LOW: document.querySelector('.addLowForm'),
  INPUT_LOW: document.querySelector('.addLowInput'),
  FORM_BTN: document.querySelector('.addLowButton'),
  LIST_TASKS_LOW: document.querySelector('.list-taskLow'),

  DEL_BTN: document.querySelectorAll('closeButton')
 
}

const PRIOPITIES = {
	HIGH: 'High',
	LOW: 'Low'
}
const STATUS = {
	TODO: 'To do',
	DONE: 'Done'
}


const toDoList = [ 
  {} ,

];

function addTask(name,priority,status){
  toDoList.push({name,priority,status})
  if(priority == "undefined"){
console.log("! Please enter all data for "+name+" !")
  }
  console.clear()
  console.log(toDoList)
}

function delTask(nameDel){
 const delTask = toDoList.findIndex( task => task.name === nameDel)
    toDoList.splice(delTask, 1);
    console.clear()
  }

function clearInputHigh(){
  UI_ELEMNTS.INPUT_HIGH.value=("")
}

function clearInputLow(){
  UI_ELEMNTS.INPUT_LOW.value=("")
}
//////////////////////////////////////////////////////////////////////////////////////

UI_ELEMNTS.FROM_HIGH.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(UI_ELEMNTS.INPUT_HIGH.value,PRIOPITIES.HIGH,STATUS.TODO);
  functionsUItaskHigh(UI_ELEMNTS.LIST_TASKS_HIGH);
 
})

UI_ELEMNTS.FROM_LOW.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(UI_ELEMNTS.INPUT_LOW.value,PRIOPITIES.LOW,STATUS.TODO);
  functionsUItaskLow(UI_ELEMNTS.LIST_TASKS_LOW);
 
})

function functionsUItaskHigh(listTasks) {
 listTasks.innerHTML=""
  
const taskHigh = toDoList.filter(task => task.priority===PRIOPITIES.HIGH);
taskHigh.forEach(user=>{

  const task = document.createElement("div")
  task.classList.add('task');
  task.innerHTML=`
    <input type="checkbox" class="checkBox">
    <div class="taskContent">
    ${user.name}
    </div>
      <button type="button" class="closeButton">x</button>
    `
    
const delBtn = task.querySelector('.closeButton')
let inputValue = user.name
delBtn.addEventListener('click',()=>{
  task.remove(inputValue)
  delTask(inputValue)
console.log(toDoList)
})

const checkBox = task.querySelector(".checkBox")
checkBox.addEventListener('change',()=>{
  task.className="doneTask"
  delBtn.className="closeDoneButton"
  user.status=STATUS.DONE
  console.clear()
  console.log(toDoList)
})
  listTasks.append(task);
})

clearInputHigh()
}

function functionsUItaskLow(listTasks){
UI_ELEMNTS.LIST_TASKS_LOW.innerHTML=""
const taskLow = toDoList.filter(task => task.priority===PRIOPITIES.LOW);
taskLow.forEach(user=>{

  const task = document.createElement("div")
  task.classList.add('task');
  task.innerHTML=`
    <input type="checkbox" class="checkBox">
    <div class="taskContent">
    ${user.name}
    </div>
      <button type="button" class="closeButton">x</button>
    `
        
const delBtn = task.querySelector('.closeButton')
let inputValue = user.name
delBtn.addEventListener('click',()=>{
  task.remove(inputValue)
  delTask(inputValue)
console.log(toDoList)
})

const checkBox = task.querySelector(".checkBox")
checkBox.addEventListener('change',()=>{
  task.className="doneTask"
  delBtn.className="closeDoneButton"
  user.status=STATUS.DONE
  console.clear()
  console.log(toDoList)
})
  listTasks.append(task);
})



clearInputLow()
}



/*
const STATUS={
  DONE:"Done",
  TODO:"To DO",
}

const PRIOPITIES = {
	HIGH: 'High',
	LOW: 'Low'
}

const toDoList = [ 
  {name: 'test', priority: PRIOPITIES.HIGH,status:STATUS.DONE} ,

];

const showList = () => {
  for (const namePriorities in STATUS) {
    let noneTask = true;

    console.log(`\n${STATUS[namePriorities]}`);

    const filteredStatus = toDoList.filter(
      task => task.status === STATUS[namePriorities]
    );

    filteredStatus.forEach((task) => {
      if (task) {
        console.log(`\t${task.name}: ${task.priority} priority;`);
        noneTask = false;
      }
    });

    if (noneTask) {
      console.log(`\t -`);
    }
  }
};

const UI_ELEMNTS = {
  FROM_HIGH: document.querySelector('.addHighForm'),
  INPUT_HIGH: document.querySelector('.addHighInput'),
  FORM_BTN: document.querySelector('.addHighButton'),
  LIST_TASKS_HIGH: document.querySelector('.list-taskHigh'),

  DEL_BTN: document.querySelectorAll('closeButton')
 
}

UI_ELEMNTS.FROM_HIGH.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(UI_ELEMNTS.INPUT_HIGH, UI_ELEMNTS.LIST_TASKS_HIGH);
})

function addTask(name,status,priority){
  name=UI_ELEMNTS.INPUT_HIGH
  toDoList.push({name,status,priority})
  if(status="undefined" || priority == "undefined"){
console.log("! Please enter all data for "+name+" !")
  }
}

function changeStatus(nameNew,statusNew){
  const changeTask = toDoList.findIndex(
    task => task.name === nameNew)
 if(changeTask===-1){
  console.log("!---Undefined change name---!")
}
else{
  toDoList[changeTask].status=statusNew
}
}

function deleteTask(nameDel){
  const delTask = toDoList.findIndex(
    task => task.name === nameDel)
    if(delTask===-1){
      console.log("!---Undefined delete name---!")
    }
    else{
    toDoList.splice(delTask, 1);
    }
  }


showList();
*/
