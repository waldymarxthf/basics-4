const maxLength = 7;
const firstSymbolUpperCase = 's';
const errorEmptyStr = 'Была передана пустая строка';

const str = 'stradaxxxx';

let result = null;

showVerticalMessage(str);

function showVerticalMessage(str) {
    //Проверяем строку на пустоту
    if (!str) return console.log(errorEmptyStr);

    result = str.slice(0, maxLength);
    //Убираем чувствительность к регистру и проверяем первый символ на 's'
    if(str.at(0).toLowerCase() === firstSymbolUpperCase) {
        result = str.at(0).toUpperCase() + str.slice(1, maxLength);
    }
    for (const symbol of result) {
        console.log(symbol);
    }
}