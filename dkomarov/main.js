const buttonStart = document.querySelector("#btn-start");
const buttonStop = document.querySelector("#btn-stop");
const btnWrap = document.querySelector("#btnWrap");

let timer;
let hrs = 0;
let min = 0;
let sec = 0;

function runTimer() {
    timer = setTimeout(function run() {
        console.log(`hrs: ${hrs} min: ${min} sec: ${++sec}`);
        if (sec >= 60) {
            console.log(++min);
            sec = 0;
        };
        if (min >= 60) {
            console.log(++hrs);
            min = 0;
        }
        timer = setTimeout(run, 1000);
    }, 1000)
};


buttonStart.addEventListener('click', () => {
    runTimer();
    buttonStart.classList.add('hidden');
    buttonStop.classList.remove('hidden');
});

buttonStop.addEventListener('click', () => {
    clearTimeout(timer)
    buttonStart.classList.remove('hidden');
    buttonStop.classList.add('hidden');
    btnWrap.classList.remove('hidden');
    buttonStart.classList.add('hidden');
   

})




