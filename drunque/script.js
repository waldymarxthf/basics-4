const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const restartButton = document.querySelector("#restart");
const time = document.querySelector("#time");

function createStopwatch() {
  let count = 0;
  let isOn = false;
  let timer;

  return {
    start() {
      if (!isOn) {
        timer = setInterval(() => {
          console.log(count++);
          time.textContent = count;
        }, 1000);
      }
    },
    pause() {
      if (isOn) {
        clearInterval(timer);
      }
    },
    stop() {
      if (isOn) {
        count = 0;
        time.textContent = 0;
        clearInterval(timer);
      }
    },
    toggle(mode) {
      if (mode) {
        isOn = mode;
        return;
      }
      isOn = !isOn;
    },
    isOn() {
      return isOn;
    },
  };
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((mainButton) => {
  mainButton.addEventListener("click", () => {
    buttons.forEach((button) => {
      if (button !== mainButton) {
        button.classList.remove("button-active");
      }
    });
    if (mainButton !== restartButton) {
      mainButton.classList.add("button-active");
    }
  });
});

const stopwatch = createStopwatch();

startButton.addEventListener("click", () => {
  if (!stopwatch.isOn()) {
    stopwatch.start();
    stopwatch.toggle();
  }
});

pauseButton.addEventListener("click", () => {
  if (stopwatch.isOn()) {
    stopwatch.pause();
    stopwatch.toggle();
  }
});

restartButton.addEventListener("click", () => {
  stopwatch.toggle(true);
  stopwatch.stop();
  stopwatch.toggle();
  stopwatch.start();
  stopwatch.toggle();
});
