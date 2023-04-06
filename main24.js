let muMassive = ['проснуться', 'учить', 'работать', 'играть', 'спать'];
let Twix = muMassive.push('Дёрнуть Гуся');
let Snickers = muMassive.slice(0,2);
let Mars = muMassive.splice(2, 1, 'Что - то');
console.log(muMassive);
console.log(Snickers);
console.log(muMassive);
for(const task of muMassive) {
    console.log(task);
};

