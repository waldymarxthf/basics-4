const UI_ELEMENTS = {
  BTN_START: document.querySelector('.stopwatch-btn'),
  OUTPUT: document.querySelector('.stopwatch-output'),
};

let isPause = true;
let count = 0;

function showTimer(count) {
  UI_ELEMENTS.OUTPUT.textContent = count;
}

function startTimer() {
  let timerId = setInterval(() => {
    if (!isPause) {
      count++;
      console.clear();
      console.log(count);
      showTimer(count);
    }
  }, 1000);
}

UI_ELEMENTS.BTN_START.addEventListener('click', () => {
  const isValid = !UI_ELEMENTS.BTN_START.matches('.play');

  if (isValid && count === 0) {
    UI_ELEMENTS.BTN_START.textContent = 'Секундомер ⏸';
    UI_ELEMENTS.BTN_START.classList.add('play');
    isPause = false;
    startTimer();
  } else if (isValid && count > 0) {
    UI_ELEMENTS.BTN_START.classList.add('play');
    UI_ELEMENTS.BTN_START.textContent = 'Секундомер ⏸';
    isPause = false;
  } else {
    UI_ELEMENTS.BTN_START.classList.remove('play');
    UI_ELEMENTS.BTN_START.textContent = 'Секундомер ▶';
    isPause = true;
  }
});
