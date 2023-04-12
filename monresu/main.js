function printNumbers(from, to) {
  let i = from;
  let timerId = setTimeout(function run() {
    if (i === to) {clearTimeout(timerId); return;}
    console.log(i++);
    timerId = setTimeout(run, 1000)
  }, 1000)
}

function printNumbers(from, to) {
  let i = from;
  timerId = setInterval(() => {
    if (i === to) { clearInterval(timerId); return;}
    console.log(i++)
  }, 1000)
}

printNumbers(0, 6)