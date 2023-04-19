const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');

let i = 0;
let timerId;

function start() {
	timerId = setInterval(() => {
		++i;
		console.log(i);
	}, 1000)
}

function pause() {
	clearInterval(timerId)
}

function stop() {
	clearInterval(timerId);
	i = 0;
}

startButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
stopButton.addEventListener('click', stop)