const stopwatchButton = document.querySelector("#stopwatch");
const pauseButton = document.querySelector("#pause")

function createStopwatch() {
  let count = 0;
  let isOn = false;
  let timer;

  return {
    start() {
      timer = setInterval(() => console.log(count++), 1000);
    },
    pause() {
      clearInterval(timer);
    },
    stop() {
      count = 0;
      clearInterval(timer);
    },
    toggle() {
      isOn = !isOn;
      return isOn;
    },
  };
}

const stopwatch = createStopwatch();

pauseButton.addEventListener("click", (event) => {
  if (stopwatch.toggle()) {
    stopwatch.start()
  } else {
    stopwatch.pause()
  }
});

stopwatchButton.addEventListener("click", event => {
  if (stopwatch.toggle()) {
    stopwatch.start()
  } else {
    stopwatch.stop()
  }
})
