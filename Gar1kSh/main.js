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
