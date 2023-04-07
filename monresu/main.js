const status = {
  TODO: 'ToDo',
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
}

const priority = {
  HIGH: 'high',
  LOW: 'low',
}

const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'high'} 
];

function isEmpty(task) {
  return (task == '') || (task == '\n') || (task == '\r') || (task == '\0');
}

