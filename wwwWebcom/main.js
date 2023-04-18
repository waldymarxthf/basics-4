const start = document.querySelector('.start-timer')
const pause = document.querySelector('.pause-timer')
const finish = document.querySelector('.stop-timer')
const count = document.querySelector('.counter')
const result = document.querySelector('.result')
let timeId;

let seconds = 0;
let minutes = 0;
let hours = 0;


const startTimer = () => {
    timeId = setInterval(() => {
        seconds += 1
        count.innerHTML = `${hours} : ${minutes} : ${seconds}`
        if(seconds === 60) {
            minutes +=1
            seconds = 0
        }
        if(minutes === 60) {
            hours +=1
            minutes = 0
        }
    }, 1000)
    start.disabled = true
    start.style.color = 'purple'
    pause.style.color = 'black'
    finish.style.color = 'black'
    result.innerHTML = ''
}

const pauseTimer = () => {
    clearInterval(timeId)
    start.disabled = false
    start.style.color = 'black'
    finish.style.color = 'black'
    pause.style.color = 'purple'
}
const stopTimer = () => {
    start.disabled = false
    start.style.color = 'black'
    pause.style.color = 'black'
    finish.style.color = 'purple'
    clearInterval(timeId)
    result.innerHTML = `Прошло ${hours} часов ${minutes} минут ${seconds} секунд, с момента запуска.`
    hours = 0
    minutes = 0
    seconds = 0
    count.innerHTML = '0 : 0 : 0'  
}


start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
finish.addEventListener('click', stopTimer);

