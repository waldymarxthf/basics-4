const getSelector = (css) => document.body.querySelector(css),
   formHigh = getSelector('.high-task'),
   inputHigh = getSelector('#input-high'),
   formLow = getSelector('.low-task'),
   inputLow = getSelector('#input-low');

const MESSAGE = {
   TASK_EXIST: 'Task already exists!',
   EMPTY: 'Value cannot be empty!'
};

const STATUS = {
   DONE: 'Done',
   TODO: 'To Do',
};

const PRIORITY = {
   LOW: 'low',
   HIGH: 'high'
};

const list = [];

const OPERATION = {
   CLEAN_INPUT: () => {
      inputHigh.value = null;
      inputLow.value = null;
   },

   CLEAN_TASK: () => {
      const allTasks = document.querySelectorAll('.task');

      for (let elem of allTasks) {
         elem.remove();
      }
   },

   FIND_TASK: (name) => {
      return list.find(task => task.name === name);
   },

   SORTED_LIST: (priority) => {
      return list.filter(task => task.priority === priority)
   }
}

const VALIDATION = {
   IS_TASK_EXIST: (name) => {
      if (OPERATION.FIND_TASK(name)) {
         alert(MESSAGE.TASK_EXIST);
         OPERATION.CLEAN_INPUT();
         return false;
      }
      return true;
   },

   IS_VALUE_NON_EMPTY: (value) => {
      const isNonEmpty = value.trim() !== '';

      if (!isNonEmpty) {
         alert(MESSAGE.EMPTY);
         OPERATION.CLEAN_INPUT();
         return false;
      }
      return true;
   }
}

function addTask(name, priority, status = STATUS.TODO) {
   const newTask = { name, priority, status };

   list.push(newTask);
}

function changeStatus(name, status) {
   OPERATION.FIND_TASK(name).status = status;
}

function removeTask(elem, name) {
   const getIndex = list.findIndex(task => task.name === name);

   list.splice(getIndex, 1);
   elem.parentNode.remove();
}

function createTaskElement(task) {
   const checked = task.status === STATUS.DONE
      ? '<input id="change-box" class="radio-button" type="checkbox" checked>'
      : '<input id="change-box" class="radio-button" type="checkbox">';

   const html = `
     <div class="task">
       ${checked}
       <p class="task-text">${task.name}</p>
       <button id="button-delete" class="task-container__button task-container__button_45degrees"></button>
     </div>`;

   return html;
}


function render(sortedList, form) {
   sortedList.forEach(task => {
      form.insertAdjacentHTML('afterend', createTaskElement(task));

      const changeDiv = getSelector('#change-box');
      changeDiv.addEventListener('click', () => {
         if (task.status === STATUS.TODO) {
            changeStatus(task.name, STATUS.DONE);
            return;
         }
         changeStatus(task.name, STATUS.TODO);
      });

      const deleteDiv = getSelector('#button-delete');
      deleteDiv.addEventListener('click', () => {
         removeTask(deleteDiv, task.name);
      })
   });
};

function showList() {
   OPERATION.CLEAN_TASK();

   render(OPERATION.SORTED_LIST(PRIORITY.LOW), formLow);
   render(OPERATION.SORTED_LIST(PRIORITY.HIGH), formHigh);

   OPERATION.CLEAN_INPUT();
}

formHigh.addEventListener('submit', (event) => {
   event.preventDefault();
   const valueHigh = inputHigh.value;

   if (!VALIDATION.IS_VALUE_NON_EMPTY(valueHigh)) {
      return;
   }

   if (!VALIDATION.IS_TASK_EXIST(valueHigh)) {
      return;
   }

   addTask(valueHigh, PRIORITY.HIGH, STATUS.TODO);
   showList();
});

formLow.addEventListener('submit', (event) => {
   event.preventDefault();
   const valueLow = inputLow.value;

   if (!VALIDATION.IS_VALUE_NON_EMPTY(valueLow)) {
      return;
   }

   if (!VALIDATION.IS_TASK_EXIST(valueLow)) {
      return;
   }

   addTask(valueLow, PRIORITY.LOW, STATUS.TODO);
   showList();
});