/* 
    TASK 2.1
    Вывести в html страницу коды спецсимволов от 500 до 1000
    Спецсимвол получается комбинацией &#число
    Например: &#666
    Для вывода спецсимволов можно использовать объект document, и его метод write.
    document.write() 
*/
let out = document.querySelector('.out-21');
out.style.width = "500px";
let result = '';

for (let i = 500; i <= 1000; i++) {
    result += '&#' + i + ' ';
}
out.innerHTML = result;

/* 
    TASK 2.2
    С помощью вложенных циклов необходимо реализовать вот такую строку:
    ******
	*    *
	*    *
	*    *
    ****** 
*/
let out2 = document.querySelector('.out-22');
out2.style.fontFamily = 'monospace';
let result2 = '';

for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 5; k++) {
        if (i == 0 || i == 4) result2 += '*';
    }
    if (i == 1 || i == 2 || i == 3) result2 += '*' + '&nbsp' + '&nbsp' + '&nbsp' + '&nbsp';
    result2 += '*' + '<br>';
}
out2.innerHTML = result2;


/* 
    TASK 2.3
    Составьте программу, которая принимает от пользователя целое число,
    а затем проверяет, можно ли представить его в виде суммы квадратов
    двух целых однозначных чисел.
    Example:
    ввод: 98 ⇒ вывод: 98 можно представить в виде суммы квадратов 7 и 7
*/
let out3 = document.querySelector('.out-23');
let request = prompt('Введите целое число');
for (let i = 2; i < 10; i++) {
    if (request / ((i * i) + (i * i)) == 1) {
        out3.innerHTML = 'Это число является суммой квадратов ' + i + ' + ' + i;
    }
}

/* 
    TASK 2.4
    С помощью вложенных циклов необходимо реализовать вот такую строку:
     **
    ****
   ******
    ****
     **
*/
let out4 = document.querySelector('.out-24');
out4.style.fontFamily = 'monospace';
let result4 = '';

for (let i = 0; i < 5; i++) {
    for (let l = 0; l < 2; l++) {
        if (i == 0 || i == 4) result4 += '&nbsp';
    }
    if (i == 1 || i == 3) result4 += '&nbsp';
    for (let k = 0; k < 2; k++) {
        result4 += '*';
        if (i == 1 || i == 3) result4 += '*';
        if (i == 2) result4 += '*' + '*';
    }
    result4 += '<br>';
}
out4.innerHTML = result4;


/* 
    TASK 2.5
    Напишите скрипт, которая принимает от пользователя целое положительное число 
    и проверяет, является ли оно «дважды делимым»,
    т.е. оно само, и сумма его делителей – делятся без остатка на количество делителей числа.
*/
// let out5 = document.querySelector('.out-25');
// let request2 = prompt('Введите целое положительное число');




// узнать длину введенного числа
// поделить его на сумму цифр в числе
// сложить



/*
    TASK 2.6
    Написать скрипт, который выводит на экран двузначные положительные числа,
    заканчивающиеся на 7 (в убывающем порядке). 
    Перед началом вывода следует вывести слово "начало",
    а после окончания вывода чисел – "завершено".
    Диапазон: 100 - 0.
*/
let out6 = document.querySelector('.out-26');
let result6 = '';

for (let i = 100; i >= 0; i--) {
    i = i + '';
    if (i == 100) result6 += 'начало ';
    if (i == 0) result6 += ' завершено';
    if (i[1] == 7 && i[0] != 7) result6 += i + ' ';
}
out6.innerHTML = result6;


/* 
    TASK 2.7
    Напишите скрипт, который принимает от пользователя два целых числа
    и выводит на экран 10 случайных чисел в диапазоне от первого значения, 
    введенного пользователем, до второго значения,также введенного пользователем. 
    Будем считать, что первое из вводимых чисел всегда меньше второго.
*/
let firstNumRequest = prompt('Введите первое целое число!');
let secondNumRequest = prompt('Введите второе целое число!');

let out7 = document.querySelector('.out-27');
let result7 = '';

for (let i = 0; i < 10; i++) {
    result7 += Math.floor(Math.random() * (secondNumRequest - firstNumRequest) + firstNumRequest) + ' ';
}

out7.innerHTML = result7;