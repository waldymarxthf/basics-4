const stopwatchBtnStart = document.getElementById('stopwatch-btn-start');
const stopwatchBtnStop = document.getElementById('stopwatch-btn-stop');
const stopwatchBtnReset = document.getElementById('stopwatch-btn-reset');


let stopwatchStatus = false;
let time = 0;
let sec = 0;
let min = 0;
let hour = 0;
let secOut = '';
let minOut = '';

let timeId;

// Запускаем отсчёт времени и вызываем функцию вывода в консоль каждую секунду
function startCount() {
    if (stopwatchStatus === false) {
        stopwatchBtnStart.className = 'active';
        stopwatchBtnStop.className = 'nonactive';
        timeId  = setInterval(() => {
            stepTime();
            refreshStopwatchDisplay();
        }, 1000)
        stopwatchStatus = true;
    }
        
}

// Останавливаем секундомер
function stopCount() {
    clearInterval(timeId);
    stopwatchStatus = false;
    stopwatchBtnStart.className = 'nonactive';
    stopwatchBtnStop.className = 'active';
}

// Изменяем время секундомера
function stepTime() {
    time++;
    sec = time % 60;
    min = Math.floor(time / 60);
    hour = Math.floor(time / 3600);

}

// Если значение секунд и минут меньше 10, то добавляем к нему 0 в вывод. Выводим секундомер в консоль
function refreshStopwatchDisplay() {
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
    console.clear();
    console.log(`${hour}:${minOut}:${secOut}`);
    document.querySelector('.out').innerHTML = `${hour}:${minOut}:${secOut}`;
}

// Останавливаем отсчёт и сбрасываем показания секундомера
function resetCount() {
    stopCount();
    time = 0;
    sec = 0;
    min = 0;
    hour = 0;
    refreshStopwatchDisplay()
    stopwatchBtnStart.className = 'nonactive';
    stopwatchBtnStop.className = 'nonactive';
}



stopwatchBtnStart.addEventListener('click', startCount);
stopwatchBtnStop.addEventListener('click', stopCount);
stopwatchBtnReset.addEventListener('click', resetCount);


