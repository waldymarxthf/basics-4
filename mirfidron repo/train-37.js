let i = 0;
let timerId;
// let flag = 1;
var isMenuShow = false;
var button = document.getElementById('timerButton');

function buttonClickHandler() {
    timerId = setInterval(() => console.log(++i), 1000);
};

function stopClick() {
  setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 0);
}

button.addEventListener("click", function() {
  if (isMenuShow )
{
  stopClick();
isMenuShow  = false;
}
else
{
    buttonClickHandler();
isMenuShow  = true;
}
}); 

// -- Тут я пытался сделать другим методом, но почему-то не получилось... Позже попробую сделать через метод ниже и коммитнуть другую версию -- //


// function test() {
//   if (flag == 1) {
//     button.addEventListener('click', buttonClickHandler);
//     flag = 2;
//   }else {
//       button.addEventListener('click', stopClick);
//     flag = 1;
//   }
// } 
// test()

// button.addEventListener('click', buttonClickHandler);
// button.addEventListener('click', stopClick);

