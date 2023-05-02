// let promise = new Promise(function (resolve, reject) {
//   const result = 1 + 2;
//   resolve(result);
//   // reject('error');
// });

// promise.then(
//   result => {
//     console.log(result);
//   },
//   errror => {
//     console.log(errror);
//   }
// );

// promise.then(console.log);

// promise.then(null, error => {
//   console.log(error);
// });

// promise.catch(console.log);

// promise.then(result => {
//   console.log(result);
// });

// promise.finally(() => {
//   console.log('Promise выполнен');
// });

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('Готово');
    }, ms);
  });
}

delay(3000).then(result => console.log(`Выполнилось через 3 секунды, результат: ${result}`));
