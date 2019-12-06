'esversion: 6';

// CALLBACK функция - функция, которая должна быть выполнена после того, как другая функция завершила свое выполнение. Callback функция - берет в качестве аргумента другую функцию

function first() { // Эта функция создает задержку
    // Что-то делаем              
    setTimeout(function () {
        console.log(1);  // Выводит 1
    }, 500);
}


function second() {  // Эта функция просто выводит в консоль цифру 2
    console.log(2);
}

first();
second();

// В итоге сначала в консоль выводится 2 и потом 1, потому что в первой функции указана задержка

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

learnJS("JavaScript", function () {
    console.log("Я прошел третий урок");
});

// Callback можно задать и вне вызова функции

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Я прошел третий урок");
}

learnJS("JavaScript", done);

// Мои примеры

function learnCSS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}
learnCSS("CSS", function () {
    console.log("Пшел нах");
});


function learnHTML(lang, callback) {
    console.log("Я учу " + lang);
    callback()
}

function done() {
    console.log("Всем привет");
}
learnHTML("HTML", done);