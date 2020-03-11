/* 
    TASK 1

    Напишите функцию, которая принимает строку и делает первый символ каждого слова в строке заглавным

    Example: 
    на вход: 'это предложение из заглавных букв каждого слова'
    на выход: 'Это Предложение Из Заглавных Букв Каждого Слова'

*/
function firstLetterInUppercase(str) {
    str = str.split(' ');
    let singleWords = '';
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        singleWords = str[i];
        singleWords = singleWords[0].toUpperCase() + singleWords.slice(1);
        arr.push(singleWords);
    }
    arr = arr.join(' ');
    return arr;
}
console.log(firstLetterInUppercase('это предложение из заглавных букв каждого слова'));

/* 
    TASK 2

    Напишите функцию, которая проверяет текст на запрещенные слова, и изменяет каждое такое слово на выражение: 'хорошее слово'.
    Возьмите любой текст , и вставьте в него слова, такие как: 'плохоеслово1', 'плохоеслово2', 'плохоеслово3'.
    На выходе мы должны получить отформатированный текст.

*/
function isBadWord() {
    let text = '«Текст» — российский криминально-драматический плохоеслово1 триллер режиссёра Клима Шипенко, плохоеслово2 романа-бестселлера «Текст» (2017) писателя плохоеслово3 Глуховского.'
    let goodWord = 'хорошее слово';
    let splitText = text.split(' ');
    let arr = splitText.map(function(item) {
        for (let i = 0; i < splitText.length; i++) {
            if (item == 'плохоеслово' + i) item = 'хорошее слово';
        }
        return item;
    });
    return arr.join(' ');
}
console.log(isBadWord());

/* 
    TASK 3

    Напишите функцию, которая проверяет длину строки, и если она больше 50ти символов, то вместо последних трех, поставьте "..." (троеточие)
    
*/
function isMoreThan50Symbols() {
    let str = 'Тут будет какой-то классный текст, который несет очень большой смысл, и выносит при этом мозг.'
    if (str.length > 50) {
        str = str.slice(0, str.length - 3) + '...';
    }
    return str;
}
console.log(isMoreThan50Symbols());

/* 
    TASK 4

    Есть строка : 'Я так сильно люблю программировать' . Необходимо вывести в консоль длину каждого слова. Сделайте это задание без использования циклов.
    
*/
let wordLenght = 'Я так сильно люблю программировать';
wordLenght.split(' ').forEach(function(item) {
    console.log('Длина слова ' + '"' + item + '"' + ': ' + item.length)
})

/* 
    TASK 5

    ["php", "kotlin",  "php", "css", "css", "Kotlin", "python" ,"script", "script", "html", "html", "java", "c++", "Html", "Ruby",];
    Напишите функцию, которая возвращает массив, в котором удалены повторяющиеся элементы из массива.
    ps: Мы не знаем в каком регистре у нас будут строки в массиве
    
*/
function theTwinWords() {
    let arr = ["php", "kotlin", "php", "css", "css", "Kotlin", "python", "script", "script", "html", "html", "java", "c++", "Html", "Ruby",];
    let arrInLowerCase = arr.map(function(item) {
        return item.toLowerCase();
    })

    // let newArr = Array.from(new Set(arrInLowerCase));   -   Нашел вот такой вот интересный способ.
    let newArr = arrInLowerCase.filter(function(item, index) {
        return index === arrInLowerCase.indexOf(item);
    })
    return newArr;
}
console.log(theTwinWords());

/* 

    TASK 6
    Напишите функцию , которая принимает в качестве аргументов диапозон лет и возвращает массив високосных лет в заданном диапазоне.
    Example: (2000-2018) // [2000,2004,2008,2012,2016] 

*/
function findALeapYear(start, end) {
    let allLeapYears = [];
    let counter = 0;
    let range = [];
    // Create a array for all leap years
    for (let i = 0; i < 2020; i = i + 4) {
        allLeapYears.push(i);
    }
    // Calculate the difference between start and the right leap year
    for (let i = 0; i < allLeapYears.length - 1; i++) {
        if (start < allLeapYears[i]) {
            counter = allLeapYears[i] - start;
            start = start + counter;
            range.push(start);
            // console.log(start);
        }
    }
    // Push to range variable the result
    for (let i = start; i <= end; i = i + 4) {
        range.push(i);
        console.log(i)
    }

    return range;
}
console.log(findALeapYear(1988, 2016));

/* 
    TASK 7

    Напишите программу, которая создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

    Example:
    [37, 23, 43, 34, 55];
    [40, 533, 601];

    result: [77, 556, 644, 34, 55]

*/

/* 

    TASK 8
    Напишите функцию , которая раскрывает вложенный массив любой глубины. На выходе мы должны получить строку

    Example:
    [333, [222,[444,[985]]]] // 333, 222, 444, 985 
    [298, [855], [22, [[89]]],[10,69]] //  298, 855, 22, 89, 10, 69
    
*/





let taskTwoArr = [1, 2, 3, 4, 5];
// Самый простой способ
// taskTwoArr = taskTwoArr.reverse(); 

// Циклами
for (let i = taskTwoArr.length - 1; i >= 0; i--) {
    taskTwoArr.push(taskTwoArr[i]);
}
for (let i = 0; i < (taskTwoArr.length); i++) {
    taskTwoArr.shift(taskTwoArr[i]);
}
console.log(taskTwoArr);