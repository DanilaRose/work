'esvesion: 6';

let money;
var appData = {
    budget: money,
    timeData: {},
    expenses: {},
    optionalExpenses: {},
    inCome: [],
    savings: true,
};
console.log(appData);
// 1 задание
function detectDayBudget() {
     money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");  
    }
}

detectDayBudget();
appData.moneyPerDay = (money / 30).toFixed(1);
console.log(appData.moneyPerDay);
alert("Ваш ежедневный бюджет составит:" + ' ' + appData.moneyPerDay);


// 2 задание

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert("Низкий уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        alert("Высокий уровень достатка");
    } else {
        alert("Что-то пошло не так");
    }
}
detectLevel();


// 3 задание

// let a;
// function chooseOptExpenses() {
//     a = prompt("Статья необязательных расходов?");
//     while (isNaN(a) || a == null || a == '') {
//         a = prompt("Статья необязательных расходов?");
//     }
// }
// chooseOptExpenses();
// appData.perDay = a / 30;
// alert(appData.perDay);

let a1, z, y, x;
function chooseTwo() {
    for (let a1 = 0; a1 < 1; a1++) {
        w = +prompt("Сумма на необязательные расходы?");
        z = +prompt("Статья необязательных расходов?");
        y = +prompt("Статья необязательных расходов?");
        x = +prompt("Статья необязательных расходов?");

        if (a1 != null && a1 != '') {
            appData.optionalExpenses[w];
            appData.optionalExpenses[1] = z;
            appData.optionalExpenses[2] = y;
            appData.optionalExpenses[3] = x;
        } else {
            
        }
    }
}
chooseTwo();
appData.perDay = w / 30;
alert(appData.perDay);
