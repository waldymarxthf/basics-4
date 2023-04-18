const button = document.getElementById('btn');

let isPaused = true;
let i = 1;

const timer = setInterval(() => {
  if (!isPaused) {
    console.log(i);
    i++;
  }
}, 1000)

button.addEventListener('click', () => {
    isPaused = isPaused ? false : true;
  }
)