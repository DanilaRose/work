'esversion: 6';

// ДЕЙСТВИЯ С ЭЛЕМЕНТАМИ НА СТРАНИЦЕ

let square = document.getElementById('square'), // document.getElementById - на всей странице html, то есть во всем документе (document), получаем элемент по идентификатору, который указан в скобках (getElementById('box'))
    btn = document.getElementsByTagName('button'), // document.getElementsByTagName - во всем документе получаем элементЫ по тегу "button". Это Будет псевдомассив
    circle = document.getElementsByClassName('js-circle_circles'), // также производится поиск элементОВ, но уже по классу. И также получаем псевдомассив
    regtangle = document.querySelectorAll('.js-rectangle_regtangles'), // Самый популярный поиск по документу. Производит поиск по селектору (классу, тегу, id и т.д.) ВАЖНО!!!! В скобках обязательно указываем по какому селектору ищем (если по классу - ставим точку перед названием класса, если идентификатор - то # и т.д.) 
    // regtangl = document.querySelectorAll('.js-rectangle .js-rectangle_regtangles'), // Вложенность
    oneRegtangle = document.querySelector('js-circle_circles'), // Позволяет найти первый элемент коллекции на странице
    jsRectangle = document.querySelector('.js-rectangle');

square.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// Чтобы не писать миллион строчек, чтобы изменить свойство каждого элемента псевдомассива, используется цикл

// for (let i = 0; i < regtangle.length; i++) { // Regtangle - это псевдомассив (т.к. делает поиск по всем элементам с классом ".js-rectangle_regtangles"). А "i" номер элемента массива
//     regtangle[i].style.backgroundColor = 'blue'; // Когда меняет background первый элемент, цикл повторяется и вместо "i" подставляется уже не "0", а "1" и изменяется второй элемент 
// }


// МЕТОД forEach для querySelectorAll

regtangle.forEach(function (item, i, regtangles) { // 1) Указываем переменную 2) Указываем метод forEach - forEach тоже функция, он выполняет какие-то действия, значит это тоже функция 3) Указываем callback function, так как forEach тоже функция, значит callback function должна выполниться после forEach. 
    // В callback function все, как обычно - в качестве аргумента указываем: item - элемент, i - порядковый номер элмента в массиве, название массива (не должно совпадать с именем переменной). Необязательно указывать все 3 аргумента, можно указывать 1 или 2, если все не используются
    item.style.backgroundColor = 'blue';
});

// ОСНОВНЫЕ МЕТОДЫ ДЛЯ РАБОТЫ С ЭЛМЕНТАМИ СТРАНИЦЫ




// МЕТОД - createElement

let div = document.createElement('div'); // Создаем элемент в переменной "div"

// ТЕКСТОВЫЕ УЗЛЫ - элементы без оболочек тега
let text = document.createTextNode('Тут был я'); // В переменной "text" создаем текстовый модуль - обычный текст
console.log(text);

// МЕТОД classList
div.classList.add('black'); // Добавили класс к тегу "div", но это только в JavaScript, к HTML это никакого отношения не имеет. Изменим это...

// МЕТОД appendChild - добавление в конец элемента
document.body.appendChild(div); // Добавили div с классом black в конец body (в css его стилизовал). ДДАННЫЙ МЕТОД ТОЛЬКО ДЛЯ РОДИТЕЛЬСКИХ ТЕГОВ
console.log(div);

jsRectangle.appendChild(div);
console.log(div);

// МЕТОД insertBefore - добавление перед элементом
document.body.insertBefore(div, circle[0]); // В качестве аргумента данного метода указываем: 1) Что вставляем 2) Куда вставляем. если не указать второй параметр, данный метод сработает также, как и appendChild

// МЕТОД removeChild - удаление элемента на странице

document.body.removeChild(circle[1]);
jsRectangle.removeChild(regtangle[1]);

// МЕТОД replaceChild - заменяет один элемент другим

document.body.replaceChild(btn[2], circle[2]);

// МЕТОД innerHTML - добавляет текст или HTML-код на страницу

div.innerHTML = '<h1>Hello, World!</h1>';

// МЕТОД, textContetnt который добавляет ТОЛЬКО ТЕКСТ, чтобы обезопасить страницу

div.textContetnt = 'Hello, World!';