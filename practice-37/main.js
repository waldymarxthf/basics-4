const outputNode = document.getElementById("sec");
const startBtn = document.querySelector(".start");
const paysaBtn = document.querySelector(".paysa");
const stopBtn = document.querySelector(".stop");

let sec = 0;
let min = 0;
let hours = 0;

function ClickStart(){
    time = setInterval(function () {
        const result = `0${hours}: 0${min}: ${sec}`;
        outputNode.innerHTML = result;
        
        
        sec++;
        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hours++;
            min = 0;
        }
    
    }, 1000);

}
function ClickPause(){
    clearInterval(time);
}

function ClickStop(){
    sec = 0;
    min = 0;
    hours = 0;
    const result = `0${hours}: 0${min}: ${sec}`;
    outputNode.innerHTML = result;
    clearInterval(time);
    
}
    

        

startBtn.addEventListener("click", ClickStart);
paysaBtn.addEventListener('click', ClickPause);
stopBtn.addEventListener("click", ClickStop);



