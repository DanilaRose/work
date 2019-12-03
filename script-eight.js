'use strict';

// let carMakeAndModel = prompt("Назовите марку и модель вашей машины");

// let carArray = {
//    car: carMakeAndModel,
//    fuel: {},
// };
// console.log(carArray);
// // carArray.fuel.a = prompt("Сколько стоит топливо, которое вы используете?");
// // carArray.fuel.b = prompt("Сколько литров топлива в день вы заправляете");

// for (let fuel = 0; fuel < 1; fuel++) {
//    var a = prompt("Сколько стоит топливо, которое вы используете?");
//    var b = prompt("Сколько литров топлива в день вы заправляете");
   
//    if (a != null && b != null && a != '' && b != '' && a.length < 11 && b.length < 10) {
//       console.log("done");
//       carArray.fuel[a] = b;
//    } 
// }

// carArray.moneyPerMonth = a * b;
// alert(carArray.moneyPerMonth);




// let name = prompt("как Вас зовут?"); 
// let host = prompt("нравится ли вам хостинг LinkHost");

// let linkHost = {
//    name: name,
//    host: host,
//    expenses: {}
// };
// console.log(linkHost);

// for (let expenses = 0; expenses < 1; expenses++) {
//    var a = prompt("Сколько стоят услуги вашего хостинга в месяц?");
//    var b = prompt("Какой ваш месячный бюджет?");
   
//    if (a != null && a!= '' && a.length < 20 && b != null && b != '' && b.length < 20) {
//       linkHost.expenses[a] = b;
//       console.log("сработали условия");
//    }
// }

// linkHost.moneyPerDay = a / 30;
// alert(linkHost.moneyPerDay);


if (confirm("Есть ли вам 18?")) {
   alert("Доступ разрешен");
} else {
   alert("Доступ запрещен");
};


let userName = prompt("Как Вас зовут?");
let userAge = prompt("Сколько Вам лет?");

let user = {
   name: userName,
   age: userAge,
   dailySalary: {},
   salary: {},
};
console.log(user);

user.yearOfBirth = 2019 - userAge;
alert(userName + ", Ваш год рождения" + ' ' + user.yearOfBirth);

if (userAge < 25) {
   console.log("Молодой");
} else if (userAge > 26 && userAge < 60) {
   console.log("Средний возраст");
} else if (userAge >= 60) {
   console.log("Пожилой возраст");
} else {
   console.log("Что-то пошло не так");
}

// let userWork = prompt("Где вы работаете?");
// let userSalary = prompt("Сколько вы зарабатываете в месяц?");
 
for (let salary = 0; salary < 1; salary++) {
   var a = prompt("Где вы работаете?");
   var b = prompt("Сколько вы зарабатываете в месяц?");
   
   if (a != null && b != null && a != '' && b != '' && a.length < 20 && b.length < 20) {
      user.salary[a] = b;
      console.log("done");
   } else {
      
   }
}

user.dailySalary = b / 30;
alert(userName + ", Ваш ежедневный заработок составляет" + " " + user.dailySalary);