let timer;
let seconds = 0;
let isRunning = false;

function startStopTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            console.log(seconds);
        }, 1000);
    } else {
        isRunning = false;
        clearInterval(timer);
    }
}

document.querySelector('#startStopButton').addEventListener('click', startStopTimer);