// Task #1

function printNumbers1(from, to) {
  const interval = setInterval(() => {
    console.log(from++)
    if (from > to) clearInterval(interval)
  }, 1000)
}

function printNumbers2(from, to) {
  setTimeout(() => {
    console.log(from++)
    if (from <= to) printNumbers2(from, to)
  }, 1000)
}

printNumbers2(1, 3)