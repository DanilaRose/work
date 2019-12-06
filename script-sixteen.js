'esversion: 6';


// DOM - DOCUMENT OBJECT MODAL - ОБЪЕКТНАЯ МОДЕЛЬ ДОКУМЕНТА

let box = document.getElementById('box'); // document.getElementById - на всей странице html, то есть во всем документе (document), получаем элемент по идентификатору, который указан в скобках (getElementById('box'))
let btn = document.getElementsByTagName('button'); // document.getElementsByTagName - во всем документе получаем элементЫ по тегу "button". Это Будет псевдомассив
let circle = document.getElementsByClassName('js-circle_circles'); // также производится поиск элементОВ, но уже по классу. И также получаем псевдомассив
let regtangle = document.querySelectorAll('.js-rectangle_regtangles'); // Самый популярный поиск по документу. Производит поиск по селектору (классу, тегу, id и т.д.) ВАЖНО!!!! В скобках обязательно указываем по какому селектору ищем (если по классу - ставим точку перед названием класса, если идентификатор - то # и т.д.) 
// let regtangl = document.querySelectorAll('.js-rectangle .js-rectangle_regtangles'); // Вложенность
let oneRegtangle = document.querySelector('js-circle_circles'); // Позволяет найти первый элемент коллекции на странице

console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);
console.log(regtangle[1]);
console.log(oneRegtangle);


// querySelectorAll имеет 1 метод - forEach - он позволяет перебрать коллекцию элементов и скаждым из них что-то сделать

