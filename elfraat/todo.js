const TO_DO = 'To Do';
const IN_PROGRESS = 'In progress';
const DONE = 'Done';

const TO_DO_LIST = {
    list:{
        "create a new practice task": IN_PROGRESS,
        "make a bed": DONE,
        "write a post": TO_DO
    },
    addTask(task){
        this.list[task] = TO_DO;
    },
    deleteTask(task){
        if (task in this.list) delete this.list[task];
    },
    showList(){
        for (const task in this.list){
            console.log(`${task}: ${this.list[task]}`);
        }
    },
    changeStatus(task, status){
        if (task in this.list) this.list[task] = status;
    },


};

TO_DO_LIST.addTask('do todo list');
TO_DO_LIST.deleteTask('make a bed and go');
TO_DO_LIST.addTask('write change status function');
TO_DO_LIST.changeStatus('do todo list', DONE);
TO_DO_LIST.addTask('commit and push pull request');
TO_DO_LIST.deleteTask('do todo list');
TO_DO_LIST.changeStatus('do todo list',IN_PROGRESS);
TO_DO_LIST.showList();

