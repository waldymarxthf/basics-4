const STATUS = {
  WAITING: "Waiting",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

const PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const tasks = [
  {
    name: "Приготовить завтрак/обед/ужин",
    status: STATUS.DONE,
    priority: PRIORITY.HIGH,
  },
  {
    name: "Выполнить уборку в комнате/квартире",
    status: STATUS.DONE,
    priority: PRIORITY.HIGH,
  },
  {
    name: "Почитать книгу/посмотреть фильм",
    status: STATUS.DONE,
    priority: PRIORITY.MEDIUM,
  },
  {
    name: "Погулять на свежем воздухе",
    status: STATUS.DONE,
    priority: PRIORITY.MEDIUM,
  },
  {
    name: "Выучить несколько новых слов или фраз на английском языке",
    status: STATUS.DONE,
    priority: PRIORITY.MEDIUM,
  },
  {
    name: "Сделать зарядку или небольшую тренировку",
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.LOW,
  },
  {
    name: "Написать список задач на завтра",
    status: STATUS.WAITING,
    priority: PRIORITY.LOW,
  },
];

const searchValues = (data, value) => {
  if (Array.isArray(data)) {
    return data.some((task) => task.name === value);
  } else {
    return Object.values(data).includes(value);
  }
};

const addTask = (name, priority = PRIORITY.LOW) => {
  if (!name.trim()) {
    console.error("Некорректный ввод");
    return;
  } else if (searchValues(tasks, name)) {
    console.error(`Задача "${name}" уже существует`);
    return;
  } else {
    const task = {
      name: name,
      status: STATUS.WAITING,
      priority: searchValues(PRIORITY, priority) ? priority : PRIORITY.LOW,
    };
    tasks.push(task);
    console.log(`Задача "${name}" успешно добавлена`);
  }
};

const deleteTask = (name) => {
  if (!searchValues(tasks, name)) {
    console.error(`Задачи "${name}" не существует`);
    return;
  } else {
    const index = tasks.findIndex((task) => task.name === name);
    tasks.splice(index, 1);
    console.log(`Задача "${name}" успешно удалена`);
  }
};

const changeStatus = (name, status) => {
  if (!searchValues(tasks, name)) {
    console.error(`Задачи "${name}" не существует`);
    return;
  } else if (!searchValues(STATUS, status)) {
    console.error(`Такого значения не существует`);
    return;
  } else {
    const task = tasks.find((task) => task.name === name);
    task.status = status;
    console.log(`Статус задачи "${name}" изменен на "${status}"`);
  }
};

const changePriority = (name, priority) => {
  if (!searchValues(tasks, name)) {
    console.error(`Задачи "${name}" не существует`);
    return;
  } else if (!searchValues(PRIORITY, priority)) {
    console.error(`Такого значения не существует`);
    return;
  } else {
    const task = tasks.find((task) => task.name === name);
    task.priority = priority;
    console.log(`Приоретет задачи "${name}" изменен на "${priority}"`);
  }
};

const showListTasks = () => {
  tasks.forEach((task) => {
    console.log(task);
  });
};

deleteTask("Написать список задач на завтр");
addTask("Купить продукты для завтрака", "high");
addTask("Купить продукты для завтрака");
changePriority("Купить продукты для завтрака", "low");

showListTasks();
