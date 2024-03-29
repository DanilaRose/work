'use strict';

let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');


let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false,
};
console.log(appData);
// let a1 = prompt("Введите обязательную статью расходов в этом месяце");
// let a2 = prompt("Во сколько обойдется?");
// let a3 = prompt("Введите обязательную статью расходов в этом месяце");
// let a4 = prompt("Во сколько обойдется?");

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

for (let i = 0; i < 2; i++) {
   let a = prompt("Введите обязательную статью расходов в этом месяце"); // Это наши ВОПРОСЫ
   let b = prompt("Во сколько обойдется?");
   
   if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b; // Это наши ОТВЕТЫ. Мы создаем новое свойство у объекта (поскольку expenses - это объект) при помощи квадратных скобок [] (если мы используем квадратные скобки, то переменная может сожержать любую строку). Почему стоит знак "=", потому что мы создали новое свойство "а", но и "b" у нас должно получиться точно такое же, пожтому ставим знак равенства. 
   } else {
      i = i - 1;
   }
}

appData.moneyPerDay = appData.budget / 30; // Количество денег на 1 день
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
   console.log("Минимальный уровнеь достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log("Средний уровень остатка");
} else if (appData.moneyPerDay > 2000) {
   console.log("Высокий уровень достатка");
} else {
   console.log("Произошла ошибка");
}