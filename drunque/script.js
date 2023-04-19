const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const restartButton = document.querySelector("#restart");
const time = document.querySelector("#time");

function createStopwatch() {
  let count = 0;
  let isOn = false;
  let timer;
  const initialTime = formatTime(0)

  function formatTime(time) {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    const additionalFormat = (time) => `${time < 10 ? `0${time}` : time}`; 

    return `${additionalFormat(hours)}:${additionalFormat(minutes)}:${additionalFormat(seconds)}`
  }

  return {
    start() {
      if (!isOn) {
        timer = setInterval(() => {
          console.log(count++);
          time.textContent = formatTime(count);
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
        time.textContent = initialTime;
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
