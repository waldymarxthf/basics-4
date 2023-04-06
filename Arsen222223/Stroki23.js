// ` ${...}`;        // крутые ковычки //
// \n;              // переход на другую строку //
// slice            // получение подстроки // 
// [], at           // получение символа //
// toLowerCase/toUpperCase    // нижний и верхний регистр //
// includes/indexOf         // подстроки // 
// localeCompare          // сравнение //
// lenght                 возврат длины строки //



function showVerticalMessage(string) {
    let str = ' ';
    if(string[0] === 's') {
       str = string[0].toUpperCase() + string.slice(1,7);
    } else {
        console.log(string.slice(0,7));
    }
    for(const char of str) {
        console.log(char);
    }
    
}
showVerticalMessage('stradadddd');

