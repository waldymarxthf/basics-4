// функция которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль
function showVerticalMessage(str){
    if(str[0] == "s"){
        str = str[0].toUpperCase() + str.slice(1);
    }
    for(let char of str){ 
        console.log(char);
    }
    // 
}
showVerticalMessage("sea");
