'esversion: 6';


let square = document.getElementById('square'), // document.getElementById - на всей странице html, то есть во всем документе (document), получаем элемент по идентификатору, который указан в скобках (getElementById('box'))
    btn = document.getElementsByTagName('button'), // document.getElementsByTagName - во всем документе получаем элементЫ по тегу "button". Это Будет псевдомассив
    circle = document.getElementsByClassName('js-circle_circles'), // также производится поиск элементОВ, но уже по классу. И также получаем псевдомассив
    regtangle = document.querySelectorAll('.js-rectangle_regtangles'), // Самый популярный поиск по документу. Производит поиск по селектору (классу, тегу, id и т.д.) ВАЖНО!!!! В скобках обязательно указываем по какому селектору ищем (если по классу - ставим точку перед названием класса, если идентификатор - то # и т.д.) 
    // regtangl = document.querySelectorAll('.js-rectangle .js-rectangle_regtangles'), // Вложенность
    oneRegtangle = document.querySelector('js-circle_circles'), // Позволяет найти первый элемент коллекции на странице
    jsRectangle = document.querySelector('.js-rectangle');

// jsRectangle.removeChild(regtangle[1]);

document.body.replaceChild(btn[2], circle[2]);