const button = document.querySelector("#button")

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomHex() {
  const randomHex = getRandomInt(0, 256**3).toString(16)
  return `#${"0".repeat(6 - randomHex.length)}${randomHex}`
}

function changeBackground() {
  const color = getRandomHex()
  button.setAttribute("data-color", color)
  document.body.style.backgroundColor = button.getAttribute("data-color")
}

button.addEventListener("click", changeBackground)

setInterval(changeBackground, 2000)