const changeBg = document.getElementById('change-bg')
const body = document.getElementById('body')

function changeBackgoundColor() {
    body.style.backgroundColor = changeBg.getAttribute('data-color')
}

changeBg.addEventListener('click', changeBackgoundColor)

const classBody = document.querySelector('.my-class')
const style = getComputedStyle(classBody)
console.log(style.backgroundColor)
console.log(style.textAlign)
console.log(style.color)
console.log(style.border)