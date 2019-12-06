'esversion: 6';

// ОБЪЕКТЫ

let options = {
    width: 1024,   // это пара: ключ - объект - вместе они создают - свойство объекта
    heigth: 1024,  // это пара: ключ - объект - вместе они создают - свойство объекта
    name: "test"   // это пара: ключ - объект - вместе они создают - свойство объекта
};
console.log(options.name); // Вывод одного из свойств в консоль
options.bool = false; // Создание свойства объекта
options.colors = {
    border: "black",
    bg: "red"
};
delete options.bool; // Удаляет одно из свойств объекта
console.log(options);

// ЦИКЛ, ЧТОБЫ ПЕРЕБЕРАТЬ ВСЕ СВОЙСТВА ОБЪЕКТА

for (let key in options) {  // C помощью данного цикла и переменной "key" можно вывести все значения объекта
    console.log("Свойство " + key + ' имеет значение' + options[key]);
}

// УЗНАТЬ КОЛИЧЕСТВО СВОЙСТВ В ОБЪЕКТЕ
console.log(Object.keys(options).length);