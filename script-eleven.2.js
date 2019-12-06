'esvesion: 6';


let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || money == '' || money == null) { // Если один из этих вариантов выполнится, то цикл будет продолжаться
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();
// Команда "isNaN" проверяет, что то, что введет пользователь является числом. Если пользователь введет буквы или дроби, то данная команда сработает как "true" и цикл продолжиться


var appData = {
    budget: money,
    timeData: {},
    expenses: {},
    optionalExpenses: {},
    inCome: [],
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш ежедневный бюджет составит: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            alert("Низкий уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            alert("Высокий уровень достатка");
        } else {
            alert("Что-то пошло не так");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) { // В данном условии мы проверяем есть ли у пользователя сбережения. то есть переменная "savings" в объекте appData должна быть "true"
            let save = +prompt("Какова сумма накоплений?"); // Задаем наши вопросы
            let percent = +prompt("Под какой процент?"); // Задаем наши вопросы

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита:" + ' ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
        appData.inCome = items.split(', '); // Превращаем строку в массив с помощью метода split и указываем разделительный знак препинания. Мы как бы создаем новый элемент в массиве
        appData.inCome.push(prompt('Может что-то еще?')); // Получаем от пользователя какой-то еще элемент и добавляем его в конец
        appData.inCome.sort(); // Сортируем наши, полученные от пользователя элементы, по алфавиту 
        
        while (!isNaN(items) || items == '' || items == null) { // Если переменная "items" - число; если "items" - пустая строка или, если пользователь нажмет "Отмена". То мы снова зададим ему этот вопрос 
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
        }
        // while (!Number.isNaN(items) || items == '' || items == null) {
        //     items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
        // }

        appData.inCome.forEach(function (item, i) {
           for (let i = 1; i < appData.inCome.length; i++) {
               alert('Способы дополнительного заработка: ' + i + ' - ' + item);
           }
        });
    }
};
console.log(appData);
for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
}







