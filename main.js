// const changeColor = document.getElementById('change-bg');
// const backColor = changeColor.dataset.color;


const colors = ["red","blue","grey","black","pink","purple"];
// function generateColor() {
//     return '#' + Math.floor(Math.random()*16777215).toString(16)
//   }

let timerID = setInterval(
    function(){
        changeColor = colors[Math.floor(Math.random()*colors.length)];
        document.body.style.background = changeColor;
    },2000);


// function generateColor(){
//    return colors[Math.floor(Math.random()*colors.length)];

// } 


// document.body.style.background = setInterval(generateColor,2000);
