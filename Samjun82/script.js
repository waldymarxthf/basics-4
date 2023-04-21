const changeBg = document.getElementById('change-bg')
const body = document.getElementById('body')

function changeBackgoundColor() {
    body.style.backgroundColor = changeBg.getAttribute('data-color')
}

changeBg.addEventListener('click', changeBackgoundColor)