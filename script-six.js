'use strict';
// ПЕРЕМЕННЫЕ

var number = 5; // Существует в коде всегда
let month = 'April'; // Создается только тогда, когда она необходима в какой-то части кода
const four = 4;

// ОБЪЕКТ и МАССИВ

var array = {  // ОБЪЕКТ
   name: 'Danila',
   surname: 'Rose',
   age: 23,
   company: 'DRDevelopment'
};

console.log(array.name); // Выводит в  консоль значение ключа "name" (1 способ)
console.log(array['name']); // Выводит в  консоль значение ключа "name" (2 способ)

let anArray = ['google.png', 'yandex.jpg', 'photo.svg'] // МАССИВ. Каждый элемент массива получает порядковый номер
console.log(anArray[2]); // Выводит в консоль элемент массива (отсчет в JS начинается с "0")

// МОДАЛЬНЫЕ ОКНА

// ALERT
alert("Как вас зовут?") // Это некое уведомление, которое несет какую-либу информацию для пользовыателя

// CONFIRM
// confirm('Сколько вам лет?'); // Форма общения с пользователем. Подразумевает только 2 варианта ответа: "Ок" т "Отмена"
// let age = confirm("Вам есть 18 лет"); // При нажатии "Ок" в консоль выводится "true", при нажатии "Отмена" - "false"

// PROMPT
// prompt("Сколько вам лет?") // Модальное окно, которое подразумевает поле для ввода ответа пользователя
// let userAge = prompt("Сколько Вам лет?"); //Также можно задавать условия. Например: Если пользователь отвечает, что ему 18 и более лет, доступ разрешен, если меньше - доступ запрещен
//    if (userAge >= 18) {
//       console.log("Доступ разрешен");
//       alert("Доступ разрешен");
// } else  
//       if (userAge < 18) {
//          console.log("Доступ запрещен");
//          alert("Доступ запрещен");
//    };

// УСЛОВИЯ 
// 1 ВАРИАНТ
let i = 10;     // 1) Создаем переменную
   if (i > 10) {  // Записываем условия для переменной
      console.log("Многовато");  // Записываем действие
} else   // Если есть еще условия, указываем "else - еще" и ниже также записываем условие + действие
      if (i < 5) {
         console.log("Тоже неверно");
   } else
         if (i = 10) {
            console.log("Верно");
      };

// 2 ВАРИАНТ
switch (i) {  // Указываем имя переменной
   case i > 10:   // Условие
      console.log(" Многовато");  // Действие
      break;  // Команда, которая прерывает наше действие
   case i = 5:
      console.log("Тоже неверно");
      break;
   default: 
      console.log("Что-то пошло не так");
      break;
};

// for (let number  = 20; number > 1 ; number--) {
//    if (number == 7) {
//       break;
//    }
//    console.log(number);
// };

let a = [] + false - null + true;
console.log(a);

let y = 1; // x = 2
let x = y = 2;
console.log(x);

let z = [] + 1 + 2; // Произошло просто склеивание строк. Ответ: 12
console.log(z); 

alert('1'[0]); // 1

let b = 2 && 1 && null && 0 && undefined; // null
console.log(b);

let c = (a && b); // Nan
let d = !!(a && b); // false
console.log(c);
console.log(d);