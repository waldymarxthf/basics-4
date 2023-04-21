const BTN_COLOR = document.querySelector('.btn-bg');
const BTN_COLOR_RESET = document.querySelector('.btn-bg-reset');
const BTN_AUTO_COLOR = document.querySelector('.btn-auto-color');

function changeBgColor() {
  const color = BTN_COLOR.getAttribute('data-color');
  document.body.style.backgroundColor = color;
}

BTN_COLOR.addEventListener('click', changeBgColor);

BTN_COLOR_RESET.addEventListener('click', () => {
  document.body.style.backgroundColor = '#ffffff';
});

function generateRandomColor() {
  const colors = ['red', 'blue', 'green', 'orange', 'gray', 'olive', 'purple', 'azure', 'cyan', 'darkviolet', 'gold', 'indigo', 'lime'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function intervalChangeBgColor() {
  let timerId = setInterval(() => {
    document.body.style.backgroundColor = generateRandomColor();
  }, 2000);
}

BTN_AUTO_COLOR.addEventListener('click', intervalChangeBgColor);
