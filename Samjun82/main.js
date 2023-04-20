const progStopWatch = {
    buttonPlay: document.getElementById('buttonPlay'),
    buttonPause: document.getElementById('buttonPause'),
    buttonStop: document.getElementById('buttonStop')
}

let count = 0
let timerId
let speed = 40
let txt = document.getElementById("txt").textContent
let font = 0

function startProgram() {
    const content = document.getElementById('timer').textContent;
    timerId = setInterval(function() {
        count++
        console.clear()
    console.log(count)
    
    }, 1000)
    function typeWriter () {
        document.getElementById("txt").textContent = ''
    if (font < txt.length) {
        document.getElementById("txt").textContent += txt.charAt(font)
        
        font++
        setTimeout(typeWriter, speed)
      }
      
    }
    typeWriter()

    document.getElementById('timer').textContent = 'Play'
    progStopWatch.buttonPlay.disabled = true
    progStopWatch.buttonPause.disabled = false
    progStopWatch.buttonStop.disabled = false
}

function pauseProgram() {
    clearInterval(timerId)
    console.log('pause')
    const content = document.getElementById('timer').textContent;
    document.getElementById('timer').textContent = 'Pause';
    progStopWatch.buttonPlay.disabled = false
    progStopWatch.buttonPause.disabled = true
    progStopWatch.buttonStop.disabled = false
}

function stopProgram() {
    clearInterval(timerId)
    count = 0
    console.log('stop')
    const content = document.getElementById('timer').textContent;
    document.getElementById('timer').textContent = 'Stop';
    progStopWatch.buttonPlay.disabled = false
    progStopWatch.buttonPause.disabled = false
    progStopWatch.buttonStop.disabled = true
}

progStopWatch.buttonPlay.addEventListener('click', startProgram)
progStopWatch.buttonPause.addEventListener('click', pauseProgram)
progStopWatch.buttonStop.addEventListener('click', stopProgram)