const stopWatch = document.getElementById('btn');

let startTime;
let elapsedTime = 0;
let myTimer;
let isRunning = false;

function startClock() {
  startTime = Date.now() - elapsedTime;
  myTimer = setInterval(function() {
    elapsedTime = Date.now() - startTime;
    console.log(Math.floor(elapsedTime / 1000));
  }, 1000);
  isRunning = true;
}

function stopClock() {
  clearInterval(myTimer);
  isRunning = false;
}

function toggleClock() {
  if (isRunning) {
    stopClock();
  } else {
    startClock();
  }
}

stopWatch.addEventListener('click', toggleClock);
