"esversion: 6";

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || money == '' || money == null) {  // Если один из этих вариантов выполнится, то цикл будет продолжаться
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();
// Команда "isNaN" проверяет, что то, что введет пользователь является числом. Если пользователь введет буквы или дроби, то данная команда сработает как "true" и цикл продолжиться




let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};
console.log(appData);
function chooseExpenses() {
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
}
chooseExpenses();
appData.moneyPerDay = (appData.budget / 30).toFixed();  // Данный метод округляет число. Если скобки пусты, то округдяется до ближайшего целого числа, если поставить, например, 1, то до первой цифры после запятой и т.д. Однако этот метод преобразует число в строку
alert("Ежедневный бюджет: " + appData.moneyPerDay);



// Считаем наполнения с депозита, если он есть

function checkSavings() {
    if (appData.savings == true) {  // В данном условии мы проверяем есть ли у пользователя сбережения. то есть переменная "savings" в объекте appData должна быть "true"
        let save = +prompt("Какова сумма накоплений?"); // Задаем наши вопросы
        let percent = +prompt("Под какой процент?"); // Задаем наши вопросы

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита:" + ' ' + appData.monthIncome);
    }
}
checkSavings();