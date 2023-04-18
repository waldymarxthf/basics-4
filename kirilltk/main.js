
// let hours = 0;
// let minutes = 0;
// let sec = 0;
// function startCalculator() {

// 	sec++;
// 	if (sec >= 60) {
// 		sec = 0;
// 		minutes += 1;
// 	};
// 	if (minutes >= 60) {
// 		minutes += 0;
// 		hours +=1;
// 	};
// 	console.log(`${hours}:${minutes}:${sec}`);
// };
// const calc = setInterval(startCalculator, 1000);


let calculator = document.getElementById("calculatorBtn");
let stop = document.getElementById("stopCalc");
let drop = document.getElementById("stopCalc");
let hours = 0;
let minutes = 0;
let sec = 0;
let CalcId;
let isTimerRunning = false;

function calc() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        minutes += 1;
    };
    if (minutes >= 60) {
        minutes += 0;
        hours +=1;
    };
    console.log(`${hours}:${minutes}:${sec}`);
};
function startCalc() {
    CalcId = setInterval(calc, 1000);

};
function pauseCalc() {
	clearInterval(CalcId);

};
function dropCalc() {
	hours = 0;
	minutes = 0;
	sec = 0;
};
calculator.addEventListener('click', startCalc);
stop.addEventListener('click', pauseCalc);
drop.addEventListener('click', dropCalc);