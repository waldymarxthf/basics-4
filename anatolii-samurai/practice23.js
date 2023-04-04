// функция которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль
function showVerticalMessage(str){
   //проверка на букву "s"
    if(str[0] == "s"){
        str = str[0].toUpperCase() + str.slice(1);
        showChar(str);
    }else if(str.length > 7){   //проверка на длину строки
        str = str.slice(0, 5);
        showChar(str);
    } else{
        console.log("error");
    }  // 
}
// функция для вывода цикла for...of
function showChar(str){
    for(let char of str){ 
        console.log(char);
    }
}

showVerticalMessage("sum");
