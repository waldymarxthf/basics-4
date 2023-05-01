function greeting(name) {
  console.log(`Hello ${name}`);
}

function getName(callback) {
  let name = 'Vadim';
  callback(name);
}

getName(greeting);
