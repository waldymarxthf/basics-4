const changeBg = document.querySelector('.changeBg')
const colors = ['red', 'blue', 'green', 'orange'];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

changeBg.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
  const interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, 2000)
})