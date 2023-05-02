/* Создайте промис, который успешно завершится через 2 секунды и вернет строку "Привет, мир!". Затем используйте метод .then(), чтобы вывести эту строку в консоль. */

// let promise = new Promise(resolve => {
//   setTimeout(() => resolve('Hello World!'), 2000);
// })

// promise
//   .then((resolve) => {
//     console.log(resolve)
//   })

/* Создайте промис, который завершится с ошибкой через 1 секунду и вернет объект ошибки с сообщением "Ошибка!". Затем используйте метод .catch(), чтобы вывести это сообщение в консоль. */

// let promise = new Promise((resolve, reject ) => {
//   setTimeout(() => reject(new Error('Error!')), 1000);
// })

// promise.catch(err => console.log(err))

/* Создайте функцию, которая будет возвращать промис, который завершится через 3 секунды. Промис должен вернуть случайное число от 1 до 10. Затем вызовите эту функцию и используйте метод .then() для вывода числа в консоль. Если промис завершится с ошибкой, используйте метод .catch(), чтобы вывести сообщение об ошибке. */

// function returnerPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(Math.floor(Math.random() * 10)), 3000);
//   })
// }

// returnerPromise()
//   .then(resolve => {
//     console.log(resolve);
//   })
//   .catch(err => {
//     console.log(err)
//   })

/* Создайте два промиса, которые завершатся успешно через 2 секунды и вернут случайные числа от 1 до 10. Затем используйте метод .all(), чтобы дождаться завершения обоих промисов и вывести сумму этих чисел в консоль. */

// let promise1 = new Promise((resolve ) => {
//   setTimeout(() => resolve(Math.floor(Math.random() * 10)), 2000);
// })
// let promise2 = new Promise((resolve ) => {
//   setTimeout(() => resolve(Math.floor(Math.random() * 10)), 2000);
// })

// Promise.all([promise1, promise2])
//   .then(result => {
//     console.log(result[0] + result[1]);
//   })

/* Напишите функцию, которая принимает на вход два числа и возвращает промис, который резолвится с результатом умножения этих чисел. Если хотя бы один из аргументов не является числом, то промис должен реджектиться с ошибкой "Invalid arguments". */

// function sum(a, b) {
//   return new Promise((resolve, reject) => {
//     if (typeof a === 'number' && typeof b === 'number') {
//       resolve(a * b);
//     } else {
//       reject(new Error('Invalid arguments'));
//     }
//   })
// }

// sum('a', 2).then(resolve => console.log(resolve)).catch(err => console.error(err))

/* Напишите функцию, которая принимает на вход массив чисел и возвращает промис, который резолвится с результатом суммы этих чисел. Если хотя бы один элемент массива не является числом, то промис должен реджектиться с ошибкой "Invalid input". */

// function sum(arr) {
//   return new Promise((resolve, reject) => {
//     let sum = 0;
//     arr.forEach((val) => {
//       typeof val === 'number' ? sum += val : reject(new Error("Invalid input"))
//     })
//     resolve(sum)
//   })
// }

// sum([1, 'a', 3, 4, 5])
//   .then(res => console.log(res))
//   .catch(err => console.error(err.message))