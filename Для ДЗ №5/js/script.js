'escersion: 6';

let menu = document.querySelector('.menu'),
    li = document.createElement('li');

li.classList.add('menu-item');
menu.appendChild(li);
li.textContent = 'Пятый пункт';

// 2

let adv = document.querySelectorAll('.adv');
console.log(adv);
document.body.removeChild(adv);

// 3 
document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';








