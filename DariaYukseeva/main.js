const changeBgBtn = document.querySelector('#change-bg-btn');
const bodyElement = document.querySelector('body');

bodyElement.setAttribute('data-color', '#7FFFD4');
const colorValue = bodyElement.getAttribute('data-color');
let timerId;

let bgOn = false;
changeBgBtn.addEventListener('click', () => {
    if (bgOn === false) {
        bodyElement.style.backgroundColor = colorValue;
        bgOn = true;
        clearInterval(timerId);
    }
    else {
        changeBackgroundColor();
        bgOn = false;
    }
    let bodyStyles = getComputedStyle(bodyElement);
    console.log(bodyStyles.backgroundColor);
})

function changeBackgroundColor() {
    const colors = ['#FFB6C1', '#EE82EE', '#00FA9A', '#00FFFF'];
    
    timerId = setInterval(() => {
        let randomColorIndex = Math.floor(Math.random() * colors.length);
        bodyElement.style.backgroundColor = colors[randomColorIndex];
    }, 2000)
}


