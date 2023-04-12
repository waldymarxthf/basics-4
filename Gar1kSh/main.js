printNumbersTimeout = (from, to) => {
  let start = from;
  let end = to;
  let timerId = setTimeout(function run() {
    console.log(start++);
    if (start <= end) {
      setTimeout(run, 1000);
    }
    clearTimeout(timerId);
  }, 1000);
};

printNumbersInterval = (from, to) => {
  let timerId = setInterval(() => {
    if (from < to) {
      console.log(from++);
    } else if (from === to) {
      console.log(from);
      clearInterval(timerId);
    }
  }, 1000);
};

printNumbersInterval(1, 6);
printNumbersTimeout(1, 9);
