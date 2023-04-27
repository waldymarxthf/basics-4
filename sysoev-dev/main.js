import { UI_ELEMENTS } from './js/ui.js';
import { createItem } from './js/create.js';
import { showItemInList } from './js/show.js';

export const PRIORITIES = {
  LOW: 'low',
  HIGH: 'high',
  DEFAULT_PRIORITY: 'low',
};

export const STATUSES = {
  TODO: 'To Do',
  DONE: 'Done',
  DEFAULT_STATUS: 'To Do',
};

let list = [
  {
    name: 'create a post',
    status: STATUSES.DONE,
    priority: PRIORITIES.LOW,
  },
  {
    name: 'testTest',
    status: STATUSES.DONE,
    priority: PRIORITIES.HIGH,
  },
  {
    name: 'make a bed',
    status: STATUSES.TODO,
    priority: PRIORITIES.HIGH,
  },
];

function addTask(name, status, priority) {
  // if (!isNameValid(name)) {
  //   return;
  // }

  // if (!isStatusValid(status)) {
  //   return;
  // }

  // if (!isPriorityValid(priority)) {
  //   return;
  // }

  list.push({
    name,
    status,
    priority,
  });
}

function formsSubmitHandler(event) {
  event.preventDefault();
  const isLowForm = event.target === UI_ELEMENTS.FORM_LOW;
  const isHighForm = event.target === UI_ELEMENTS.FORM_HIGH;
  const inputLowValue = UI_ELEMENTS.INPUT_LOW.value;
  const inputHighValue = UI_ELEMENTS.INPUT_HIGH.value;

  if (isHighForm) {
    addTask(inputHighValue, STATUSES.DEFAULT_STATUS, PRIORITIES.HIGH);
    render();
  }

  if (isLowForm) {
    addTask(inputLowValue, STATUSES.DEFAULT_STATUS, PRIORITIES.LOW);
    render();
  }
  event.target.reset();
}

function clearDom() {
  UI_ELEMENTS.LIST_HIGH.textContent = '';
  UI_ELEMENTS.LIST_LOW.textContent = '';
}

function render() {
  clearDom();
  list.forEach(item => {
    const task = createItem(item.name, item.status);
    showItemInList(task, item.priority);
  });
}

render();
UI_ELEMENTS.TODO.addEventListener('submit', formsSubmitHandler);
