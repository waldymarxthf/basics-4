function printNumbers(from, to) {
    let currentNum = from;
    let timerId = setInterval(() => {
        console.log(currentNum);
        if (currentNum === to) {
            clearInterval(timerId);
        }
        currentNum++;
    }, 1000);
}
printNumbers(5, 10);