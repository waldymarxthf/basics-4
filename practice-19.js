const taskForToday = {
    list: {
        'Create a new practice task': 'In Progress',
        'Make a bed': 'Done',
        'Write a post': 'To Do',
    },
    // changeStatus(key, status) {
    //     this.list[key] = status;

    // },

    // addTask(key) {
    //     this.list[key] = 'In Progress';
    // },

    // delete(key) {
    //     delete this.list[key];
    // },

    showList() {
        for (const key in this.list) {
            console.log(`${'Create a new practice task'}: Todo `);
            console.log(`${'Make a bed'}: Todo `);
            console.log('');
            console.log(`${'write a post'}: In Progress `);
            console.log('');
            console.log('Nothing is Done');

        }
       
    }



}

// taskForToday.changeStatus('Write a post', 'Done');
// console.log(taskForToday.list);
// taskForToday.changeStatus('Make a bed', 'In Progress');
// console.log(taskForToday.list);

// taskForToday.addTask('Have a walk');
// console.log(taskForToday.list);
// taskForToday.addTask('Go to the cinema');
// console.log(taskForToday.list);


// taskForToday.delete('Create a new practice task');
// console.log(taskForToday.list);
// taskForToday.delete('Write a post');
// console.log(taskForToday.list);

showList();



