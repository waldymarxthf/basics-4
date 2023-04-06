const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];

let rightWord = animals.find(word => word.length > 7);
console.log(rightWord);