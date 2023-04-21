const stopWatch = document.querySelector('.stopwatch');
const pauseWatch = document.querySelector('.pause');


let intervalID;
let i = 0;

function startCountDown(e){
        
        console.log("start");
        intervalID = setInterval(function() {
            console.log(i++);
          }, 1000);
          e.stopPropagation();
    }
   
function stopCountDown(){
        console.log("stop");
    clearInterval(intervalID);

}
stopWatch.addEventListener('click',startCountDown);
pauseWatch.addEventListener('click',stopCountDown);


