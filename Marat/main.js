const person =  {
    name: "John",
    age: 30,
    city: "New York"
};
// const keys = Object.keys(person);
// const values = Object.values(person);
const entries = Object.entries(person);
console.log(entries);

function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3,4,5));

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// const newPerson = {...person, city: "London", age: 40};
// console.log(newPerson);

const newPerson = {...person};
console.log(newPerson);

for(let [key, value] of Object.entries(person)){
    let i = 0;
    i++;
    key += `${i}`
    console.log(`${key}: ${value}`);
}

const ages = {
    Jogn: 30,
    Jane: 25,
    bob: 40
};
const ageArray = Object.values(ages);
const averageAge = ageArray.reduce((total, age) => total + age)/ageArray.length;
console.log(averageAge);
