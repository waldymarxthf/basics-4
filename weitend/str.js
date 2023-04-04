function showVerticalMessage(str) {
    let result = '';
    // Проверка - начниается ли строка на 's'
    if (str.startsWith('s')) result += 'S';

    // Создаю индекс - если result не пустой, то индекс = 1, иначе индекс = 0
    let idx = result ? 1 : 0;

    // проверка, если длина строки больше 7, тогда проходит первый цикл, если длина строки меьнше 7, то проходит другой цикл
    if (str.length > 7) {
        for (; idx < 7; idx++) {
            result += `\n${str[idx]}`;
        };
    } else {
        for (; idx < str.length; idx++) {
            result += `\n${str[idx]}`;
        };
    }

    return result;
};

console.log(showVerticalMessage('stradaagsgasgasgasg'));