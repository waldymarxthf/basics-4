/* Task 2 from learn.js */
function delay(ms) {
  let promise = new Promise(function(resolve) {
    setTimeout(() => resolve(), ms)
  })
  return promise;
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));

/* Task 3 from learn.js */

function go() {
  showCircle(150, 150, 100)
  .then( div => {
    div.classList.add('message-ball');
    div.append("Привет, мир!");
  });
}

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise(resolve => setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';

    div.addEventListener('transitionend', function handler() {
      div.removeEventListener('transitionend', handler);
      resolve(div);
    });
  }, 0)
  );
}