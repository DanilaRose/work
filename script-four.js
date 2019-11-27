'use strict';

// ЗАДАЧА: Узнать год рождения

// var thisYear = 2019;
// var name = prompt('Как Вас зовут?');
// var age = prompt('Сколько Вам лет?');
// var dateOfBirth = thisYear - age;

// console.log(dateOfBirth);

// alert(name + ', Ваш год рождения' + ' ' + dateOfBirth);

// В JS, если делить строку на строку получаетя NaN (Not a Number - не числовое значение), поэтому строку нам необходимо преобразовать в число: 

var firstName = 'Danila';
var lastName = 'Rose';
var fullName = firstName * lastName; // Строку умножаем на строку

console.log(fullName); // Выводится значение NaN

// 1 Вариант - поставив перед строкой +
var numPassport = 2222222;
var message = 'Паспорт №';
 
console.log(message + numPassport); // Либо, как в данном случае + выполняет 2 функции: 1) Преобразует строку в числовое значение 2) Соединяет обе значения (конкатенация)

// 1 Вариант - поставив перед строкой +
var numShoes = '3'; // Количество пар обуви, которое указывает пользователь в форме через prompt и это значение будет в виде строки
var numSocks = 10; // Количество носков - числовое значение

console.log(+numShoes + numSocks); // Значение в консоли - 310. Хотя 3+10=13. Но ,если одно из выражения является строкой, JS преобразует все выражение в строку. В итоге получаем склеивание чисел, а не их сумму

// 2 Вариант - с помощью команды Number()
var numShoes = '3';
var numSocks = 10;

console.log(Number(numShoes) + numSocks); // Заключаем в функцию Number() переменную с строкой и получаем результат 13
