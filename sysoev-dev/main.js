// function printNumbers(from, to) {
//   if (from <= to) {
//     let timer = setInterval(() => {
//       console.log(from);
//       from++;
//       if (from > to) {
//         clearInterval(timer);
//       }
//     }, 1000);
//   }
// }

function printNumbers(from, to) {
  setTimeout(function timer() {
    console.log(from);
    if (from < to) {
      from++;
      let timerId = setTimeout(timer, 1000);
    }
  }, 1000);
}

printNumbers(2, 5);
