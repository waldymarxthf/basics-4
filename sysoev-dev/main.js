const obj1 = {
  name: 'Vadim',
  weigth: 75,
};

const obj2 = obj1;
obj2.name = 'Vadim!!!';
console.log(`obj1.name: ${obj1.name}`);
console.log(`obj1 === obj2: ${obj1 === obj2}`);

const clone2 = {};
for (const key in obj2) {
  clone2[key] = obj2[key];
}
console.log(`clone2: ${clone2}`);
clone2.name = 'vadim';
console.log(`obj1.name: ${obj1.name}`);
console.log(`clone2.name: ${clone2.name}`);
console.log(`clone2 === obj2: ${clone2 === obj2}`);

const clone3 = Object.assign({}, clone2);
console.log(`clone3.name: ${clone3.name}`);
console.log(`clone2 === clone3: ${clone2 === clone3}`);
const clone4 = { ...clone3 };
clone4.name = 'vadiM';
console.log(`clone4.name: ${clone4.name}`);
console.log(`clone4 === clone3: ${clone4 === clone3}`);

// let user = {
//   name: 'vadim',
//   sizes: {
//     height: 187,
//     width: 75,
//   },
// };

// console.log(user);

// const cloneUser = {};
// for (const key in user) {
//   if (typeof user[key] === 'object') {
//     for (const keyObj in key) {
//       cloneUser[keyObj] = key;
//     }
//   }
//   cloneUser[key] = user[key];
// }

// console.log(cloneUser);
