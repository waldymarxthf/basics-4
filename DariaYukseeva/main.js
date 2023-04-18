const stopwatchBtnStart = document.getElementById('stopwatch-btn-start');
const stopwatchBtnStop = document.getElementById('stopwatch-btn-stop');
const stopwatchBtnReset = document.getElementById('stopwatch-btn-reset');


let sec = 0;
let min = 0;
let hour = 0;
let limitStep = 59;
let limitStepForHours = 23;
let secOut = '';
let minOut = '';

let timeId;

// Запускаем отсчёт времени и вызываем функцию вывода в консоль каждую секунду
function startCount() {
    timeId  = setInterval(() => {
        stepTime();
        showStopwatch();
    }, 1000)
}

// Останавливаем секундомер
function stopCount() {
    clearInterval(timeId);
}

// Изменяем время секундомера
function stepTime() {
    if (sec < limitStep) {
        sec++;
    }
    else if (sec >= limitStep) {
        sec = sec - limitStep;
        if (min < limitStep) {
            min++;
        }
        else if (min >= limitStep) {
            min = min - limitStep;
            if (hour < limitStepForHours) {
                hour++;
            }
            else if (hour >= limitStepForHours) {
                hour = hour - limitStepForHours;
            }
        }
    }
}

// Если значение секунд и минут меньше 10, то добавляем к нему 0 в вывод. Выводим секундомер в консоль
function showStopwatch() {
    if (sec < 10 && min < 10) {
        secOut = `0${sec}`;
        minOut = `0${min}`;
    }
    else if (sec >= 10 && min < 10) {
        secOut = sec;
        minOut = `0${min}`;
    }
    else if (sec < 10 && min >= 10) {
        secOut = `0${sec}`;
        minOut = min;
    }
    else if (sec >= 10 && min >= 10) {
        secOut = sec;
        minOut = min;
    }

    console.log(`${hour}:${minOut}:${secOut}`);
}

// Останавливаем отсчёт и сбрасываем показания секундомера
function resetCount() {
    stopCount();
    sec = 0;
    min = 0;
    hour = 0;
    showStopwatch()
}

stopwatchBtnStart.addEventListener('click', startCount);
stopwatchBtnStop.addEventListener('click', stopCount);
stopwatchBtnReset.addEventListener('click', resetCount);